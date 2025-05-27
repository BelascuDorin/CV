import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Your experience context - this ensures AI only responds about your background
const EXPERIENCE_CONTEXT = `
You are an AI assistant representing a software engineer's portfolio. You can ONLY answer questions about this person's professional experience, skills, and projects. If asked about anything else, politely redirect to career-related topics.

EXPERIENCE DATA:
- Technologies: React, Next.js, TypeScript, Node.js, Python, PostgreSQL, AWS
- Current Role: Senior Software Engineer at Tech Company (2021-2024)
- Key Projects: E-commerce platform handling 10k+ users
- Skills: Full-stack development, technical leadership, mentoring
- Specialties: Modern web development, scalable backend systems

INSTRUCTIONS:
- Only discuss professional experience, skills, technologies, and projects
- Be conversational but professional
- If asked about personal life, hobbies, or unrelated topics, redirect to career topics
- Keep responses concise and relevant
`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: EXPERIENCE_CONTEXT,
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const response =
      completion.choices[0]?.message?.content ||
      "I can help you learn about my professional experience and skills. What would you like to know?";

    return NextResponse.json({ response });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json(
      { error: "Sorry, I encountered an error. Please try again." },
      { status: 500 }
    );
  }
}

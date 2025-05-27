import experienceData from "../data/experience.json";

interface ExperienceData {
  experience: {
    technologies: string[];
    currentRole: {
      title: string;
      company: string;
      duration: string;
      type: string;
      focus: string;
      responsibilities: string[];
    };
    entrepreneurialExperience: Array<{
      name: string;
      role: string;
      duration?: string;
      location?: string;
      description: string;
      responsibilities?: string[];
      technologies: string[];
    }>;
    roles: Array<{
      title: string;
      company: string;
      duration: string;
      type?: string;
      location?: string;
      responsibilities: string[];
    }>;
    careerTransition: {
      period: string;
      description: string;
      focus: string;
      github: string;
    };
    skills: {
      frontend: string[];
      backend: string[];
      tools: string[];
      methodologies: string[];
      embedded: string[];
      databases: string[];
      other: string[];
    };
    totalExperience: string;
    specialties: string[];
  };
  responses: {
    [key: string]: string;
  };
}

const data = experienceData as ExperienceData;

export function processQuery(query: string): string {
  const lowerQuery = query.toLowerCase();

  // Current role questions
  if (
    lowerQuery.includes("current") ||
    lowerQuery.includes("now") ||
    lowerQuery.includes("today")
  ) {
    const current = data.experience.currentRole;
    return `Currently, I'm a ${current.title} at ${
      current.company
    }, working as a ${current.type} since ${current.duration}. I focus on ${
      current.focus
    }, specifically ${current.responsibilities.join(", ").toLowerCase()}.`;
  }

  // CTO/nugget.courses specific questions
  if (
    lowerQuery.includes("cto") ||
    lowerQuery.includes("nugget") ||
    lowerQuery.includes("courses")
  ) {
    const nugget = data.experience.entrepreneurialExperience.find(
      (exp) => exp.name === "nugget.courses"
    );
    if (nugget) {
      return `As ${nugget.role} of ${nugget.name} since ${nugget.duration}, I ${
        nugget.description
      }. My key responsibilities include: ${nugget.responsibilities?.join(
        ", "
      )}. I used ${nugget.technologies.join(
        ", "
      )} to rebuild the platform from scratch.`;
    }
  }

  // Entrepreneurial/startup questions
  if (
    lowerQuery.includes("startup") ||
    lowerQuery.includes("entrepreneur") ||
    lowerQuery.includes("business") ||
    lowerQuery.includes("own company")
  ) {
    const startups = data.experience.entrepreneurialExperience
      .map((exp) => `${exp.name} (${exp.role}): ${exp.description}`)
      .join("\n\n");
    return `Yes, I'm an active entrepreneur! I've built multiple projects:\n\n${startups}\n\nThis gives me a unique perspective on both technical development and business needs, especially as a CTO where I handle full product development.`;
  }

  // Technology-related questions
  if (
    lowerQuery.includes("technology") ||
    lowerQuery.includes("tech") ||
    lowerQuery.includes("stack")
  ) {
    const techs = data.experience.technologies.slice(0, 10).join(", ");
    return `I work with modern web technologies including ${techs}. My main focus is React.js ecosystem for frontend, with experience in both large-scale applications (1M+ users) and entrepreneurial projects. As CTO of nugget.courses, I've worked extensively with Next.js and Firebase.`;
  }

  // Firebase specific questions
  if (lowerQuery.includes("firebase")) {
    return `Yes, I have extensive experience with Firebase! I used it to rebuild nugget.courses from scratch, replacing a WordPress MVP with a modern Next.js + Firebase architecture. Firebase is great for rapid development and scaling educational platforms.`;
  }

  // WordPress questions
  if (lowerQuery.includes("wordpress")) {
    return `I have experience with WordPress from taking over the nugget.courses MVP. However, I rebuilt the entire platform from scratch using Next.js and Firebase to provide better performance, scalability, and user experience. This transition from WordPress to modern web technologies showcases my ability to modernize legacy systems.`;
  }

  // Skills questions
  if (lowerQuery.includes("skill") || lowerQuery.includes("abilities")) {
    const skills = data.experience.skills;
    return `My technical skills include:

Frontend: ${skills.frontend.join(", ")}
Backend: ${skills.backend.join(", ")}
Tools: ${skills.tools.slice(0, 6).join(", ")}
Methodologies: ${skills.methodologies.join(", ")}

I also have unique embedded systems experience: ${skills.embedded.join(", ")}

As a CTO, I handle full product development, team coordination, and technical decision-making.`;
  }

  // Experience/work questions
  if (
    lowerQuery.includes("experience") ||
    lowerQuery.includes("work") ||
    lowerQuery.includes("job")
  ) {
    return `I have ${data.experience.totalExperience} of software development experience. I've successfully transitioned from embedded automotive systems to modern web development, and now serve as CTO/Co-Founder of nugget.courses while also working as a Senior Frontend Engineer at a major US food delivery platform with 1M+ users.`;
  }

  // Career transition questions
  if (
    lowerQuery.includes("transition") ||
    lowerQuery.includes("change") ||
    lowerQuery.includes("automotive") ||
    lowerQuery.includes("embedded")
  ) {
    const transition = data.experience.careerTransition;
    return `I made a successful career transition from embedded C/automotive development to web development. During ${transition.period}, I dedicated myself to ${transition.description}. You can see my learning journey on GitHub: ${transition.github}. This transition gave me a unique perspective and strong problem-solving skills that I now apply as a CTO.`;
  }

  // Project questions
  if (
    lowerQuery.includes("project") ||
    lowerQuery.includes("built") ||
    lowerQuery.includes("created")
  ) {
    const startups = data.experience.entrepreneurialExperience
      .map((exp) => exp.name)
      .join(", ");
    return `I'm working on subscription features for a 1M+ user food delivery platform, and as CTO/Co-Founder, I've rebuilt ${
      startups.split(",")[0]
    } from a WordPress MVP to a modern Next.js + Firebase platform. I've also built ${startups}. Additionally, I have experience with automotive headlamp systems and measurement instruments from my embedded background.`;
  }

  // Leadership/management questions
  if (
    lowerQuery.includes("lead") ||
    lowerQuery.includes("manage") ||
    lowerQuery.includes("team")
  ) {
    return `Yes, I have extensive leadership experience! As CTO/Co-Founder of nugget.courses, I lead technical development and coordinate development teams. Previously, I've been a Lead Application Developer managing a team of 6 developers, served as a Software Project Manager coordinating multiple teams, and worked as a Scrum Master. I also mentor team members and handle project planning.`;
  }

  // Specific technology questions
  const mentionedTech = data.experience.technologies.find((tech) =>
    lowerQuery.includes(tech.toLowerCase().replace(".js", ""))
  );
  if (mentionedTech) {
    return `Yes, I have extensive experience with ${mentionedTech}! It's part of my regular tech stack. I use it in my current role at the food delivery platform and have used it across multiple projects including my entrepreneurial ventures. As CTO of nugget.courses, I've used it to rebuild our entire platform.`;
  }

  // Company-specific questions
  if (lowerQuery.includes("fortech")) {
    return `I worked at Fortech for 3 years (April 2021 - March 2024) as a React Developer. I developed new features using Next.js with React.js, worked in agile SCRUM teams, and collaborated closely with backend teams and clients to design optimal frontend solutions.`;
  }

  if (lowerQuery.includes("marelli")) {
    return `I worked at Marelli in various roles from 2018-2021, progressing from Junior Software Developer to Lead Application Developer and Software Project Manager. I worked on embedded C automotive projects, particularly headlamp systems, and led teams of up to 6 developers.`;
  }

  // Default response
  return `I can help you learn about my professional journey! I'm a Senior Frontend Engineer with ${data.experience.totalExperience} of experience, including a successful transition from embedded systems to web development, and I'm also CTO/Co-Founder of nugget.courses. Ask me about my current roles, technologies, startups, career transition, or leadership experience!`;
}

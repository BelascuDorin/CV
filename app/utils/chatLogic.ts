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

  // React.js specific questions
  if (
    lowerQuery.includes("react") &&
    (lowerQuery.includes("experience") ||
      lowerQuery.includes("years") ||
      lowerQuery.includes("how long"))
  ) {
    return data.responses.react;
  }

  // Frontend specific questions
  if (
    lowerQuery.includes("frontend") &&
    (lowerQuery.includes("experience") ||
      lowerQuery.includes("years") ||
      lowerQuery.includes("how long"))
  ) {
    return data.responses.frontend;
  }

  // Current role questions
  if (
    lowerQuery.includes("current") ||
    lowerQuery.includes("now") ||
    lowerQuery.includes("today")
  ) {
    return `${data.responses.current} I'm also currently working on nutrichefdelivery.ro (Full-stack Developer & Business Partner, started December 2024) and legalmanagement.ro (CTO & Co-Founder).`;
  }

  // CTO/nugget.courses specific questions
  if (
    lowerQuery.includes("cto") ||
    lowerQuery.includes("nugget") ||
    lowerQuery.includes("courses")
  ) {
    return data.responses.cto;
  }

  // Entrepreneurial/startup questions
  if (
    lowerQuery.includes("startup") ||
    lowerQuery.includes("entrepreneur") ||
    lowerQuery.includes("business") ||
    lowerQuery.includes("own company")
  ) {
    return data.responses.entrepreneurial;
  }

  // Technology-related questions
  if (
    lowerQuery.includes("technology") ||
    lowerQuery.includes("tech") ||
    lowerQuery.includes("stack")
  ) {
    return data.responses.technologies;
  }

  // Skills questions
  if (lowerQuery.includes("skill") || lowerQuery.includes("abilities")) {
    return data.responses.skills;
  }

  // Experience/work questions
  if (
    lowerQuery.includes("experience") ||
    lowerQuery.includes("work") ||
    lowerQuery.includes("job")
  ) {
    return data.responses.experience;
  }

  // Project questions
  if (
    lowerQuery.includes("project") ||
    lowerQuery.includes("built") ||
    lowerQuery.includes("created")
  ) {
    return data.responses.projects;
  }

  // Motivation questions
  if (
    lowerQuery.includes("motivation") ||
    lowerQuery.includes("motivated") ||
    lowerQuery.includes("why") ||
    (lowerQuery.includes("become") && lowerQuery.includes("developer")) ||
    lowerQuery.includes("passion") ||
    lowerQuery.includes("love") ||
    (lowerQuery.includes("math") && lowerQuery.includes("problem"))
  ) {
    return data.responses.motivation;
  }

  // Firebase specific questions
  if (lowerQuery.includes("firebase")) {
    return `Yes, I have extensive experience with Firebase! I used it to rebuild nugget.courses from scratch, replacing a WordPress MVP with a modern Next.js + Firebase architecture. Firebase is great for rapid development and scaling educational platforms.`;
  }

  // WordPress questions
  if (lowerQuery.includes("wordpress")) {
    return `I have experience with WordPress from taking over the nugget.courses MVP. However, I rebuilt the entire platform from scratch using Next.js and Firebase to provide better performance, scalability, and user experience. This transition from WordPress to modern web technologies showcases my ability to modernize legacy systems.`;
  }

  // Career transition questions
  if (
    lowerQuery.includes("transition") ||
    lowerQuery.includes("change") ||
    lowerQuery.includes("automotive") ||
    lowerQuery.includes("embedded")
  ) {
    if (lowerQuery.includes("automotive") || lowerQuery.includes("embedded")) {
      return data.responses.automotive;
    }
    const transition = data.experience.careerTransition;
    return `I made a successful career transition from embedded C/automotive development to web development. During ${transition.period}, I dedicated myself to ${transition.description}. You can see my learning journey on GitHub: ${transition.github}. This transition gave me a unique perspective and strong problem-solving skills that I now apply in my current roles.`;
  }

  // Leadership/management questions
  if (
    lowerQuery.includes("lead") ||
    lowerQuery.includes("manage") ||
    lowerQuery.includes("team")
  ) {
    return `Yes, I have extensive leadership experience! As CTO/Co-Founder of nugget.courses, I lead technical development and coordinate development teams. Previously, I've been a Lead Application Developer managing a team of 6 developers, served as a Software Project Manager coordinating multiple teams, and worked as a Scrum Master. I also mentor team members and handle project planning.`;
  }

  // Company-specific questions
  if (lowerQuery.includes("fortech")) {
    return `I worked at Fortech for 3 years (April 2021 - March 2024) as a React Developer. I developed new features using Next.js with React.js, worked in agile SCRUM teams, and collaborated closely with backend teams and clients to design optimal frontend solutions.`;
  }

  if (lowerQuery.includes("marelli")) {
    return `I worked at Marelli in various roles from 2018-2021, progressing from Junior Software Developer to Lead Application Developer and Software Project Manager. I worked on embedded C automotive projects, particularly headlamp systems, and led teams of up to 6 developers.`;
  }

  // Default response
  return `I can help you learn about my professional journey! I'm a Senior Frontend Engineer with ${data.experience.totalExperience} of experience, including a successful transition from embedded systems to web development. I'm currently working on nutrichefdelivery.ro and legalmanagement.ro as an entrepreneur. Ask me about my current roles, technologies, startups, career transition, or leadership experience!`;
}

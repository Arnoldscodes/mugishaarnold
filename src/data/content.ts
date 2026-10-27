// All editable site content lives here.

export const profile = {
  name: "Arnold Mugisha",
  firstName: "Arnold",
  role: "Software Engineering student & aspiring tech entrepreneur",
  location: "Kigali, Rwanda",
  email: "mugishaarnold12@gmail.com",
  universityEmail: "a.mugisha5@alustudent.com",
  resumePdf: "/resume.pdf",
};

export const socials = [
  { label: "GitHub (alnaud)", href: "https://github.com/alnaud" },
  { label: "GitHub (arnoldscodes)", href: "https://github.com/arnoldscodes" },
  // EDITABLE: replace with your real LinkedIn URL
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  status: string;
  technologies: string[]; // leave empty unless verified
  liveUrl?: string;
  sourceUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "enkingi",
    title: "eNkingi",
    description:
      "A Rwandan e-commerce initiative focused on making buying and selling easier.",
    status: "Live",
    technologies: [],
    liveUrl: "https://enkingi.shop",
  },
  {
    slug: "smart-light",
    title: "Smart Light Control System",
    description:
      "An electronics prototype exploring automatic lighting using LDR sensors, resistors, and LEDs.",
    status: "Prototype",
    technologies: ["LDR sensors", "Resistors", "LEDs"],
  },
  {
    slug: "nutrikeya",
    title: "NutriKeya",
    description: "A digital nutrition-related concept explored through a web prototype.",
    status: "Prototype",
    technologies: [],
  },
];

export const education = [
  {
    degree: "Bachelor of Software Engineering",
    school: "African Leadership University",
    period: "January 2026 – September 2029 (expected)",
  },
];

export const experience = [
  {
    company: "Data Systems Ltd",
    role: "Intern",
    period: "January – July 2025",
    // EDITABLE: placeholder bullets — replace with real responsibilities
    bullets: [
      "[Editable] Responsibility placeholder one.",
      "[Editable] Responsibility placeholder two.",
      "[Editable] Responsibility placeholder three.",
    ],
  },
];

export const skills = ["HTML", "CSS", "JavaScript", "Python", "SQL", "Databases", "Supabase", "Git", "GitHub"];

export const areasOfStudy = ["Cloud Computing", "System Automation", "Embedded Systems"];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Résumé" },
  { to: "/contact", label: "Contact" },
] as const;

// All editable site content lives here.
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const profile = {
  name: "Arnold Mugisha",
  firstName: "Arnold",
  role: "Software Engineering student & aspiring tech entrepreneur",
  location: "Kigali, Rwanda",
  phone: "+250 791 861 439",
  email: "mugishaarnold12@gmail.com",
  universityEmail: "a.mugisha5@alustudent.com",
  resumePdf: resumeAsset.url,
};

// Both inboxes, in the order they should be shown.
export const emails = [
  { label: "Email", address: profile.email },
  { label: "University email", address: profile.universityEmail },
];

export const socials = [
  { label: "GitHub (alnaud)", href: "https://github.com/alnaud" },
  { label: "GitHub (arnoldscodes)", href: "https://github.com/arnoldscodes" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mugisha-alnaud-68686b376/" },
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
      "A Rwandan e-commerce initiative focused on making it easier for customers to discover products and for local sellers to reach them. Order tracking and online payments are on the roadmap.",
    status: "Live",
    technologies: [],
    liveUrl: "https://enkingi.shop",
  },
  {
    slug: "smart-light",
    title: "Smart Light Control System",
    description:
      "An electronics prototype exploring automatic lighting using LDR sensors, resistors, and LEDs, responding to ambient light levels.",
    status: "Prototype",
    technologies: ["LDR sensors", "Resistors", "LEDs"],
  },
  {
    slug: "recycling-farming",
    title: "Recycling & Sustainable Farming",
    description:
      "A sustainability concept exploring how plastic waste can be converted into reusable products and biological waste into organic manure, with a simple business and impact model.",
    status: "Concept",
    technologies: [],
  },
  {
    slug: "nutrikeya",
    title: "NutriKeya",
    description: "A digital nutrition-related concept explored through a web prototype.",
    status: "Prototype",
    technologies: [],
  },
];

export type Education = { degree: string; school: string; period: string; note?: string };

export const education: Education[] = [
  {
    degree: "Bachelor of Software Engineering",
    school: "African Leadership University",
    period: "January 2026 – September 2029 (expected)",
    note: "Relevant coursework: Software Engineering Fundamentals, Programming Concepts, Cloud Computing Services, System Automation, and Embedded System Firmware Development.",
  },
  {
    // EDITABLE: school name is missing from the résumé — fill it in here.
    degree: "Secondary Education — Computer Systems and Architecture",
    school: "[Editable] School name",
    period: "Completed 2025 · Final result 83.94%",
  },
];

export const experience = [
  {
    company: "Data Systems Ltd",
    role: "Intern",
    period: "January – July 2025",
    bullets: [
      "Gained practical exposure to maintaining and organizing large datasets.",
      "Supported data organization and handling, strengthening attention to detail and analytical thinking.",
    ],
  },
];

export const skills = ["HTML", "CSS", "JavaScript", "Python", "SQL", "Databases", "Supabase", "Git", "GitHub"];

export const strengths = [
  "Problem-solving",
  "Analytical thinking",
  "Technical communication",
  "Project coordination",
  "Systems thinking",
  "Independent learning",
];

export const languages = ["Kinyarwanda (fluent)", "English (fluent)", "French (conversational)"];

export const areasOfStudy = ["Cloud Computing", "System Automation", "Embedded Systems"];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Résumé" },
  { to: "/contact", label: "Contact" },
] as const;

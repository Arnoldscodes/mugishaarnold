# Mugishaarnold

Build a clean, minimalist, premium personal portfolio website for Arnold Mugisha, a Software Engineering student at African Leadership University in Kigali, Rwanda, and aspiring technology entrepreneur.

DESIGN DIRECTION
Take inspiration from the simplicity, typography, whitespace, and straightforward navigation of https://olaolu.dev/, but create an original design. Do not copy its content or exact layout. Style: editorial, modern, professional, typography-focused, confident and approachable.

COLOR PALETTE (define as CSS variables / Tailwind theme tokens)
- Background: #FFFFFF
- Accent (forest green): #176B45
- Text and headings (soft black): #171717
- Secondary background for cards and highlighted sections (pale green): #F0F7F2
- Borders and dividers: #E5E7EB
Use green sparingly: primary buttons, nav hover/active states, links, small decorative details, section accents. Most backgrounds stay white. No large saturated green blocks, no gradients, no neon, no unnecessary effects. Ensure WCAG AA contrast everywhere.

TYPOGRAPHY AND MOTION
Clean sans-serif (Inter or Geist), large confident headings, comfortable line-height, narrow readable content column, generous whitespace. Subtle hover transitions and restrained fade-in animations only. Respect prefers-reduced-motion.

NAVIGATION
Home, Work, About, Résumé, Contact (React Router, separate pages). Accessible nav with a "Skip to content" link, visible focus states, and a clean mobile menu. Footer repeats the nav, email, and social links.

HOME
- Headline: "Hey, I'm Arnold. I build digital products that solve real-world problems."
- Intro: "I'm a Software Engineering student at African Leadership University, interested in web development, technology-driven businesses, and creating useful digital experiences. I'm currently learning, building, and turning ideas into products."
- Buttons: "View my work" (primary, green) and "Contact me" (secondary).
- A short featured-projects preview below the hero.

WORK
Three projects shown as simple editorial cards with a pale-green (#F0F7F2) background. Each card shows: title, concise description, status badge, technologies (only where verified), and optional "Live demo" / "Source code" links that only appear when a URL exists.
1. eNkingi: a Rwandan e-commerce initiative focused on making buying and selling easier. Link: https://enkingi.shop
2. Smart Light Control System: an electronics prototype exploring automatic lighting using LDR sensors, resistors, and LEDs.
3. NutriKeya: a digital nutrition-related concept explored through a web prototype. Clearly label it "Prototype".
Rules: never invent features, metrics, repository links, or claims that a project is fully functional. Leave technologies empty where not verified.

ABOUT
Write a short, honest section on Arnold's Software Engineering journey, his interest in entrepreneurship, and his motivation to build technology that solves practical problems in African markets. Keep it first-person, humble, and free of invented achievements.

RÉSUMÉ
- Education: Bachelor of Software Engineering, African Leadership University, January 2026 to September 2029 (expected completion).
- Experience: Data Systems Ltd, Internship, January to July 2025. Add placeholder responsibility bullets clearly marked as editable, since the real responsibilities will be provided later.
- Skills: HTML, CSS, JavaScript, Python, SQL, Databases, Supabase, Git, GitHub.
- Areas of study: Cloud Computing, System Automation, Embedded Systems.
- A "Download résumé (PDF)" button linking to /resume.pdf in the public folder. Add a placeholder file and a note that I will replace it with my real PDF.

CONTACT
- Email: mugishaarnold12@gmail.com (mailto link)
- University email: a.mugisha5@alustudent.com
- GitHub: https://github.com/alnaud and https://github.com/arnoldscodes
- Location: Kigali, Rwanda
- LinkedIn: editable placeholder URL
Include a simple contact form (name, email, message) with validation. For now, make it open the user's email client via mailto.

RULES
Do not invent testimonials, client names, professional experience, performance metrics, or capabilities. Use semantic HTML, working external links (open in a new tab with rel="noopener noreferrer"), alt text on all images, optimized assets, and a fast, mobile-first responsive layout. Add page titles, meta descriptions, and Open Graph tags.

CODE ORGANIZATION
Keep code clean and componentized. Store all editable content (projects, experience, skills, links) in one data file, e.g. src/data/content.ts, so it is easy to update.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8c86335e-3e34-5391-9cbe-5f5ef006cecd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

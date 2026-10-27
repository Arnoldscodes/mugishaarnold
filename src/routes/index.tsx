import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/data/content";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Arnold Mugisha — Software Engineering Student, Kigali",
      "Arnold Mugisha is a Software Engineering student at African Leadership University building digital products that solve real-world problems.",
      "/",
    ),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section className="animate-fade-up mx-auto max-w-3xl px-6 pt-20 pb-20 md:pt-32">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Kigali, Rwanda</p>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          Hey, I'm Arnold. I build digital products that solve real-world problems.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I'm a Software Engineering student at African Leadership University, interested in web development,
          technology-driven businesses, and creating useful digital experiences. I'm currently learning, building,
          and turning ideas into products.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/work" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            View my work
          </Link>
          <Link to="/contact" className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary">
            Contact me
          </Link>
        </div>
      </section>
      <section aria-labelledby="featured" className="mx-auto max-w-5xl px-6">
        <div className="flex items-end justify-between border-t border-border pt-12">
          <h2 id="featured" className="text-2xl font-semibold tracking-tight">Selected work</h2>
          <Link to="/work" className="text-sm font-medium text-primary hover:underline">All projects →</Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>
    </SiteLayout>
  );
}

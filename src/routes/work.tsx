import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/data/content";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/work")({
  head: () => seo("Work — Arnold Mugisha", "Projects and prototypes by Arnold Mugisha, including eNkingi, a Smart Light Control System, and NutriKeya.", "/work"),
  component: Work,
});

function Work() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Work" title="Things I've been building." intro="A small collection of projects and prototypes — some live, some still experiments." />
      <div className="mx-auto grid max-w-3xl gap-6 px-6">
        {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </SiteLayout>
  );
}

import type { Project } from "@/data/content";
import { ExternalLink } from "./Layout";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl bg-card p-8 transition-transform duration-300 hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <span className="shrink-0 rounded-full border border-primary/30 bg-background px-3 py-1 text-xs font-medium text-primary">
          {project.status}
        </span>
      </div>
      <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>
      {project.technologies.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map((t) => (
            <li key={t} className="rounded-md bg-background px-2.5 py-1 text-xs">{t}</li>
          ))}
        </ul>
      )}
      {(project.liveUrl || project.sourceUrl) && (
        <div className="mt-6 flex gap-5 text-sm font-medium">
          {project.liveUrl && <ExternalLink href={project.liveUrl} className="text-primary hover:underline">Live demo ↗</ExternalLink>}
          {project.sourceUrl && <ExternalLink href={project.sourceUrl} className="text-primary hover:underline">Source code ↗</ExternalLink>}
        </div>
      )}
    </article>
  );
}

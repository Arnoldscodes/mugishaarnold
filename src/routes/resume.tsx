import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { areasOfStudy, education, experience, languages, profile, skills, strengths } from "@/data/content";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/resume")({
  head: () => seo("Résumé — Arnold Mugisha", "Education, experience, and skills of Arnold Mugisha, Software Engineering student at African Leadership University.", "/resume"),
  component: Resume,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-border py-10 md:grid-cols-[180px_1fr]">
      <h2 className="text-sm font-medium uppercase tracking-widest text-primary">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((s) => <li key={s} className="rounded-md bg-card px-3 py-1.5 text-sm">{s}</li>)}
    </ul>
  );
}

function Resume() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Résumé" title="Education & experience." />
      <div className="mx-auto max-w-3xl px-6">
        <a href={profile.resumePdf} download className="mb-12 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
          Download résumé (PDF)
        </a>
        <Section title="Education">
          <div className="space-y-8">
            {education.map((e) => (
              <div key={e.degree}>
                <h3 className="text-lg font-semibold">{e.degree}</h3>
                <p className="text-muted-foreground">{e.school}</p>
                <p className="mt-1 text-sm text-muted-foreground">{e.period}</p>
                {e.note && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.note}</p>}
              </div>
            ))}
          </div>
        </Section>
        <Section title="Experience">
          {experience.map((x) => (
            <div key={x.company}>
              <h3 className="text-lg font-semibold">{x.company}</h3>
              <p className="text-muted-foreground">{x.role} · {x.period}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                {x.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </Section>
        <Section title="Skills"><Tags items={skills} /></Section>
        <Section title="Ways of working"><Tags items={strengths} /></Section>
        <Section title="Areas of study"><Tags items={areasOfStudy} /></Section>
        <Section title="Languages"><Tags items={languages} /></Section>
      </div>
    </SiteLayout>
  );
}

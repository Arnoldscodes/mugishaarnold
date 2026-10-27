import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About — Arnold Mugisha", "About Arnold Mugisha: Software Engineering student at ALU interested in entrepreneurship and practical technology for African markets.", "/about"),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="About" title="Learning by building." />
      <div className="mx-auto max-w-3xl space-y-6 px-6 text-lg leading-relaxed text-muted-foreground">
        <p>
          I'm Arnold, a Software Engineering student at African Leadership University in Kigali. I'm early in my
          journey, and most of what I know comes from building small things, breaking them, and figuring out how to
          make them work better.
        </p>
        <p>
          I'm drawn to the place where technology meets business. I'm curious about how good software can make
          everyday tasks simpler — buying and selling, accessing information, or managing resources — and how a
          useful idea can grow into a real product.
        </p>
        <p>
          What motivates me most is building technology that solves practical problems in African markets. I want to
          understand the people I'm building for, start simple, and keep improving.
        </p>
        <p className="border-l-2 border-primary pl-5 text-foreground">
          Right now I'm focused on strengthening my fundamentals in web development, databases, and systems — and
          on turning more of my ideas into things people can actually use.
        </p>
      </div>
    </SiteLayout>
  );
}

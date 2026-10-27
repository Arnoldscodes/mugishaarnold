import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ExternalLink, PageHeader, SiteLayout } from "@/components/site/Layout";
import { emails, profile, socials } from "@/data/content";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact — Arnold Mugisha", "Get in touch with Arnold Mugisha by email, GitHub, or LinkedIn. Based in Kigali, Rwanda.", "/contact"),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please write a message").max(1000),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const inputCls = "mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary";

function Contact() {
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as keyof Errors] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio message from ${r.data.name}`);
    const body = encodeURIComponent(`${r.data.message}\n\n— ${r.data.name} (${r.data.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const field = (name: keyof Errors, label: string, type = "text") => (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      {type === "textarea" ? (
        <textarea id={name} name={name} rows={5} maxLength={1000} className={inputCls} aria-invalid={!!errors[name]} aria-describedby={`${name}-err`} />
      ) : (
        <input id={name} name={name} type={type} maxLength={255} className={inputCls} aria-invalid={!!errors[name]} aria-describedby={`${name}-err`} />
      )}
      {errors[name] && <p id={`${name}-err`} className="mt-1 text-sm text-destructive">{errors[name]}</p>}
    </div>
  );

  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact" title="Let's talk." intro="Have a question, an idea, or an opportunity? I'd be glad to hear from you." />
      <div className="mx-auto grid max-w-3xl gap-12 px-6 md:grid-cols-[1fr_1.4fr]">
        <dl className="space-y-6 text-sm">
          {emails.map((e) => (
            <div key={e.address}>
              <dt className="text-muted-foreground">{e.label}</dt>
              <dd><a href={`mailto:${e.address}`} className="text-primary hover:underline">{e.address}</a></dd>
            </div>
          ))}
          <div>
            <dt className="text-muted-foreground">Phone</dt>
            <dd><a href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`} className="text-primary hover:underline">{profile.phone}</a></dd>
          </div>
          <div><dt className="text-muted-foreground">Location</dt><dd>{profile.location}</dd></div>
          <div>
            <dt className="text-muted-foreground">Elsewhere</dt>
            {socials.map((s) => <dd key={s.href}><ExternalLink href={s.href} className="text-primary hover:underline">{s.label} ↗</ExternalLink></dd>)}
          </div>
        </dl>
        <form onSubmit={onSubmit} noValidate className="space-y-5">
          {field("name", "Name")}
          {field("email", "Email", "email")}
          {field("message", "Message", "textarea")}
          <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
            Send message
          </button>
          <p className="text-xs text-muted-foreground">This opens your email app with the message filled in.</p>
        </form>
      </div>
    </SiteLayout>
  );
}

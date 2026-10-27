import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { emails, navLinks, profile, socials } from "@/data/content";

export function ExternalLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const linkCls =
    "text-sm text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:font-medium";
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-semibold tracking-tight">
          Arnold Mugisha<span className="text-primary">.</span>
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={linkCls} activeOptions={{ exact: true }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden p-2 -mr-2"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="md:hidden border-t border-border">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} onClick={() => setOpen(false)} className={`${linkCls} block py-3 text-base`} activeOptions={{ exact: true }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-semibold">Arnold Mugisha</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.location}</p>
          <ul className="mt-3 space-y-1">
            {emails.map((e) => (
              <li key={e.address}>
                <a href={`mailto:${e.address}`} className="text-sm text-primary hover:underline">
                  {e.address}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-2 text-sm">
          {socials.map((s) => (
            <li key={s.href}>
              <ExternalLink href={s.href} className="text-muted-foreground hover:text-primary">{s.label} ↗</ExternalLink>
            </li>
          ))}
        </ul>
      </div>
      <p className="pb-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Arnold Mugisha</p>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="animate-fade-up mx-auto max-w-3xl px-6 pt-20 pb-12 md:pt-28">
      <p className="text-sm font-medium uppercase tracking-widest text-primary">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
      {intro && <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

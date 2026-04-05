"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { email, github, linkedin, name, nav } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname === "";
  return pathname === href || pathname.startsWith(href.replace(/\/$/, ""));
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header-bg backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 font-semibold tracking-tight text-fg"
          onClick={() => setOpen(false)}
        >
          <span
            className="h-2 w-2 rounded-full bg-dot shadow-[0_0_12px_var(--c-dot-glow)] transition group-hover:scale-110"
            aria-hidden
          />
          <span>{name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive(pathname, href)
                  ? "bg-accent-soft text-accent-muted"
                  : "text-fg-muted hover:bg-hover hover:text-fg"
              }`}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
          <a
            href={`mailto:${email}`}
            className="ml-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-on-accent shadow-accent-glow transition hover:bg-accent-hover"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-fg-muted hover:bg-hover hover:text-fg"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-fg-subtle hover:bg-hover"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-page px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3 py-3 text-base font-medium ${
                  isActive(pathname, href)
                    ? "bg-accent-soft text-accent-muted"
                    : "text-fg-subtle hover:bg-hover"
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              href={`mailto:${email}`}
              className="mt-2 rounded-xl bg-accent px-3 py-3 text-center font-semibold text-on-accent"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-3 text-fg-muted hover:bg-hover"
              onClick={() => setOpen(false)}
            >
              LinkedIn
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

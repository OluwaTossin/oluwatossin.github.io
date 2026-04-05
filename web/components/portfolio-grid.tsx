"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Project } from "@/lib/projects";

const CHIPS = [
  { id: "aws", label: "AWS" },
  { id: "security", label: "Security" },
  { id: "kubernetes", label: "Kubernetes" },
  { id: "cicd", label: "CI/CD" },
  { id: "monitoring", label: "Monitoring" },
  { id: "ml", label: "ML" },
] as const;

type ChipId = (typeof CHIPS)[number]["id"];

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Set<ChipId>>(new Set());

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const blob = `${p.title} ${p.description} ${p.category} ${p.tags.join(" ")}`.toLowerCase();
      const textOk = !q || blob.includes(q);
      const chipOk =
        active.size === 0 || [...active].every((chip) => p.tags.includes(chip));
      return textOk && chipOk;
    });
  }, [projects, query, active]);

  function toggle(chip: ChipId) {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(chip)) next.delete(chip);
      else next.add(chip);
      return next;
    });
  }

  return (
    <div className="space-y-8">
      <div className="card-surface flex flex-col gap-4 p-5 sm:p-6">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-faint"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, tags, or stack…"
            className="w-full rounded-xl border border-border-strong bg-input-bg py-3 pl-10 pr-4 text-sm text-fg placeholder:text-fg-faint focus:border-accent focus:outline-none focus:ring-2 focus:ring-[var(--c-focus-ring)]"
            aria-label="Search projects"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter by tag">
          {CHIPS.map(({ id, label }) => {
            const pressed = active.has(id);
            return (
              <button
                key={id}
                type="button"
                aria-pressed={pressed}
                onClick={() => toggle(id)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  pressed
                    ? "border-accent bg-accent-soft text-fg"
                    : "border-border-strong bg-card-muted text-fg-muted hover:border-border hover:text-fg-subtle"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
        <p className="text-sm text-fg-faint">
          {visible.length === projects.length
            ? `Showing all ${projects.length} projects`
            : `Showing ${visible.length} of ${projects.length} projects`}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {visible.map((p) => (
          <article
            key={p.id}
            id={p.id}
            className="card-surface card-surface-hover flex flex-col gap-4 p-6 scroll-mt-24"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              {p.category}
            </p>
            <h2 className="text-lg font-semibold tracking-tight text-fg">{p.title}</h2>
            <p className="flex-1 text-sm leading-relaxed text-fg-muted">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.slice(0, 12).map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-tag px-2 py-0.5 text-xs text-fg-subtle"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 border-t border-border pt-4">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:text-accent-hover"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

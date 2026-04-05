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
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, tags, or stack…"
            className="w-full rounded-xl border border-zinc-700/80 bg-zinc-900/60 py-3 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-teal-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
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
                    ? "border-teal-500 bg-teal-500/20 text-teal-200"
                    : "border-zinc-700 bg-zinc-900/50 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
        <p className="text-sm text-zinc-500">
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
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-400/90">
              {p.category}
            </p>
            <h2 className="text-lg font-semibold tracking-tight text-white">{p.title}</h2>
            <p className="flex-1 text-sm leading-relaxed text-zinc-400">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.slice(0, 6).map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-zinc-800/80 px-2 py-0.5 text-xs text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 border-t border-zinc-800/80 pt-4">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-teal-400 hover:text-teal-300"
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

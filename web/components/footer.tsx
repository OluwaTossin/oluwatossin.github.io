import Link from "next/link";
import { github, linkedin, name } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-footer-bg">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-fg-faint">
            © {new Date().getFullYear()} {name}. Professional portfolio.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/about/" className="text-fg-muted hover:text-accent">
              About
            </Link>
            <Link href="/projects/" className="text-fg-muted hover:text-accent">
              Portfolio
            </Link>
            <Link href="/devops-engineer-london/" className="text-fg-muted hover:text-accent">
              DevOps — London
            </Link>
            <Link href="/devops-engineer-manchester/" className="text-fg-muted hover:text-accent">
              DevOps — Manchester
            </Link>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

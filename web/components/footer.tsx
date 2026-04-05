import Link from "next/link";
import { github, linkedin, name } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800/80 bg-zinc-950/90">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {name}. Professional portfolio.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/about/" className="text-zinc-400 hover:text-teal-400">
              About
            </Link>
            <Link href="/projects/" className="text-zinc-400 hover:text-teal-400">
              Portfolio
            </Link>
            <Link href="/devops-engineer-london/" className="text-zinc-400 hover:text-teal-400">
              DevOps — London
            </Link>
            <Link href="/devops-engineer-manchester/" className="text-zinc-400 hover:text-teal-400">
              DevOps — Manchester
            </Link>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-teal-400"
            >
              GitHub
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-teal-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

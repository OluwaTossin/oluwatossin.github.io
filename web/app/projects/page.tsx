import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio — cloud platforms, SRE, security, ML, and CI/CD case studies by Oluwatosin Jegede.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-white">Portfolio</h1>
        <p className="mt-4 text-zinc-400">
          Selected builds across AIOps, EKS, ML pipelines, security, and automation. Use search and
          filters to narrow by stack.
        </p>
      </div>
      <PortfolioGrid projects={projects} />
    </div>
  );
}

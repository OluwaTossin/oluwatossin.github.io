import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "DevOps & cloud engineering portfolio: AWS EKS/Kubernetes, Terraform IaC, GitHub Actions CI/CD, AIOps incident response, ML pipelines, GCP Cloud Run, security assessments, PCI-DSS platform work, observability (Prometheus, Grafana, ELK), and disaster recovery—case studies by Oluwatosin Jegede.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-white">Portfolio</h1>
        <p className="mt-4 max-w-3xl text-zinc-400 leading-relaxed">
          Detailed case studies across production AWS and GCP platforms: Kubernetes (EKS), Terraform
          infrastructure as code, GitHub Actions and Jenkins CI/CD, observability and SRE, DevSecOps and
          compliance, ML operations, and automation. Use search and stack filters to narrow results—each
          card spells out scope, tooling, and outcomes for recruiters and technical reviewers.
        </p>
      </div>
      <PortfolioGrid projects={projects} />
    </div>
  );
}

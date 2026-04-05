import type { Metadata } from "next";
import Link from "next/link";
import { email, linkedin } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience — Netsible Solutions, Help.NGO, Sovereign Technology, Afren.ai, independent cloud work.",
};

type Role = {
  org: string;
  title: string;
  period: string;
  location: string;
  intro: string;
  bullets: string[];
  tags: string[];
};

const roles: Role[] = [
  {
    org: "Netsible Solutions",
    title: "DevOps & SRE Engineer",
    period: "September 2025 – Present",
    location: "Remote / London, UK",
    intro:
      "DevOps and SRE across hybrid AWS/GCP: resilience, GitOps-style deployments, DevSecOps guardrails, and observability-led incident response.",
    bullets: [
      "Hybrid AWS/GCP architecture for global clients; improved resilience and ~35% latency reduction for distributed users.",
      "CI/CD with GitHub Actions and Argo CD; ~99.9% automated deployment success across prod and staging.",
      "DevSecOps with Trivy and Checkov; GDPR-aligned controls; ~50% reduction in critical security findings.",
      "Self-healing Kubernetes with Prometheus/Grafana; ~40% lower MTTR for infrastructure incidents.",
      "AI-assisted tooling for logs and triage; stronger RCA and ~25% productivity gains.",
    ],
    tags: ["AWS", "GCP", "Kubernetes", "Terraform", "Argo CD", "Prometheus", "SRE"],
  },
  {
    org: "Help.NGO (Humanitarian OpenStreetMap Team)",
    title: "DevOps Engineer",
    period: "December 2023 – Present",
    location: "Remote, Poland",
    intro:
      "Secure, compliant AWS for humanitarian mapping—Terraform standards, GitHub Actions, and GDPR-aware observability.",
    bullets: [
      "Secure AWS patterns for field and mapping workloads.",
      "Terraform IaC standardisation and GitHub Actions automation.",
      "Observability and data-protection aligned with GDPR and humanitarian practice.",
      "Documentation and risk analysis for sensitive deployments.",
    ],
    tags: ["AWS", "Terraform", "GitHub Actions", "GDPR"],
  },
  {
    org: "Sovereign Technology & Innovation Limited",
    title: "DevOps Engineer",
    period: "August 2024 – July 2025",
    location: "Hybrid",
    intro: "Production fintech platform on AWS—EKS, Istio, policy-as-code, and FinOps.",
    bullets: [
      "Multi-node EKS with Istio; secure networking and autoscaling; 99.95% uptime target.",
      "Terraform modules and GitHub Actions for blue/green style delivery.",
      "Prometheus, Grafana, and CloudWatch; MTTR from 45 minutes to under 15 minutes.",
      "Checkov, OPA, AWS Config for PCI-DSS aligned compliance.",
      "FinOps dashboards and Cost Explorer APIs; ~30% Opex reduction.",
    ],
    tags: ["AWS", "EKS", "Istio", "Terraform", "PCI-DSS", "FinOps"],
  },
  {
    org: "Afren.ai",
    title: "DevOps Engineer",
    period: "December 2022 – July 2024",
    location: "Remote",
    intro: "Platform reliability and automation on AWS for internal distributed services.",
    bullets: [
      "CI/CD and IaC; ~60% less manual provisioning work.",
      "Modular Terraform to remove drift and standardise environments.",
      "CloudWatch golden signals and log pipelines; ~45% reliability improvement.",
      "Alerting and playbooks; ~40% lower MTTR.",
      "Hardened Linux and container hosts across EC2 and Kubernetes nodes.",
    ],
    tags: ["AWS", "Terraform", "CloudWatch", "DevSecOps"],
  },
  {
    org: "Independent Cloud Architect & DevOps",
    title: "Contract engagements",
    period: "May 2021 – Present",
    location: "UK & international clients",
    intro: "Fintech, healthtech, and enterprise automation, reliability, and governance.",
    bullets: [
      "Multi-cloud HA designs; ~99.9% uptime outcomes.",
      "Terraform and Argo CD frameworks; ~60% faster provisioning.",
      "DevSecOps pipelines with scanning, drift detection, and automated rollback.",
      "FinOps savings around £3K–£5K/month for clients.",
    ],
    tags: ["AWS", "GCP", "Argo CD", "FinOps", "DevSecOps"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-white">Experience</h1>
        <p className="mt-4 text-zinc-400">
          Hybrid AWS/GCP platforms, humanitarian advisory, fintech production systems, and
          independent multi-cloud delivery—with Terraform, Kubernetes, SRE, and DevSecOps.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {roles.map((r) => (
          <article key={r.org} className="card-surface p-6 sm:p-8">
            <div className="flex flex-col gap-2 border-b border-zinc-800 pb-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">{r.org}</h2>
                <p className="mt-1 font-medium text-teal-400">{r.title}</p>
              </div>
              <p className="text-sm text-zinc-500">
                {r.period}
                <br />
                {r.location}
              </p>
            </div>
            <p className="mt-4 text-sm text-zinc-400">{r.intro}</p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-300">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-zinc-800/80 px-2 py-0.5 text-xs text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="card-surface mt-12 flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:justify-center">
        <a
          href={`mailto:${email}?subject=DevOps%20%2F%20SRE%20opportunity`}
          className="rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-500"
        >
          Email me
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-zinc-600 px-6 py-3 text-sm font-semibold text-white hover:border-teal-500/40"
        >
          LinkedIn
        </a>
        <Link
          href="/portfolio/"
          className="rounded-xl border border-zinc-600 px-6 py-3 text-sm font-semibold text-white hover:border-teal-500/40"
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
}

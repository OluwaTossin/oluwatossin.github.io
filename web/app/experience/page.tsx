import type { Metadata } from "next";
import Link from "next/link";
import { email, linkedin } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Senior DevOps & SRE experience: hybrid AWS/GCP, Kubernetes, Terraform, GitHub Actions, Argo CD, DevSecOps (Trivy, Checkov), PCI-DSS, GDPR, FinOps, AIOps—Netsible, Help.NGO, Sovereign fintech, Afren.ai, and independent delivery.",
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
    title: "Senior DevOps & SRE Engineer",
    period: "September 2025 – Present",
    location: "Remote / London, UK",
    intro:
      "Senior DevOps and SRE delivery across hybrid AWS/GCP environments: platform resilience, GitOps-style deployments, DevSecOps guardrails, and observability-led incident response for global client operations.",
    bullets: [
      "Architected and optimised high-availability hybrid cloud infrastructure (AWS/GCP) for global client operations, improving system resilience and reducing latency by ~35% for distributed end-users.",
      "Spearheaded modernisation of CI/CD workflows using GitHub Actions and Argo CD, achieving ~99.9% success rate for automated deployments across production and staging.",
      "Implemented a DevSecOps framework aligned with financial and data privacy standards (GDPR), integrating automated vulnerability scanning (Trivy, Checkov) that reduced critical security risks by ~50%.",
      "Engineered a self-healing Kubernetes platform with custom Prometheus/Grafana monitoring and alerting rules, cutting mean time to recovery (MTTR) for infrastructure incidents by ~40%.",
      "Pioneered AI-assisted operational tools for log analysis and incident triage, streamlining root cause analysis and enhancing team productivity by ~25%.",
    ],
    tags: [
      "AWS",
      "GCP",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Argo CD",
      "Prometheus",
      "Grafana",
      "Trivy",
      "Checkov",
      "DevSecOps",
      "SRE",
    ],
  },
  {
    org: "Help.NGO (Humanitarian OpenStreetMap Team)",
    title: "Senior DevOps Engineer (Advisory)",
    period: "December 2023 – Present",
    location: "Remote, Poland",
    intro:
      "Senior advisory on secure, compliant, and resilient AWS environments supporting humanitarian mapping operations, with emphasis on data protection and operational continuity in sensitive contexts.",
    bullets: [
      "Advised on secure AWS environments for humanitarian operations, ensuring data protection and operational continuity in sensitive contexts.",
      "Guided teams on Terraform-driven infrastructure-as-code standardisation and GitHub Actions automation for consistent, repeatable deployments.",
      "Strengthened observability and data-protection frameworks aligned with GDPR and humanitarian standards.",
      "Supported documentation and risk analysis for cloud deployments in high-stakes operational environments.",
    ],
    tags: ["AWS", "Terraform", "GitHub Actions", "Observability", "GDPR", "Humanitarian Tech"],
  },
  {
    org: "Sovereign Technology & Innovation Limited",
    title: "Senior DevOps Engineer",
    period: "August 2024 – July 2025",
    location: "Hybrid",
    intro:
      "Senior engineer architecting and operating a production-grade financial services platform on AWS, designed for resilience, automation, and PCI-DSS–aligned controls.",
    bullets: [
      "Designed multi-node Amazon EKS clusters with secure networking, autoscaling, and Istio-based service mesh to sustain ~99.95% uptime targets.",
      "Built Terraform modules and GitHub Actions pipelines enabling consistent, repeatable deployments across blue/green style environments.",
      "Implemented Checkov, OPA, and AWS Config for policy-as-code validation and continuous compliance, supporting PCI-DSS requirements.",
      "Delivered FinOps dashboards and cost analysis tooling using AWS Lambda and Cost Explorer APIs, reducing operational expenditure by ~30%.",
      "Implemented observability baselines using Prometheus, Grafana, and Amazon CloudWatch, improving incident visibility and reducing MTTR from ~45 minutes to under 15 minutes.",
    ],
    tags: [
      "AWS",
      "EKS",
      "Terraform",
      "Istio",
      "Prometheus",
      "Grafana",
      "GitHub Actions",
      "PCI-DSS",
      "DevSecOps",
      "FinOps",
    ],
  },
  {
    org: "Afren.ai",
    title: "Senior DevOps Engineer",
    period: "December 2022 – July 2024",
    location: "Remote",
    intro:
      "Senior engineer strengthening platform reliability and automated cloud operations across AWS for distributed internal services, with a focus on observability, playbooks, and hardened Linux and container estates.",
    bullets: [
      "Automated builds, deployments, and environment provisioning using CI/CD pipelines and infrastructure as code, reducing manual effort by ~60%.",
      "Rebuilt infrastructure into modular Terraform platform components, eliminating configuration drift and enabling consistent environment creation.",
      "Delivered CloudWatch dashboards, golden-signal metrics, and centralised log pipelines, improving service visibility and operational reliability by ~45%.",
      "Enhanced alerting, incident response, and troubleshooting workflows, cutting MTTR by ~40% and standardising recovery playbooks.",
      "Operated and hardened Linux-based production environments across EC2 instances and Kubernetes container hosts.",
    ],
    tags: [
      "AWS",
      "Terraform",
      "GitHub Actions",
      "CloudWatch",
      "Prometheus",
      "Grafana",
      "Docker",
      "DevSecOps",
      "SRE",
    ],
  },
  {
    org: "Independent Cloud Architect & DevOps",
    title: "Senior Cloud Architect & DevOps (Contract)",
    period: "May 2021 – Present",
    location: "UK & international clients",
    intro:
      "Senior-level cloud architecture and automation across fintech, healthtech, and enterprise projects—multi-cloud reliability, GitOps frameworks, DevSecOps pipelines, and FinOps savings.",
    bullets: [
      "Designed multi-cloud, highly available workloads using load balancing, autoscaling, and replication strategies achieving ~99.9% uptime outcomes.",
      "Built internal Terraform and Argo CD frameworks that reduced provisioning time by ~60%.",
      "Implemented DevSecOps pipelines with vulnerability scanning, drift detection, and automated rollback logic.",
      "Introduced FinOps cost optimisation workflows saving clients approximately £3,000–£5,000 per month.",
    ],
    tags: [
      "AWS",
      "GCP",
      "EKS",
      "GKE",
      "Terraform",
      "Argo CD",
      "Prometheus",
      "Grafana",
      "Checkov",
      "Snyk",
      "FinOps",
      "DevSecOps",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-fg">Experience</h1>
        <p className="mt-4 max-w-3xl text-fg-muted">
          Hands-on DevOps and SRE delivery across hybrid AWS and GCP, Kubernetes platforms, Terraform
          infrastructure as code, GitHub Actions and Argo CD GitOps CI/CD, DevSecOps and compliance
          (GDPR, PCI-DSS), observability-led incident response, SRE practices, and FinOps—from secure AWS
          advisory for humanitarian mapping through production fintech on Amazon EKS with Istio to
          independent multi-cloud architecture for fintech, healthtech, and enterprise clients.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {roles.map((r) => (
          <article key={r.org} className="card-surface p-6 sm:p-8">
            <div className="flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-fg">{r.org}</h2>
                <p className="mt-1 font-medium text-accent">{r.title}</p>
              </div>
              <p className="text-sm text-fg-faint">
                {r.period}
                <br />
                {r.location}
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">{r.intro}</p>
            <ul className="mt-4 list-outside list-disc space-y-3 ps-5 text-sm leading-relaxed text-fg-subtle">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-tag px-2 py-0.5 text-xs text-fg-subtle"
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
          className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-on-accent shadow-accent-glow hover:bg-accent-hover"
        >
          Email me
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-border-strong px-6 py-3 text-sm font-semibold text-fg hover:border-accent-border"
        >
          LinkedIn
        </a>
        <Link
          href="/projects/"
          className="rounded-xl border border-border-strong px-6 py-3 text-sm font-semibold text-fg hover:border-accent-border"
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
}

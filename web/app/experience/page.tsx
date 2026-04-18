import type { Metadata } from "next";
import Link from "next/link";
import { email, linkedin } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Senior DevOps & SRE and platform engineering: hybrid AWS/GCP, EKS, Istio, Terraform, GitHub Actions, Argo CD, SLI/SLOs, DevSecOps, PCI-DSS, GDPR, FinOps—Netsible, Sovereign fintech, Help.NGO advisory, Afren.ai, and independent multi-cloud delivery.",
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
      "Hybrid AWS/GCP delivery for global clients: high-availability platforms, GitOps CI/CD, DevSecOps controls, SLI/SLO standards, and AI-assisted operations.",
    bullets: [
      "Architected high-availability hybrid infrastructure across AWS and GCP, delivering 35% latency reduction for globally distributed end-users through AWS load-balancing and CDN optimisation.",
      "Led modernisation of CI/CD delivery to GitHub Actions and Argo CD, achieving 99.9% deployment success rate across AWS production and staging environments — eliminating all manual release interventions.",
      "Designed DevSecOps control framework aligned to GDPR and financial services standards; integrated Trivy and Checkov into AWS pipelines reducing critical vulnerability exposure by 50%.",
      "Architected self-healing Kubernetes platform on EKS with custom Prometheus/Grafana alerting and automated remediation playbooks, reducing infrastructure MTTR by 40%.",
      "Introduced AI-assisted incident triage and log analysis tooling, cutting root cause identification time by 25% and freeing senior engineering capacity for platform improvement work.",
      "Defined SLI/SLO frameworks and observability standards adopted across all client AWS delivery teams.",
    ],
    tags: [
      "AWS",
      "GCP",
      "EKS",
      "Terraform",
      "GitHub Actions",
      "Argo CD",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "Trivy",
      "Checkov",
      "Istio",
      "SRE",
    ],
  },
  {
    org: "Sovereign Technology & Innovation Limited",
    title: "Senior DevOps & Platform Engineer",
    period: "August 2024 – July 2025",
    location: "Hybrid, UK",
    intro:
      "Owned regulated financial services platforms on AWS: EKS, Istio, Terraform module library, observability tied to business SLAs, policy-as-code, FinOps, and mentoring.",
    bullets: [
      "Designed and owned multi-node Amazon EKS clusters with Istio service mesh, secure networking, and autoscaling policies; sustaining 99.95% uptime across regulated financial services workloads.",
      "Authored and maintained Terraform module library for multi-environment AWS deployments (VPC, ALB, IAM, Auto Scaling), enabling blue/green delivery with zero-downtime rollout and automated rollback.",
      "Drove observability baseline (Prometheus, Grafana, CloudWatch) reducing MTTR from 45 minutes to under 15 minutes; defined SLIs/SLOs mapped directly to business SLAs.",
      "Led policy-as-code implementation using Checkov, OPA, and AWS Config delivering continuous PCI-DSS compliance validation across all infrastructure changes.",
      "Built FinOps dashboards using Lambda and Cost Explorer APIs, identifying and eliminating waste to reduce operational expenditure by 30%.",
      "Mentored mid-level engineers on AWS IaC best practices, PR review processes, and incident response discipline.",
    ],
    tags: [
      "AWS",
      "EKS",
      "Terraform",
      "Istio",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "CloudWatch",
      "OPA",
      "Checkov",
      "AWS Config",
      "Lambda",
      "PCI-DSS",
    ],
  },
  {
    org: "Help.NGO (Humanitarian OpenStreetMap Team)",
    title: "Cloud Infrastructure Advisor",
    period: "December 2023 – Present",
    location: "Remote",
    intro:
      "Infrastructure and security guidance for humanitarian cloud estates: Terraform and GitHub Actions standardisation, GDPR-aligned controls, and operational visibility.",
    bullets: [
      "Advised on Terraform standardisation and GitHub Actions automation to achieve repeatable, auditable cloud deployments aligned to GDPR and humanitarian data-protection standards.",
      "Strengthened observability and data-protection frameworks, improving platform visibility in high-stakes humanitarian operational contexts.",
      "Contributed risk assessments, infrastructure documentation, and security control guidance for cloud deployments supporting emergency response missions.",
    ],
    tags: ["AWS", "Terraform", "GitHub Actions", "Observability", "GDPR", "Humanitarian Tech"],
  },
  {
    org: "Afren.ai",
    title: "DevOps Engineer",
    period: "December 2022 – July 2024",
    location: "Remote",
    intro:
      "Modular Terraform platforms, CI/CD, centralised monitoring, and hardened Linux production estates across AWS.",
    bullets: [
      "Replaced ad-hoc deployment processes with modular Terraform platform components and CI/CD pipelines, reducing manual provisioning effort by 60% and eliminating configuration drift across all environments.",
      "Delivered centralised monitoring, log pipelines, and golden-signal alerting improving service visibility and incident detection speed by 45%.",
      "Standardised incident response runbooks and on-call workflows, cutting MTTR by 40% and establishing consistent recovery patterns across services.",
      "Hardened Linux-based production environments, resolving persistent OS-level, networking, and resource-utilisation issues to reduce incident recurrence.",
    ],
    tags: [
      "AWS",
      "EC2",
      "Terraform",
      "CloudWatch",
      "Prometheus",
      "Grafana",
      "GitHub Actions",
      "Docker",
      "Linux",
    ],
  },
  {
    org: "Independent — UK & International Clients",
    title: "Senior Cloud Architect & DevOps Consultant",
    period: "May 2021 – Present",
    location: "UK & international clients",
    intro:
      "Sole senior technical ownership on AWS/GCP architecture, landing zones, GitOps, DevSecOps in regulated contexts, and FinOps outcomes for fintech and enterprise.",
    bullets: [
      "Designed AWS multi-account landing zones and GCP project hierarchies with consistent IAM, VPC architecture, and governance models for fintech and enterprise clients.",
      "Authored Terraform and Argo CD frameworks reducing environment provisioning time by 60% across AWS client platforms.",
      "Delivered DevSecOps pipelines with Checkov, Trivy, and Snyk integrated into AWS CodePipeline and GitHub Actions meeting PCI-DSS and GDPR requirements with drift detection and automated rollback.",
      "Introduced FinOps cost optimisation workflows (Savings Plans, rightsizing, Cost Explorer dashboards) saving clients £3,000–£5,000/month while maintaining or improving availability.",
      "Operated as sole senior technical decision-maker on AWS architecture, vendor selection, and risk trade-off analysis.",
    ],
    tags: [
      "AWS",
      "GCP",
      "Terraform",
      "Argo CD",
      "CodePipeline",
      "GitHub Actions",
      "Checkov",
      "Trivy",
      "Snyk",
      "FinOps",
      "PCI-DSS",
      "GDPR",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-fg">Experience</h1>
        <p className="mt-4 max-w-3xl text-fg-muted">
          Senior DevOps, platform, and SRE work across hybrid AWS and GCP: EKS and Istio, Terraform
          module libraries, GitHub Actions and Argo CD, SLI/SLOs with business-aligned SLAs, policy-as-code
          (Checkov, OPA, AWS Config), FinOps, and AI-assisted incident workflows — plus cloud infrastructure
          advisory for Help.NGO, regulated fintech delivery at Sovereign, and independent multi-account
          landing zones and DevSecOps for UK and international clients.
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

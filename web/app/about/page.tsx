import type { Metadata } from "next";
import Link from "next/link";
import { email, linkedin } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Oluwatosin Jegede — Cloud & DevOps Engineer, SRE, DevSecOps, AWS and GCP.",
};

const capabilities = [
  {
    title: "Cloud platforms",
    body: "AWS (EKS, ECS, SageMaker, Lambda, RDS, VPC) · GCP",
  },
  {
    title: "Infrastructure as code",
    body: "Terraform · CloudFormation",
  },
  {
    title: "CI/CD & GitOps",
    body: "GitHub Actions · Jenkins · Argo CD · Helm",
  },
  {
    title: "Containers & platform",
    body: "Kubernetes (EKS, Istio) · Docker",
  },
  {
    title: "AI-assisted engineering",
    body: "GitHub Copilot, Claude, ChatGPT / Codex-class models for IaC, testing, and incident workflows",
  },
  {
    title: "Observability & SRE",
    body: "OpenTelemetry · Prometheus · Grafana · CloudWatch · SLIs/SLOs · error budgets",
  },
  {
    title: "Security & compliance",
    body: "DevSecOps · IAM · KMS · PCI-DSS · GDPR · CIS · OPA · Checkov",
  },
  {
    title: "FinOps & governance",
    body: "Cost Explorer · Savings Plans · right-sizing · cost–performance trade-offs",
  },
  { title: "Scripting", body: "Python · Bash" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-white">About</h1>
          <p className="text-lg font-medium text-teal-300/90">
            Cloud &amp; DevOps Engineer · SRE &amp; observability · DevSecOps · Google Professional
            Cloud Architect · AWS Certified DevOps Engineer — Professional
          </p>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              I am a Cloud &amp; DevOps Engineer specialising in the design, automation, and
              governance of production-grade platforms across AWS and GCP. I build resilient systems
              with Terraform, Kubernetes, and CI/CD pipelines built for scale, security, and clear
              operations.
            </p>
            <p>
              I use SRE practices—SLIs, SLOs, error budgets, and golden signals—to reduce toil and
              shorten incident cycles. AI-assisted workflows support design, IaC, testing, and
              triage, with strict controls on correctness and compliance.
            </p>
            <p>
              I care about responsible automation, observability-first design, and cost-aware
              decisions so regulated and high-impact systems stay predictable and auditable.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-600 px-4 py-2 text-sm font-semibold text-white hover:border-teal-500/40"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${email}`}
              className="rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-500"
            >
              Email
            </a>
            <Link
              href="/experience/"
              className="rounded-xl border border-zinc-600 px-4 py-2 text-sm font-semibold text-white hover:border-teal-500/40"
            >
              Experience
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-white">Capabilities &amp; technologies</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((c) => (
            <div key={c.title} className="card-surface p-5">
              <h3 className="font-semibold text-teal-300">{c.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="card-surface p-6">
          <h2 className="text-lg font-bold text-white">Education</h2>
          <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
            M.Sc., Animal Biotechnology — Federal University of Agriculture, Abeokuta · B.Tech.,
            Animal Production &amp; Health — Federal University of Technology, Akure · Diploma,
            Computer Engineering — Datashield Institute
          </p>
        </div>
        <div className="card-surface p-6">
          <h2 className="text-lg font-bold text-white">Focus</h2>
          <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
            Platform engineering, SRE, and MLOps patterns—observability, internal platforms, and
            cloud-native delivery at scale.
          </p>
        </div>
      </section>
    </div>
  );
}

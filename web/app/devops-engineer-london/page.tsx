import type { Metadata } from "next";
import Link from "next/link";
import { email, linkedin } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cloud & DevOps Engineer — London",
  description:
    "Cloud & DevOps / SRE engineer (London area). AWS, GCP, Kubernetes, Terraform, observability. Currently at Netsible Solutions.",
};

const skills = [
  { title: "Cloud", items: ["AWS (EKS, ECS, Lambda)", "GCP", "Multi-cloud", "VPC & networking"] },
  { title: "Kubernetes", items: ["EKS", "Helm", "Istio service mesh"] },
  { title: "IaC", items: ["Terraform", "CloudFormation"] },
  { title: "CI/CD", items: ["GitHub Actions", "Jenkins", "Argo CD", "CodePipeline"] },
  { title: "Observability", items: ["Prometheus", "Grafana", "CloudWatch", "OpenTelemetry"] },
  { title: "Security", items: ["DevSecOps", "IAM", "PCI-DSS", "GDPR"] },
];

export default function LondonPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:items-start">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Cloud &amp; DevOps Engineer — London
          </h1>
          <p className="text-lg font-medium text-teal-300/90">
            AWS · GCP · Kubernetes · Terraform · SRE · DevSecOps
          </p>
          <p className="text-zinc-400 leading-relaxed">
            I am a Cloud &amp; DevOps Engineer with 5+ years building production platforms. I am
            currently <strong className="text-zinc-200">DevOps &amp; SRE Engineer at Netsible Solutions</strong>{" "}
            (London area / remote), on hybrid AWS/GCP, GitHub Actions, Argo CD, and
            observability-led reliability.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            My background spans fintech (EKS, Istio, PCI-aligned controls), platform work at
            Afren.ai, humanitarian AWS with Help.NGO, and independent multi-cloud delivery with
            strong FinOps and compliance outcomes.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-500"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${email}`}
              className="rounded-xl border border-zinc-600 px-5 py-2.5 text-sm font-semibold text-white hover:border-teal-500/40"
            >
              Email
            </a>
            <Link
              href="/portfolio/"
              className="rounded-xl border border-zinc-600 px-5 py-2.5 text-sm font-semibold text-white hover:border-teal-500/40"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <aside className="card-surface p-6 text-sm text-zinc-400">
          <p className="font-semibold text-white">Location focus</p>
          <p className="mt-2">London &amp; UK-wide remote opportunities.</p>
        </aside>
      </div>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-white">Technical skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.title} className="card-surface p-5">
              <h3 className="font-semibold text-teal-300">{s.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-zinc-400">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

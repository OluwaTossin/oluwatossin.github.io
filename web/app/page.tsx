import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { getFeaturedProjects } from "@/lib/projects";
import { email as siteEmail, github as gh, linkedin as li } from "@/lib/site";

const certs = [
  "AWS DevOps Engineer — Professional",
  "Google Professional Cloud Architect",
  "AWS ML Engineer — Associate",
  "AWS Security — Specialty",
  "AWS Developer — Associate",
  "AWS Solutions Architect — Associate",
  "Google Associate Cloud Engineer",
  "Kubernetes & Cloud Native Associate",
  "GitHub Advanced Security",
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-16">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-300">
              Secure · Scalable · Observable
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[2.75rem] lg:leading-tight">
              Cloud &amp; DevOps Engineer —{" "}
              <span className="text-gradient">AWS</span> · GCP · Terraform · Kubernetes · SRE ·
              DevSecOps
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
              I specialise in production-grade platforms across AWS and GCP: Terraform-driven
              infrastructure, Kubernetes delivery, and CI/CD with SRE practices and DevSecOps. I use
              AI-assisted workflows where they improve speed without sacrificing correctness or
              compliance.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Production-grade platforms",
                "Terraform & IaC",
                "SRE & observability",
                "DevSecOps",
                "AI-assisted engineering",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-lg border border-zinc-700/80 bg-zinc-900/50 px-3 py-1.5 text-xs font-medium text-zinc-300"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects/"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-500"
              >
                View portfolio <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 bg-zinc-900/50 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-500/40 hover:bg-zinc-800"
              >
                <FileDown className="h-4 w-4" /> CV
              </a>
              <a
                href={li}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 bg-zinc-900/50 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-500/40 hover:bg-zinc-800"
              >
                <LinkedInIcon className="h-4 w-4 shrink-0" /> LinkedIn
              </a>
              <a
                href={gh}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 bg-zinc-900/50 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-500/40 hover:bg-zinc-800"
              >
                <GitHubIcon className="h-4 w-4 shrink-0" /> GitHub
              </a>
              <a
                href={`mailto:${siteEmail}`}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 bg-zinc-900/50 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-500/40 hover:bg-zinc-800"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
            <p className="text-sm text-zinc-500">
              Based in Chester, UK · Open to remote and UK-wide roles
            </p>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 shadow-xl shadow-black/30">
              <div className="relative aspect-[4/5] max-h-[340px] w-full sm:mx-auto sm:max-w-sm lg:max-h-none">
                <Image
                  src="/images/profile.jpg"
                  alt="Oluwatosin Jegede"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 320px"
                  priority
                />
              </div>
            </div>
            <div className="card-surface space-y-4 p-5 text-sm">
              <div>
                <p className="font-semibold text-white">Cloud platforms</p>
                <p className="mt-1 text-zinc-400">
                  AWS (EKS, ECS, Lambda, RDS, VPC) · GCP
                </p>
              </div>
              <div className="h-px bg-zinc-800" />
              <div>
                <p className="font-semibold text-white">Core stack</p>
                <p className="mt-1 text-zinc-400">
                  Terraform · Kubernetes · GitHub Actions · Argo CD · Helm · Docker
                </p>
              </div>
              <div className="h-px bg-zinc-800" />
              <div>
                <p className="font-semibold text-white">SRE &amp; security</p>
                <p className="mt-1 text-zinc-400">
                  OpenTelemetry · Prometheus/Grafana · SLIs/SLOs · PCI-DSS · GDPR
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-zinc-800/80 bg-zinc-900/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Featured projects</h2>
              <p className="mt-2 text-zinc-400">Recent work across AI ops, reliability, and platform engineering.</p>
            </div>
            <Link
              href="/projects/"
              className="text-sm font-semibold text-teal-400 hover:text-teal-300"
            >
              All projects →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/#${p.id}`}
                className="card-surface card-surface-hover group flex flex-col gap-3 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-400/90">
                  {p.category}
                </p>
                <h3 className="text-lg font-semibold text-white group-hover:text-teal-200">
                  {p.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-zinc-400 line-clamp-6">{p.description}</p>
                <span className="text-sm font-medium text-teal-400">Case study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-white">Certifications</h2>
        <div className="flex flex-wrap gap-3">
          {certs.map((c) => (
            <span
              key={c}
              className="rounded-xl border border-zinc-700/80 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-200"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="card-surface flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Let&apos;s build resilient platforms</h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-400">
              Multi-cloud architecture, compliance-aware pipelines, and observability-first operations
              for teams shipping mission-critical systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${siteEmail}?subject=Platform%20%2F%20DevOps%20opportunity`}
              className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 hover:bg-teal-500"
            >
              Contact
            </a>
            <a
              href={li}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-600 px-6 py-3 text-sm font-semibold text-white hover:border-teal-500/40"
            >
              LinkedIn
            </a>
            <a
              href={gh}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-600 px-6 py-3 text-sm font-semibold text-white hover:border-teal-500/40"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

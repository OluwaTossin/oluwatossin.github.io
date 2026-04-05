import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Cpu,
  Factory,
  Globe2,
  GraduationCap,
  HeartPulse,
  Landmark,
  MapPin,
  Train,
} from "lucide-react";
import type { DevopsCityConfig, MarketPoint } from "@/lib/devops-location-content";
import {
  buildBreadcrumbJsonLd,
  buildPersonJsonLd,
  londonConfig,
  manchesterConfig,
  skillCategories,
} from "@/lib/devops-location-content";
import { email, github, linkedin } from "@/lib/site";

const marketIcons = {
  landmark: Landmark,
  heart: HeartPulse,
  building: Building2,
  globe: Globe2,
  cpu: Cpu,
  factory: Factory,
  graduation: GraduationCap,
} as const;

function MarketCard({ point }: { point: MarketPoint }) {
  const Icon = marketIcons[point.icon];
  return (
    <div className="card-surface flex gap-4 p-5 sm:p-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal-500/25 bg-teal-500/10 text-teal-300">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div>
        <h3 className="font-semibold text-white">{point.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{point.body}</p>
      </div>
    </div>
  );
}

const pillars = [
  {
    title: "Platform hardening",
    body: "Terraform-first infrastructure, least-privilege IAM, network boundaries, and policy checks (e.g. Checkov, Security Hub) wired into pipelines—not afterthought scans.",
  },
  {
    title: "Delivery velocity",
    body: "GitHub Actions, Argo CD, and reusable modules so teams ship safely: progressive rollouts, environment parity, and rollback paths that operators trust.",
  },
  {
    title: "Observable operations",
    body: "Prometheus, Grafana, CloudWatch, and structured logging so SREs and developers share the same signals—SLOs, alerts, and incident workflows that reduce MTTR.",
  },
];

const certsShort = [
  "AWS DevOps Engineer — Professional",
  "Google Professional Cloud Architect",
  "AWS Security — Specialty",
  "Kubernetes & Cloud Native Associate",
];

export function DevopsCityPage({ config }: { config: DevopsCityConfig }) {
  const other = config.slug === "london" ? manchesterConfig : londonConfig;
  const personLd = buildPersonJsonLd(config);
  const crumbLd = buildBreadcrumbJsonLd(config);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start lg:gap-14">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow-xl shadow-black/40 lg:mx-0 lg:sticky lg:top-28">
            <Image
              src="/images/profile.jpg"
              alt={`${config.h1} — ${config.geoPlacename}`}
              fill
              className="object-cover object-top"
              sizes="280px"
              priority
            />
          </div>
          <div className="min-w-0 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-400/90">
              {config.slug === "london"
                ? "London · UK financial & enterprise tech"
                : "Manchester · North West & UK-wide tech"}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
              {config.slug === "london" ? (
                <>
                  Cloud &amp; DevOps Engineer —{" "}
                  <span className="text-gradient">London</span>
                </>
              ) : (
                <>
                  Cloud &amp; DevOps Engineer —{" "}
                  <span className="text-gradient">Manchester</span>
                  <span className="text-zinc-300"> / UK</span>
                </>
              )}
            </h1>
            <p className="text-lg font-medium text-teal-300/90">
              AWS · GCP · Kubernetes · Terraform · SRE · DevSecOps · GitOps
            </p>
            <p className="leading-relaxed text-zinc-400">
              I am a Cloud &amp; DevOps Engineer with 5+ years designing and operating production-grade
              platforms. I am currently{" "}
              <strong className="font-medium text-zinc-200">
                DevOps &amp; SRE Engineer at Netsible Solutions
              </strong>
              , delivering hybrid AWS/GCP infrastructure, GitHub Actions and Argo CD pipelines, and
              observability-led reliability for client estates.
            </p>
            <p className="leading-relaxed text-zinc-400">
              My background spans{" "}
              <strong className="font-medium text-zinc-300">fintech</strong> (Amazon EKS, Istio,
              PCI-DSS–aligned controls), platform automation at Afren.ai,{" "}
              <strong className="font-medium text-zinc-300">humanitarian AWS</strong> advisory with
              Help.NGO, and independent multi-cloud work with measurable FinOps and compliance outcomes.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-300">
                <MapPin className="h-3.5 w-3.5 text-teal-400" aria-hidden />
                {config.heroLocationPill}
              </span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-500"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${email}?subject=${encodeURIComponent("DevOps / SRE / Platform — " + config.geoPlacename)}`}
                className="rounded-xl border border-zinc-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-teal-500/40"
              >
                Email
              </a>
              <Link
                href="/projects/"
                className="rounded-xl border border-zinc-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-teal-500/40"
              >
                Full portfolio
              </Link>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-teal-500/40"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Delivery pillars */}
        <section className="mt-20 border-y border-zinc-800/80 bg-zinc-900/15 py-14">
          <h2 className="text-center text-2xl font-bold tracking-tight text-white sm:text-left">
            How I work with engineering leadership
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-relaxed text-zinc-400 sm:mx-0 sm:text-left">
            These are the outcomes hiring managers and platform leads usually care about—whether the role
            title says DevOps, SRE, platform, or cloud infrastructure.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="card-surface p-6">
                <h3 className="font-semibold text-teal-300">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-white">Core technical skills</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
            Depth across the full delivery loop: design, implement, secure, observe, and operate. Tooling
            is representative—I adapt to your standards (e.g. Datadog, OpenTelemetry, GitLab CI) where
            needed.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((s) => (
              <div key={s.title} className="card-surface p-5 sm:p-6">
                <h3 className="text-sm font-semibold text-teal-300">{s.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-400">
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-500/80" aria-hidden />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-white">Selected certifications</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Full list on the <Link className="text-teal-400 hover:text-teal-300" href="/">home page</Link>{" "}
            and <Link className="text-teal-400 hover:text-teal-300" href="/experience/">experience</Link>{" "}
            page.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {certsShort.map((c) => (
              <li
                key={c}
                className="rounded-lg border border-zinc-700/80 bg-zinc-900/40 px-3 py-1.5 text-xs text-zinc-300"
              >
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* Market */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-white">{config.marketSectionTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
            I do not claim sector tenure at every employer in every city—these are the problem classes I
            have repeatedly solved on AWS/GCP and Kubernetes, expressed in language that matches local
            hiring markets.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {config.marketPoints.map((p) => (
              <MarketCard key={p.title} point={p} />
            ))}
          </div>
        </section>

        {/* Featured projects */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-white">{config.featuredTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
            Deeper write-ups and another fifteen+ builds live in the{" "}
            <Link href="/projects/" className="font-medium text-teal-400 hover:text-teal-300">
              portfolio
            </Link>
            .
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {config.featuredProjects.map((proj) => (
              <article key={proj.title} className="card-surface card-surface-hover flex flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-400/90">
                  {proj.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">{proj.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{proj.description}</p>
                <div className="mt-5 flex flex-wrap gap-3 border-t border-zinc-800 pt-4">
                  {proj.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-teal-400 hover:text-teal-300"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Cross-link */}
        <section className="mt-16">
          <div className="card-surface flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-400">
              Hiring in <strong className="text-zinc-200">{other.geoPlacename.split(",")[0]}</strong>{" "}
              instead? There is a dedicated page for that market as well.
            </p>
            <Link
              href={other.path}
              className="shrink-0 rounded-xl border border-teal-500/40 bg-teal-500/10 px-5 py-2.5 text-sm font-semibold text-teal-200 transition hover:bg-teal-500/20"
            >
              View {other.slug === "london" ? "London" : "Manchester"} page →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <div className="card-surface px-6 py-10 text-center sm:px-10">
            <h2 className="text-xl font-bold text-white sm:text-2xl">{config.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">{config.ctaBody}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${email}?subject=${encodeURIComponent("Platform / DevOps / SRE opportunity")}`}
                className="rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 hover:bg-teal-500"
              >
                Email a role summary
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-600 px-6 py-3 text-sm font-semibold text-white hover:border-teal-500/40"
              >
                Message on LinkedIn
              </a>
            </div>
            <p className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-zinc-800 pt-8 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-zinc-600" aria-hidden />
                {config.travelNote}
              </span>
              <span className="hidden sm:inline text-zinc-700" aria-hidden>
                ·
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Train className="h-3.5 w-3.5 text-zinc-600" aria-hidden />
                UK travel for hybrid cadences
              </span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

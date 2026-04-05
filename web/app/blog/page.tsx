import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles and notes — DevOps, AWS, Kubernetes, Terraform.",
};

const posts = [
  {
    title: "Autonomous DevOps Incident Response Agent",
    href: "https://www.linkedin.com/pulse/autonomous-devops-incident-response-agent-oluwatosin-jegede-cwsfe/",
    external: true,
    summary: "AIOps-style triage: RAG, LangGraph, FastAPI, n8n, ECS, Terraform, and observability.",
  },
  {
    title: "Terraform best practices (deep dive)",
    href: "/article-terraform-best-practices.html",
    external: false,
    summary: "State, modules, workspaces, and testing patterns for serious IaC.",
  },
  {
    title: "Seamless AWS auth with GitHub Actions & Terraform",
    href: "https://www.linkedin.com/pulse/seamless-aws-authentication-github-actions-practical-guide-jegede/",
    external: true,
    summary: "OIDC and Terraform-friendly CI authentication.",
  },
  {
    title: "Enterprise AI/ML platform in production",
    href: "https://www.linkedin.com/pulse/from-chaos-control-building-enterprise-aiml-platform-actually-jegede-bj0nf/",
    external: true,
    summary: "SRE and cost controls for AI workloads at scale.",
  },
  {
    title: "AegisTickets on EKS — SLOs and golden signals",
    href: "https://www.linkedin.com/pulse/aegistickets-production-ready-3-tier-app-aws-eks-slos-jegede-euiof/",
    external: true,
    summary: "Reliability-focused EKS with observability baked in.",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-white">Blog &amp; articles</h1>
      <p className="mt-4 max-w-2xl text-zinc-400">
        Long-form pieces on LinkedIn plus a local Terraform guide. More posts are linked from my{" "}
        <a
          href="https://www.linkedin.com/in/oluwatosinjegede/recent-activity/articles/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300"
        >
          LinkedIn activity
        </a>
        .
      </p>

      <ul className="mt-12 space-y-4">
        {posts.map((post) => (
          <li key={post.title}>
            <a
              href={post.href}
              {...(post.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="card-surface card-surface-hover flex flex-col gap-2 p-6 sm:flex-row sm:items-start sm:justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-white">{post.title}</h2>
                <p className="mt-2 text-sm text-zinc-400">{post.summary}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-teal-400">
                Read <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center text-sm text-zinc-500">
        <Link href="/" className="text-teal-400 hover:text-teal-300">
          ← Home
        </Link>
      </p>
    </div>
  );
}

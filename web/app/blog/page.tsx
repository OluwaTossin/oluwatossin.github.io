import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on AWS FinOps, DevOps practice, SRE runbooks, DevSecOps automation, OIDC CI/CD, Control Tower governance, and AI engineering workflows — LinkedIn, Avinteli, and TrueFoundry.",
};

type Publisher = "LinkedIn" | "Avinteli" | "TrueFoundry";

const posts: {
  title: string;
  href: string;
  publisher: Publisher;
  summary: string;
}[] = [
  {
    title: "3 hidden AWS cost drains nobody talks about",
    href: "https://www.linkedin.com/pulse/3-hidden-aws-cost-drains-nobody-talks-oluwatosin-jegede-eytsf/",
    publisher: "LinkedIn",
    summary:
      "How Inter-AZ and NAT data processing, CloudWatch Logs ingest and endless retention, and orphaned EBS volumes or snapshot chains quietly eat 30–40% of spend in otherwise “healthy” stacks—and what to measure first. Includes a personal cost-and-reliability dashboard built on the free tier (Lambda, S3, CloudWatch, Terraform).",
  },
  {
    title: "Why I’m Rethinking DevOps: From Delivery Speed to Business Impact",
    href: "https://www.linkedin.com/pulse/why-im-rethinking-devops-from-delivery-speed-business-jegede-mtvaf/",
    publisher: "LinkedIn",
    summary:
      "A shift from pipeline velocity to provable value: cost as a design input, reliability as a contract (SLOs and error budgets), and security as operational integrity—grounded in real projects from AI/ML cost work to EKS SLOs, AWS assessments, and multi-region GitOps.",
  },
  {
    title: "From Panic to Procedure: Designing Runbooks and SLOs that New Engineers Can Actually Use",
    href: "https://www.linkedin.com/pulse/from-panic-procedure-designing-runbooks-slos-new-engineers-jegede-6abaf/",
    publisher: "LinkedIn",
    summary:
      "Operational knowledge for 2 a.m. incidents: symptom-first runbooks, concrete checks and escalation paths, user-centred SLOs paired with error budgets, and how pairing runbooks with SLOs builds trust and faster onboarding.",
  },
  {
    title: "Automate or Fall Behind – Streamlining Vulnerability Management in Modern AWS Cloud Environments",
    href: "https://www.linkedin.com/pulse/automate-fall-behind-streamlining-vulnerability-modern-jegede-xzz6f/",
    publisher: "LinkedIn",
    summary:
      "Why periodic scans and manual patching fail at cloud speed; continuous detection and remediation with DevSecOps; AWS Security Hub, Inspector, Config, Lambda, and tools like Trivy in CI/CD; compliance as ongoing enforcement, not a yearly audit.",
  },
  {
    title: "Seamless AWS Authentication with GitHub Actions: A Practical Guide for Real-World CI/CD Using Terraform",
    href: "https://www.linkedin.com/pulse/seamless-aws-authentication-github-actions-practical-guide-jegede-xut0f/",
    publisher: "LinkedIn",
    summary:
      "Replace long-lived AWS keys in GitHub with OIDC: register GitHub as an IAM OIDC provider in Terraform, scope trust to repo and branch, attach least-privilege policies, and assume a role from workflows with aws-actions/configure-aws-credentials.",
  },
  {
    title: "Simplify Cloud Governance with AWS Control Tower",
    href: "https://blog.avinteli.com/blog/how-aws-control-tower-simplifies-cloud-governance/",
    publisher: "Avinteli",
    summary:
      "Control Tower as governance-by-design: landing zones, account factory, guardrails and Config against drift, and why multi-account sprawl needs encoded policy—not wiki pages. Includes a realistic enterprise onboarding narrative ahead of SOC 2–style assurance.",
  },
  {
    title: "Claude Code Workflow: How It Works and How to Use It in Production",
    href: "https://www.truefoundry.com/blog/claude-code-workflow-guide",
    publisher: "TrueFoundry",
    summary:
      "How agentic coding loops actually run: context ingestion, tool calls, feedback, and iteration; where workflows break (context loss, weak traces, flaky tools); and production habits—prompt constraints, scoped permissions, checkpoints, and instrumentation.",
  },
  {
    title: "Claude Code MCP Integrations: How Tools Connect to AI Coding Agents",
    href: "https://www.truefoundry.com/blog/claude-code-mcp-integrations-guide",
    publisher: "TrueFoundry",
    summary:
      "Model Context Protocol for coding agents: tool discovery and call_tool flows, types of integrations (files, Git, APIs, logs), limits of “native” MCP for governance and observability, and why gateways and tight tool scoping matter in production.",
  },
  {
    title: "Kong vs LiteLLM: Architecture, Pricing, and Trade‑Offs",
    href: "https://www.truefoundry.com/blog/kong-vs-litellm",
    publisher: "TrueFoundry",
    summary:
      "Two philosophies for AI traffic: enterprise API management extended to LLMs versus a thin, provider-normalising LLM proxy—setup cost, governance depth, and where operational gravity lands. Frames managed gateways as a middle path for teams outgrowing ad hoc proxies.",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-fg">Blog &amp; articles</h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-fg-muted">
        Long-form engineering writing across{" "}
        <a
          href="https://www.linkedin.com/in/oluwatosinjegede/recent-activity/articles/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover"
        >
          LinkedIn
        </a>
        , guest posts on{" "}
        <a
          href="https://blog.avinteli.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover"
        >
          Avinteli
        </a>{" "}
        (cloud security &amp; governance), and{" "}
        <a
          href="https://www.truefoundry.com/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover"
        >
          TrueFoundry
        </a>{" "}
        (AI platform engineering). Each card opens the canonical article on the publisher site.
      </p>

      <ul className="mt-12 space-y-4">
        {posts.map((post) => (
          <li key={post.href}>
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface card-surface-hover flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {post.publisher}
                </p>
                <h2 className="mt-1 text-lg font-semibold text-fg">{post.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{post.summary}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 self-start text-sm font-medium text-accent sm:self-center">
                Read <ArrowUpRight className="h-4 w-4" aria-hidden />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center text-sm text-fg-faint">
        <Link href="/" className="text-accent hover:text-accent-hover">
          ← Home
        </Link>
      </p>
    </div>
  );
}

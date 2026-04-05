export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "autonomous-incident",
    title: "Autonomous DevOps Incident Response Agent",
    category: "AIOps & SRE",
    description:
      "Production-style AIOps system for first-line incident triage: FAISS-backed retrieval over runbooks and logs, LangGraph agents with guardrails, and structured JSON APIs for safe automation. Shipped with FastAPI services, n8n orchestration, Gradio and Next.js operator UIs, containerised on AWS ECS with Terraform, CloudWatch observability, and GitHub Actions CI/CD—targeting sub-30-second first responses and clearer root-cause narratives for SRE teams.",
    tags: [
      "ai",
      "ml",
      "sre",
      "aws",
      "kubernetes",
      "terraform",
      "cicd",
      "monitoring",
      "fastapi",
      "langgraph",
      "rag",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/OluwaTossin/autonomous-incident-response-agent" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/autonomous-devops-incident-response-agent-oluwatosin-jegede-cwsfe/",
      },
    ],
  },
  {
    id: "aegistickets",
    title: "AegisTickets — AWS EKS Reliability Platform",
    category: "SRE & Observability",
    description:
      "Reliability engineering for a three-tier production workload on Amazon EKS: defined SLIs and SLOs, error budgets, and golden-signal monitoring to steer autoscaling and release decisions. Infrastructure and observability stacks are codified with Terraform; Prometheus and Grafana provide service-level visibility so teams can reason about user-facing availability, latency, and saturation before incidents escalate.",
    tags: ["aws", "kubernetes", "monitoring", "sre", "terraform", "prometheus", "grafana", "eks"],
    links: [
      { label: "GitHub", href: "https://github.com/OluwaTossin/aegistickets-platform" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/aegistickets-production-ready-3-tier-app-aws-eks-slos-jegede-euiof/",
      },
    ],
  },
  {
    id: "enterprise-aiml",
    title: "Enterprise AI/ML Platform (Production)",
    category: "AI/ML Platform",
    description:
      "Operated ML inference and training paths like any other production service: SRE-style service level objectives, dashboards, and alerting on latency, errors, and cost; FinOps-style controls on GPU/CPU spend and autoscaling behaviour. The outcome was roughly 60% lower inference cost alongside more predictable capacity and faster incident detection for data science and platform stakeholders.",
    tags: ["ai", "ml", "sre", "monitoring", "aws", "finops", "kubernetes", "observability"],
    links: [
      { label: "GitHub", href: "https://github.com/OluwaTossin/secure-aiml-ops" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/from-chaos-control-building-enterprise-aiml-platform-actually-jegede-bj0nf/",
      },
    ],
  },
  {
    id: "cloud-job",
    title: "Cloud-Native Job Portal",
    category: "Cloud-Native Application",
    description:
      "End-to-end resilient AWS application patterns: health-checked deployments, automated recovery workflows, and zero-downtime style rollouts so job seekers and employers see continuous availability. Work spans compute, load balancing, data stores, and CI/CD so releases are repeatable and failures are contained without manual firefighting.",
    tags: ["aws", "cicd", "monitoring", "high-availability", "terraform", "devops"],
    links: [
      { label: "GitHub", href: "https://github.com/OluwaTossin/devop-job" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/from-frustration-solution-building-cloud-native-job-portal-jegede-7spyf/",
      },
    ],
  },
  {
    id: "aws-pentest",
    title: "AWS Cloud Penetration Test",
    category: "Security",
    description:
      "Structured security assessment of a production-style AWS estate: identity (IAM), network segmentation and security groups, object storage policies, encryption posture, and application-layer exposure. Deliverables prioritised findings by exploitability and blast radius, with concrete remediation guidance so engineering teams could harden accounts without guesswork.",
    tags: ["aws", "security", "monitoring", "iam", "compliance", "risk"],
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/aws-cloud-penetration-test-real-world-risk-assessment-jegede-xfeof/",
      },
    ],
  },
  {
    id: "finbankops",
    title: "FinBankOps — Multi-Region EKS (Fintech)",
    category: "Platform Engineering",
    description:
      "Fintech-grade Kubernetes platform on AWS EKS across regions: Istio service mesh, GitOps delivery with Argo CD, and PCI-aligned controls woven into pipelines and clusters. Observability uses Prometheus and Grafana alongside deployment patterns that support controlled rollouts—giving security, platform, and application teams a shared picture of compliance, cost, and reliability.",
    tags: ["aws", "kubernetes", "cicd", "security", "monitoring", "istio", "argo", "pci"],
    links: [
      { label: "GitHub", href: "https://github.com/Tosin-STIL/eks-microservice-demo" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/finbankops-secure-multi-region-kubernetes-fintech-aws-jegede-ykiaf/",
      },
    ],
  },
  {
    id: "fraud-ml",
    title: "Real-Time ML Fraud Detection (AWS)",
    category: "ML & DevOps",
    description:
      "Real-time fraud scoring on AWS using ECS Fargate microservices, Terraform-defined infrastructure, and GitHub Actions pipelines from commit to release. Amazon CloudWatch metrics and SNS notifications tie model and service health to on-call workflows so latency-sensitive inference stays observable and incidents surface quickly.",
    tags: ["aws", "ml", "cicd", "monitoring", "ecs", "terraform", "microservices", "sns"],
    links: [
      { label: "Infra", href: "https://github.com/Tosin-STIL/fraud-detection-infra" },
      { label: "App", href: "https://github.com/Tosin-STIL/fraud-detection-app" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/design-training-deployment-devops-enabled-real-time-ml-jegede-8pu4f/",
      },
    ],
  },
  {
    id: "three-tier-k8s",
    title: "Secure Three-Tier Web App on Kubernetes",
    category: "Application Platform",
    description:
      "Production-minded three-tier web architecture on Amazon EKS: container images in ECR, ALB Ingress for HTTP routing, CloudWatch for control-plane and workload signals, and least-privilege IAM across tiers. The design emphasises network boundaries, secrets handling, and operational visibility so security and SRE concerns are baked in—not bolted on after go-live.",
    tags: ["aws", "kubernetes", "security", "monitoring", "eks", "docker", "alb", "iam"],
    links: [
      { label: "GitHub", href: "https://github.com/OluwaTossin/oluwa-three-tier-webapp" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/secure-three-tier-web-application-deployment-aws-oluwatosin-jegede-7fdif/",
      },
    ],
  },
  {
    id: "three-tier-cicd",
    title: "Three-Tier Web App — GitHub Actions CI/CD",
    category: "CI/CD & Infrastructure",
    description:
      "Full-stack AWS delivery with a static frontend on S3, application tier on EC2 inside a VPC, and Terraform for reproducible networking and compute. GitHub Actions automates build, test, and deploy stages; the CloudWatch agent and Amazon Managed Grafana back operational dashboards—so releases are traceable and production behaviour is visible to developers and ops alike.",
    tags: ["aws", "cicd", "monitoring", "security", "terraform", "github-actions", "vpc", "grafana"],
    links: [
      { label: "GitHub", href: "https://github.com/OluwaTossin/oluwa-three-tier-webapp/tree/main" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/secure-three-tier-web-application-github-actions-cicd-jegede-ikm4f/",
      },
    ],
  },
  {
    id: "eks-elk",
    title: "End-to-End DevOps — EKS & ELK",
    category: "Full DevOps Pipeline",
    description:
      "From repository to running workloads on EKS: GitHub Actions for CI, Terraform for clusters and supporting AWS resources, Docker images for services, and Prometheus/Grafana plus ELK for metrics and log analytics. IAM hardening and ACM-managed TLS round out a pipeline where security and observability are first-class—not optional extras.",
    tags: ["aws", "kubernetes", "cicd", "monitoring", "security", "terraform", "elk", "prometheus"],
    links: [
      { label: "GitHub", href: "https://github.com/OluwaTossin/TOYE-devops-project" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/end-to-end-devops-pipeline-implementation-automated-cicd-jegede-e6dzf/",
      },
    ],
  },
  {
    id: "disaster-recovery",
    title: "Automated Cloud Disaster Recovery",
    category: "Disaster Recovery",
    description:
      "Disaster recovery and business continuity patterns on AWS expressed as code: Terraform modules and GitHub Actions workflows for failover drills and environment promotion. Datadog (or equivalent) observability backs rehearsal runs so RTO/RPO assumptions are validated with data, not slide decks.",
    tags: ["aws", "cicd", "monitoring", "terraform", "dr", "resilience", "automation"],
    links: [
      { label: "GitHub", href: "https://github.com/OluwaTossin/disaster-recovery-plan" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/automated-cloud-disaster-recovery-business-continuity-oluwatosin-dg9of/",
      },
    ],
  },
  {
    id: "container-webapp",
    title: "Containerized WebApp — CI/CD & Monitoring",
    category: "Containerization",
    description:
      "Node.js application packaged in Docker images, released through GitHub Actions with versioned artefacts and environment promotion. Prometheus scrapes service and HTTP metrics; Grafana dashboards expose golden signals and container health so teams catch regressions before users do.",
    tags: ["cicd", "monitoring", "docker", "nodejs", "prometheus", "grafana", "github-actions"],
    links: [
      { label: "GitHub", href: "https://github.com/OluwaTossin/my-nodejs-app" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/containerizing-automating-monitoring-webapp-docker-cicd-oluwatosin-4uthf/",
      },
    ],
  },
  {
    id: "ml-flask",
    title: "ML Model Deployment — Flask on AWS",
    category: "ML Deployment",
    description:
      "Serving an ML model behind a Flask API on EC2 with Terraform-defined infrastructure, GitHub Actions delivery pipelines, and supporting AWS services (including CloudFormation/S3 patterns where applicable). Prometheus, Grafana, and AWS Security Hub checks align model uptime with security baselines so inference endpoints stay both available and auditable.",
    tags: ["aws", "ml", "cicd", "monitoring", "security", "terraform", "flask", "ec2"],
    links: [
      { label: "GitHub", href: "https://github.com/OluwaTossin/ml-model-serving" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/comprehensive-deployment-monitoring-machine-learning-model-jegede-mfmaf/",
      },
    ],
  },
  {
    id: "amplify-cicd",
    title: "Scalable Web App CI/CD — AWS Amplify",
    category: "Serverless CI/CD",
    description:
      "Scalable web application delivery on AWS Amplify with React front ends, Lambda-backed APIs, and managed CI/CD via CodePipeline and CodeBuild. RDS for relational data, CloudWatch for runtime signals, and Terraform where infrastructure-as-code adds repeatability—suited to teams that want fast frontend iteration without sacrificing backend governance.",
    tags: ["aws", "cicd", "monitoring", "serverless", "lambda", "amplify", "terraform", "react"],
    links: [
      { label: "GitHub", href: "https://github.com/OluwaTossin/aws-devops-project" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/cicd-pipeline-scalable-web-app-using-aws-amplify-jegede-oluwatosin-0ha3f/",
      },
    ],
  },
  {
    id: "gcp-fullstack",
    title: "Full-Stack CI/CD on Google Cloud",
    category: "GCP Platform",
    description:
      "Full-stack delivery on Google Cloud: containerised services, Terraform for GCP resources, GitHub Actions for build and deploy, and Cloud Run for scalable request handling. Google Cloud Operations (formerly Stackdriver) ties logs and metrics together so developers get one place to debug latency, errors, and dependency failures across the stack.",
    tags: ["gcp", "cicd", "monitoring", "terraform", "cloud-run", "docker", "github-actions"],
    links: [
      { label: "GitHub", href: "https://github.com/OluwaTossin/full-stack-gcp-ci-cd" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/automated-cicd-full-stack-applications-gcp-using-docker-jegede-oumzf/",
      },
    ],
  },
  {
    id: "jenkins-node",
    title: "Node.js CI/CD — Jenkins & S3",
    category: "Jenkins Pipeline",
    description:
      "Classic Jenkins pipeline automation for a Node.js service: declarative or scripted stages for build, test, and artefact publication, with Amazon S3 as durable storage for release binaries. GitHub remains the source of truth; Jenkins orchestrates repeatable promotions so releases are auditable and rollback-friendly.",
    tags: ["cicd", "aws", "jenkins", "nodejs", "s3", "devops"],
    links: [
      { label: "GitHub", href: "https://github.com/OluwaTossin/my-node-app" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/efficient-cicd-implementation-nodejs-app-using-amazon-oluwatosin-aii2f/",
      },
    ],
  },
  {
    id: "config-compliance",
    title: "AWS Config Compliance Automation",
    category: "Compliance",
    description:
      "Continuous compliance posture using AWS Config rules, AWS Lambda remediation hooks, and SNS notifications when resources drift from approved baselines. The design turns policy into automated feedback loops—security and platform teams see violations quickly and can auto-correct or ticket issues before auditors or attackers find them first.",
    tags: ["aws", "security", "cicd", "lambda", "config", "compliance", "sns", "automation"],
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/aws-infrastructure-compliance-audit-system-config-jegede-oluwatosin-b4u6f/",
      },
    ],
  },
  {
    id: "security-dashboard",
    title: "AWS Cloud Security Dashboard",
    category: "Security Dashboard",
    description:
      "Operator-facing web dashboard aggregating AWS security signals: IAM privilege hotspots, overly open security groups, and common policy violations in one view. Built to speed up cloud security reviews and onboarding—so engineering leads can triage posture without exporting dozens of console screens to spreadsheets.",
    tags: ["aws", "security", "monitoring", "iam", "dashboard", "cloud-security"],
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/pulse/aws-cloud-security-dashboard-jegede-oluwatosin-ifwyf/",
      },
    ],
  },
];

export const featuredProjectIds = ["autonomous-incident", "enterprise-aiml", "finbankops"];

export function getFeaturedProjects(): Project[] {
  return featuredProjectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is Project => Boolean(p));
}

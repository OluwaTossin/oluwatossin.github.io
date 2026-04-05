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
      "AI-powered incident triage and diagnosis: FAISS RAG, LangGraph guardrails, FastAPI, n8n workflows, Gradio/Next.js UIs, AWS ECS, Terraform, CloudWatch, GitHub Actions—first-response target under 30 seconds.",
    tags: ["ai", "ml", "sre", "aws", "terraform", "cicd", "monitoring", "kubernetes"],
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
      "SLIs, SLOs, error budgets, and golden-signal monitoring on EKS with Terraform, Prometheus, and Grafana—built for reliability and autoscaling decisions.",
    tags: ["aws", "kubernetes", "monitoring", "sre"],
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
      "SRE-style observability and cost controls for AI workloads; FinOps and alerting with roughly 60% inference cost reduction.",
    tags: ["ai", "ml", "sre", "monitoring", "aws"],
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
      "Resilient AWS app with health-checked deployments, automated recovery, and zero-downtime delivery patterns.",
    tags: ["aws", "cicd", "monitoring"],
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
      "Risk assessment on production-style AWS: IAM, networking, storage, and application layers with prioritised remediation guidance.",
    tags: ["aws", "security", "monitoring"],
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
      "PCI-aligned GitOps on EKS with Istio, Argo CD, Prometheus/Grafana, and blue/green style delivery.",
    tags: ["aws", "kubernetes", "cicd", "security", "monitoring"],
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
      "ECS Fargate microservices, Terraform, GitHub Actions, CloudWatch, and SNS for real-time fraud scoring pipelines.",
    tags: ["aws", "ml", "cicd", "monitoring"],
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
      "EKS, Docker, ECR, ALB Ingress, CloudWatch control plane logs, and least-privilege IAM across tiers.",
    tags: ["aws", "kubernetes", "security", "monitoring"],
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
      "S3 frontend, EC2 backend in a VPC, Terraform, GitHub Actions, CloudWatch agent, and Managed Grafana dashboards.",
    tags: ["aws", "cicd", "monitoring", "security"],
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
      "GitHub Actions CI, Terraform, Docker, EKS, Prometheus/Grafana, ELK logging, IAM hardening, and TLS with ACM.",
    tags: ["aws", "kubernetes", "cicd", "monitoring", "security"],
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
      "Terraform and GitHub Actions for regional failover patterns with Datadog observability for continuity drills.",
    tags: ["aws", "cicd", "monitoring"],
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
      "Node.js in Docker, GitHub Actions releases, Prometheus and Grafana for HTTP and container health visibility.",
    tags: ["cicd", "monitoring"],
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
      "Flask API on EC2 with Terraform, GitHub Actions, CloudFormation/S3, Prometheus/Grafana, and Security Hub checks.",
    tags: ["aws", "ml", "cicd", "monitoring", "security"],
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
      "React on Amplify, Lambda backends, CodePipeline/CodeBuild, RDS, CloudWatch, and Terraform where applicable.",
    tags: ["aws", "cicd", "monitoring"],
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
      "Docker, Terraform, GitHub Actions, Cloud Run, and Google Cloud Operations for full-stack delivery.",
    tags: ["cicd", "monitoring"],
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
      "Jenkins pipelines for Node.js with S3 artifact storage and GitHub as source of truth.",
    tags: ["cicd", "aws"],
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
      "AWS Config evaluations with Lambda remediation hooks and SNS alerting for non-compliant resources.",
    tags: ["aws", "security", "cicd"],
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
      "Web dashboard for IAM usage, open security groups, and policy violations to centralise cloud posture review.",
    tags: ["aws", "security", "monitoring"],
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

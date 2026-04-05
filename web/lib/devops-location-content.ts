import type { Metadata } from "next";
import { github, linkedin, name, siteUrl } from "@/lib/site";

export type MarketPoint = {
  title: string;
  body: string;
  icon: "landmark" | "heart" | "building" | "globe" | "cpu" | "factory" | "graduation";
};

export type FeaturedProject = {
  category: string;
  title: string;
  description: string;
  links: { label: string; href: string }[];
};

export type DevopsCityConfig = {
  slug: "london" | "manchester";
  path: string;
  h1: string;
  heroLocationPill: string;
  metadata: Metadata;
  marketSectionTitle: string;
  marketPoints: MarketPoint[];
  featuredTitle: string;
  featuredProjects: FeaturedProject[];
  ctaTitle: string;
  ctaBody: string;
  travelNote: string;
  geoRegion: string;
  geoPlacename: string;
  jsonLdDescription: string;
  knowsAbout: string[];
};

export const skillCategories: { title: string; items: string[] }[] = [
  {
    title: "Cloud platforms",
    items: [
      "AWS (EKS, ECS, Lambda, RDS, VPC)",
      "Google Cloud Platform",
      "Multi-cloud and hybrid architecture",
      "Networking, DNS, and edge patterns",
    ],
  },
  {
    title: "Kubernetes & containers",
    items: ["Amazon EKS", "Helm", "Istio service mesh", "Docker images and supply chain"],
  },
  {
    title: "Infrastructure as code",
    items: ["Terraform", "AWS CloudFormation", "Ansible", "AWS CDK (TypeScript)"],
  },
  {
    title: "CI/CD & GitOps",
    items: ["GitHub Actions", "Jenkins", "Argo CD", "AWS CodePipeline / CodeBuild"],
  },
  {
    title: "Observability & SRE",
    items: [
      "Prometheus & Grafana",
      "Amazon CloudWatch & X-Ray",
      "ELK / OpenSearch patterns",
      "SLIs, SLOs, error budgets, incident response",
    ],
  },
  {
    title: "Security & compliance",
    items: ["DevSecOps in pipeline", "PCI-DSS aware delivery", "GDPR & data protection", "AWS Security Hub, IAM hardening"],
  },
];

const baseKnowsAbout = [
  "AWS",
  "Google Cloud Platform",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
  "Argo CD",
  "Prometheus",
  "Grafana",
  "Site Reliability Engineering",
  "DevSecOps",
  "PCI-DSS",
  "GDPR",
  "Infrastructure as Code",
  "CI/CD",
  "GitOps",
  "Platform Engineering",
];

export const londonConfig: DevopsCityConfig = {
  slug: "london",
  path: "/devops-engineer-london/",
  h1: "Cloud & DevOps Engineer — London",
  heroLocationPill: "London & UK-wide · Hybrid and remote",
  geoRegion: "GB-LND",
  geoPlacename: "London, United Kingdom",
  metadata: {
    title: "Cloud & DevOps Engineer — London",
    description:
      "Oluwatosin Jegede — Cloud & DevOps / SRE engineer for London and UK-wide roles. AWS, GCP, Kubernetes, Terraform, GitHub Actions, Argo CD, observability, PCI-DSS and GDPR-aware platforms. DevOps & SRE at Netsible Solutions; fintech EKS/Istio, enterprise scale, multi-region resilience.",
    keywords: [
      "DevOps Engineer London",
      "Platform Engineer London",
      "SRE London",
      "Kubernetes engineer London",
      "AWS engineer London",
      "Terraform London",
      "financial services DevOps",
      "Canary Wharf",
      "City of London",
      "contract DevOps UK",
    ],
    alternates: {
      canonical: `${siteUrl}/devops-engineer-london/`,
    },
    openGraph: {
      title: `${name} · Cloud & DevOps Engineer — London`,
      description:
        "Production AWS/GCP platforms, Kubernetes, Terraform, SRE, and DevSecOps for London teams and UK-wide remote.",
      url: `${siteUrl}/devops-engineer-london/`,
      type: "profile",
      locale: "en_GB",
    },
  },
  marketSectionTitle: "Where this fits the London market",
  marketPoints: [
    {
      icon: "landmark",
      title: "Fintech & financial services",
      body: "PCI-DSS–aligned platforms, secure payment and data paths, and resilient multi-AZ or multi-region designs for regulated workloads—matching what London banks, scale-ups, and infrastructure teams typically need.",
    },
    {
      icon: "heart",
      title: "Healthcare & sensitive data",
      body: "GDPR-aware patterns, encryption in transit and at rest, and observable ML or data pipelines suitable for providers and healthtech adjacent to NHS-style requirements.",
    },
    {
      icon: "building",
      title: "Enterprise & high-growth scale-ups",
      body: "Terraform modules, GitOps, and cost-aware operations to grow from seed-stage throughput to enterprise controls without replatforming every quarter.",
    },
    {
      icon: "globe",
      title: "Multi-region & continuity",
      body: "Disaster recovery, failover thinking, and EU/UK region placement for organisations headquartered in London with global users.",
    },
  ],
  featuredTitle: "Featured work relevant to London roles",
  featuredProjects: [
    {
      category: "Fintech · Kubernetes",
      title: "FinBankOps — multi-region EKS",
      description:
        "Secure, scalable EKS with Istio, Argo CD, and PCI-oriented controls—automated deployments and strong uptime targets across UK/EU style topologies.",
      links: [
        {
          label: "Case study",
          href: "https://www.linkedin.com/pulse/finbankops-secure-multi-region-kubernetes-fintech-aws-jegede-ykiaf/",
        },
        { label: "Code", href: "https://github.com/Tosin-STIL/eks-microservice-demo" },
      ],
    },
    {
      category: "Security · AWS",
      title: "AWS cloud security assessment",
      description:
        "Structured review of production-style AWS: IAM, networking, storage, and application exposure with prioritised remediation for enterprise-style estates.",
      links: [
        {
          label: "Case study",
          href: "https://www.linkedin.com/pulse/aws-cloud-penetration-test-real-world-risk-assessment-jegede-xfeof/",
        },
      ],
    },
    {
      category: "Healthcare · ML",
      title: "Patient identity verification (GDPR-aware)",
      description:
        "AWS Rekognition and DynamoDB patterns for identity checks with a focus on data protection and audit-friendly design for healthcare contexts.",
      links: [
        {
          label: "Case study",
          href: "https://www.linkedin.com/pulse/ai-healthcare-patient-identity-verification-dynamodb-jegede-sx17f/",
        },
        { label: "Code", href: "https://github.com/OluwaTossin/rekognition-patient-id" },
      ],
    },
  ],
  ctaTitle: "Open to London and UK-wide opportunities",
  ctaBody:
    "If you need a senior hands-on engineer for platforms, reliability, or compliance-aware cloud delivery—permanent, contract, or hybrid in London—send a short brief and I will respond with how I can help.",
  travelNote:
    "Based in Chester, UK; comfortable with London hybrid cadence and UK-wide remote. Direct rail links to London for on-site days when needed.",
  jsonLdDescription:
    "Cloud & DevOps Engineer with 5+ years on production AWS/GCP, Kubernetes, Terraform, SRE, and DevSecOps. DevOps & SRE Engineer at Netsible Solutions; open to London and UK-wide roles.",
  knowsAbout: [...baseKnowsAbout, "Financial Services Technology", "FinOps", "MLOps"],
};

export const manchesterConfig: DevopsCityConfig = {
  slug: "manchester",
  path: "/devops-engineer-manchester/",
  h1: "Cloud & DevOps Engineer — Manchester / UK",
  heroLocationPill: "Greater Manchester & UK-wide · Hybrid and remote",
  geoRegion: "GB-MAN",
  geoPlacename: "Manchester, United Kingdom",
  metadata: {
    title: "Cloud & DevOps Engineer — Manchester / UK",
    description:
      "Oluwatosin Jegede — Cloud & DevOps / SRE engineer for Manchester, Greater Manchester, and UK-wide roles. AWS, GCP, Kubernetes, Terraform, CI/CD, observability, and DevSecOps. Experience across fintech platforms, scale-ups, and multi-region delivery; currently DevOps & SRE at Netsible Solutions.",
    keywords: [
      "DevOps Engineer Manchester",
      "Platform Engineer Manchester",
      "SRE Manchester",
      "Kubernetes Manchester",
      "AWS engineer Manchester",
      "MediaCity",
      "Salford tech jobs",
      "Northern Powerhouse",
      "contract DevOps UK",
    ],
    alternates: {
      canonical: `${siteUrl}/devops-engineer-manchester/`,
    },
    openGraph: {
      title: `${name} · Cloud & DevOps Engineer — Manchester / UK`,
      description:
        "AWS/GCP, Kubernetes, Terraform, GitOps, and observability for Manchester teams and UK remote.",
      url: `${siteUrl}/devops-engineer-manchester/`,
      type: "profile",
      locale: "en_GB",
    },
  },
  marketSectionTitle: "Where this fits the Manchester & North West market",
  marketPoints: [
    {
      icon: "cpu",
      title: "Digital & scale-up ecosystem",
      body: "Fast iteration with Terraform, GitHub Actions, and Kubernetes for product teams—aligned with Manchester’s density of SaaS, e-commerce, and media technology companies.",
    },
    {
      icon: "factory",
      title: "Industry & data-heavy workloads",
      body: "Connecting cloud platforms to operational data, batch and streaming patterns, and observability so engineering and operations share one view of reliability.",
    },
    {
      icon: "graduation",
      title: "Research & edtech",
      body: "Secure, well-governed environments for research and learning platforms: IAM, encryption, and audit-friendly logging without blocking researchers or students.",
    },
    {
      icon: "globe",
      title: "UK-wide resilience",
      body: "Multi-region design and DR thinking for organisations based in Manchester with customers across the UK.",
    },
  ],
  featuredTitle: "Featured work relevant to Manchester roles",
  featuredProjects: [
    {
      category: "Fintech · Kubernetes",
      title: "FinBankOps — multi-region EKS",
      description:
        "Production-style EKS with service mesh, GitOps, and compliance-oriented controls—suited to regulated and high-growth teams across the North West and UK.",
      links: [
        {
          label: "Case study",
          href: "https://www.linkedin.com/pulse/finbankops-secure-multi-region-kubernetes-fintech-aws-jegede-ykiaf/",
        },
        { label: "Code", href: "https://github.com/Tosin-STIL/eks-microservice-demo" },
      ],
    },
    {
      category: "ML · Real-time inference",
      title: "Real-time ML fraud detection on AWS",
      description:
        "End-to-end MLOps-style delivery: ECS Fargate services, Terraform, CI/CD, and monitoring for low-latency scoring—relevant to Manchester’s AI and data science hiring.",
      links: [
        {
          label: "Case study",
          href: "https://www.linkedin.com/pulse/design-training-deployment-devops-enabled-real-time-ml-jegede-8pu4f/",
        },
        { label: "Infra", href: "https://github.com/Tosin-STIL/fraud-detection-infra" },
      ],
    },
    {
      category: "Security · AWS",
      title: "AWS cloud security assessment",
      description:
        "Deep-dive assessment of AWS accounts and workloads with actionable remediation priorities—ideal when you are hardening before audit or customer review.",
      links: [
        {
          label: "Case study",
          href: "https://www.linkedin.com/pulse/aws-cloud-penetration-test-real-world-risk-assessment-jegede-xfeof/",
        },
      ],
    },
  ],
  ctaTitle: "Open to Manchester and UK-wide opportunities",
  ctaBody:
    "Whether you are hiring in Manchester city centre, Salford, or fully remote across the UK, I can help with platform engineering, reliability, and secure delivery. Message me on LinkedIn or email a role summary.",
  travelNote:
    "Based in Chester, UK; regular travel to Manchester is straightforward by rail for hybrid teams.",
  jsonLdDescription:
    "Cloud & DevOps Engineer with 5+ years on production AWS/GCP, Kubernetes, Terraform, SRE, and DevSecOps. DevOps & SRE Engineer at Netsible Solutions; open to Manchester and UK-wide roles.",
  knowsAbout: [...baseKnowsAbout, "MLOps", "Startup Scaling", "FinOps"],
};

export function buildPersonJsonLd(config: DevopsCityConfig) {
  const pageUrl = `${siteUrl}${config.path.slice(0, -1)}`;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url: pageUrl,
    image: `${siteUrl}/images/profile.jpg`,
    jobTitle: "Cloud & DevOps Engineer",
    description: config.jsonLdDescription,
    worksFor: {
      "@type": "Organization",
      name: "Netsible Solutions",
    },
    knowsAbout: config.knowsAbout,
    sameAs: [linkedin, github],
  };
}

export function buildBreadcrumbJsonLd(config: DevopsCityConfig) {
  const pageUrl = `${siteUrl}${config.path.slice(0, -1)}`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: config.h1.replace(/ — .+$/, ""), item: pageUrl },
    ],
  };
}

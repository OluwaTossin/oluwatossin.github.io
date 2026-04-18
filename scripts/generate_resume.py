#!/usr/bin/env python3
"""Generate resume.pdf at repo root. Requires: pip install reportlab"""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parents[1]
OUT_ROOT = ROOT / "resume.pdf"
OUT_PUBLIC = ROOT / "web" / "public" / "resume.pdf"

styles = getSampleStyleSheet()

title = ParagraphStyle(
    "Title",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=16,
    leading=20,
    textColor=colors.HexColor("#111111"),
    spaceAfter=2,
)
subtitle = ParagraphStyle(
    "Subtitle",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=11,
    leading=14,
    textColor=colors.HexColor("#333333"),
    spaceAfter=6,
)
contact = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=9,
    leading=11,
    textColor=colors.HexColor("#444444"),
    spaceAfter=10,
)
heading = ParagraphStyle(
    "Heading",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10,
    leading=13,
    textColor=colors.HexColor("#0d9488"),
    spaceBefore=8,
    spaceAfter=4,
    borderPadding=(0, 0, 2, 0),
)
role_org = ParagraphStyle(
    "RoleOrg",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10,
    leading=13,
    spaceBefore=6,
    spaceAfter=2,
)
role_meta = ParagraphStyle(
    "RoleMeta",
    parent=styles["Normal"],
    fontName="Helvetica-Oblique",
    fontSize=9,
    leading=12,
    textColor=colors.HexColor("#333333"),
    spaceAfter=4,
)
body = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11,
    alignment=TA_LEFT,
    spaceAfter=3,
)


def esc(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )


def bullet(text: str) -> Paragraph:
    return Paragraph(f"• {esc(text)}", body)


def build_story():
    story = []
    story.append(Paragraph(esc("Oluwatosin Jegede"), title))
    story.append(
        Paragraph(
            esc("Senior Cloud & DevOps Engineer · SRE · Platform & Kubernetes"),
            subtitle,
        )
    )
    story.append(
        Paragraph(
            esc(
                "Chester, UK · careers.tosinjegede@gmail.com · "
                "linkedin.com/in/oluwatosinjegede · github.com/OluwaTossin · oluwatossin.github.io"
            ),
            contact,
        )
    )

    story.append(Paragraph(esc("Profile"), heading))
    story.append(
        Paragraph(
            esc(
                "Senior engineer with 5+ years leading production platforms on AWS and GCP. "
                "Deep expertise in Terraform, Kubernetes (EKS/GKE), GitHub Actions, Argo CD, "
                "observability (Prometheus, Grafana, CloudWatch), DevSecOps (Trivy, Checkov, OPA), "
                "regulated environments (PCI-DSS, GDPR), FinOps, and AI-assisted operations. "
                "Trusted to architect resilience, govern delivery, and shorten incident cycles for "
                "global, fintech, and humanitarian estates."
            ),
            body,
        )
    )
    story.append(Spacer(1, 0.05 * inch))

    story.append(Paragraph(esc("Professional experience"), heading))

    roles = [
        (
            "Netsible Solutions — Remote / London, UK",
            "Senior DevOps & SRE Engineer · September 2025 – Present",
            [
                "Lead hybrid AWS/GCP delivery: platform resilience, GitOps-style deployments (GitHub Actions, Argo CD), DevSecOps guardrails, observability-led incident response for global clients.",
                "Architected and optimised high-availability infrastructure; improved resilience and reduced latency ~35% for distributed users.",
                "Modernised CI/CD to ~99.9% automated deployment success across production and staging.",
                "Implemented DevSecOps aligned with GDPR (Trivy, Checkov); reduced critical security exposure ~50%.",
                "Engineered self-healing Kubernetes with custom Prometheus/Grafana alerting; MTTR for infrastructure incidents down ~40%.",
                "Introduced AI-assisted tooling for log analysis and triage; root-cause analysis and team productivity up ~25%.",
            ],
        ),
        (
            "Help.NGO (Humanitarian OpenStreetMap Team) — Remote, Poland",
            "Senior DevOps Engineer (Advisory) · December 2023 – Present",
            [
                "Advise on secure, compliant AWS for humanitarian mapping; data protection and operational continuity in sensitive contexts.",
                "Drive Terraform IaC standardisation and GitHub Actions automation for repeatable deployments.",
                "Strengthen observability and GDPR-aligned data-protection frameworks.",
            ],
        ),
        (
            "Sovereign Technology & Innovation Limited — Hybrid, UK",
            "Senior DevOps Engineer · August 2024 – July 2025",
            [
                "Architected and operated production fintech on AWS: multi-node EKS, Istio service mesh, autoscaling, ~99.95% uptime targets.",
                "Built Terraform modules and GitHub Actions pipelines for blue/green style releases.",
                "Policy-as-code with Checkov, OPA, AWS Config; FinOps dashboards (Lambda, Cost Explorer APIs), ~30% operational cost reduction.",
                "Observability baselines (Prometheus, Grafana, CloudWatch); MTTR from ~45 minutes to under 15 minutes.",
            ],
        ),
        (
            "Afren.ai — Remote",
            "Senior DevOps Engineer · December 2022 – July 2024",
            [
                "Owned CI/CD and environment automation; IaC reduced manual effort ~60%; modular Terraform eliminated configuration drift.",
                "Delivered CloudWatch dashboards, golden-signal metrics, and centralised logging; service reliability up ~45%.",
                "Hardened alerting and incident workflows; MTTR down ~40% with standardised playbooks.",
                "Operated and secured Linux production estates across EC2 and Kubernetes hosts.",
            ],
        ),
        (
            "Independent — UK & international clients",
            "Senior Cloud Architect & DevOps (Contract) · May 2021 – Present",
            [
                "Designed multi-cloud HA workloads (load balancing, autoscaling, replication) achieving ~99.9% uptime outcomes.",
                "Built internal Terraform and Argo CD frameworks; provisioning time down ~60%.",
                "DevSecOps pipelines with vulnerability scanning, drift detection, and automated rollback.",
                "FinOps engagements saving clients approximately £3,000–£5,000 per month.",
            ],
        ),
    ]

    for org, meta, bullets in roles:
        story.append(Paragraph(esc(org), role_org))
        story.append(Paragraph(esc(meta), role_meta))
        for b in bullets:
            story.append(bullet(b))

    story.append(Paragraph(esc("Education"), heading))
    story.append(
        Paragraph(
            esc(
                "M.Sc., Animal Biotechnology — Federal University of Agriculture, Abeokuta · "
                "B.Tech., Animal Production & Health — Federal University of Technology, Akure · "
                "Diploma, Computer Engineering — Datashield Institute"
            ),
            body,
        )
    )

    story.append(Paragraph(esc("Certifications (selected)"), heading))
    story.append(
        Paragraph(
            esc(
                "AWS DevOps Engineer — Professional · Google Professional Cloud Architect · "
                "AWS ML Engineer — Associate · AWS Security — Specialty · AWS Developer — Associate · "
                "AWS Solutions Architect — Associate · Google Associate Cloud Engineer · "
                "Kubernetes & Cloud Native Associate · GitHub Advanced Security"
            ),
            body,
        )
    )

    return story


def main():
    for out_path in (OUT_ROOT, OUT_PUBLIC):
        out_path.parent.mkdir(parents=True, exist_ok=True)
        doc = SimpleDocTemplate(
            str(out_path),
            pagesize=letter,
            rightMargin=0.65 * inch,
            leftMargin=0.65 * inch,
            topMargin=0.55 * inch,
            bottomMargin=0.55 * inch,
        )
        doc.build(build_story())
        print(f"Wrote {out_path}")


if __name__ == "__main__":
    main()

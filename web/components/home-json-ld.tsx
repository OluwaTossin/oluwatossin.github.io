import { github, linkedin, name, siteUrl } from "@/lib/site";

const description =
  "Senior Cloud & DevOps Engineer specialising in AWS, GCP, Terraform, Kubernetes, SRE, DevSecOps, and AI-assisted engineering. Based in Chester, UK.";

export function HomeJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: `${name} · Senior Cloud & DevOps Engineer`,
        description,
        publisher: { "@id": `${siteUrl}/#person` },
        inLanguage: "en-GB",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name,
        url: `${siteUrl}/`,
        image: `${siteUrl}/images/profile.jpg`,
        jobTitle: "Senior Cloud & DevOps Engineer",
        description,
        sameAs: [linkedin, github],
        knowsAbout: [
          "Amazon Web Services",
          "Google Cloud Platform",
          "Terraform",
          "Kubernetes",
          "DevOps",
          "Site reliability engineering",
          "DevSecOps",
          "Continuous integration",
          "Observability",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chester",
          addressCountry: "GB",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

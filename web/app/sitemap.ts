import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

/** All indexable paths for static export (trailingSlash URLs). */
const paths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/experience/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects/", priority: 0.95, changeFrequency: "weekly" },
  { path: "/blog/", priority: 0.85, changeFrequency: "weekly" },
  { path: "/devops-engineer-london/", priority: 0.75, changeFrequency: "monthly" },
  { path: "/devops-engineer-manchester/", priority: 0.75, changeFrequency: "monthly" },
  { path: "/article-terraform-best-practices.html", priority: 0.6, changeFrequency: "yearly" },
  { path: "/resume.pdf", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

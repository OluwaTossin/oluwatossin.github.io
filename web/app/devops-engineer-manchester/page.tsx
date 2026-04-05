import type { Metadata } from "next";
import { DevopsCityPage } from "@/components/devops-city-page";
import { manchesterConfig } from "@/lib/devops-location-content";

export const metadata: Metadata = manchesterConfig.metadata;

export default function ManchesterPage() {
  return <DevopsCityPage config={manchesterConfig} />;
}

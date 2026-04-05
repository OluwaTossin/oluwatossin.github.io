import type { Metadata } from "next";
import { DevopsCityPage } from "@/components/devops-city-page";
import { londonConfig } from "@/lib/devops-location-content";

export const metadata: Metadata = londonConfig.metadata;

export default function LondonPage() {
  return <DevopsCityPage config={londonConfig} />;
}

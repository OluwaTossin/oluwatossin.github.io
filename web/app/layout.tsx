import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { THEME_STORAGE_KEY } from "@/lib/theme-storage";
import { name, siteUrl } from "@/lib/site";

const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var t=localStorage.getItem(k);if(t!=="light"&&t!=="dark")t="dark";document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${name} · Senior Cloud & DevOps Engineer`,
    template: `%s · ${name}`,
  },
  description:
    "Senior Cloud & DevOps Engineer specialising in AWS, GCP, Terraform, Kubernetes, SRE, DevSecOps, and AI-assisted engineering. Based in Chester, UK.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: name,
    images: [{ url: "/images/meta-preview.jpg", width: 1200, height: 630, alt: name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} · Senior Cloud & DevOps Engineer`,
    description:
      "Production-grade cloud platforms, Terraform, Kubernetes, SRE, and DevSecOps across AWS and GCP.",
    images: ["/images/meta-preview.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-page-radial" aria-hidden />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

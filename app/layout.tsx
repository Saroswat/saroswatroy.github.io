import type { Metadata } from "next";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { profile } from "../data/portfolio";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://saroswat-roy-portfolio.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Saroswat Roy | AI Engineer & Data Scientist", template: "%s | Saroswat Roy" },
  description: profile.statement,
  keywords: ["AI Engineer London", "NLP Engineer London", "Generative AI Engineer", "Agentic AI Engineer", "Explainable AI Engineer", "Data Scientist London", "LLM Engineer", "Responsible AI", "AI Automation Engineer"],
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_GB", url: siteUrl, title: `${profile.name} | ${profile.headline}`, description: profile.statement, siteName: `${profile.name} | AI Engineering`, images: [{ url: "/og-v2.png", width: 1731, height: 909, alt: "Saroswat Roy, governed agents and trustworthy language systems" }] },
  twitter: { card: "summary_large_image", title: `${profile.name} | AI Engineer`, description: profile.statement, images: ["/og-v2.png"] },
  icons: { icon: "/favicon.png" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", "@id": `${siteUrl}/#person`, name: profile.name, jobTitle: profile.title, url: siteUrl, sameAs: [profile.github, profile.linkedin], address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" }, alumniOf: [{ "@type": "CollegeOrUniversity", name: "Queen Mary University of London" }, { "@type": "CollegeOrUniversity", name: "University of Engineering & Management, Jaipur" }], knowsAbout: ["Agentic AI", "Natural Language Processing", "Generative AI", "Explainable AI", "Responsible AI", "Machine Learning"] },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: `${profile.name} | AI Engineering Portfolio`, publisher: { "@id": `${siteUrl}/#person` }, inLanguage: "en-GB" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const themeScript = `(function(){try{var s=localStorage.getItem('sr-theme');var t=s||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t}catch(e){}})()`;
  return <html lang="en-GB" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{ __html: themeScript }} /><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /></body></html>;
}

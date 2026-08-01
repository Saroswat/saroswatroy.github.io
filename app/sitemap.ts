import type { MetadataRoute } from "next";
import { projects } from "../data/portfolio";
const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://saroswat-roy-portfolio.site";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/about", "/projects", "/experience", "/education", "/skills", "/certifications", "/resume", "/contact"]; return [...routes.map(route => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "monthly" as const : "yearly" as const, priority: route === "" ? 1 : .7 })), ...projects.map(project => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: .8 }))]; }

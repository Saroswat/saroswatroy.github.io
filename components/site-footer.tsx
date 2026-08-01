import Link from "next/link";
import { profile } from "../data/portfolio";

export function SiteFooter() {
  return <footer className="site-footer">
    <div><p className="footer-kicker">Intelligence with accountability.</p><p>Building dependable AI systems from London.</p></div>
    <div className="footer-links"><Link href="/projects">Projects</Link><Link href="/certifications">Certifications</Link><a href={profile.github}>GitHub</a><a href={profile.linkedin}>LinkedIn</a></div>
    <p className="fine-print">© {new Date().getFullYear()} Saroswat Roy. Personal portfolio; no employer endorsement implied.</p>
  </footer>;
}

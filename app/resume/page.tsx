import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Resume", description: "Resume for Saroswat Roy, AI Engineer and Data Scientist in London.", alternates: { canonical: "/resume" } };

export default function ResumePage() {
  return <div className="page-shell"><header className="page-hero resume-hero"><div><p className="eyebrow">Resume</p><h1>AI engineering shaped by research and operations.</h1><p className="lede">A concise overview of experience, education, technical strengths and selected AI engineering work.</p></div><div className="button-row"><a className="button primary" href="/documents/saroswat-roy-resume.pdf" download>Download PDF</a><a className="button secondary" href="/documents/saroswat-roy-resume.pdf">Open preview</a></div></header><div className="resume-preview"><iframe title="Saroswat Roy resume preview" src="/documents/saroswat-roy-resume.pdf#view=FitH" /><p>If the preview does not load, <a href="/documents/saroswat-roy-resume.pdf">open the PDF directly</a>.</p></div><section className="inline-cta"><h2>Looking for the technical detail?</h2><Link className="button secondary" href="/projects">View project case studies</Link></section></div>;
}

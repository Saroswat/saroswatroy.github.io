import type { Metadata } from "next";
import { ProjectExplorer } from "../../components/project-explorer";

export const metadata: Metadata = { title: "Projects", description: "Evidence-led case studies in agentic AI, trustworthy NLP, graph learning and applied machine learning by Saroswat Roy.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return <div className="page-shell"><header className="page-hero"><p className="eyebrow">Project archive</p><h1>Applied AI, with the engineering decisions left visible.</h1><p className="lede">Search by problem, method or technology. Every claim is limited to evidence available in the public repository or verified local project artefacts.</p></header><ProjectExplorer /></div>;
}

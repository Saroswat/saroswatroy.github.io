import type { Metadata } from "next";
import { ProjectExplorer } from "../../components/project-explorer";

export const metadata: Metadata = { title: "Projects", description: "Case studies in governed agents, trustworthy NLP, graph learning and applied machine learning by Saroswat Roy.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return <div className="page-shell"><header className="page-hero"><p className="eyebrow">Project archive</p><h1>Applied AI, with the engineering decisions left visible.</h1><p className="lede">Explore the problems, system choices, architectures and results behind each project.</p></header><ProjectExplorer /></div>;
}

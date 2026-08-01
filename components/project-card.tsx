import Link from "next/link";
import type { Project } from "../lib/types";

export function ProjectCard({ project, index, headingLevel = 3 }: { project: Project; index: number; headingLevel?: 2 | 3 }) {
  const Title = headingLevel === 2 ? "h2" : "h3";

  return <article className="project-card">
    <div className="project-number">0{index + 1}</div>
    {project.image && <img src={project.image} alt={project.imageAlt ?? ""} width={960} height={540} loading="lazy" decoding="async" />}
    <div className="project-card-body">
      <p className="eyebrow">{project.eyebrow}</p>
      <Title><Link href={`/projects/${project.slug}`}>{project.title}</Link></Title>
      <p>{project.proposition}</p>
      <div className="project-proof"><span>Result</span><strong>{project.proof}</strong></div>
      <ul className="tag-list" aria-label="Technologies">{project.technologies.slice(0, 5).map(tag => <li key={tag}>{tag}</li>)}</ul>
      <div className="card-actions"><Link href={`/projects/${project.slug}`}>Read case study <span aria-hidden="true">↗</span></Link><a href={project.github}>Source</a></div>
    </div>
  </article>;
}

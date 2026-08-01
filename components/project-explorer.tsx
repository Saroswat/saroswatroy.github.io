"use client";

import { useMemo, useState } from "react";
import { projects } from "../data/portfolio";
import { ProjectCard } from "./project-card";

const categories = ["All", ...Array.from(new Set(projects.flatMap(project => project.categories)))];

export function ProjectExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const results = useMemo(() => projects.filter(project => {
    const matchesCategory = category === "All" || project.categories.includes(category as never);
    const haystack = [project.title, project.summary, ...project.technologies, ...project.methods].join(" ").toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase());
  }), [query, category]);

  return <>
    <div className="project-tools">
      <label className="search-label"><span>Search projects</span><input value={query} onChange={event => setQuery(event.target.value)} type="search" placeholder="Try NLI, FastAPI or governance" /></label>
      <div className="filter-list" aria-label="Filter projects by category">{categories.map(item => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}</div>
    </div>
    <p className="result-count" aria-live="polite">{results.length} project{results.length === 1 ? "" : "s"}</p>
    <div className="projects-grid">{results.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} headingLevel={2} />)}</div>
  </>;
}

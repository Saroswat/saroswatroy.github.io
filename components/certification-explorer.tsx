"use client";

import { useMemo, useState } from "react";
import { certifications } from "../data/portfolio";

const categories = ["All", ...Array.from(new Set(certifications.map(item => item.category)))];

export function CertificationExplorer() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => certifications.filter(item => (category === "All" || item.category === category) && `${item.title} ${item.provider}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return <>
    <div className="project-tools"><label className="search-label"><span>Search certifications</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Provider or subject" /></label><select aria-label="Certification category" value={category} onChange={event => setCategory(event.target.value)}>{categories.map(item => <option key={item}>{item}</option>)}</select></div>
    <div className="cert-grid">{filtered.map(item => <article className="cert-card" key={`${item.provider}-${item.title}`}><p className="eyebrow">{item.category}</p><h2>{item.title}</h2><p>{item.provider}</p><span className="verification-note">Profile-reported · credential link pending verification</span></article>)}</div>
  </>;
}

"use client";

import { useMemo, useState } from "react";
import { certifications } from "../data/portfolio";

const categories = ["All", ...Array.from(new Set(certifications.map(item => item.category)))];

export function CertificationExplorer() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => certifications.filter(item => (category === "All" || item.category === category) && `${item.title} ${item.provider} ${item.issued} ${item.credentialId ?? ""}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return <>
    <div className="project-tools"><label className="search-label"><span>Search certifications</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Provider, subject, date or credential ID" /></label><div className="cert-filter"><select aria-label="Certification category" value={category} onChange={event => setCategory(event.target.value)}>{categories.map(item => <option key={item}>{item}</option>)}</select><p className="result-count" aria-live="polite">Showing {filtered.length} of {certifications.length} credentials</p></div></div>
    <div className="cert-grid">{filtered.map(item => <article className="cert-card" key={`${item.provider}-${item.title}`}><p className="eyebrow">{item.category}</p><h2>{item.title}</h2><div className="cert-meta"><p>{item.provider}</p><p>{item.issued}</p></div>{item.credentialId && <p className="credential-id">Credential ID {item.credentialId}</p>}{item.url && <a className="credential-link" href={item.url}>View credential <span aria-hidden="true">↗</span></a>}</article>)}</div>
  </>;
}

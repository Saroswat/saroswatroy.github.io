import Link from "next/link";
import { experience, profile, projects, skillGroups, certifications } from "../data/portfolio";
import { ProjectCard } from "../components/project-card";
import { SectionHeading } from "../components/section-heading";

export default function Home() {
  const featured = projects.filter(project => project.featured).slice(0, 4);
  return <>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> AI engineering · London</p><h1><span>Saroswat Roy</span>{profile.headline}</h1><p className="hero-intro">{profile.statement}</p><div className="button-row"><Link className="button primary" href="/projects">View projects <span aria-hidden="true">↗</span></Link><a className="button secondary" href="/documents/saroswat-roy-resume.pdf" download>Download resume</a><Link className="text-link" href="/contact">Start a conversation</Link></div></div>
      <div className="hero-system" aria-label="Professional focus areas"><div className="system-orbit orbit-one" /><div className="system-orbit orbit-two" /><div className="system-core"><span>AI</span><small>operationally grounded</small></div><span className="system-label label-one">AUTONOMY</span><span className="system-label label-two">EXPLAINABILITY</span><span className="system-label label-three">RELIABILITY</span><span className="system-label label-four">SECURITY</span></div>
      <div className="hero-proof"><div><span>01</span><p>Research translated into usable systems</p></div><div><span>02</span><p>Autonomy bounded by human oversight</p></div><div><span>03</span><p>Engineering grounded in real IT operations</p></div></div>
    </section>

    <section className="section"><SectionHeading eyebrow="Selected work" title="Systems that make intelligence accountable." intro="Evidence-led case studies spanning agentic control, trustworthy language systems and applied AI research." /><div className="projects-grid">{featured.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div><Link className="section-link" href="/projects">Explore all projects <span aria-hidden="true">→</span></Link></section>

    <section className="section split-section"><SectionHeading eyebrow="Core expertise" title="One practice, three layers." intro="Model capability matters. So do the controls around it and the environment it must survive." /><div className="expertise-stack">{skillGroups.slice(0, 3).map((group, index) => <article key={group.title}><span>0{index + 1}</span><div><h3>{group.title}</h3><p>{group.description}</p><ul className="tag-list">{group.skills.slice(0, 6).map(skill => <li key={skill}>{skill}</li>)}</ul></div></article>)}</div></section>

    <section className="section"><SectionHeading eyebrow="Professional trajectory" title="Research → applied AI → production operations." /><div className="timeline compact">{experience.map(item => <article key={item.role}><div className="timeline-marker" /><p className="eyebrow">{item.period}</p><h3>{item.role}</h3><p className="timeline-org">{item.organisation}</p><p>{item.summary}</p></article>)}</div><Link className="section-link" href="/experience">View full experience <span aria-hidden="true">→</span></Link></section>

    <section className="section focus-panel"><div><p className="eyebrow">Current focus</p><h2>LLM systems that know when to act and when to stop.</h2></div><div><p>Exploring agent orchestration, explainable verification, deterministic safeguards and human approval patterns for high-consequence workflows.</p><ul className="focus-list"><li>Evidence-grounded agents</li><li>Guardrails and abstention</li><li>Operational AI automation</li><li>Secure local-first systems</li></ul></div></section>

    <section className="section"><SectionHeading eyebrow="Selected certifications" title="Continuous learning, deliberately curated." intro="A representative selection from a broader professional learning record across agentic AI, responsible AI, data science and technology operations." /><div className="cert-strip">{certifications.slice(0, 4).map(item => <article key={item.title}><span>{item.provider}</span><h3>{item.title}</h3></article>)}</div><Link className="section-link" href="/certifications">Browse certification archive <span aria-hidden="true">→</span></Link></section>

    <section className="section cta-panel"><p className="eyebrow">Open to the right opportunity</p><h2>Building AI that earns trust in the real world.</h2><p>Available for AI Engineering, NLP, Generative AI, Agentic AI and Data Science roles in London and the United Kingdom.</p><div className="button-row"><Link className="button primary" href="/contact">Contact me <span aria-hidden="true">↗</span></Link><a className="button secondary" href={profile.linkedin}>LinkedIn</a></div></section>
  </>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/portfolio";

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) return {};
  const socialImage = project.media?.[0]?.src ?? project.image ?? "/og-v2.png";
  return {
    title: project.title,
    description: project.proposition,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      type: "article",
      url: `/projects/${slug}`,
      title: project.title,
      description: project.proposition,
      images: [{ url: socialImage, alt: project.media?.[0]?.alt ?? project.imageAlt ?? project.title }],
    },
    twitter: { card: "summary_large_image", title: project.title, description: project.proposition, images: [socialImage] },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  const index = projects.findIndex(item => item.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return <article className="case-study">
    <header className="case-hero">
      <div>
        <Link className="back-link" href="/projects">← All projects</Link>
        <p className="eyebrow">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p className="lede">{project.proposition}</p>
        <div className="button-row"><a className="button primary" href={project.github}>View source <span aria-hidden="true">↗</span></a></div>
      </div>
      <div className="case-meta">
        <div><span>Focus</span><p>{project.categories.join(" · ")}</p></div>
        <div><span>Methods</span><p>{project.methods.join(" · ")}</p></div>
        <div className="case-result"><span>Result</span><p>{project.proof}</p></div>
      </div>
    </header>

    {project.media && <section className="case-media" aria-label={`${project.title} product views`}>
      <div className="case-media-heading"><p className="eyebrow">Product views</p><p>See the system in operation.</p></div>
      <div className="case-media-grid">{project.media.map(item => <figure key={item.src}><img src={item.src} alt={item.alt} width={1440} height={900} decoding="async" /><figcaption>{item.caption}</figcaption></figure>)}</div>
    </section>}
    {!project.media && project.image && <figure className="case-image"><img src={project.image} alt={project.imageAlt ?? ""} width={1440} height={810} decoding="async" /></figure>}

    <div className="case-layout">
      <aside><p>On this page</p><a href="#challenge">Challenge</a><a href="#approach">Approach</a><a href="#architecture">Architecture</a><a href="#responsibility">Responsibility</a><a href="#outcome">Outcome</a></aside>
      <div className="case-content">
        <section id="challenge"><p className="eyebrow">01 · Challenge</p><h2>The problem</h2><p>{project.problem}</p></section>
        <section id="approach"><p className="eyebrow">02 · Approach</p><h2>The solution</h2><p>{project.solution}</p><p>{project.technical}</p><h3>Key capabilities</h3><ul className="feature-list">{project.capabilities.map(item => <li key={item}>{item}</li>)}</ul></section>
        <section id="architecture"><p className="eyebrow">03 · Architecture</p><h2>A traceable system path</h2><div className="architecture-flow">{project.architecture.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div><ul className="tag-list large">{project.technologies.map(item => <li key={item}>{item}</li>)}</ul></section>
        <section id="responsibility"><p className="eyebrow">04 · Responsibility</p><h2>Safety, security and human control</h2><ul className="feature-list">{project.safeguards.map(item => <li key={item}>{item}</li>)}</ul></section>
        <section id="outcome"><p className="eyebrow">05 · Outcome</p><h2>What the project demonstrates</h2><div className="outcome-highlight"><strong>{project.proof}</strong><p>{project.outcome}</p></div></section>
      </div>
    </div>
    <footer className="next-case"><p>Next case study</p><Link href={`/projects/${next.slug}`}>{next.title} <span aria-hidden="true">→</span></Link></footer>
  </article>;
}

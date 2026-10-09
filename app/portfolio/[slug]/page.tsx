/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { SiteFooter } from "../../site-footer";
import { SiteHeader } from "../../site-header";
import { FinalCta } from "../../components";
import { projects } from "@/src/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? project.title : "Project" };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return <main>
    <SiteHeader />
    <section className="detail-hero">
      <img src={project.heroImage} alt={`${project.title} event hero`} />
      <div>
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p>{project.client} · {project.type}</p>
      </div>
    </section>
    {project.slug === "malaysia-xpeng-g6-group-delivery" ? <section className="showreel-section">
      <div>
        <p className="eyebrow">Showreel</p>
        <h2>Event Highlight Video</h2>
        <p>Muted website preview using supplied event footage. Keep final captions, claims, and project scope subject to approval.</p>
      </div>
      <video controls playsInline preload="metadata">
        <source src="/media/xpeng-highlight.mp4" type="video/mp4" />
      </video>
    </section> : null}
    <section className="detail-content">
      <aside>
        <span>Status</span>
        <strong>{project.verified ? "Verified" : "Development placeholder"}</strong>
        <p>{project.verified ? "Media has been supplied for this website. Confirm final QUARZ scope, location, date, and results before publishing detailed claims." : "Media is available, but client, project scope, objectives, and results still need confirmation before publishing as a real case study."}</p>
      </aside>
      <div>
        <h2>Project Overview</h2>
        <p>{project.overview}</p>
        <h2>QUARZ Scope</h2>
        <ul>{project.scope.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>
    <section className="gallery-strip">
      {project.gallery.map((image) => <img src={image} alt={`${project.title} gallery placeholder`} key={image} />)}
    </section>
    <FinalCta />
    <SiteFooter />
  </main>;
}

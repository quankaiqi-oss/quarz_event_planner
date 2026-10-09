/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/src/data/projects";
import { Service } from "@/src/data/services";

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="page-hero">
    <p className="eyebrow">{eyebrow}</p>
    <h1>{title}</h1>
    <p>{copy}</p>
  </section>;
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {copy ? <p>{copy}</p> : null}
  </div>;
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return <Link className="service-card" href={`/services/${service.slug}`}>
    <img src={service.image} alt={`${service.title} development placeholder`} />
    <span>0{index + 1}</span>
    <h3>{service.title}</h3>
    <p>{service.summary}</p>
    <b>Explore Service <ArrowUpRight size={15} /></b>
  </Link>;
}

export function ProjectCard({ project }: { project: Project }) {
  return <Link className="project-card" href={`/portfolio/${project.slug}`}>
    <img src={project.image} alt={`${project.title} development placeholder`} />
    {!project.verified ? <span className="placeholder-label">Scope pending confirmation</span> : null}
    <div>
      <small>{project.category}</small>
      <h3>{project.title}</h3>
      <p>{project.client}</p>
    </div>
  </Link>;
}

export function FinalCta() {
  return <section className="final-cta">
    <p className="eyebrow">Start a Project</p>
    <h2>Let&apos;s create your next experience.</h2>
    <Link className="button light" href="/contact">Start a Project <ArrowUpRight size={18} /></Link>
  </section>;
}

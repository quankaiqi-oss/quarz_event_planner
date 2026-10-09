/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { SiteFooter } from "../../site-footer";
import { SiteHeader } from "../../site-header";
import { FinalCta, SectionHeading } from "../../components";
import { projects } from "@/src/data/projects";
import { services } from "@/src/data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service ? service.title : "Service" };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return <main>
    <SiteHeader />
    <section className="service-detail-hero">
      <div><p className="eyebrow">{service.kicker}</p><h1>{service.title}</h1><p>{service.summary}</p></div>
      <img src={service.image} alt={`${service.title} development placeholder`} />
    </section>
    <section className="detail-content service-scope">
      <aside><span>Service</span><strong>Scope of Work</strong><p>Use this template for each QUARZ service category.</p></aside>
      <div><ul>{service.scope.map((item) => <li key={item}>{item}</li>)}</ul></div>
    </section>
    <section className="section-block dark-alt">
      <SectionHeading eyebrow="Relevant Project References" title="Connected portfolio references." />
      <div className="project-grid">{projects.slice(0, 2).map((project) => <a className="mini-reference" href={`/portfolio/${project.slug}`} key={project.slug}>{project.title}<span>{project.category}</span></a>)}</div>
    </section>
    <FinalCta />
    <SiteFooter />
  </main>;
}

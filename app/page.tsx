/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { FinalCta, SectionHeading, ServiceCard } from "./components";
import { MediaCarousel } from "./media-carousel";
import { achievements, siteConfig, whyQuarz } from "@/src/data/site";
import { services } from "@/src/data/services";
import { projects } from "@/src/data/projects";
import { clientNotes } from "@/src/data/clients";
import { leadership } from "@/src/data/team";

export default function Home() {
  return <main>
    <SiteHeader transparent />
    <section className="home-hero">
      <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/media/mainly/mainly-01.jpg" aria-label="QUARZ event highlight video">
        <source src="/media/xpeng-highlight.mp4" type="video/mp4" />
      </video>
      <img className="hero-fallback" src="/media/mainly/mainly-01.jpg" alt="XPENG group delivery event photographed for QUARZ website" />
      <div className="hero-overlay" />
      <div className="hero-copy">
        <p className="eyebrow">Established {siteConfig.established}</p>
        <h1>Where strategy meets experience.</h1>
        <p>Creating exceptional corporate events and brand experiences since 2004.</p>
        <div className="hero-actions">
          <Link className="button light" href="/portfolio">Explore Our Work <ArrowUpRight size={18} /></Link>
          <Link className="button ghost" href="/contact">Start a Project</Link>
        </div>
      </div>
      <ChevronDown className="scroll-cue" aria-hidden />
    </section>
    <section className="split-section">
      <div>
        <p className="eyebrow">About QUARZ</p>
        <h2>We don&apos;t just plan events. We create experiences.</h2>
        <p>{siteConfig.shortIntro}</p>
        <Link className="text-link" href="/about">Read About QUARZ <ArrowUpRight size={16} /></Link>
      </div>
      <img src="/media/mainly/mainly-03.jpg" alt="XPENG G6 group delivery event backdrop" />
    </section>
    <section className="media-showcase">
      <div>
        <p className="eyebrow">Event Media</p>
        <h2>Real moments, polished into a premium brand experience.</h2>
      </div>
      <MediaCarousel images={["04", "05", "06", "07", "08", "09", "10", "11"].map((item) => `/media/mainly/mainly-${item}.jpg`)} />
    </section>
    <section className="stats-band">
      {achievements.map((item) => <article key={item.label}><strong>{item.value}</strong><span>{item.label}</span><small>Profile-reported historical figure</small></article>)}
    </section>
    <section className="section-block">
      <SectionHeading eyebrow="Our Expertise" title="End-to-end event capabilities." copy="Five core service pillars for corporate launches, activations, operational support, logistics, and event structures." />
      <div className="service-grid">{services.map((service, index) => <ServiceCard service={service} index={index} key={service.slug} />)}</div>
    </section>
    <section className="section-block dark-alt">
      <SectionHeading eyebrow="Featured Projects" title="Editorial project showcase." copy="The current cards are development placeholders until verified QUARZ project names, client assets, and event images are supplied." />
      <div className="featured-list">{projects.slice(0, 4).map((project) => <Link key={project.slug} href={`/portfolio/${project.slug}`}>
        <span>{project.client}</span>
        <strong>{project.title}</strong>
        <small>{project.category}</small>
      </Link>)}</div>
      <Link className="button ghost compact" href="/portfolio">View All Projects <ArrowUpRight size={17} /></Link>
    </section>
    <section className="trusted-band">
      <SectionHeading eyebrow="Trusted By" title="Built for brand teams that need precision." />
      <div className="client-grid">{clientNotes.map((client) => <span key={client}>{client}</span>)}</div>
      <p className="fine-print">Logo usage and named client claims should be confirmed against the QUARZ company profile and approved brand assets.</p>
    </section>
    <section className="why-grid">
      <SectionHeading eyebrow="Why QUARZ" title="Strategy, creativity, and field execution." />
      <div>{whyQuarz.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div>
    </section>
    <section className="team-preview">
      <SectionHeading eyebrow="Team Preview" title="Led by event and brand specialists." />
      <div className="profile-row">{leadership.map((person) => <article key={person.name}>
        <div><span>{person.focus}</span><h3>{person.name}</h3><p>{person.role}</p></div>
      </article>)}</div>
      <Link className="text-link" href="/team">Meet the Team <ArrowUpRight size={16} /></Link>
    </section>
    <FinalCta />
    <SiteFooter />
  </main>;
}

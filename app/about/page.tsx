import Link from "next/link";
import { ArrowUpRight, Gem } from "lucide-react";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { FinalCta, PageHero, SectionHeading } from "../components";
import { achievements, siteConfig, values } from "@/src/data/site";
import { clientNotes } from "@/src/data/clients";

export const metadata = {
  title: "About Us",
  description: "Learn about QUARZ Event Planner, a Malaysia-based corporate event and brand experience agency established in 2004.",
};

export default function AboutPage() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="About QUARZ" title="An event agency built for brand experience." copy="QUARZ plans and supports corporate events, launches, activations, roadshows, logistics, and premium event services for ambitious brand teams." />
    <section className="story-section">
      <div>
        <p className="eyebrow">Brand Story</p>
        <h2>Where strategic thinking meets real-world execution.</h2>
      </div>
      <div>
        <p>{siteConfig.shortIntro}</p>
        <p>The supplied prompt reports QUARZ has operated since 2004 and has delivered launch, activation, and support work across corporate, automotive, beauty, lifestyle, and international brand contexts. Final copy should be reconciled against the official company profile PDF before public launch.</p>
      </div>
    </section>
    <section className="two-column-band">
      <article><h2>Vision</h2><p>To create brand experiences that feel clear, memorable, and operationally controlled from planning through execution.</p></article>
      <article><h2>Mission</h2><p>To help corporate teams translate event objectives into immersive audience experiences with dependable on-ground support.</p></article>
    </section>
    <section className="section-block">
      <SectionHeading eyebrow="Core Values" title="Six values from the profile." />
      <div className="value-grid">{values.map((value, index) => <article key={value}><Gem size={26} /><span>0{index + 1}</span><h3>{value}</h3></article>)}</div>
    </section>
    <section className="journey-band">
      <SectionHeading eyebrow="Since 2004" title="A narrative journey, not a fabricated timeline." copy="No dated milestones were invented. Add confirmed milestones from the QUARZ profile or company records when available." />
      <div className="stats-band compact-stats">{achievements.map((item) => <article key={item.label}><strong>{item.value}</strong><span>{item.label}</span></article>)}</div>
    </section>
    <section className="trusted-band">
      <SectionHeading eyebrow="Clients & Collaborators" title="Corporate, automotive, beauty, luxury, and lifestyle contexts." />
      <div className="client-grid">{clientNotes.map((client) => <span key={client}>{client}</span>)}</div>
      <Link className="text-link" href="/contact">Discuss a Collaboration <ArrowUpRight size={16} /></Link>
    </section>
    <FinalCta />
    <SiteFooter />
  </main>;
}

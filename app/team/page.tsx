import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { FinalCta, PageHero, SectionHeading } from "../components";
import { leadership, managers, specialists } from "@/src/data/team";

export const metadata = {
  title: "Our Team",
  description: "Meet the QUARZ leadership, event managers, and event specialists named in the supplied company profile prompt.",
};

export default function TeamPage() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="Our Team" title="Specialists across event creative, brand, and field delivery." copy="Team names and roles are taken from the supplied prompt and should be checked against the official QUARZ company profile before publishing." />
    <section className="section-block">
      <SectionHeading eyebrow="Leadership" title="Event and brand direction." />
      <div className="leadership-grid">{leadership.map((person) => <article key={person.name}>
        <div><h2>{person.name}</h2><p>{person.role}</p><span>{person.focus}</span></div>
      </article>)}</div>
    </section>
    <section className="two-column-band team-band">
      {managers.map((person) => <article key={person.name}><h2>{person.name}</h2><p>{person.role}</p><span>{person.focus}</span></article>)}
    </section>
    <section className="section-block dark-alt">
      <SectionHeading eyebrow="Event Specialists" title="On-ground delivery support." />
      <div className="specialist-grid">{specialists.map((name) => <article key={name}><span>{name.slice(0, 1)}</span><h3>{name}</h3><p>Event Specialist</p></article>)}</div>
    </section>
    <FinalCta />
    <SiteFooter />
  </main>;
}

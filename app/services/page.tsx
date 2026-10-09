import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { FinalCta, PageHero, SectionHeading, ServiceCard } from "../components";
import { services } from "@/src/data/services";

export const metadata = {
  title: "Services",
  description: "Explore QUARZ event planning services: product launches, activations, premium support, logistics, warehousing, structures, and tentage.",
};

export default function ServicesPage() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="Services" title="Corporate event planning, activation, and support." copy="Five service categories covering strategic launch work, consumer engagement, premium support crews, logistics, warehousing, structures, and tentage." />
    <section className="section-block">
      <SectionHeading eyebrow="Service Categories" title="Designed for brand teams that need confidence on site." />
      <div className="service-grid">{services.map((service, index) => <ServiceCard service={service} index={index} key={service.slug} />)}</div>
    </section>
    <section className="process-band">
      <SectionHeading eyebrow="Planning Flow" title="From brief to field execution." />
      {[
        ["Discovery", "Clarify business goals, audience profile, venue needs, event type, and approval requirements."],
        ["Concept", "Shape a strategic event direction with guest journey, production tone, and brand experience moments."],
        ["Production", "Coordinate suppliers, crews, structures, media support, logistics, and operational details."],
        ["Deployment", "Prepare assets, on-ground teams, materials, storage movement, and site setup requirements."],
        ["Show Day", "Manage event flow, crew communication, guest support, and production coordination on site."],
        ["Post-event Wrap", "Support dismantling, asset return, storage, documentation, and post-event follow-up."],
      ].map(([step, copy], index) => <article key={step}><span>0{index + 1}</span><h3>{step}</h3><p>{copy}</p></article>)}
    </section>
    <FinalCta />
    <SiteFooter />
  </main>;
}

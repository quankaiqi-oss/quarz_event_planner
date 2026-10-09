import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { FinalCta, SectionHeading } from "../components";
import { PortfolioFilter } from "./portfolio-filter";

export const metadata = {
  title: "Portfolio",
  description: "Explore QUARZ portfolio placeholders and the structure for verified corporate event case studies.",
};

export default function PortfolioPage() {
  return <main>
    <SiteHeader />
    <section className="page-hero portfolio-hero-photo">
      <img src="/media/mainly/mainly-14.jpg" alt="QUARZ portfolio event background" />
      <div>
        <p className="eyebrow">Portfolio</p>
        <h1>Our work.</h1>
        <p>A production-ready editorial portfolio system with category filters and detail routes. Current projects are clearly marked as placeholders pending verified QUARZ assets.</p>
      </div>
    </section>
    <section className="section-block">
      <SectionHeading eyebrow="Project Gallery" title="Filter by event category." />
      <PortfolioFilter />
    </section>
    <FinalCta />
    <SiteFooter />
  </main>;
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/src/data/services";
import { siteConfig } from "@/src/data/site";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-statement">
      <Link className="brand footer-brand" href="/" aria-label="QUARZ home">
        <img src="/media/brand/quarz-logo.png" alt="QUARZ Event Planner" />
      </Link>
      <p>{siteConfig.shortIntro}</p>
      <Link className="footer-cta" href="/contact">Start a Project <ArrowUpRight size={16} /></Link>
    </div>
    <div className="footer-links">
      <div>
        <h2>Navigation</h2>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/team">Our Team</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <h2>Services</h2>
        {services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}>{service.title}</Link>)}
      </div>
      <div>
        <h2>Business Details</h2>
        <p>Malaysia-based corporate event planning agency.</p>
        <p>Business email, WhatsApp, address, and social links require company confirmation before publishing.</p>
      </div>
    </div>
    <div className="footer-bottom">
      <span>Copyright © {new Date().getFullYear()} Quarz Creations Sdn. Bhd. Legal company identity subject to confirmation.</span>
      <Link href="/privacy">Privacy</Link>
    </div>
  </footer>;
}

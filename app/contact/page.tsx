import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { PageHero } from "../components";
import { ContactForm } from "./contact-form";

export const metadata = {
  title: "Contact",
  description: "Start a corporate event inquiry with QUARZ Event Planner.",
};

export default function ContactPage() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="Contact" title="Let's create something extraordinary." copy="Tell QUARZ about your launch, activation, roadshow, or event support needs. The current build validates the form and waits for email delivery credentials before accepting production submissions." />
    <section className="contact-layout">
      <div>
        <p className="eyebrow">Business Inquiry</p>
        <h2>Start with the details that matter.</h2>
        <p>Verified business email, WhatsApp number, company address, and social media links were not supplied in the workspace. Add them in the footer and contact page after confirmation.</p>
      </div>
      <ContactForm />
    </section>
    <SiteFooter />
  </main>;
}

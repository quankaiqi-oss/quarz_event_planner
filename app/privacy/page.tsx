import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { PageHero } from "../components";

export const metadata = {
  title: "Privacy",
  description: "Privacy information for the QUARZ website.",
};

export default function PrivacyPage() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="Privacy" title="Privacy notice." copy="A practical placeholder privacy page for the QUARZ website. Review with legal counsel before publishing." />
    <section className="legal-content">
      <h2>Information Collected</h2>
      <p>The contact form may collect names, company names, business email addresses, phone numbers, event details, proposed dates, budgets, and locations.</p>
      <h2>Use of Information</h2>
      <p>Submitted information should be used only to respond to business inquiries and plan relevant event services.</p>
      <h2>Data Handling</h2>
      <p>Email delivery is not configured in this development build. Add a verified delivery provider and retention policy before launch.</p>
    </section>
    <SiteFooter />
  </main>;
}

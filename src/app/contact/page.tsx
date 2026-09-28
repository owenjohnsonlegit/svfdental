import { PageHero, OfficeHours } from "@/components/ui";
import { practice } from "@/data/practice";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact South Valley Family Dental",
  "Call South Valley Family Dental in Providence, Utah. Find our phone number and office hours.",
  "/contact",
);

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow={practice.name}
        title="Contact Us"
        photo="building-front"
      >
        Give us a call. We’re happy to help.
      </PageHero>
      <section className="section">
        <div className="container contact-page-grid">
          <div>
            <h2>Phone</h2>
            <a className="phone-link" href={practice.phoneHref}>
              {practice.phone}
            </a>
          </div>
          <div className="info-panel">
            <h2>Office hours</h2>
            <OfficeHours />
          </div>
        </div>
      </section>
    </>
  );
}

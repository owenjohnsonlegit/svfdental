import {
  PageHero,
  ContactCard,
  OfficeHours,
  CallButton,
  TextLink,
  CTASection,
} from "@/components/ui";
import { practice } from "@/data/practice";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contact Our Office",
  "Call South Valley Family Dental in Providence, Utah. Find our address, directions, office hours, and patient resources.",
  "/contact",
);
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="We’re happy to help"
        title="Let’s talk about your next visit."
      >
        Call our office to schedule an appointment or ask a question about your
        care.
      </PageHero>
      <section className="section">
        <div className="container contact-page-grid">
          <div>
            <p className="eyebrow">
              {practice.name} · {practice.dentist}
            </p>
            <ContactCard />
            <div style={{ marginTop: 25 }}>
              <CallButton label="Call our office" />
            </div>
          </div>
          <div className="info-panel">
            <h2>Office hours</h2>
            <OfficeHours />
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container content-grid">
          <div className="content-stack">
            <section>
              <h2>Getting ready for your appointment?</h2>
              <p>
                Find practical information about appointments, insurance, and
                payment options.
              </p>
              <TextLink href="/office-info">Plan your visit</TextLink>
            </section>
          </div>
          <div>
            <h3>Questions about forms or payments?</h3>
            <p style={{ marginTop: 15 }}>
              Our team can help you access patient forms and the practice’s
              payment service. Please call the office for assistance.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

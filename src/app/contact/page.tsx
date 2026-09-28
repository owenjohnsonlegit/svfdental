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
import { LocationMap } from "@/components/location-map";
import { SectionHeading } from "@/components/ui";
export const metadata = pageMetadata(
  "Contact South Valley Family Dental",
  "Call South Valley Family Dental in Providence, Utah. Find our address, directions, office hours, and patient resources.",
  "/contact",
);
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Contact South Valley Family Dental"
        photo="building-front"
      >
        Call Us to schedule an appointment or ask a question about your care.
      </PageHero>
      <section className="section">
        <div className="container contact-page-grid">
          <div>
            <p className="eyebrow">
              {practice.name} · {practice.dentist}
            </p>
            <ContactCard />
            <div style={{ marginTop: 25 }}>
              <CallButton label="Call Us" />
            </div>
          </div>
          <div className="info-panel">
            <h2>Office hours</h2>
            <OfficeHours />
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <div className="section-top">
            <SectionHeading eyebrow="Directions" title="Our Location">
              Find our office on Springcreek Parkway in Providence and get
              directions for your visit.
            </SectionHeading>
          </div>
          <LocationMap />
        </div>
      </section>
      <section className="section section-tint">
        <div className="container content-grid">
          <div className="content-stack">
            <section>
              <h2>Appointments</h2>
              <p>
                Find practical information about appointments, insurance, and
                payment options.
              </p>
              <TextLink href="/office-info">Office Information</TextLink>
            </section>
          </div>
          <div>
            <h3>Patient Forms and Payments</h3>
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

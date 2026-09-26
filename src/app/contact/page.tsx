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
import { PracticePhoto } from "@/components/photography";
import { ExternalLink, SectionHeading } from "@/components/ui";
import { directionsUrl } from "@/data/practice";
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
        photo="building-front"
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
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow="Find your way here"
              title="Right here in Providence."
            >
              See our office in its neighborhood, with Cache Valley’s mountains
              in the distance.
            </SectionHeading>
            <ExternalLink href={directionsUrl}>
              Get turn-by-turn directions
            </ExternalLink>
          </div>
          <PracticePhoto
            id="valley-southeast"
            className="directions-photo"
            sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1300px) calc(100vw - 96px), 1200px"
          />
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

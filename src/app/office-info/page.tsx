import {
  PageHero,
  Address,
  OfficeHours,
  CallButton,
  ExternalLink,
  CTASection,
} from "@/components/ui";
import { practice, directionsUrl } from "@/data/practice";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Office Information",
  "Plan your visit to our Providence dental office. Find office hours, directions, appointment information, insurance, and payment options.",
  "/office-info",
);
export default function OfficeInfo() {
  return (
    <>
      <PageHero
        eyebrow="Make yourself at home"
        title="A little planning. A comfortable visit."
      >
        Everything you need to know before visiting our Providence office.
      </PageHero>
      <section className="section">
        <div className="container content-grid">
          <div className="content-stack">
            <section>
              <h2>Come see us in Providence.</h2>
              <p>
                {practice.name}
                <br />
                {practice.dentist}
              </p>
              <Address />
              <ExternalLink href={directionsUrl}>
                Get directions to our office
              </ExternalLink>
            </section>
            <section>
              <h2>Appointments</h2>
              <p>
                To schedule a visit, call{" "}
                <a className="text-link" href={practice.phoneHref}>
                  {practice.phone}
                </a>
                . If you cannot keep an appointment or expect to be late, please
                call the office so we can help.
              </p>
            </section>
            <section id="insurance">
              <h2>Insurance & billing</h2>
              <p>
                Our office accepts most traditional insurance plans and files
                insurance claims. Please contact us to verify your specific plan
                and discuss your coverage before your appointment.
              </p>
              <p>
                The practice does not participate in HMOs. Insurance coverage
                varies by plan; our team can help with your questions.
              </p>
            </section>
            <section>
              <h2>Payment options</h2>
              <p>
                Payment options include cash, checks, and credit cards. Please
                call to discuss flexible payment arrangements.
              </p>
            </section>
            <section>
              <h2>Financing questions?</h2>
              <p>
                Please contact our office to ask about current financing options
                and CareCredit availability.
              </p>
              {practice.careCreditUrl && (
                <ExternalLink href={practice.careCreditUrl}>
                  Explore CareCredit
                </ExternalLink>
              )}
            </section>
          </div>
          <aside>
            <div className="info-panel">
              <h2>Office hours</h2>
              <OfficeHours />
            </div>
            <div className="info-panel">
              <h2>We’re here to help.</h2>
              <p>
                Questions about your visit, insurance, or payment? Give our team
                a call.
              </p>
              <CallButton label={practice.phone} />
            </div>
          </aside>
        </div>
      </section>
      <CTASection />
    </>
  );
}

import {
  PageHero,
  Address,
  OfficeHours,
  CallButton,
  ExternalLink,
  CTASection,
  SectionHeading,
} from "@/components/ui";
import { PhotoGallery } from "@/components/photography";
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
        eyebrow="Office Information"
        title="Our Location"
        photo="reception"
      >
        This page provides practical information about our practice, including
        our location, directions, office hours, appointment scheduling,
        insurance, billing, and payment policies.
      </PageHero>
      <section className="section">
        <div className="container content-grid">
          <div className="content-stack">
            <section>
              <h2>South Valley Family Dental in Providence</h2>
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
                We know you have many choices when choosing a dentist in Cache
                Valley, so we try to make scheduling an appointment as simple as
                possible.
              </p>
              <p>
                If, for any reason, you cannot keep a scheduled appointment or
                expect to be late, please call us as soon as possible.
              </p>
            </section>
            <section id="insurance">
              <h2>Insurance and Billing</h2>
              <p>
                We accept most traditional insurance plans. Please contact our
                office to verify acceptance of your specific plan.
              </p>
              <p>
                South Valley Family Dental does not participate in Health
                Maintenance Organizations (HMOs); however, we will be happy to
                file your insurance claims for you.
              </p>
            </section>
            <section>
              <h2>Payment Options</h2>
              <p>
                We accept cash, checks, and credit cards. We also offer flexible
                payment options. Please see our Financial Coordinator for
                details.
              </p>
              <p>
                We are happy to file insurance claims for your reimbursement as
                long as you are free to choose your own dentist.
              </p>
            </section>
            <section>
              <h2>Financing Options</h2>
              <p>
                Please contact our office to ask about current financing options
                and CareCredit availability.
              </p>
              {practice.careCreditUrl && (
                <>
                  <h3>CareCredit</h3>
                  <p>
                    CareCredit can help you pay for treatments and procedures
                    that may not be covered by your insurance. Financing and
                    monthly payment options may be available for qualifying
                    patients.
                  </p>
                  <p>
                    Once approved, CareCredit can be used for eligible
                    healthcare services, including dental treatment.
                  </p>
                  <ExternalLink href={practice.careCreditUrl}>
                    Visit CareCredit for current financing options, terms, or to
                    apply online
                  </ExternalLink>
                </>
              )}
            </section>
          </div>
          <aside>
            <div className="info-panel">
              <h2>Office hours</h2>
              <OfficeHours />
            </div>
            <div className="info-panel">
              <h2>Questions About Your Visit?</h2>
              <p>
                Questions about your visit, insurance, or payment? Give our team
                a call.
              </p>
              <CallButton label={practice.phone} />
            </div>
          </aside>
        </div>
      </section>
      <section className="section section-tint" id="office-tour">
        <div className="container">
          <SectionHeading eyebrow="A tour of our office" title="Our Office">
            Take a look at the places you’ll see during your visit, from the
            entrance to the treatment room.
          </SectionHeading>
          <PhotoGallery
            className="office-tour-gallery"
            items={[
              { id: "building-west", caption: "Our office and parking area" },
              {
                id: "waiting-room-wide",
                caption: "The waiting area, with reception just beyond",
              },
              {
                id: "waiting-room-fireplace",
                caption: "Seating around the fireplace",
              },
              {
                id: "waiting-room-seating",
                caption: "Chairs and a sofa beside the windows",
              },
              {
                id: "reception-workspace",
                caption: "Another look at our reception area",
              },
              { id: "treatment-room", caption: "Inside a treatment room" },
              { id: "massage-chair", caption: "A quiet corner of the office" },
            ]}
          />
        </div>
      </section>
      <CTASection />
    </>
  );
}

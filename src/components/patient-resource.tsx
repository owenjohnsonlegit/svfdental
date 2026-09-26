import { PageHero, CallButton, ExternalLink, TextLink } from "./ui";
import { practice } from "@/data/practice";
export function PatientResource({ type }: { type: "forms" | "payment" }) {
  const forms = type === "forms";
  const url = forms
    ? practice.externalPatientFormsUrl
    : practice.externalPaymentUrl;
  return (
    <>
      <PageHero
        eyebrow="Patient resources"
        title={forms ? "Patient forms" : "Make a payment"}
        photo="reception"
      >
        {forms
          ? "Prepare for your visit with help from our office."
          : "Our office can help with your payment questions."}
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="resource-card info-panel">
            <h2>
              {url
                ? forms
                  ? "Complete your forms online"
                  : "Continue to online payment"
                : "Please call our office."}
            </h2>
            {url ? (
              <>
                <p>
                  You’ll continue to our external{" "}
                  {forms ? "patient forms" : "payment"} service in a new tab.
                </p>
                <ExternalLink className="button button-primary" href={url}>
                  {forms ? "Open patient forms" : "Open payment service"}
                </ExternalLink>
              </>
            ) : (
              <>
                <p>
                  {forms
                    ? "Please call for the current patient forms link or for help preparing for your appointment."
                    : "Please call for the current online payment link or to discuss payment options with our team."}
                </p>
                <CallButton label={practice.phone} />
              </>
            )}
            <p className="fine-print" style={{ marginTop: 25 }}>
              This website does not collect{" "}
              {forms
                ? "patient or medical information"
                : "card or banking information"}
              .
            </p>
            <TextLink href="/office-info">Office information</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}

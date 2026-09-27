import {
  PageHero,
  CareIcon,
  SectionHeading,
  CTASection,
  CallButton,
} from "@/components/ui";
import { serviceCategories, careFeatures } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { PhotoGallery } from "@/components/photography";
export const metadata = pageMetadata(
  "Dental Services",
  "Explore preventive, restorative, cosmetic, periodontal, and emergency dental care at South Valley Family Dental in Providence, Utah.",
  "/services",
);
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Dental Services"
        photo="treatment-room-door"
      >
        Like everything else in life, if you want something to look good and
        last, you’ve got to take care of it. Smiles are no exception.
      </PageHero>
      <section className="section">
        <div className="container">
          <p>
            Whether you want to improve your smile, replace loose or missing
            teeth, remove stains, eliminate bad breath, or treat gum disease,
            our staff will work with you to help you achieve a natural, healthy
            smile.
          </p>
          <h2>Services We Offer Include</h2>
          <nav className="category-nav" aria-label="Service categories">
            {serviceCategories.map((c) => (
              <a key={c.id} href={`#${c.id}`}>
                {c.name}
              </a>
            ))}
          </nav>
          {serviceCategories.map((c) => (
            <section className="service-category" id={c.id} key={c.id}>
              <header>
                <CareIcon name={c.icon} />
                <h2>{c.name}</h2>
                <p>{c.intro}</p>
              </header>
              <div className="service-list">
                {c.services.map((s) => (
                  <article key={s.name}>
                    <h3>{s.name}</h3>
                    <p>{s.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <SectionHeading
            eyebrow="Our Office"
            title="Safety and Patient Comfort"
          />
          <div className="feature-grid" style={{ marginTop: 35 }}>
            {careFeatures.map((f) => (
              <article className="feature" key={f.title}>
                <span className="icon-box">
                  <CareIcon name={f.icon} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
          <div className="emergency-note">
            <div>
              <h3>Dental Emergencies</h3>
              <p>
                We realize that dental pain can’t always wait. Appointment times
                are reserved to help us address emergency dental needs promptly,
                so please call our office if you are experiencing a dental
                emergency.
              </p>
            </div>
            <CallButton label="Call our office" />
          </div>
          <div className="content-stack">
            <section>
              <h2>Emergency Dental Treatment</h2>
              <p>
                If you have a life-threatening or severe injury, call 911 or go
                directly to the nearest hospital emergency room.
              </p>
              <p>
                We can treat a variety of dental injuries, including teeth that
                have been chipped, moved, or knocked out entirely. Please call
                our office for assistance.
              </p>
            </section>
            <section>
              <h2>Insurance Providers</h2>
              <p>
                We accept a variety of insurance plans. Please call our office
                or check with your insurance provider to verify whether South
                Valley Family Dental is included in your plan.
              </p>
            </section>
          </div>
          <div className="equipment-gallery">
            <SectionHeading
              eyebrow="Inside the practice"
              title="Dental Equipment"
            />
            <PhotoGallery
              items={[
                {
                  id: "intraoral-xray",
                  caption: "Treatment-room X-ray equipment",
                },
                {
                  id: "panoramic-xray",
                  caption: "Panoramic dental imaging equipment",
                },
                {
                  id: "dental-instruments",
                  caption: "Dental instruments and treatment tray",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

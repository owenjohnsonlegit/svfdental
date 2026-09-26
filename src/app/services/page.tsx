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
        eyebrow="Care for your whole family"
        title="Your smile. Thoughtfully cared for."
        photo="treatment-room-door"
      >
        Explore our dental services, then talk with Dr. Johnson about the care
        that fits your needs.
      </PageHero>
      <section className="section">
        <div className="container">
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
            eyebrow="Comfort, safety & family"
            title="Good care is in the details."
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
              <h3>Need emergency dental care?</h3>
              <p>
                We reserve appointment time for emergency needs. Call the office
                to discuss your concern and availability.
              </p>
            </div>
            <CallButton label="Call our office" />
          </div>
          <div className="equipment-gallery">
            <SectionHeading
              eyebrow="Inside the practice"
              title="A closer look at our office."
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

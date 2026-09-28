import Link from "next/link";
import { LocationMap } from "@/components/location-map";
import { ArrowRight, MapPin, ShieldCheck, Users } from "lucide-react";
import {
  CallButton,
  TextLink,
  SectionHeading,
  CareIcon,
  LocationSection,
  CTASection,
  TestimonialCard,
} from "@/components/ui";
import { practice } from "@/data/practice";
import { careFeatures } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { pageMetadata } from "@/lib/metadata";
import { PracticePhoto, PhotoGallery } from "@/components/photography";
export const metadata = pageMetadata(
  "Family Dentist in Providence, Utah",
  "Local family dental care with Richard S. Johnson, DDS. Serving Providence since 2005. Explore services and call our Cache Valley office to schedule.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              South Valley Family Dental
            </p>
            <h1>
              Dental care
              <br />
              for the
              <br />
              <em>whole family.</em>
            </h1>
            <p className="hero-description">
              At South Valley Family Dental, you are not simply a customer to
              us, but a patient. We want you to have an enjoyable and pleasant
              experience at our dental office.
            </p>
            <div className="hero-actions">
              <CallButton />
              <Link className="button button-outline" href="/services">
                View Our Services
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <p className="hero-footnote">
              <MapPin size={16} aria-hidden="true" />
              Providence, Utah · Se habla español.
            </p>
          </div>
          <div className="hero-visual">
            <PracticePhoto
              id="building-front"
              className="hero-photo"
              priority
              sizes="(max-width: 640px) calc(100vw - 50px), (max-width: 900px) 43vw, 600px"
            />
          </div>
        </div>
      </section>
      <div className="trust-bar">
        <div className="container trust-grid">
          <span>
            <MapPin />
            Providence, Utah
          </span>
          <span>
            <ShieldCheck />
            Richard S. Johnson, DDS
          </span>
          <span>
            <Users />
            Care for the whole family
          </span>
        </div>
      </div>
      <section className="section">
        <div className="container intro-grid">
          <div className="doctor-photo">
            <PracticePhoto id="richard" className="doctor-portrait" />
            <span className="image-corner-label">{practice.dentist}</span>
          </div>
          <div className="intro-copy">
            <SectionHeading
              eyebrow="Welcome to South Valley Family Dental"
              title="Your Dentist in Providence, Utah"
            />
            <p>
              Going to the dentist should be a pleasant experience for you and
              your whole family. Come see us at South Valley Family Dental and
              give your teeth the attention they deserve.
            </p>
            <p>
              Your health and comfort are our number one priority at South
              Valley Family Dental.
            </p>
            <p>
              If, for any reason, we feel a procedure would be better performed
              by a specialist, we will refer you to a doctor equipped to handle
              your specific needs.
            </p>
            <p>Let us help you achieve the smile you’ve been looking for.</p>
            <TextLink href="/about">Meet Dr. Johnson</TextLink>
          </div>
        </div>
      </section>
      <section className="section section-tint office-preview">
        <div className="container">
          <div className="section-top">
            <SectionHeading eyebrow="Office Information" title="Our Office">
              Take a look at our waiting room, reception area, and treatment
              rooms.
            </SectionHeading>
            <TextLink href="/office-info#office-tour">Tour our office</TextLink>
          </div>
          <PhotoGallery
            items={[
              {
                id: "waiting-room-windows",
                caption: "Waiting Room",
              },
              { id: "reception", caption: "Reception" },
              {
                id: "treatment-room",
                caption: "Treatment Room",
              },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="center-heading">
            <SectionHeading
              eyebrow="Your Visit"
              title="Your Health and Comfort"
            >
              Your health and comfort are our number one priority at South
              Valley Family Dental.
            </SectionHeading>
          </div>
          <div className="feature-grid">
            {careFeatures.map((feature) => (
              <article key={feature.title} className="feature">
                <span className="icon-box">
                  <CareIcon name={feature.icon} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
          <div className="emergency-note">
            <div>
              <strong>Dental Emergencies</strong>
              <p>
                We realize that dental pain can’t always wait. Appointment times
                are reserved to help us address emergency dental needs promptly,
                so please call our office if you are experiencing a dental
                emergency.
              </p>
            </div>
            <a className="text-link" href={practice.phoneHref}>
              Call {practice.phone}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container team-intro">
          <PracticePhoto
            id="team"
            className="team-photo"
            sizes="(max-width: 900px) calc(100vw - 40px), 720px"
          />
          <div>
            <SectionHeading eyebrow="Meet Our Staff" title="Learn Who We Are">
              It’s important to know you’re in good hands when someone is caring
              for your teeth.
            </SectionHeading>
            <p>
              We follow the golden rule: treat others as you would like to be
              treated. We see hundreds of patients each month and strive to
              treat everyone with respect and kindness while remaining
              professional in our work.
            </p>
            <TextLink href="/about">Meet Our Team</TextLink>
          </div>
        </div>
      </section>
      {testimonials.some((t) => t.approved) && (
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="Testimonials"
              title="What Our Patients Say About Us"
            />
            <div className="service-grid">
              {testimonials
                .filter((t) => t.approved)
                .slice(0, 4)
                .map((t) => (
                  <TestimonialCard key={t.quote} testimonial={t} />
                ))}
            </div>
          </div>
        </section>
      )}
      <section className="section section-tint">
        <div className="container">
          <SectionHeading eyebrow="Dental Care" title="Our Services" />
          <div className="general-dentistry-summary">
            <article className="feature">
              <h3>General Dentistry</h3>
              <p>
                General dentistry encompasses a range of services and procedures
                with a common goal: to help preserve your natural teeth,
                maintain your oral health, and keep you looking and feeling your
                best.
              </p>
              <TextLink href="/services">Explore Our Services</TextLink>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Patient Resources" title="Make a Payment">
            Need to pay your bill? You can make a payment online through our
            secure payment platform.
          </SectionHeading>
          <TextLink href={practice.externalPaymentUrl ?? "/make-a-payment"}>
            Make a Payment
          </TextLink>
        </div>
      </section>
      <LocationSection>
        <LocationMap />
      </LocationSection>
      <CTASection />
    </>
  );
}

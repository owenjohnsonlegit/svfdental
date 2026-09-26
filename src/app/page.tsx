import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Heart, Users } from "lucide-react";
import {
  CallButton,
  TextLink,
  SectionHeading,
  PhotoPlaceholder,
  ServiceCard,
  CareIcon,
  LocationSection,
  CTASection,
  TestimonialCard,
} from "@/components/ui";
import { practice } from "@/data/practice";
import { serviceCategories, careFeatures } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { pageMetadata } from "@/lib/metadata";
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
              Your family. Your smile. Your dentist.
            </p>
            <h1>
              Good care.
              <br />
              Familiar faces.
              <br />
              <em>A healthier smile.</em>
            </h1>
            <p className="hero-description">
              Family dentistry with a personal touch, right here in Providence,
              Utah.
            </p>
            <div className="hero-actions">
              <CallButton />
              <Link className="button button-outline" href="/services">
                Explore our services
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <p className="hero-footnote">
              <MapPin size={16} aria-hidden="true" />
              Rooted in Cache Valley. Practicing in Providence since 2005.
            </p>
          </div>
          <div className="hero-visual">
            <PhotoPlaceholder label="Our office & team" />
            <div className="hero-plaque">
              <span className="plaque-mark">
                <Heart size={24} strokeWidth={1.4} />
              </span>
              <div>
                <strong>A local practice. A personal approach.</strong>
                <span>{practice.dentist}</span>
              </div>
            </div>
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
            <PhotoPlaceholder label="Richard S. Johnson, DDS" portrait />
            <span className="image-corner-label">A Cache Valley native</span>
          </div>
          <div className="intro-copy">
            <SectionHeading
              eyebrow="A familiar face in your community"
              title="Your family’s dentist. Your neighbor, too."
            />
            <p>
              A Cache Valley native, Dr. Richard S. Johnson returned to the area
              to raise his family and has been practicing in Providence since
              2005.
            </p>
            <p>
              He earned his Doctor of Dental Surgery degree from The Ohio State
              University College of Dentistry, graduating summa cum laude.
              Continuing dental education remains part of his commitment to
              patient care.
            </p>
            <TextLink href="/about">Meet Dr. Johnson</TextLink>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow="Care for every chapter"
              title="Healthy smiles, at every stage."
            >
              From regular cleanings to restorative treatment, find care for
              your family’s dental needs.
            </SectionHeading>
            <TextLink href="/services">View all services</TextLink>
          </div>
          <div className="service-grid">
            {serviceCategories.map((category, index) => (
              <ServiceCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="center-heading">
            <SectionHeading
              eyebrow="The South Valley approach"
              title="The little things that make care feel personal."
            >
              A focus on your comfort, your family, and the details of your
              care.
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
              <strong>A dental concern that can’t wait?</strong>
              <p>
                We reserve appointment time for emergency needs. Call us to
                discuss your situation.
              </p>
            </div>
            <a className="text-link" href={practice.phoneHref}>
              Call {practice.phone}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      {testimonials.some((t) => t.approved) && (
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="From our patients"
              title="A few words from our community."
            />
            <div className="service-grid">
              {testimonials
                .filter((t) => t.approved)
                .slice(0, 3)
                .map((t) => (
                  <TestimonialCard key={t.quote} testimonial={t} />
                ))}
            </div>
          </div>
        </section>
      )}
      <LocationSection />
      <CTASection />
    </>
  );
}

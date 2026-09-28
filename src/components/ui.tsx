import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  ShieldCheck,
  Heart,
  Users,
  ScanLine,
  Sparkles,
  Smile,
  Plus,
  CircleCheck,
  type LucideIcon,
} from "lucide-react";
import { practice, directionsUrl } from "@/data/practice";
import { serviceCategories } from "@/data/services";
import type { StaffMember } from "@/data/staff";
import type { Testimonial } from "@/data/testimonials";
import { PracticePhoto, type PhotoId } from "./photography";

const icons: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  heart: Heart,
  users: Users,
  scan: ScanLine,
  sparkles: Sparkles,
  smile: Smile,
  plus: Plus,
  tooth: CircleCheck,
};
export function CareIcon({ name }: { name: string }) {
  const Icon = icons[name] ?? Smile;
  return <Icon size={26} strokeWidth={1.5} aria-hidden="true" />;
}
export function CallButton({
  label = "Call to schedule",
  secondary = false,
}: {
  label?: string;
  secondary?: boolean;
}) {
  return (
    <a
      className={`button ${secondary ? "button-light" : "button-primary"}`}
      href={practice.phoneHref}
    >
      <Phone size={17} aria-hidden="true" />
      {label}
    </a>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function ExternalLink({
  href,
  children,
  className = "text-link",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="lede">{children}</p>}
    </div>
  );
}
export function PageHero({
  eyebrow,
  title,
  children,
  photo,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  photo?: PhotoId;
}) {
  return (
    <section className={`page-hero ${photo ? "page-hero-with-photo" : ""}`}>
      <div className={`container ${photo ? "page-hero-grid" : ""}`}>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lede">{children}</p>
        </div>
        {photo && (
          <PracticePhoto id={photo} className="page-lead-photo" priority />
        )}
      </div>
    </section>
  );
}
export function PhotoPlaceholder({
  label,
  portrait = false,
}: {
  label: string;
  portrait?: boolean;
}) {
  return (
    <div
      className={`photo-placeholder ${portrait ? "portrait-placeholder" : ""}`}
      role="img"
      aria-label={`${label} placeholder; practice photography to be added`}
    >
      <div className="photo-monogram" aria-hidden="true">
        SV<span>FAMILY DENTAL</span>
      </div>
      <span className="photo-caption">
        {label}
        <span>Practice photography coming soon</span>
      </span>
    </div>
  );
}
export function OfficeHours() {
  return (
    <div className="office-hours">
      <dl>
        {practice.hours.map((hour) => (
          <div key={hour.day}>
            <dt>{hour.day}</dt>
            <dd>
              {hour.time}
              {hour.note && <small>{hour.note}</small>}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
export function Address() {
  return (
    <address>
      {practice.address.street}
      <br />
      {practice.address.city}, {practice.address.region}{" "}
      {practice.address.postalCode}
    </address>
  );
}
export function ContactCard() {
  return (
    <div className="contact-card">
      <p className="eyebrow">Find us in Providence</p>
      <h2>Our Location</h2>
      <Address />
      <a className="phone-link" href={practice.phoneHref}>
        {practice.phone}
      </a>
      <p>Se habla español.</p>
      <ExternalLink href={directionsUrl}>Get directions</ExternalLink>
    </div>
  );
}
export function LocationSection({ children }: { children?: React.ReactNode }) {
  return (
    <section className="section" id="location">
      <div className="container location-grid">
        <ContactCard />
        <div className="hours-panel">
          <h3>Office hours</h3>
          <OfficeHours />
        </div>
        <div className="location-note">
          <PracticePhoto
            id="building-close"
            className="location-building"
            sizes="(max-width: 640px) calc(100vw - 88px), 400px"
          />
          <MapPin size={32} strokeWidth={1.3} aria-hidden="true" />
          <p className="eyebrow">Providence, Utah</p>
          <h3>South Valley Family Dental in Providence</h3>
          <p>Find our office on Springcreek Parkway in Cache Valley.</p>
          <ExternalLink href={directionsUrl}>Open in Google Maps</ExternalLink>
        </div>
        {children && <div className="location-map-row">{children}</div>}
      </div>
    </section>
  );
}
export function CTASection() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">Appointments</p>
          <h2>Schedule an Appointment</h2>
          <p>
            Come see us at our office or call us at (435) 787-2122 to schedule
            an appointment.
          </p>
        </div>
        <div className="cta-actions">
          <CallButton label={practice.phone} secondary />
          <Link href="/contact">
            Contact our office <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function ServiceCard({
  category,
  index,
}: {
  category: (typeof serviceCategories)[number];
  index: number;
}) {
  return (
    <Link href={`/services#${category.id}`} className="service-card">
      <div className="service-card-top">
        <CareIcon name={category.icon} />
        <span>0{index + 1}</span>
      </div>
      <h3>{category.name}</h3>
      <p>{category.intro}</p>
      <span className="service-card-bottom">
        View services <ArrowRight size={18} aria-hidden="true" />
      </span>
    </Link>
  );
}
export function StaffCard({ member }: { member: StaffMember }) {
  return (
    <article className="staff-card">
      {member.photo && (
        <PracticePhoto
          id={member.photo}
          sizes="(max-width: 640px) calc(100vw - 40px), 400px"
        />
      )}
      <h3>{member.name}</h3>
      {member.role && <p className="eyebrow">{member.role}</p>}
      {member.bio?.split("\n\n").map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </article>
  );
}
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="testimonial-card">
      <blockquote>“{testimonial.quote}”</blockquote>
      <figcaption>{testimonial.attribution}</figcaption>
    </figure>
  );
}

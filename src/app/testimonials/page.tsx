import { PageHero, TestimonialCard, CTASection } from "@/components/ui";
import { testimonials } from "@/data/testimonials";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Testimonials",
  "What our patients say about South Valley Family Dental in Providence, Utah.",
  "/testimonials",
);
export default function Testimonials() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="What Our Patients Say About Us">
        South Valley Family Dental
      </PageHero>
      <section className="section">
        <div className="container service-grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.attribution} testimonial={t} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}

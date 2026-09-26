import {
  PageHero,
  SectionHeading,
  StaffCard,
  CTASection,
  TextLink,
} from "@/components/ui";
import { staff } from "@/data/staff";
import { practice } from "@/data/practice";
import { pageMetadata } from "@/lib/metadata";
import { PracticePhoto } from "@/components/photography";
export const metadata = pageMetadata(
  "Meet Dr. Johnson",
  "Meet Richard S. Johnson, DDS, a Cache Valley native practicing in Providence since 2005 and a summa cum laude graduate of Ohio State.",
  "/about",
);
export default function About() {
  const verifiedStaff = staff.filter((s) => s.verified);
  return (
    <>
      <PageHero
        eyebrow="Our roots run local"
        title="A familiar face. A lasting connection."
      >
        Get to know the dentist behind South Valley Family Dental.
      </PageHero>
      <section className="section">
        <div className="container intro-grid">
          <PracticePhoto id="richard" className="doctor-portrait" />
          <div className="intro-copy">
            <SectionHeading
              eyebrow="Meet your dentist"
              title={practice.dentist}
            />
            <p>
              Dr. Johnson earned his Doctor of Dental Surgery degree from The
              Ohio State University College of Dentistry, where he graduated
              summa cum laude.
            </p>
            <p>
              A Cache Valley native, he returned to the area to raise his family
              and has been practicing in Providence since 2005. He continues his
              dental education as part of his commitment to patient care.
            </p>
            <p>
              At South Valley Family Dental, local roots and a focus on family
              are part of who we are.
            </p>
            <TextLink href="/contact">Get in touch with our office</TextLink>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow="The people behind your care"
              title="A team focused on your family."
            >
              Our staff helps patients feel comfortable, including children
              getting to know the dentist.
            </SectionHeading>
          </div>
          <PracticePhoto
            id="team"
            className="about-team-photo"
            sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1300px) calc(100vw - 96px), 1200px"
          />
          {verifiedStaff.length > 0 && (
            <div className="team-grid">
              {verifiedStaff.map((member) => (
                <StaffCard key={member.name} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="section">
        <div className="container local-roots">
          <div>
            <SectionHeading
              eyebrow="Rooted in Cache Valley"
              title="A community we call home."
            >
              Dr. Johnson returned to Cache Valley to raise his family. It’s the
              same community our office serves today.
            </SectionHeading>
            <TextLink href="/contact">Find our Providence office</TextLink>
          </div>
          <PracticePhoto
            id="valley-east"
            className="landscape-photo"
            sizes="(max-width: 900px) calc(100vw - 40px), 720px"
          />
        </div>
      </section>
      <CTASection />
    </>
  );
}

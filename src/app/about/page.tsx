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
  "About Us",
  "Meet Richard S. Johnson, DDS, a Cache Valley native practicing in Providence since 2005 and a summa cum laude graduate of Ohio State.",
  "/about",
);
export default function About() {
  const displayedStaff = staff;
  return (
    <>
      <PageHero eyebrow="About Us" title="Dental Staff">
        It’s important to know you’re in good hands when someone is caring for
        your teeth.
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
              Dr. Johnson received his Doctor of Dental Surgery degree from The
              Ohio State University College of Dentistry. He graduated with
              summa cum laude honors and has been practicing in Providence since
              2005.
            </p>
            <p>
              His education as a dentist did not end when he received his
              diploma. As a healthcare professional, he feels a responsibility
              to continue learning about the latest treatments in dentistry.
            </p>
            <p>
              “I owe it to my patients to educate myself about their dental
              needs and provide them with the same care I would provide my
              family.”
            </p>
            <p>
              Dr. Johnson is married and has four children. He is a native of
              Cache Valley and feels blessed to have been able to move back home
              to raise his family.
            </p>
            <p>
              When he isn’t taking care of teeth, he enjoys fishing the Madison
              River in Montana and cheering on the Aggies.
            </p>
            <TextLink href="/contact">Get in touch with our office</TextLink>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow="South Valley Family Dental"
              title="Meet the Staff"
            >
              Our staff at South Valley Family Dental is committed to sincerely
              listening to your concerns. We take pride in getting to know our
              patients and want you to feel at home in our office.
            </SectionHeading>
          </div>
          <p>
            Our dental staff is trained to help you with your dental needs, from
            proper flossing techniques to questions about payments and
            insurance.
          </p>
          <PracticePhoto
            id="team"
            className="about-team-photo"
            sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1300px) calc(100vw - 96px), 1200px"
          />
          {displayedStaff.length > 0 && (
            <div className="team-grid">
              {displayedStaff.map((member) => (
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
              eyebrow="Cache Valley"
              title="Our Home in Providence"
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

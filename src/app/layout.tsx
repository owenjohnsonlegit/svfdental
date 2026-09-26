import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { practice } from "@/data/practice";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(practice.url),
  title: {
    default: `${practice.name} | Providence, Utah`,
    template: `%s | ${practice.name}`,
  },
  description:
    "Family dentistry with Richard S. Johnson, DDS in Providence, Utah. Explore our dental services, office information, and call to schedule your visit.",
  openGraph: { type: "website", locale: "en_US", siteName: practice.name },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${practice.url}/#practice`,
    name: practice.name,
    url: practice.url,
    telephone: practice.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: practice.address.street,
      addressLocality: practice.address.city,
      addressRegion: practice.address.region,
      postalCode: practice.address.postalCode,
      addressCountry: "US",
    },
    employee: { "@type": "Person", name: practice.dentist },
    areaServed: ["Providence, Utah", "Cache Valley"],
  };
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

// Source: owner-provided redesign brief. Live site retrieval was blocked by Cloudflare.
// See PRE-LAUNCH.md. Never substitute a guessed patient/payment provider URL.
export const practice = {
  name: "South Valley Family Dental",
  dentist: "Richard S. Johnson, DDS",
  phone: "(435) 787-2122",
  phoneHref: "tel:+14357872122",
  url: "https://southvalleyfamilydental.com",
  address: {
    street: "272 N. Springcreek Pkwy",
    city: "Providence",
    region: "UT",
    postalCode: "84332",
  },
  externalPatientFormsUrl:
    "https://www.ident.ws/template_include/new_patient_sign_in.do?site=19448&practiceId=48125",
  externalPaymentUrl: null as string | null,
  careCreditUrl: null as string | null,
  socialLinks: [] as { label: string; url: string }[],
  // TODO LAUNCH BLOCKER: confirm all hours, especially conflicting Thursday schedules.
  hoursConfirmed: false,
  hours: [
    { day: "Monday", time: "8:00 AM–5:00 PM" },
    { day: "Tuesday", time: "12:00 PM–7:00 PM" },
    { day: "Wednesday", time: "8:00 AM–5:00 PM" },
    { day: "Thursday", time: "Call to confirm" },
    { day: "Friday", time: "8:00 AM–12:30 PM", note: "Every other Friday" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],
};
export const fullAddress = `${practice.address.street}, ${practice.address.city}, ${practice.address.region} ${practice.address.postalCode}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
export const navigation = [
  { label: "Home", href: "/" },
  { label: "Office Information", href: "/office-info" },
  { label: "Services", href: "/services" },
  {
    label: "Patient Forms",
    href: "/patient-forms",
  },
  {
    label: "Make a Payment",
    href: practice.externalPaymentUrl ?? "/make-a-payment",
    external: !!practice.externalPaymentUrl,
  },
  { label: "About Us", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
];

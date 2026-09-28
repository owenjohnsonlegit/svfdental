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
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.3464605156973!2d-111.83082082412402!3d41.7130421712604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87547e491bb183fd%3A0x759f2ed6ce54db55!2sSouth%20Valley%20Family%20Dental!5e0!3m2!1sen!2stw!4v1790603600333!5m2!1sen!2stw",
  externalPatientFormsUrl:
    "https://www.ident.ws/template_include/new_patient_sign_in.do?site=19448&practiceId=48125",
  externalPaymentUrl: null as string | null,
  careCreditUrl: null as string | null,
  socialLinks: [] as { label: string; url: string }[],
  // Office hours confirmed by the practice owner.
  hoursConfirmed: true,
  hours: [
    { day: "Monday", time: "8:00 AM – 5:00 PM" },
    { day: "Tuesday", time: "12:00 PM–7:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 5:00 PM" },
    { day: "Thursday", time: "7:00 AM – 2:00 PM" },
    { day: "Friday", time: "8:00 AM – 12:30 PM", note: "Every other Friday" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],
};
export const fullAddress = `${practice.address.street}, ${practice.address.city}, ${practice.address.region} ${practice.address.postalCode}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${practice.name}, ${fullAddress}`)}`;
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

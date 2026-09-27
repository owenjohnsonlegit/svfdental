export type Testimonial = {
  quote: string;
  attribution: string;
  source: string;
  approved: boolean;
};
// Patient quotations supplied by the owner for this copy update.
export const testimonials: Testimonial[] = [
  {
    quote:
      "I had a fantastic experience with Dr. Johnson. I was embarrassed as it had been awhile since I’d been to a dentist. Dr. Johnson was very kind and my cleaning didn’t hurt at all. He was very good with my teenagers. He explained everything and was happy to answer all of my questions. Great staff as well!",
    attribution: "Jeremi B.",
    source: "Owner-supplied website copy",
    approved: true,
  },
  {
    quote:
      "Visiting South Valley Family Dental gives my family and me more reasons to smile.",
    attribution: "The Johnson Family",
    source: "Owner-supplied website copy",
    approved: true,
  },
  {
    quote:
      "Dr. Johnson provided me with excellent care when I needed it the most.",
    attribution: "Jennifer R.",
    source: "Owner-supplied website copy",
    approved: true,
  },
  {
    quote:
      "You know the office has to be amazing when you actually look forward to getting your teeth cleaned. They’re all friendly and fantastic.",
    attribution: "Becky H.",
    source: "Owner-supplied website copy",
    approved: true,
  },
];

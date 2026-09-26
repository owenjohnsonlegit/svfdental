import type { PhotoId } from "@/components/photography";
export type StaffMember = {
  name: string;
  role?: string;
  bio?: string;
  photo?: PhotoId;
  verified: boolean;
};
// Do not render unverified employment, roles, biographies, or portraits.
export const staff: StaffMember[] = [
  { name: "Paige", photo: "paige", verified: false },
  { name: "Bethany", photo: "bethany", verified: false },
  { name: "Teresa", photo: "teresa", verified: false },
  ...["Kyla", "Lura", "Marnie", "Lauren", "Natalie"].map((name) => ({
    name,
    verified: false,
  })),
];

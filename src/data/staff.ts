export type StaffMember = {
  name: string;
  role?: string;
  bio?: string;
  image?: string;
  verified: boolean;
};
// Do not render unverified employment, roles, biographies, or portraits.
export const staff: StaffMember[] = [
  "Paige",
  "Kyla",
  "Lura",
  "Marnie",
  "Lauren",
  "Natalie",
  "Teresa",
].map((name) => ({ name, verified: false }));

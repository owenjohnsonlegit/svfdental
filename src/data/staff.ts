import type { PhotoId } from "@/components/photography";
export type StaffMember = {
  name: string;
  role?: string;
  bio?: string;
  photo?: PhotoId;
  verified: boolean;
};
// Owner-supplied copy is shown for review; current roster still needs launch confirmation.
export const staff: StaffMember[] = [
  {
    name: "Paige",
    role: "Dental Hygienist",
    bio: "Paige graduated from the Utah College of Dental Hygiene in 2019. She is a welcome addition to our staff.\n\nPaige enjoys mountain biking, skiing, and hiking with her husband.",
    verified: false,
    photo: "paige",
  },
  {
    name: "Kyla",
    role: "Dental Assistant",
    bio: "Kyla attended Bridgerland Technical College for her Dental Assisting certification. She has been working here since 2020.\n\nShe enjoys going on walks with her husband, being outside in the sunshine, and playing the piano.",
    verified: false,
  },
  {
    name: "Lura",
    role: "Dental Assistant",
    bio: "Lura studied Dental Assisting at Bridgerland Technical College and graduated at the top of her class.\n\nLura is a mother of five children. She enjoys hiking, camping, and spending time with her family.",
    verified: false,
  },
  {
    name: "Marnie",
    role: "Office Manager",
    bio: "Marnie is a familiar face in our office. She has been with Dr. Johnson since 2005 and has over 20 years of experience working in the medical field.\n\nShe and her husband have four children and one grandchild, whom she enjoys spoiling and then sending home.",
    verified: false,
  },
  {
    name: "Lauren",
    role: "Front Desk",
    bio: "Lauren is one of our front desk team members. She also does a lot behind the scenes working with our insurance providers.\n\nLauren is a student at Utah State University, studying Interior Architectural Design. She enjoys traveling and listening to Harry Styles.",
    verified: false,
  },
  {
    name: "Natalie",
    role: "Front Desk",
    bio: "Natalie works at the front desk, helping our patients with scheduling, check-in, insurance, and payments. She speaks fluent Spanish and is a friendly face you’re sure to see when you come into our office.\n\nNatalie enjoys playing soccer in her free time.",
    verified: false,
  },
  {
    name: "Teresa",
    role: "Dental Hygienist",
    bio: "Teresa graduated with a bachelor’s degree in dental hygiene from Weber State University.\n\nShe grew up in Cache Valley and is married with two kids, a dog, and a cat. She loves family parties, barbecues, game nights with friends, and traveling whenever she gets the chance.",
    verified: false,
    photo: "teresa",
  },
];

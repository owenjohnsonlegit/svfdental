// Service names from the supplied legacy-site inventory. Descriptions deliberately
// describe the listed treatments without adding outcome claims. Owner review required.
export const serviceCategories = [
  {
    id: "preventive",
    name: "Preventive dentistry",
    intro: "A healthy foundation for every smile.",
    icon: "shield",
    services: [
      {
        name: "Professional teeth cleanings",
        description: "Routine cleanings as part of your ongoing dental care.",
      },
      {
        name: "Oral cancer screenings",
        description: "Screenings to check the tissues of your mouth.",
      },
      {
        name: "Sealants",
        description:
          "Protective coatings applied to the chewing surfaces of teeth.",
      },
    ],
  },
  {
    id: "restorative",
    name: "Restorative dentistry",
    intro: "Thoughtful care for damaged teeth.",
    icon: "tooth",
    services: [
      {
        name: "Fillings",
        description: "Treatment for teeth affected by cavities.",
      },
      {
        name: "Crowns",
        description: "Custom restorations that cover a tooth.",
      },
      {
        name: "Root canal treatment",
        description: "Treatment for the tissue inside a tooth.",
      },
    ],
  },
  {
    id: "replacement",
    name: "Tooth replacement",
    intro: "Explore your options for missing teeth.",
    icon: "smile",
    services: [
      {
        name: "Dental implants",
        description:
          "An option for replacing missing teeth. Ask us about your individual needs.",
      },
      {
        name: "Bridgework",
        description:
          "A fixed restoration that replaces one or more missing teeth.",
      },
      {
        name: "Removable dentures",
        description: "Removable options for replacing missing teeth.",
      },
    ],
  },
  {
    id: "cosmetic",
    name: "Cosmetic dentistry",
    intro: "Personal attention to your smile.",
    icon: "sparkles",
    services: [
      {
        name: "Teeth whitening",
        description: "Talk with us about options for whitening your teeth.",
      },
      {
        name: "Porcelain veneers",
        description:
          "Thin porcelain restorations placed on the front surfaces of teeth.",
      },
      {
        name: "Bonding",
        description:
          "Tooth-colored material used to restore or change the appearance of a tooth.",
      },
    ],
  },
  {
    id: "periodontal",
    name: "Periodontal care",
    intro: "Care for the gums that support your smile.",
    icon: "heart",
    services: [
      {
        name: "Gum disease therapy",
        description: "Care for gum disease, based on your dental examination.",
      },
    ],
  },
  {
    id: "additional",
    name: "Additional care",
    intro: "Support for your changing dental needs.",
    icon: "plus",
    services: [
      {
        name: "Tooth extractions",
        description: "Tooth removal when recommended following an examination.",
      },
      {
        name: "TMJ/TMD treatment",
        description: "Discuss concerns about your jaw joint with Dr. Johnson.",
      },
      {
        name: "Orthodontic treatment",
        description:
          "Ask our office about treatment options for tooth alignment.",
      },
      {
        name: "Emergency dental treatment",
        description:
          "Call the office about an urgent dental concern. Appointment time is reserved for emergency needs.",
      },
    ],
  },
];
export const careFeatures = [
  {
    title: "Modern dental technology",
    text: "Digital X-rays, intraoral pictures, and modern dental materials help inform your care.",
    icon: "scan",
  },
  {
    title: "Your comfort matters",
    text: "A patient-focused environment, with nitrous oxide available. Talk with us about what helps you feel at ease.",
    icon: "heart",
  },
  {
    title: "Care for the whole family",
    text: "Our staff is trained to help children feel comfortable at the dentist.",
    icon: "users",
  },
  {
    title: "Attention to safety",
    text: "Instrument sterilization, autoclaving, and infection-control procedures are part of our approach to care.",
    icon: "shield",
  },
];

// The 16 dental services from the supplied practice content, grouped for navigation.
export const serviceCategories = [
  {
    id: "preventive",
    name: "Preventive dentistry",
    intro: "Routine checkups, cleanings, and screenings.",
    icon: "shield",
    services: [
      {
        name: "Professional Teeth Cleanings",
        description: "To help maintain good oral health.",
      },
      {
        name: "Oral Cancer Screenings",
        description:
          "To help detect signs of oral cancer as early as possible.",
      },
      {
        name: "Sealants",
        description: "To help protect children\u2019s teeth from decay.",
      },
    ],
  },
  {
    id: "restorative",
    name: "Restorative dentistry",
    intro: "Treatment for teeth damaged by decay or injury.",
    icon: "tooth",
    services: [
      { name: "Fillings", description: "To restore teeth damaged by decay." },
      {
        name: "Crowns & Bridgework",
        description:
          "To replace large amounts of lost tooth structure and/or missing teeth.",
      },
      {
        name: "Root Canal Treatment",
        description: "To treat and help save an infected tooth.",
      },
    ],
  },
  {
    id: "replacement",
    name: "Tooth replacement",
    intro: "Implants and dentures for missing teeth.",
    icon: "smile",
    services: [
      {
        name: "Dental Implants",
        description: "For long-lasting tooth replacement.",
      },
      {
        name: "Removable Dentures",
        description: "To replace missing teeth and restore your smile.",
      },
    ],
  },
  {
    id: "cosmetic",
    name: "Cosmetic dentistry",
    intro: "Bonding, veneers, and teeth whitening.",
    icon: "sparkles",
    services: [
      {
        name: "Teeth Whitening",
        description: "To brighten a faded or discolored smile.",
      },
      {
        name: "Porcelain Veneers",
        description:
          "For repairing larger chips and cracks and reshaping teeth.",
      },
      { name: "Bonding", description: "To repair small chips or cracks." },
    ],
  },
  {
    id: "periodontal",
    name: "Periodontal care",
    intro: "Treatment for gum disease.",
    icon: "heart",
    services: [
      {
        name: "Periodontal (Gum) Disease Therapy",
        description: "To treat gum disease and help prevent tooth loss.",
      },
    ],
  },
  {
    id: "additional",
    name: "Additional care",
    intro: "Jaw pain, tooth alignment, extractions, and emergencies.",
    icon: "plus",
    services: [
      {
        name: "Tooth Extractions",
        description:
          "When a tooth is severely damaged or decayed and cannot be saved.",
      },
      {
        name: "TMJ/TMD Treatment",
        description: "For chronic jaw pain and related symptoms.",
      },
      {
        name: "Orthodontic Treatment",
        description: "To move teeth into the proper position.",
      },
      {
        name: "Emergency Dental Treatment",
        description:
          "If you have a life-threatening or severe injury, call 911 or go directly to the nearest hospital emergency room.\n\nWe can treat a variety of dental injuries, including teeth that have been chipped, moved, or knocked out entirely. Please call our office for assistance.",
      },
    ],
  },
];
export const careFeatures = [
  {
    title: "Safety",
    text: "Your safety is important to us. We strive to maintain quality-control procedures that meet applicable guidelines. All reusable dental instruments are thoroughly sterilized after use.",
    icon: "shield",
  },
  {
    title: "Infection Control",
    text: "Infection control is an important part of maintaining a safe dental office. We use steam autoclaving, sterilization procedures, appropriate disinfectants, and disposable instruments where applicable.",
    icon: "shield",
  },
  {
    title: "Modern Dental Technology",
    text: "In addition to modern dental materials, methods, and instrumentation, South Valley Family Dental offers an electronic quieter drill system, nitrous oxide, digital X-rays, and intraoral imaging.",
    icon: "scan",
  },
  {
    title: "Family Friendly",
    text: "Our staff is trained to help children feel at ease during their visits. We have a prize box for them to choose from after their dental work is complete.\n\nOur treatment rooms also have mounted monitors so patients can watch a movie during treatment if they would like the distraction.",
    icon: "users",
  },
];

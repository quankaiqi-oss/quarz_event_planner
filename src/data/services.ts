export type Service = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  image: string;
  scope: string[];
};

export const services: Service[] = [
  {
    slug: "product-launches-brand-activations",
    title: "Product Launches & Brand Activations",
    kicker: "Launch Strategy",
    summary: "Brand launches, product reveals, VIP experiences, media events, concept development, and guest engagement.",
    image: "/media/mainly/mainly-09.jpg",
    scope: ["Brand and product launch concepts", "VIP reveal experiences", "Media event coordination", "Guest journey planning", "Brand engagement touchpoints"],
  },
  {
    slug: "on-ground-activation",
    title: "On-Ground Activation",
    kicker: "Consumer Engagement",
    summary: "Roadshows, mall activations, brand awareness campaigns, and multi-location consumer engagement programs.",
    image: "/media/mainly/mainly-10.jpg",
    scope: ["Roadshow planning", "Mall activation setups", "Consumer engagement crews", "Multi-location deployment", "Campaign support"],
  },
  {
    slug: "premium-event-support",
    title: "Premium Event Support",
    kicker: "Event Crew",
    summary: "Photography, videography, event coordination, waiters, drivers, valet coordination, security, car washing support, and crews.",
    image: "/media/mainly/mainly-11.jpg",
    scope: ["Photography and videography", "Professional coordination", "Waiters and event crews", "Drivers and valet coordination", "Security and on-site support"],
  },
  {
    slug: "event-logistics-warehousing",
    title: "Event Logistics & Warehousing",
    kicker: "Operations",
    summary: "Material storage, inventory organization, asset handling, logistics coordination, and event deployment support.",
    image: "/media/mainly/mainly-12.jpg",
    scope: ["Event material storage", "Inventory organization", "Asset handling", "Transport coordination", "Deployment support"],
  },
  {
    slug: "event-structures-tentage",
    title: "Event Structures & Tentage",
    kicker: "Build Support",
    summary: "Tentage, event structures, staging, venue installations, and temporary event setup support.",
    image: "/media/mainly/mainly-13.jpg",
    scope: ["Tentage solutions", "Temporary structures", "Staging support", "Venue installations", "Outdoor event setup"],
  },
];

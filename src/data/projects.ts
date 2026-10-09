export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "Product Launches" | "Brand Activations" | "Roadshows" | "Other Corporate Events";
  type: string;
  location?: string;
  year?: string;
  image: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  scope: string[];
  verified: boolean;
};

export const projects: Project[] = [
  {
    slug: "malaysia-xpeng-g6-group-delivery",
    title: "Malaysia Xpeng G6 Group Delivery",
    client: "XPENG",
    category: "Product Launches",
    type: "Automotive group delivery event",
    image: "/media/eventphoto/event-01.jpg",
    heroImage: "/media/eventphoto/event-02.jpg",
    gallery: ["/media/eventphoto/event-03.jpg", "/media/eventphoto/event-04.jpg", "/media/eventphoto/event-05.jpg"],
    overview: "Supplied event media for the Malaysia XPENG G6 Group Delivery. Final copy, QUARZ scope, location, and event results should be confirmed before publishing as a full case study.",
    scope: ["Automotive event experience", "Guest engagement moments", "Event media showcase"],
    verified: true,
  },
  {
    slug: "xpeng-guest-arrival-experience",
    title: "Guest Arrival Experience",
    client: "XPENG",
    category: "Brand Activations",
    type: "Guest journey and registration flow",
    image: "/media/eventphoto/event-06.jpg",
    heroImage: "/media/eventphoto/event-07.jpg",
    gallery: ["/media/eventphoto/event-08.jpg", "/media/eventphoto/event-09.jpg"],
    overview: "Guest-facing event moments captured across the XPENG delivery experience, shaped as a polished reference for arrivals, touchpoints, and audience flow.",
    scope: ["Guest reception flow", "Brand touchpoints", "Event crew coordination"],
    verified: true,
  },
  {
    slug: "xpeng-automotive-display",
    title: "Automotive Display",
    client: "XPENG",
    category: "Roadshows",
    type: "On-ground vehicle display",
    image: "/media/eventphoto/event-10.jpg",
    heroImage: "/media/eventphoto/event-11.jpg",
    gallery: ["/media/eventphoto/event-12.jpg", "/media/eventphoto/event-13.jpg"],
    overview: "A premium mall display environment for automotive discovery, balancing product visibility, guest movement, and a refined brand presence.",
    scope: ["Display layout", "Activation crews", "Logistics coordination"],
    verified: true,
  },
  {
    slug: "xpeng-event-detail-hospitality",
    title: "Event Detail & Hospitality",
    client: "XPENG",
    category: "Other Corporate Events",
    type: "Premium support",
    image: "/media/eventphoto/event-14.jpg",
    heroImage: "/media/eventphoto/event-15.jpg",
    gallery: ["/media/eventphoto/event-16.jpg", "/media/xpeng-delivery-01.jpg"],
    overview: "Hospitality and production details supporting a composed event journey, from front-of-house moments to operational readiness.",
    scope: ["Crew coordination", "Guest service support", "Operational deployment"],
    verified: true,
  },
  {
    slug: "xpeng-launch-stage-moments",
    title: "Launch Stage Moments",
    client: "XPENG",
    category: "Product Launches",
    type: "Launch presentation and reveal moments",
    image: "/media/xpeng-delivery-02.jpg",
    heroImage: "/media/xpeng-delivery-03.jpg",
    gallery: ["/media/xpeng-delivery-04.jpg", "/media/xpeng-delivery-05.jpg"],
    overview: "A photo-led portfolio entry for the stage, reveal, and presentation atmosphere around the XPENG event experience.",
    scope: ["Launch staging", "Presentation flow", "Event atmosphere"],
    verified: true,
  },
  {
    slug: "xpeng-brand-engagement",
    title: "Brand Engagement",
    client: "XPENG",
    category: "Brand Activations",
    type: "Audience interaction and discovery",
    image: "/media/xpeng-delivery-06.jpg",
    heroImage: "/media/xpeng-delivery-07.jpg",
    gallery: ["/media/xpeng-delivery-08.jpg", "/media/xpeng-delivery-09.jpg"],
    overview: "Selected engagement moments showing how guests moved through the experience, interacted with the display, and connected with the brand.",
    scope: ["Audience engagement", "Product discovery", "On-ground support"],
    verified: true,
  },
];

export const projectCategories = ["All Projects", "Product Launches", "Brand Activations", "Roadshows", "Other Corporate Events"] as const;

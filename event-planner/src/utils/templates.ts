export interface Template {
  id: string;
  name: string;
  description: string;
  tags: string[];
  url: string;
}

// templates for the llm to choose from
// simulates accessing the canva database of templates
// would be great to integrate with canva's magic design
export const TEMPLATES: Template[] = [
  {
    id: "event_flyer",
    name: "Event Flyer",
    description: "Simple promotional flyer for events.",
    tags: ["flyer", "in-person", "promotion", "marketing"],
    url: "https://www.canva.com/design/DAGqM20jlqY/ty5XEIYdEC22p-3huuS2tg",
  },
  {
    id: "social_post",
    name: "Instagram Post",
    description: "Minimalist instagram post template for event promotion.",
    tags: ["instagram", "social", "awareness"],
    url: "https://www.canva.com/templates/EAGDNaNaTQM-green-and-white-minimal-trendy-event-instagram-post/",
  },
  {
    id: "social_post",
    name: "Instagram Post",
    description: "Minimalist instagram post template for event promotion.",
    tags: ["instagram", "social", "awareness"],
    url: "https://www.canva.com/templates/EAGJEEKjRx8-pink-pastel-modern-illustrative-weekend-event-instagram-post/",
  },
  {
    id: "speaker_slide",
    name: "Speaker Lineup Slide",
    description: "Slide listing event speakers and topics.",
    tags: ["presentation", "speakers", "conference"],
    url: "https://www.canva.com/design/DC45678/...",
  },
  {
    id: "name_badge",
    name: "Name Badge",
    description: "Printable badge for attendees.",
    tags: ["badge", "name tag", "print"],
    url: "https://www.canva.com/design/DD34567/...",
  },
  {
    id: "thank_you",
    name: "Thank You Graphic",
    description: "Post-event thank you visual.",
    tags: ["post-event", "gratitude", "wrap-up"],
    url: "https://www.canva.com/design/DE78901/...",
  },
];

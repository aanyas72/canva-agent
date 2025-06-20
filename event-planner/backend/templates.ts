export type Template = {
  id: string;
  name: string;
  type: string;
  description: string;
  url: string;
};

// templates for the llm to choose from
// simulates accessing the canva database of templates
// would be great to integrate with canva's magic design
export const templates: Template[] = [
  {
    id: 'template-001',
    name: 'Startup Launch Flyer',
    type: 'Physical Flyer',
    description: 'A bold flyer for announcing a startup launch or tech event.',
    url: 'https://www.canva.com/design/DAF001/edit',
  },
  {
    id: 'template-002',
    name: 'Minimalist Event Promo',
    type: 'Instagram Post',
    description: 'Clean Instagram post template for promoting professional events or meetups.',
    url: 'https://www.canva.com/design/DAF002/edit',
  },
  {
    id: 'template-003',
    name: 'Behind-the-Scenes Story',
    type: 'Instagram Story',
    description: 'Engaging story template to share real-time highlights or sneak peeks.',
    url: 'https://www.canva.com/design/DAF003/edit',
  },
  {
    id: 'template-004',
    name: 'Event Directional Sign - Modern',
    type: 'Event Directional Sign',
    description: 'Simple signage to guide attendees through the event venue.',
    url: 'https://www.canva.com/design/DAF004/edit',
  },
  {
    id: 'template-005',
    name: 'Welcome Banner - Bold Gradient',
    type: 'Welcome Banner',
    description: 'Eye-catching banner for welcoming attendees at the entrance.',
    url: 'https://www.canva.com/design/DAF005/edit',
  },
  {
    id: 'template-006',
    name: 'Minimalist Name Badge',
    type: 'Name Badges',
    description: 'Clean, professional name badge for formal events and conferences.',
    url: 'https://www.canva.com/design/DAF006/edit',
  },
  {
    id: 'template-007',
    name: 'Creative Speaker Slide Deck',
    type: 'Speaker Slides',
    description: 'Vibrant slide design for keynote presentations or panel talks.',
    url: 'https://www.canva.com/design/DAF007/edit',
  },
  {
    id: 'template-008',
    name: 'Thank You Note - Floral',
    type: 'Thank You Notes',
    description: 'Elegant thank-you card to express gratitude after the event.',
    url: 'https://www.canva.com/design/DAF008/edit',
  },
  {
    id: 'template-009',
    name: 'Simple Event Agenda',
    type: 'Agenda',
    description: 'Structured agenda template outlining the event schedule.',
    url: 'https://www.canva.com/design/DAF009/edit',
  },
  {
    id: 'template-010',
    name: 'Networking Night Instagram Post',
    type: 'Instagram Post',
    description: 'Trendy Instagram graphic for casual networking or mixer events.',
    url: 'https://www.canva.com/design/DAF010/edit',
  },
  {
    id: 'template-011',
    name: 'Welcome Banner - Corporate',
    type: 'Welcome Banner',
    description: 'Professional welcome signage with corporate branding.',
    url: 'https://www.canva.com/design/DAF011/edit',
  },
  {
    id: 'template-012',
    name: 'Speaker Slides - Tech Theme',
    type: 'Speaker Slides',
    description: 'Sleek presentation deck styled for technology-related talks.',
    url: 'https://www.canva.com/design/DAF012/edit',
  },
  {
    id: 'template-013',
    name: 'Directional Sign - Fun Arrows',
    type: 'Event Directional Sign',
    description: 'Whimsical signage perfect for creative events or art fairs.',
    url: 'https://www.canva.com/design/DAF013/edit',
  },
];
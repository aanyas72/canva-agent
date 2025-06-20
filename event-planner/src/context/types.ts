export interface TemplateTextContent {
  header: string;
  body: string;
  footer?: string | null;
}

export interface GeneratedTemplate {
  name: string;
  type: string;
  url: string;
  text_content: TemplateTextContent;
}

export interface GeneratedContent {
  event_overview: {
    title: string;
    description: string;
    call_to_action?: string;
  };
  templates: GeneratedTemplate[];
}

import { Box } from "@canva/app-ui-kit";
import { useAppContext } from "src/context";

export const ConnectPage = () => {
  const { generatedContent } = useAppContext();

  if (!generatedContent) {
    return (
      <Box padding="2u">
        <div style={{ fontSize: "18px", fontWeight: "bold" }}>
          No content generated yet.
        </div>
      </Box>
    );
  }

  const { event_overview, templates } = generatedContent;

  return (
    <Box padding="2u">
      <div style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px" }}>
        Generated Assets for: {event_overview.title}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <div><strong>Description:</strong> {event_overview.description}</div>
        {event_overview.call_to_action && (
          <div><strong>Call to Action:</strong> {event_overview.call_to_action}</div>
        )}
      </div>

      <div style={{ marginBottom: "30px", fontWeight: "bold", fontSize: "18px" }}>
        Asset Content
      </div>

      {templates.map((template, index) => (
        <Box key={index} padding="1u" border="standard" paddingBottom="1u" borderRadius="standard">
          <div style={{ fontSize: "16px", fontWeight: "bold" }}>
            {template.name} ({template.type})
          </div>
          <div><strong>Header:</strong> {template.text_content.header}</div>
          <div><strong>Body:</strong> {template.text_content.body}</div>
          <div><strong>Footer:</strong> {template.text_content.footer}</div>
          <div style={{ marginTop: "8px" }}>
            <a href={template.url} target="_blank" rel="noopener noreferrer">
              Open in Canva
            </a>
          </div>
        </Box>
      ))}

      <div style={{ marginTop: "30px", fontWeight: "bold", fontSize: "18px" }}>
        Integration Options
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <span>📅 Send Google Calendar invites</span>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <span>📧 Send invites through Mailchimp</span>
      </div>
    </Box>
  );
};

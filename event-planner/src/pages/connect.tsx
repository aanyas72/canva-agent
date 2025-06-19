import { Box } from "@canva/app-ui-kit";

export const ConnectPage = () => {
  return (
    <Box padding="2u">
      <div style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "20px" }}>
        Generating Assets...
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <span>Send Google Calendar invites</span>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <span>Send invites through Mailchimp</span>
      </div>
    </Box>
  );
};

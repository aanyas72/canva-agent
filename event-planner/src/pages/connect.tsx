import { Box } from "@canva/app-ui-kit";

const googleLogo = "/src/images/google-calendar-logo.png"; // Update with actual path
const mailchimpLogo = "/src/images/mailchimp-logo.png"; 

export const ConnectPage = () => {
  return (
    <Box padding="2u">
      <div style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "13px" }}>
        Generating Assets...
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <img src={googleLogo} alt="Google Calendar" style={{ width: "24px", height: "24px", marginRight: "10px" }} />
        <span>Send Google Calendar invites</span>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={mailchimpLogo} alt="Mailchimp" style={{ width: "24px", height: "24px", marginRight: "10px" }} />
        <span>Send invites through Mailchimp</span>
      </div>
    </Box>
  );
};

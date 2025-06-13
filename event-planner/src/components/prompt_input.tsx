import { useAppContext } from "src/context";
import { useContext } from "react";
import { AppContext } from "src/context";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormField,
  TextInput,
  Text,
  MultilineInput
} from "@canva/app-ui-kit";


export const PromptInput = () => {
  const {
    eventName, setEventName,
    audience, setAudience,
    date, setDate,
    location, setLocation,
    goals, setGoals,
    setApiResponse,
  } = useAppContext();

  const navigate = useNavigate();

  // const handlePlanClick = async () => {
  //   const payload = {
  //     eventName,
  //     audience,
  //     date,
  //     location,
  //     goals,
  //   };

  //   try {
  //     const res = await fetch("http://localhost:3001/generate-content", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(payload),
  //     });

  //     if (!res.ok) throw new Error("Failed to generate content");

  //     const data = await res.json();
  //     setApiResponse(data);
  //     navigate("/results");
  //   } catch (err) {
  //     console.error("Error submitting:", err);
  //     // You could show a user-friendly error here
  //   }
  // };

  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within a ContextProvider");
  }

  const { setSelectedTemplates } = context;

  const handlePlanClick = async () => {
  const res = await fetch("http://localhost:3001/choose-template", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ eventName, audience, goals }),
  });

  const data = await res.json();

  if (data.success) {
    setApiResponse(data);
    setSelectedTemplates(data.result); // e.g. ["Instagram Post", "Agenda"]
    navigate("/results");
  }
};

  return (
  <Box display="flex" flexDirection="column">
  <Box paddingBottom="2u">
  <FormField
    label="Event Name"
    value={eventName}
    control={(props) => (
      <TextInput
        {...props}
        value={eventName}
        onChange={setEventName}
        placeholder="e.g. Future of Design Summit"
      />
    )}
  />
</Box>

  <Box paddingBottom="2u">
    <FormField
      label="Audience"
      value={audience}
      control={(props) => (
        <TextInput
          {...props}
          value={audience}
          onChange={setAudience}
          placeholder="e.g. Designers, product teams, students"
        />
      )}
    />
  </Box>

  <Box paddingBottom="2u">
    <FormField
      label="Date"
      value={date}
      control={(props) => (
        <TextInput
          {...props}
          value={date}
          onChange={setDate}
          placeholder="e.g. July 15, 2025"
        />
      )}
    />
  </Box>

  <Box paddingBottom="2u">
    <FormField
      label="Location"
      value={location}
      control={(props) => (
        <TextInput
          {...props}
          value={location}
          onChange={setLocation}
          placeholder="e.g. New York City or Online"
        />
      )}
    />
  </Box>

  <Box paddingBottom="2u">
    <FormField
      label="Key Goals"
      value={goals}
      control={(props) => (
        <MultilineInput
          {...props}
          value={goals}
          onChange={setGoals}
          placeholder="e.g. Showcase work, connect with mentors"
          minRows={3}
          maxLength={300}
        />
      )}
    />
  </Box>
  <Button variant="primary" onClick={handlePlanClick}>Plan</Button>
</Box>
);};

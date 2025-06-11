import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Button,
  FormField,
  MultilineInput,
  TextInput,
} from "@canva/app-ui-kit";
import { useAppContext } from "src/context";
import { Paths } from "src/routes";
import { PromptInputMessages as Messages } from "./prompt_input.messages";
import { useIntl } from "react-intl";

// @TODO: Adjust according to your specific requirements.
const MAX_INPUT_LENGTH = 280;
const MIN_INPUT_ROWS = 3;

const handlePlanClick = async () => {
    
  };


export const PromptInput = () => {
  const { pathname } = useLocation();
  const isHomeRoute = pathname === Paths.HOME;
  const { promptInput, setPromptInput, promptInputError } = useAppContext();

  const onPromptInputChange = (value: string) => {
    setPromptInput(value);
  };

  const [eventName, setEventName] = useState("");
  const [audience, setAudience] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [keyGoals, setKeyGoals] = useState("");

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
      value={eventDate}
      control={(props) => (
        <TextInput
          {...props}
          value={eventDate}
          onChange={setEventDate}
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
      value={keyGoals}
      control={(props) => (
        <MultilineInput
          {...props}
          value={keyGoals}
          onChange={setKeyGoals}
          placeholder="e.g. Showcase work, connect with mentors"
          minRows={3}
          maxLength={MAX_INPUT_LENGTH}
        />
      )}
    />
  </Box>
  <Button variant="primary" onClick={handlePlanClick}>Plan</Button>
</Box>


);};

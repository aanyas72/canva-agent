import { Box, FormField, Checkbox, Button } from "@canva/app-ui-kit";
import { useAppContext } from "src/context";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ResultsPage = () => {
  const {
    eventName,
    audience,
    date,
    location,
    goals,
    setSelectedTemplates,
    setGeneratedContent,
    apiResponse
  } = useAppContext();

  const [localSelections, setLocalSelections] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Set defaults to empty or pre-selected based on your logic
    setLocalSelections([]); // or: apiResponse.result if you want all pre-selected
  }, [apiResponse.result]);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setLocalSelections(prev =>
      checked ? [...prev, value] : prev.filter(item => item !== value)
    );
  };

  const handleGenerate = async () => {
    setSelectedTemplates(localSelections); // sync to context

    try {
      const response = await fetch("http://localhost:3001/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          eventName,
          audience,
          date,
          location,
          goals,
          chosenTemplates: localSelections
        })
      });

      const result = await response.json();

      if (result.success) {
        setGeneratedContent(result.result);
        navigate("/connect");
      }
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  return (
    <Box padding="2u">
      <div style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "13px" }}>
        Suggested Assets:
      </div>

      <FormField
        label=""
        control={() => (
          <Box>
            {apiResponse.result.map((option: string) => (
              <Box key={option} paddingBottom="0.5u">
                <Checkbox
                  label={option}
                  value={option}
                  checked={localSelections.includes(option)}
                  onChange={handleCheckboxChange}
                />
              </Box>
            ))}
          </Box>
        )}
      />
      <Box paddingBottom="2u" />
      <Button variant="primary" onClick={handleGenerate}>Generate</Button>
    </Box>
  );
};

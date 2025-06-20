import { Box, FormField, Checkbox, Button } from "@canva/app-ui-kit";
import { useAppContext } from "src/context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ResultsPage = () => {
  const { apiResponse, setGeneratedContent } = useAppContext();
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);

  if (!apiResponse?.result) return <Box>No results found.</Box>;

  const navigate = useNavigate();

  const handleCheckboxes = async () => {
    try {
    const response = await fetch("http://localhost:3001/generate-content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        eventName: apiResponse.eventName,
        audience: apiResponse.audience,
        date: apiResponse.date,
        location: apiResponse.location,
        goals: apiResponse.goals,
        chosenTemplates: selectedTemplates
      })
    });

    const result = await response.json();
    console.log("Generated content:", result);

    if (result.success) {
      setGeneratedContent(result.result);
      navigate("/connect");
    }
    
    // Navigate to display page or insert into Canva
    navigate("/connect", { state: { result } });
  } catch (error) {
    console.error("Error generating content:", error);
  }
  }

  return (
    <Box padding="2u">
      <div style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "13px" }}>
        Suggested Assets:
      </div>

      <FormField
        label=""
        control={() => (
          <Box>
            {apiResponse.result.map((option) => (
              <Box key={option} paddingBottom="0.5u">
                <Checkbox
                  label={option}
                  value={option}
                  checked={selectedTemplates.includes(option)}
                  onChange={(value, checked) =>
                    setSelectedTemplates((prev) =>
                      checked ? [...prev, value] : prev.filter((item) => item !== value)
                    )
                  }
                />
              </Box>
            ))}
          </Box>
        )}
      />
      <Box paddingBottom="2u"></Box>
      <Button variant="primary" onClick={handleCheckboxes}>Generate</Button>
    </Box>
  );
};

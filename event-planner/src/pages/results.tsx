import { Box, FormField, Checkbox, Button } from "@canva/app-ui-kit";
import { useAppContext } from "src/context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ResultsPage = () => {
  const { apiResponse } = useAppContext();
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);

  if (!apiResponse?.result) return <Box>No results found.</Box>;

  const navigate = useNavigate();

  const handleCheckboxes = () => {
    // TODO: figure out how to auto insert assets into canva
    // generate text as well and insert it into the templates
    navigate("/connect");
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

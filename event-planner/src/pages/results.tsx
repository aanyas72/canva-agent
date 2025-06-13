import { Box, FormField, Checkbox } from "@canva/app-ui-kit";
import { useAppContext } from "src/context";
import { useState } from "react";

export const ResultsPage = () => {
  const { apiResponse } = useAppContext();
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);

  if (!apiResponse?.result) return <Box>No results found.</Box>;

  return (
    <Box padding="2u">
      <div style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "16px" }}>
        Suggested assets:
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
    </Box>
  );
};

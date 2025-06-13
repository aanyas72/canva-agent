import { Box, FormField, Checkbox } from "@canva/app-ui-kit";
import { useAppContext } from "src/context";
import { useState } from "react";

export const ResultsPage = () => {
  const { apiResponse } = useAppContext();
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);

  if (!apiResponse?.result) return <Box>No results found.</Box>;

  return (
    <Box padding="2u">
      {apiResponse.result.map((option: string) => (
        <Box key={option} paddingBottom="1u">
          <FormField
            label={option}
            control={({ id, ...props }) => (
              <Checkbox
                {...props}
                id={id}
                label={option}
                value={option}
                checked={selectedTemplates.includes(option)}
                onChange={(value, checked) =>
                  setSelectedTemplates((prev) =>
                    checked ? [...prev, value] : prev.filter((item) => item !== value)
                  )
                }
              />
            )}
          />
        </Box>
      ))}
    </Box>
  );
};

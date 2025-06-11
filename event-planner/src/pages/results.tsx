import { useAppContext } from "src/context";
import { Box, FormField, MultilineInput } from "@canva/app-ui-kit";

export const ResultsPage = () => {
  const { apiResponse } = useAppContext();

  if (!apiResponse) {
    return <Box>No data yet</Box>;
  }

  return (
    <Box padding="2u">
      {Object.entries(apiResponse).map(([key, value]) => (
        <Box key={key} paddingBottom="1u">
          <FormField
            label={key}
            value={String(value)}
            control={({ id, ...props }) => (
              <MultilineInput
                {...props}
                id={id}
                readOnly
                minRows={3}
                value={String(value)}
              />
            )}
          />
        </Box>
      ))}
    </Box>
  );
};

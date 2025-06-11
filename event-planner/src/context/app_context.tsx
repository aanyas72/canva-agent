import { createContext, useState, useContext } from "react";

export interface AppContextType {
  promptInput: string;
  setPromptInput: (value: string) => void;
  promptInputError: string | null;
  setPromptInputError: (value: string | null) => void;
  apiResponse: any;
  setApiResponse: (data: any) => void;
}

export const AppContext = createContext<AppContextType>({
  promptInput: "",
  setPromptInput: () => {},
  promptInputError: null,
  setPromptInputError: () => {},
  apiResponse: null,
  setApiResponse: () => {},
});

/**
 * Provides application-wide state and methods using React Context.
 * @param {object} props - The props object.
 * @param {React.ReactNode} props.children - The children components wrapped by the provider.
 * @returns {JSX.Element} The provider component.
 * @description This provider component wraps the entire application to provide application-wide state and methods using React Context.
 * It manages state related to app errors, loading status, remaining credits, user input for prompts, image styles, and generated images.
 * It exposes these state values and setter methods to its child components via the AppContext.
 * For more information on React Context, refer to the official React documentation: {@link https://react.dev/learn/passing-data-deeply-with-context}.
 */
export const ContextProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [promptInput, setPromptInput] = useState("");
  const [promptInputError, setPromptInputError] = useState<string | null>(null);
  const [apiResponse, setApiResponse] = useState<any>(null);

  return (
    <AppContext.Provider
      value={{
        promptInput,
        setPromptInput,
        promptInputError,
        setPromptInputError,
        apiResponse,
        setApiResponse,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Optional convenience hook
export const useAppContext = () => useContext(AppContext);

import { createContext, useContext, useState } from "react";

export interface AppContextType {
  eventName: string;
  setEventName: (value: string) => void;
  audience: string;
  setAudience: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  goals: string;
  setGoals: (value: string) => void;
  apiResponse: any;
  setApiResponse: (data: any) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [eventName, setEventName] = useState("");
  const [audience, setAudience] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [goals, setGoals] = useState("");
  const [apiResponse, setApiResponse] = useState<any>(null);

  const value: AppContextType = {
    eventName,
    setEventName,
    audience,
    setAudience,
    date,
    setDate,
    location,
    setLocation,
    goals,
    setGoals,
    apiResponse,
    setApiResponse,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Shortcut hook to use context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a ContextProvider");
  }
  return context;
};

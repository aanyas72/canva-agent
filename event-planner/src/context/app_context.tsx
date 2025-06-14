import React, { createContext, useContext, useState } from "react";

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

  selectedTemplates: string[];
  setSelectedTemplates: (templates: string[]) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [eventName, setEventName] = useState<string>("");
  const [audience, setAudience] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [goals, setGoals] = useState<string>("");
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);

  return (
    <AppContext.Provider
      value={{
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
        selectedTemplates,
        setSelectedTemplates,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Optional helper hook so you don't need to do "useContext(AppContext)" everywhere
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a ContextProvider");
  }
  return context;
};
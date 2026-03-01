import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "hi" | "ne";

interface AccessibilitySettings {
  elderMode: boolean;
  highContrast: boolean;
  voiceGuidance: boolean;
}

interface HealthDataConsent {
  treatmentConsent: boolean;
  emergencyAccessConsent: boolean;
  dataSharingConsent: boolean;
  researchConsent: boolean;
  consentDate?: Date;
  consentVersion?: string;
}

interface PatientProfile {
  id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  abhaId?: string;
  nepalHealthId?: string;
  healthDataConsent?: HealthDataConsent;
  dataRetentionYears?: number;
  preferredLanguage?: "en" | "hi" | "ne";
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  accessibility: AccessibilitySettings;
  setAccessibility: (settings: AccessibilitySettings) => void;
  currentProfile: PatientProfile | null;
  setCurrentProfile: (profile: PatientProfile | null) => void;
  profiles: PatientProfile[];
  addProfile: (profile: PatientProfile) => void;
  isOnline: boolean;
  lastSyncTime: Date | null;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>({
    elderMode: false,
    highContrast: false,
    voiceGuidance: false,
  });
  const [currentProfile, setCurrentProfile] = useState<PatientProfile | null>(null);
  const [profiles, setProfiles] = useState<PatientProfile[]>([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [lastSyncTime, setLastSyncTime] = useState<Date | null>(new Date());

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setLastSyncTime(new Date());
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility classes to body
    const body = document.body;
    if (accessibility.elderMode) {
      body.classList.add("elder-mode");
    } else {
      body.classList.remove("elder-mode");
    }
    if (accessibility.highContrast) {
      body.classList.add("high-contrast");
    } else {
      body.classList.remove("high-contrast");
    }
  }, [accessibility]);

  const addProfile = (profile: PatientProfile) => {
    setProfiles((prev) => [...prev, profile]);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        accessibility,
        setAccessibility,
        currentProfile,
        setCurrentProfile,
        profiles,
        addProfile,
        isOnline,
        lastSyncTime,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}

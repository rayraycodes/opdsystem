import { Eye, Type, Volume2 } from "lucide-react";
import { useApp } from "../contexts/AppContext";

const content = {
  en: {
    elderMode: "Elder Mode (Larger Text)",
    highContrast: "High Contrast",
    voiceGuidance: "Voice Guidance",
  },
  hi: {
    elderMode: "वरिष्ठ मोड (बड़ा पाठ)",
    highContrast: "उच्च कंट्रास्ट",
    voiceGuidance: "आवाज मार्गदर्शन",
  },
  ne: {
    elderMode: "वरिष्ठ मोड (ठूलो पाठ)",
    highContrast: "उच्च कन्ट्रास्ट",
    voiceGuidance: "आवाज मार्गदर्शन",
  },
};

export function AccessibilityToggle() {
  const { language, accessibility, setAccessibility } = useApp();
  const text = content[language];

  const toggles = [
    {
      key: "elderMode" as const,
      label: text.elderMode,
      icon: Type,
    },
    {
      key: "highContrast" as const,
      label: text.highContrast,
      icon: Eye,
    },
    {
      key: "voiceGuidance" as const,
      label: text.voiceGuidance,
      icon: Volume2,
    },
  ];

  return (
    <div className="space-y-3">
      {toggles.map(({ key, label, icon: Icon }) => (
        <label
          key={key}
          className="flex items-center justify-between p-4 bg-white rounded-lg border border-[var(--neutral-200)] cursor-pointer min-h-[48px]"
        >
          <span className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-[var(--neutral-600)]" aria-hidden="true" />
            <span>{label}</span>
          </span>
          <input
            type="checkbox"
            checked={accessibility[key]}
            onChange={(e) =>
              setAccessibility({
                ...accessibility,
                [key]: e.target.checked,
              })
            }
            className="w-6 h-6 accent-primary cursor-pointer"
            aria-label={label}
          />
        </label>
      ))}
    </div>
  );
}

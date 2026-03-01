import { Globe } from "lucide-react";
import { useApp } from "../contexts/AppContext";

const translations = {
  en: { name: "English", label: "Language" },
  hi: { name: "हिंदी", label: "भाषा" },
  ne: { name: "नेपाली", label: "भाषा" },
};

export function LanguageSwitcher() {
  const { language, setLanguage } = useApp();

  return (
    <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-[var(--neutral-200)]">
      <Globe className="w-5 h-5 text-[var(--neutral-600)]" aria-hidden="true" />
      <label htmlFor="language-select" className="sr-only">
        {translations[language].label}
      </label>
      <select
        id="language-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value as "en" | "hi" | "ne")}
        className="bg-transparent border-none outline-none cursor-pointer min-h-[48px] px-2"
        aria-label="Select language"
      >
        <option value="en">{translations.en.name}</option>
        <option value="hi">{translations.hi.name}</option>
        <option value="ne">{translations.ne.name}</option>
      </select>
    </div>
  );
}

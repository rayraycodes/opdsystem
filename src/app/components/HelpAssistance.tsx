import { Phone, Users, QrCode } from "lucide-react";

const content = {
  en: {
    title: "Need Help?",
    callHelpdesk: "Call Help Desk",
    findVolunteer: "Find Volunteer Desk",
    showCounter: "Show at Counter",
  },
  hi: {
    title: "मदद चाहिए?",
    callHelpdesk: "हेल्प डेस्क पर कॉल करें",
    findVolunteer: "स्वयंसेवक डेस्क खोजें",
    showCounter: "काउंटर पर दिखाएं",
  },
  ne: {
    title: "मद्दत चाहिन्छ?",
    callHelpdesk: "हेल्प डेस्क मा कल गर्नुहोस्",
    findVolunteer: "स्वयंसेवक डेस्क खोज्नुहोस्",
    showCounter: "काउन्टर मा देखाउनुहोस्",
  },
};

interface HelpAssistanceProps {
  language?: "en" | "hi" | "ne";
}

export function HelpAssistance({ language = "en" }: HelpAssistanceProps) {
  const text = content[language];

  return (
    <div className="bg-[var(--info)]/5 border border-[var(--info)]/20 rounded-lg p-4">
      <h3 className="font-medium text-[var(--foreground)] mb-3">{text.title}</h3>
      <div className="grid gap-2">
        <a
          href="tel:+911234567890"
          className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[var(--neutral-200)] hover:border-primary transition-colors min-h-[48px]"
        >
          <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
          <span className="font-medium">{text.callHelpdesk}</span>
        </a>

        <button className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[var(--neutral-200)] hover:border-primary transition-colors min-h-[48px] text-left">
          <Users className="w-5 h-5 text-primary" aria-hidden="true" />
          <div>
            <div className="font-medium">{text.findVolunteer}</div>
            <div className="text-xs text-[var(--neutral-600)]">Main Entrance, Ground Floor</div>
          </div>
        </button>

        <button className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[var(--neutral-200)] hover:border-primary transition-colors min-h-[48px] text-left">
          <QrCode className="w-5 h-5 text-primary" aria-hidden="true" />
          <span className="font-medium">{text.showCounter}</span>
        </button>
      </div>
    </div>
  );
}

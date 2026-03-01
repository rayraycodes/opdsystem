import { UserCircle2, Users, Phone, Building2 } from "lucide-react";
import { Link } from "react-router";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { AccessibilityToggle } from "../components/AccessibilityToggle";
import { useApp } from "../contexts/AppContext";

const content = {
  en: {
    welcome: "Welcome to",
    hospitalName: "Patan Hospital",
    subtitle: "Book appointments • Track queue in real-time",
    bookingMode: "Who are you booking for?",
    myself: "Book for Myself",
    family: "Book for Parent/Family Member",
    assistedBooking: "Need Assistance?",
    assistedInfo: "Assisted booking is available at help desk, kiosk, or registration counter",
    accessibility: "Accessibility Options",
    continue: "Continue",
  },
  hi: {
    welcome: "में आपका स्वागत है",
    hospitalName: "पाटन अस्पताल",
    subtitle: "अपॉइंटमेंट बुक करें • रीयल-टाइम में कतार ट्रैक करें",
    bookingMode: "आप किसके लिए बुकिंग कर रहे हैं?",
    myself: "अपने लिए बुक करें",
    family: "माता-पिता/परिवार के सदस्य के लिए बुक करें",
    assistedBooking: "सहायता चाहिए?",
    assistedInfo: "सहायता डेस्क, कियोस्क या पंजीकरण काउंटर पर सहायता बुकिंग उपलब्ध है",
    accessibility: "पहुंच विकल्प",
    continue: "जारी रखें",
  },
  ne: {
    welcome: "मा स्वागत छ",
    hospitalName: "पाटन अस्पताल",
    subtitle: "अपोइन्टमेन्ट बुक गर्नुहोस् • रियल-टाइम मा कतार ट्र्याक गर्नुहोस्",
    bookingMode: "तपाईं कसको लागि बुकिङ गर्दै हुनुहुन्छ?",
    myself: "आफ्नो लागि बुक गर्नुहोस्",
    family: "आमा-बुबा/परिवारको सदस्यको लागि बुक गर्नुहोस्",
    assistedBooking: "सहयोग चाहिन्छ?",
    assistedInfo: "सहायता डेस्क, किओस्क वा दर्ता काउन्टर मा सहयोग बुकिङ उपलब्ध छ",
    accessibility: "पहुँच विकल्पहरू",
    continue: "जारी राख्नुहोस्",
  },
};

export function EntryScreen() {
  const { language } = useApp();
  const text = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="text-center pt-8 pb-4">
          <Building2 className="w-16 h-16 mx-auto text-primary mb-4" aria-hidden="true" />
          <p className="text-[var(--neutral-600)] mb-2">{text.welcome}</p>
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">{text.hospitalName}</h1>
          <p className="text-sm text-[var(--neutral-600)]">{text.subtitle}</p>
        </div>

        {/* Language Switcher */}
        <LanguageSwitcher />

        {/* Booking Mode Selection */}
        <div className="space-y-3">
          <h2 className="font-medium text-[var(--foreground)]">{text.bookingMode}</h2>

          <Link
            to="/find-care"
            className="flex items-center gap-4 p-4 bg-white rounded-lg border-2 border-[var(--neutral-200)] hover:border-primary transition-colors min-h-[64px]"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <UserCircle2 className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <span className="font-medium text-[var(--foreground)]">{text.myself}</span>
          </Link>

          <Link
            to="/find-care"
            className="flex items-center gap-4 p-4 bg-white rounded-lg border-2 border-[var(--neutral-200)] hover:border-primary transition-colors min-h-[64px]"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-secondary" aria-hidden="true" />
            </div>
            <span className="font-medium text-[var(--foreground)]">{text.family}</span>
          </Link>
        </div>

        {/* Assisted Booking Info */}
        <div className="bg-[var(--info)]/5 border border-[var(--info)]/20 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-medium text-[var(--foreground)] mb-1">{text.assistedBooking}</h3>
              <p className="text-sm text-[var(--neutral-700)]">{text.assistedInfo}</p>
            </div>
          </div>
        </div>

        {/* Accessibility Options */}
        <div className="space-y-3">
          <h2 className="font-medium text-[var(--foreground)]">{text.accessibility}</h2>
          <AccessibilityToggle />
        </div>
      </div>
    </div>
  );
}
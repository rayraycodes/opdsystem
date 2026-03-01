import { useState, useEffect } from "react";
import { ArrowLeft, Bell, Phone, RotateCcw, MapPin } from "lucide-react";
import { Link, useParams } from "react-router";
import { TokenCounter } from "../components/TokenCounter";
import { EmergencyBanner } from "../components/EmergencyBanner";
import { HelpAssistance } from "../components/HelpAssistance";
import { OfflineStatusBar } from "../components/OfflineStatusBar";
import { useApp } from "../contexts/AppContext";
import { motion } from "motion/react";

const content = {
  en: {
    title: "Live Queue Tracking",
    notifications: "Notifications",
    notif60: "Queue update: You're 12 people away. Estimated wait: 45-60 min",
    notif20: "Almost your turn! 3 people ahead. Please be ready.",
    notif5: "Your turn is next! Please proceed to the clinic.",
    quickActions: "Quick Actions",
    reschedule: "Reschedule",
    requestHelp: "Request Help",
    callHelpDesk: "Call Help Desk",
    yourLocation: "You are here",
    clinicLocation: "Clinic Location",
    walkingTime: "5 min walk",
  },
  hi: {
    title: "लाइव कतार ट्रैकिंग",
    notifications: "सूचनाएं",
    notif60: "कतार अपडेट: आप 12 लोगों से दूर हैं। अनुमानित प्रतीक्षा: 45-60 मिनट",
    notif20: "लगभग आपकी बारी! 3 लोग आगे। कृपया तैयार रहें।",
    notif5: "अगली बारी आपकी है! कृपया क्लिनिक की ओर बढ़ें।",
    quickActions: "त्वरित कार्रवाई",
    reschedule: "पुनर्निर्धारित करें",
    requestHelp: "मदद का अनुरोध करें",
    callHelpDesk: "हेल्प डेस्क पर कॉल करें",
    yourLocation: "आप यहाँ हैं",
    clinicLocation: "क्लिनिक स्थान",
    walkingTime: "5 मिनट की पैदल दूरी",
  },
  ne: {
    title: "लाइभ कतार ट्र्याकिङ",
    notifications: "सूचनाहरू",
    notif60: "कतार अपडेट: तपाईं 12 मान्छे टाढा हुनुहुन्छ। अनुमानित पर्खाई: 45-60 मिनेट",
    notif20: "लगभग तपाईंको पालो! 3 मान्छे अगाडि। कृपया तयार हुनुहोस्।",
    notif5: "तपाईंको पालो अर्को हो! कृपया क्लिनिक तर्फ जानुहोस्।",
    quickActions: "द्रुत कार्यहरू",
    reschedule: "पुन: तालिका बनाउनुहोस्",
    requestHelp: "मद्दत अनुरोध गर्नुहोस्",
    callHelpDesk: "हेल्प डेस्क मा कल गर्नुहोस्",
    yourLocation: "तपाईं यहाँ हुनुहुन्छ",
    clinicLocation: "क्लिनिक स्थान",
    walkingTime: "5 मिनेट हिँड्ने",
  },
};

interface Notification {
  id: string;
  time: string;
  message: string;
  type: "info" | "warning" | "success";
}

export function QueueTrackingScreen() {
  const { tokenId } = useParams();
  const { language } = useApp();
  const text = content[language];

  const [nowServing, setNowServing] = useState(95);
  const [hasEmergency, setHasEmergency] = useState(true);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      time: "60 min ago",
      message: text.notif60,
      type: "info",
    },
    {
      id: "2",
      time: "20 min ago",
      message: text.notif20,
      type: "warning",
    },
    {
      id: "3",
      time: "5 min ago",
      message: text.notif5,
      type: "success",
    },
  ]);

  const yourToken = parseInt(tokenId?.substring(1) || "107");

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setNowServing((prev) => {
        if (prev < yourToken - 2) {
          return prev + 1;
        }
        return prev;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [yourToken]);

  return (
    <div className="min-h-screen bg-[var(--neutral-50)]">
      <OfflineStatusBar />

      {/* Header */}
      <div className="bg-white border-b border-[var(--neutral-200)] sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="p-2 hover:bg-[var(--neutral-100)] rounded-lg transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            </Link>
            <h1 className="text-xl font-semibold text-[var(--foreground)]">{text.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Emergency Banner */}
        {hasEmergency && (
          <EmergencyBanner
            message="An emergency case has been admitted. This may cause a delay of 15-20 minutes in your appointment time."
            newEtaMin={50}
            newEtaMax={70}
          />
        )}

        {/* Token Counter */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <TokenCounter
            nowServing={nowServing}
            yourToken={yourToken}
            etaMin={35}
            etaMax={50}
            confidence="medium"
            lastUpdated={new Date(Date.now() - 2 * 60000)}
          />
        </motion.div>

        {/* Location Hint */}
        <div className="bg-white rounded-lg p-4 border border-[var(--neutral-200)]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-medium text-[var(--foreground)]">{text.yourLocation}</span>
            </div>
            <span className="text-sm text-[var(--neutral-600)]">{text.walkingTime}</span>
          </div>
          <div className="h-32 bg-[var(--neutral-100)] rounded-lg flex items-center justify-center">
            <span className="text-[var(--neutral-500)]">Interactive Map Placeholder</span>
          </div>
          <p className="text-sm text-[var(--neutral-600)] mt-3">
            {text.clinicLocation}: OPD Block A, Floor 2, Room 204
          </p>
        </div>

        {/* Notifications Timeline */}
        <div className="bg-white rounded-lg p-4 border border-[var(--neutral-200)]">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-[var(--neutral-600)]" aria-hidden="true" />
            <h2 className="font-medium text-[var(--foreground)]">{text.notifications}</h2>
          </div>
          <div className="space-y-3">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className="flex gap-3 pb-3 last:pb-0 border-b last:border-b-0 border-[var(--neutral-200)]"
              >
                <div className="flex-1">
                  <p className="text-sm text-[var(--neutral-700)]">{notif.message}</p>
                  <p className="text-xs text-[var(--neutral-500)] mt-1">{notif.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h2 className="font-medium text-[var(--foreground)]">{text.quickActions}</h2>
          <div className="grid grid-cols-3 gap-3">
            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-lg border border-[var(--neutral-200)] hover:border-primary transition-colors min-h-[80px]">
              <RotateCcw className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-xs text-center">{text.reschedule}</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-lg border border-[var(--neutral-200)] hover:border-primary transition-colors min-h-[80px]">
              <Bell className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-xs text-center">{text.requestHelp}</span>
            </button>
            <a
              href="tel:+911234567890"
              className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-lg border border-[var(--neutral-200)] hover:border-primary transition-colors min-h-[80px]"
            >
              <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-xs text-center">{text.callHelpDesk}</span>
            </a>
          </div>
        </div>

        {/* Help Assistance */}
        <HelpAssistance language={language} />
      </div>
    </div>
  );
}

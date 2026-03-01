import { useState } from "react";
import { CheckCircle2, QrCode, Download, Share2, MapPin } from "lucide-react";
import { Link, useParams } from "react-router";
import { NavigationStepper } from "../components/NavigationStepper";
import { useApp } from "../contexts/AppContext";
import { motion } from "motion/react";

const content = {
  en: {
    title: "Appointment Confirmed!",
    subtitle: "Your appointment has been successfully booked",
    tokenNumber: "Token Number",
    doctorName: "Doctor",
    dateTime: "Date & Time",
    location: "Location",
    arrivalWindow: "Arrival Window",
    arriveBy: "Please arrive between 1:30 PM - 2:00 PM",
    latePolicy: "Late Policy",
    latePolicyText:
      "Please arrive 15 minutes before your time window. Late arrivals may need to wait for the next available slot.",
    downloadSlip: "Download Appointment Slip",
    shareSlip: "Share with Family",
    showAtCounter: "Show This at Counter",
    trackQueue: "Track Live Queue",
    missedToken: "Missed your token?",
    missedTokenHelp: "Visit the help desk or call us to reschedule",
  },
  hi: {
    title: "नियुक्ति की पुष्टि हो गई!",
    subtitle: "आपकी नियुक्ति सफलतापूर्वक बुक की गई है",
    tokenNumber: "टोकन नंबर",
    doctorName: "डॉक्टर",
    dateTime: "तारीख और समय",
    location: "स्थान",
    arrivalWindow: "आगमन विंडो",
    arriveBy: "कृपया 1:30 PM - 2:00 PM के बीच पहुंचें",
    latePolicy: "देर से आने की नीति",
    latePolicyText:
      "कृपया अपने समय विंडो से 15 मिनट पहले पहुंचें। देर से आने वालों को अगले उपलब्ध स्लॉट का इंतजार करना पड़ सकता है।",
    downloadSlip: "नियुक्ति पर्ची डाउनलोड करें",
    shareSlip: "परिवार के साथ साझा करें",
    showAtCounter: "इसे काउंटर पर दिखाएं",
    trackQueue: "लाइव कतार ट्रैक करें",
    missedToken: "अपना टोकन छूट गया?",
    missedTokenHelp: "पुनर्निर्धारित करने के लिए हेल्प डेस्क पर जाएं या हमें कॉल करें",
  },
  ne: {
    title: "नियुक्ति पुष्टि भयो!",
    subtitle: "तपाईंको नियुक्ति सफलतापूर्वक बुक गरिएको छ",
    tokenNumber: "टोकन नम्बर",
    doctorName: "डाक्टर",
    dateTime: "मिति र समय",
    location: "स्थान",
    arrivalWindow: "आगमन विन्डो",
    arriveBy: "कृपया 1:30 PM - 2:00 PM बीच पुग्नुहोस्",
    latePolicy: "ढिलो आउने नीति",
    latePolicyText:
      "कृपया आफ्नो समय विन्डो भन्दा 15 मिनेट अगाडि पुग्नुहोस्। ढिलो आउनेहरूले अर्को उपलब्ध स्लट को लागि पर्खनु पर्न सक्छ।",
    downloadSlip: "नियुक्ति पर्ची डाउनलोड गर्नुहोस्",
    shareSlip: "परिवारसँग साझेदारी गर्नुहोस्",
    showAtCounter: "यो काउन्टरमा देखाउनुहोस्",
    trackQueue: "लाइभ कतार ट्र्याक गर्नुहोस्",
    missedToken: "तपाईंको टोकन छुटेको छ?",
    missedTokenHelp: "पुन: तालिका बनाउन हेल्प डेस्कमा जानुहोस् वा हामीलाई कल गर्नुहोस्",
  },
};

const mockSteps = [
  {
    landmark: "Main Entrance",
    instruction: "Enter through the main gate. Volunteer desk available on the right.",
    completed: false,
  },
  {
    landmark: "Registration Counter",
    instruction: "Show your appointment slip at Counter 3-5 for check-in.",
    completed: false,
  },
  {
    landmark: "OPD Block A - Floor 2",
    instruction: "Take elevator/stairs to 2nd floor. Follow signs for General Medicine.",
    completed: false,
  },
  {
    landmark: "Dr. Rajesh Kumar's Clinic",
    instruction: "Room 204, wait in the designated seating area.",
    completed: false,
  },
];

export function ConfirmationScreen() {
  const { appointmentId } = useParams();
  const { language } = useApp();
  const text = content[language];
  const [accessibleRoute, setAccessibleRoute] = useState(false);

  const tokenNumber = `A${Math.floor(Math.random() * 900) + 100}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--success)]/5 to-white">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Success Header */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="text-center pt-4"
        >
          <div className="w-20 h-20 bg-[var(--success)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-12 h-12 text-[var(--success)]" aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-bold text-[var(--foreground)] mb-2">{text.title}</h1>
          <p className="text-[var(--neutral-600)]">{text.subtitle}</p>
        </motion.div>

        {/* Token Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-white rounded-2xl p-6 border border-[var(--neutral-200)] shadow-lg"
        >
          <div className="text-center mb-6">
            <p className="text-sm text-[var(--neutral-600)] mb-2">{text.tokenNumber}</p>
            <div className="text-6xl font-bold text-primary mb-4" role="status" aria-live="polite">
              {tokenNumber}
            </div>
            <div className="w-48 h-48 bg-[var(--neutral-100)] rounded-lg flex items-center justify-center mx-auto">
              <QrCode className="w-32 h-32 text-[var(--neutral-400)]" aria-hidden="true" />
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-[var(--neutral-200)]">
            <div className="flex items-start justify-between">
              <span className="text-sm text-[var(--neutral-600)]">{text.doctorName}</span>
              <span className="font-medium text-right">Dr. Rajesh Kumar</span>
            </div>
            <div className="flex items-start justify-between">
              <span className="text-sm text-[var(--neutral-600)]">{text.dateTime}</span>
              <span className="font-medium text-right">March 1, 2026 • 2:00 PM</span>
            </div>
            <div className="flex items-start justify-between">
              <span className="text-sm text-[var(--neutral-600)]">{text.location}</span>
              <span className="font-medium text-right">OPD Block A, Floor 2</span>
            </div>
          </div>
        </motion.div>

        {/* Arrival Guidance */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="bg-[var(--info)]/10 border border-[var(--info)]/20 rounded-lg p-4"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-medium text-[var(--foreground)] mb-1">{text.arrivalWindow}</h3>
              <p className="text-sm text-[var(--neutral-700)]">{text.arriveBy}</p>
            </div>
          </div>
        </motion.div>

        {/* Late Policy */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="bg-[var(--warning)]/10 border border-[var(--warning)]/20 rounded-lg p-4"
        >
          <h3 className="font-medium text-[var(--foreground)] mb-2">{text.latePolicy}</h3>
          <p className="text-sm text-[var(--neutral-700)]">{text.latePolicyText}</p>
          <div className="mt-3 pt-3 border-t border-[var(--warning)]/20">
            <p className="text-xs text-[var(--neutral-600)]">
              <span className="font-medium">{text.missedToken}</span> {text.missedTokenHelp}
            </p>
          </div>
        </motion.div>

        {/* Navigation Steps */}
        <NavigationStepper
          steps={mockSteps}
          accessibleRoute={accessibleRoute}
          onToggleAccessibleRoute={() => setAccessibleRoute(!accessibleRoute)}
        />

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 p-3 bg-white rounded-lg border border-[var(--neutral-200)] hover:border-primary transition-colors min-h-[56px]">
            <Download className="w-5 h-5" aria-hidden="true" />
            <span className="text-sm font-medium">{text.downloadSlip}</span>
          </button>
          <button className="flex items-center justify-center gap-2 p-3 bg-white rounded-lg border border-[var(--neutral-200)] hover:border-primary transition-colors min-h-[56px]">
            <Share2 className="w-5 h-5" aria-hidden="true" />
            <span className="text-sm font-medium">{text.shareSlip}</span>
          </button>
        </div>

        <button className="w-full flex items-center justify-center gap-2 p-4 bg-white rounded-lg border-2 border-primary hover:bg-primary/5 transition-colors min-h-[56px]">
          <QrCode className="w-5 h-5 text-primary" aria-hidden="true" />
          <span className="font-medium text-primary">{text.showAtCounter}</span>
        </button>

        {/* Track Queue Button */}
        <Link to={`/queue/${tokenNumber}`}>
          <button className="w-full py-4 bg-primary text-white rounded-lg hover:bg-[var(--healing-teal-dark)] transition-colors font-medium min-h-[56px]">
            {text.trackQueue}
          </button>
        </Link>
      </div>
    </div>
  );
}

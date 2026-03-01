import { useState } from "react";
import { ArrowLeft, Calendar, FileText, IndianRupee, Shield } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router";
import { OfflineStatusBar } from "../components/OfflineStatusBar";
import { useApp } from "../contexts/AppContext";

const content = {
  en: {
    title: "Appointment Details",
    selectTimeWindow: "Select Arrival Time Window",
    visitType: "Visit Type",
    newVisit: "New Visit",
    followUp: "Follow-up",
    basicTriage: "Basic Health Questions",
    chiefComplaint: "What brings you to the doctor today?",
    healthId: "Link Health ID (Optional)",
    healthIdDesc: "Link your ABHA/National Health ID for faster check-in",
    linkNow: "Link Now",
    skipForNow: "Skip for Now",
    requiredDocs: "Required Documents",
    estimatedCost: "Estimated Total Cost",
    consultationFee: "Consultation Fee",
    continue: "Continue to Confirmation",
    morning: "Morning (8 AM - 12 PM)",
    afternoon: "Afternoon (12 PM - 4 PM)",
    evening: "Evening (4 PM - 8 PM)",
  },
  hi: {
    title: "नियुक्ति विवरण",
    selectTimeWindow: "आगमन समय विंडो चुनें",
    visitType: "यात्रा प्रकार",
    newVisit: "नई यात्रा",
    followUp: "फॉलो-अप",
    basicTriage: "बुनियादी स्वास्थ्य प्रश्न",
    chiefComplaint: "आज आप डॉक्टर के पास क्यों आए हैं?",
    healthId: "हेल्थ आईडी लिंक करें (वैकल्पिक)",
    healthIdDesc: "तेज़ चेक-इन के लिए अपना ABHA/राष्ट्रीय स्वास्थ्य आईडी लिंक करें",
    linkNow: "अभी लिंक करें",
    skipForNow: "अभी के लिए छोड़ें",
    requiredDocs: "आवश्यक दस्तावेज",
    estimatedCost: "अनुमानित कुल लागत",
    consultationFee: "परामर्श शुल्क",
    continue: "पुष्टि के लिए जारी रखें",
    morning: "सुबह (8 AM - 12 PM)",
    afternoon: "दोपहर (12 PM - 4 PM)",
    evening: "शाम (4 PM - 8 PM)",
  },
  ne: {
    title: "नियुक्ति विवरण",
    selectTimeWindow: "आगमन समय विन्डो छान्नुहोस्",
    visitType: "भ्रमण प्रकार",
    newVisit: "नयाँ भ्रमण",
    followUp: "फलो-अप",
    basicTriage: "आधारभूत स्वास्थ्य प्रश्नहरू",
    chiefComplaint: "आज तपाईं डाक्टर कहाँ किन आउनु भएको छ?",
    healthId: "हेल्थ आईडी लिङ्क गर्नुहोस् (वैकल्पिक)",
    healthIdDesc: "छिटो चेक-इनको लागि आफ्नो ABHA/राष्ट्रिय स्वास्थ्य आईडी लिङ्क गर्नुहोस्",
    linkNow: "अहिले लिङ्क गर्नुहोस्",
    skipForNow: "अहिलेको लागि छोड्नुहोस्",
    requiredDocs: "आवश्यक कागजातहरू",
    estimatedCost: "अनुमानित कुल लागत",
    consultationFee: "परामर्श शुल्क",
    continue: "पुष्टिमा जानुहोस्",
    morning: "बिहान (8 AM - 12 PM)",
    afternoon: "दिउँसो (12 PM - 4 PM)",
    evening: "साँझ (4 PM - 8 PM)",
  },
};

const timeWindows = [
  { id: "morning", load: "low" },
  { id: "afternoon", load: "medium" },
  { id: "evening", load: "high" },
];

const loadColors = {
  low: "border-[var(--success)] bg-[var(--success)]/5",
  medium: "border-[var(--warning)] bg-[var(--warning)]/5",
  high: "border-[var(--danger)] bg-[var(--danger)]/5",
};

export function AppointmentDetailsScreen() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const { language } = useApp();
  const text = content[language];

  const [selectedWindow, setSelectedWindow] = useState("morning");
  const [visitType, setVisitType] = useState<"new" | "followup">("new");
  const [complaint, setComplaint] = useState("");

  const handleContinue = () => {
    // Generate mock appointment ID
    const appointmentId = `APT${Date.now()}`;
    navigate(`/confirmation/${appointmentId}`);
  };

  return (
    <div className="min-h-screen bg-[var(--neutral-50)]">
      <OfflineStatusBar />

      {/* Header */}
      <div className="bg-white border-b border-[var(--neutral-200)] sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link
              to="/find-care"
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
        {/* Time Window Selection */}
        <div className="bg-white rounded-lg p-4 border border-[var(--neutral-200)]">
          <h2 className="font-medium text-[var(--foreground)] mb-3">{text.selectTimeWindow}</h2>
          <div className="grid gap-3">
            {timeWindows.map((window) => (
              <label
                key={window.id}
                className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-colors min-h-[64px] ${
                  selectedWindow === window.id
                    ? "border-primary bg-primary/5"
                    : `${loadColors[window.load]} hover:border-primary/50`
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="timeWindow"
                    value={window.id}
                    checked={selectedWindow === window.id}
                    onChange={(e) => setSelectedWindow(e.target.value)}
                    className="w-5 h-5 accent-primary"
                  />
                  <div>
                    <div className="font-medium">{text[window.id as keyof typeof text]}</div>
                    <div className="text-xs text-[var(--neutral-600)] mt-1">
                      {window.load === "low" && "Light Queue"}
                      {window.load === "medium" && "Moderate Queue"}
                      {window.load === "high" && "Heavy Queue"}
                    </div>
                  </div>
                </div>
                <Calendar className="w-5 h-5 text-[var(--neutral-500)]" aria-hidden="true" />
              </label>
            ))}
          </div>
        </div>

        {/* Visit Type */}
        <div className="bg-white rounded-lg p-4 border border-[var(--neutral-200)]">
          <h2 className="font-medium text-[var(--foreground)] mb-3">{text.visitType}</h2>
          <div className="flex gap-3">
            <label
              className={`flex-1 flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-colors min-h-[48px] ${
                visitType === "new"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-[var(--neutral-200)] text-[var(--neutral-700)]"
              }`}
            >
              <input
                type="radio"
                name="visitType"
                value="new"
                checked={visitType === "new"}
                onChange={() => setVisitType("new")}
                className="sr-only"
              />
              <span className="font-medium">{text.newVisit}</span>
            </label>
            <label
              className={`flex-1 flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-colors min-h-[48px] ${
                visitType === "followup"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-[var(--neutral-200)] text-[var(--neutral-700)]"
              }`}
            >
              <input
                type="radio"
                name="visitType"
                value="followup"
                checked={visitType === "followup"}
                onChange={() => setVisitType("followup")}
                className="sr-only"
              />
              <span className="font-medium">{text.followUp}</span>
            </label>
          </div>
        </div>

        {/* Basic Triage */}
        <div className="bg-white rounded-lg p-4 border border-[var(--neutral-200)]">
          <h2 className="font-medium text-[var(--foreground)] mb-3">{text.basicTriage}</h2>
          <label htmlFor="complaint" className="sr-only">
            {text.chiefComplaint}
          </label>
          <textarea
            id="complaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder={text.chiefComplaint}
            rows={4}
            className="w-full p-3 bg-[var(--neutral-50)] rounded-lg border border-[var(--neutral-200)] focus:border-primary outline-none resize-none"
          />
        </div>

        {/* Health ID */}
        <div className="bg-gradient-to-br from-[var(--info)]/10 to-[var(--info)]/5 rounded-lg p-4 border border-[var(--info)]/20">
          <div className="flex items-start gap-3 mb-3">
            <Shield className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h2 className="font-medium text-[var(--foreground)]">{text.healthId}</h2>
              <p className="text-sm text-[var(--neutral-700)] mt-1">{text.healthIdDesc}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 px-4 py-3 bg-[var(--info)] text-white rounded-lg hover:bg-[var(--info)]/90 transition-colors min-h-[48px]">
              {text.linkNow}
            </button>
            <button className="px-4 py-3 bg-white text-[var(--neutral-700)] rounded-lg border border-[var(--neutral-200)] hover:bg-[var(--neutral-50)] transition-colors min-h-[48px]">
              {text.skipForNow}
            </button>
          </div>
        </div>

        {/* Required Documents */}
        <div className="bg-white rounded-lg p-4 border border-[var(--neutral-200)]">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-[var(--neutral-600)]" aria-hidden="true" />
            <h2 className="font-medium text-[var(--foreground)]">{text.requiredDocs}</h2>
          </div>
          <ul className="space-y-2 text-sm text-[var(--neutral-700)]">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Valid Government ID (Aadhaar, Passport, Voter ID)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Previous medical reports (if applicable)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Insurance card or payment method</span>
            </li>
          </ul>
        </div>

        {/* Cost Estimate */}
        <div className="bg-white rounded-lg p-4 border border-[var(--neutral-200)]">
          <div className="flex items-center gap-2 mb-3">
            <IndianRupee className="w-5 h-5 text-[var(--neutral-600)]" aria-hidden="true" />
            <h2 className="font-medium text-[var(--foreground)]">{text.estimatedCost}</h2>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--neutral-700)]">{text.consultationFee}</span>
              <span className="font-medium">₹300-500</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[var(--neutral-200)]">
              <span className="font-medium">Total</span>
              <span className="font-bold text-lg">₹300-500</span>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full py-4 bg-primary text-white rounded-lg hover:bg-[var(--healing-teal-dark)] transition-colors font-medium min-h-[56px]"
        >
          {text.continue}
        </button>
      </div>
    </div>
  );
}

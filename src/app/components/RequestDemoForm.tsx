import { useState } from "react";
import {
  Send,
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  CheckCircle2,
  Loader2,
  Shield,
  Heart,
  Globe,
} from "lucide-react";

interface FormData {
  organizationType: "government-hospital" | "private-hospital" | "clinic" | "ngo" | "other";
  organizationName: string;
  contactName: string;
  email: string;
  phone: string;
  country: "india" | "nepal" | "other";
  city: string;
  estimatedOpdVolume: "under-100" | "100-500" | "500-1000" | "1000-plus";
  interests: string[];
  message: string;
  agreeToPrivacy: boolean;
}

interface RequestDemoFormProps {
  language?: "en" | "hi" | "ne";
  onClose?: () => void;
}

const initialFormData: FormData = {
  organizationType: "government-hospital",
  organizationName: "",
  contactName: "",
  email: "",
  phone: "",
  country: "nepal",
  city: "",
  estimatedOpdVolume: "100-500",
  interests: [],
  message: "",
  agreeToPrivacy: false,
};

const labels = {
  en: {
    title: "Request a Demo",
    subtitle: "See how OPD Queue System can transform your hospital's patient experience",
    organizationType: "Organization Type",
    organizationTypes: {
      "government-hospital": "Government Hospital",
      "private-hospital": "Private Hospital",
      clinic: "Clinic / Health Center",
      ngo: "NGO / Non-Profit",
      other: "Other",
    },
    organizationName: "Organization Name",
    contactName: "Your Name",
    email: "Email Address",
    phone: "Phone Number",
    country: "Country",
    countries: {
      india: "India",
      nepal: "Nepal",
      other: "Other",
    },
    city: "City",
    estimatedOpdVolume: "Estimated Daily OPD Volume",
    opdVolumes: {
      "under-100": "Under 100 patients",
      "100-500": "100-500 patients",
      "500-1000": "500-1,000 patients",
      "1000-plus": "1,000+ patients",
    },
    interests: "What interests you most?",
    interestOptions: [
      { id: "queue-tracking", label: "Real-time Queue Tracking" },
      { id: "health-data", label: "Health Data Sharing & Protection" },
      { id: "abha-integration", label: "ABHA/Health ID Integration" },
      { id: "accessibility", label: "Accessibility Features" },
      { id: "multilingual", label: "Multilingual Support" },
      { id: "offline-mode", label: "Offline-First Capability" },
      { id: "staff-dashboard", label: "Staff Dashboard" },
      { id: "analytics", label: "Analytics & Reporting" },
    ],
    message: "Additional Message (Optional)",
    messagePlaceholder: "Tell us about your current OPD challenges or any specific requirements...",
    privacy: "I agree to the privacy policy and consent to being contacted about OPD Queue System",
    submit: "Request Demo",
    submitting: "Sending...",
    successTitle: "Request Submitted!",
    successMessage: "Thank you for your interest. Our team will contact you within 24-48 hours.",
    contact: "Or contact us directly:",
    createdBy: "Created by",
  },
  hi: {
    title: "डेमो का अनुरोध करें",
    subtitle: "देखें कि OPD क्यू सिस्टम आपके अस्पताल के रोगी अनुभव को कैसे बदल सकता है",
    organizationType: "संगठन का प्रकार",
    organizationTypes: {
      "government-hospital": "सरकारी अस्पताल",
      "private-hospital": "निजी अस्पताल",
      clinic: "क्लिनिक / स्वास्थ्य केंद्र",
      ngo: "एनजीओ / गैर-लाभकारी",
      other: "अन्य",
    },
    organizationName: "संगठन का नाम",
    contactName: "आपका नाम",
    email: "ईमेल पता",
    phone: "फोन नंबर",
    country: "देश",
    countries: {
      india: "भारत",
      nepal: "नेपाल",
      other: "अन्य",
    },
    city: "शहर",
    estimatedOpdVolume: "अनुमानित दैनिक OPD मात्रा",
    opdVolumes: {
      "under-100": "100 से कम मरीज",
      "100-500": "100-500 मरीज",
      "500-1000": "500-1,000 मरीज",
      "1000-plus": "1,000+ मरीज",
    },
    interests: "आपको सबसे ज्यादा क्या रुचि है?",
    interestOptions: [
      { id: "queue-tracking", label: "रियल-टाइम क्यू ट्रैकिंग" },
      { id: "health-data", label: "स्वास्थ्य डेटा साझाकरण और सुरक्षा" },
      { id: "abha-integration", label: "आभा/हेल्थ आईडी इंटीग्रेशन" },
      { id: "accessibility", label: "एक्सेसिबिलिटी फीचर्स" },
      { id: "multilingual", label: "बहुभाषी समर्थन" },
      { id: "offline-mode", label: "ऑफलाइन-फर्स्ट क्षमता" },
      { id: "staff-dashboard", label: "स्टाफ डैशबोर्ड" },
      { id: "analytics", label: "एनालिटिक्स और रिपोर्टिंग" },
    ],
    message: "अतिरिक्त संदेश (वैकल्पिक)",
    messagePlaceholder: "अपनी वर्तमान OPD चुनौतियों या किसी विशेष आवश्यकता के बारे में बताएं...",
    privacy: "मैं गोपनीयता नीति से सहमत हूं और OPD क्यू सिस्टम के बारे में संपर्क किए जाने की सहमति देता/देती हूं",
    submit: "डेमो का अनुरोध करें",
    submitting: "भेज रहा है...",
    successTitle: "अनुरोध प्रस्तुत!",
    successMessage: "आपकी रुचि के लिए धन्यवाद। हमारी टीम 24-48 घंटों के भीतर आपसे संपर्क करेगी।",
    contact: "या सीधे संपर्क करें:",
    createdBy: "निर्माता",
  },
  ne: {
    title: "डेमो अनुरोध गर्नुहोस्",
    subtitle: "OPD क्यू सिस्टमले तपाईंको अस्पतालको बिरामी अनुभव कसरी रूपान्तरण गर्न सक्छ हेर्नुहोस्",
    organizationType: "संगठनको प्रकार",
    organizationTypes: {
      "government-hospital": "सरकारी अस्पताल",
      "private-hospital": "निजी अस्पताल",
      clinic: "क्लिनिक / स्वास्थ्य केन्द्र",
      ngo: "गैरसरकारी संस्था / गैर-नाफामूलक",
      other: "अन्य",
    },
    organizationName: "संगठनको नाम",
    contactName: "तपाईंको नाम",
    email: "इमेल ठेगाना",
    phone: "फोन नम्बर",
    country: "देश",
    countries: {
      india: "भारत",
      nepal: "नेपाल",
      other: "अन्य",
    },
    city: "शहर",
    estimatedOpdVolume: "अनुमानित दैनिक OPD मात्रा",
    opdVolumes: {
      "under-100": "१०० भन्दा कम बिरामी",
      "100-500": "१००-५०० बिरामी",
      "500-1000": "५००-१,००० बिरामी",
      "1000-plus": "१,०००+ बिरामी",
    },
    interests: "तपाईंलाई के सबैभन्दा बढी रुचि छ?",
    interestOptions: [
      { id: "queue-tracking", label: "रियल-टाइम क्यू ट्र्याकिङ" },
      { id: "health-data", label: "स्वास्थ्य डेटा साझेदारी र सुरक्षा" },
      { id: "abha-integration", label: "आभा/हेल्थ आईडी इन्टिग्रेसन" },
      { id: "accessibility", label: "पहुँच सुविधाहरू" },
      { id: "multilingual", label: "बहुभाषिक समर्थन" },
      { id: "offline-mode", label: "अफलाइन-फर्स्ट क्षमता" },
      { id: "staff-dashboard", label: "स्टाफ ड्यासबोर्ड" },
      { id: "analytics", label: "एनालिटिक्स र रिपोर्टिङ" },
    ],
    message: "थप सन्देश (ऐच्छिक)",
    messagePlaceholder: "तपाईंको हालको OPD चुनौतीहरू वा कुनै विशेष आवश्यकताहरूको बारेमा बताउनुहोस्...",
    privacy: "म गोपनीयता नीतिमा सहमत छु र OPD क्यू सिस्टमको बारेमा सम्पर्क गर्न सहमति दिन्छु",
    submit: "डेमो अनुरोध गर्नुहोस्",
    submitting: "पठाउँदै...",
    successTitle: "अनुरोध पेश गरियो!",
    successMessage: "तपाईंको रुचिको लागि धन्यवाद। हाम्रो टोलीले २४-४८ घण्टा भित्र तपाईंलाई सम्पर्क गर्नेछ।",
    contact: "वा सिधै सम्पर्क गर्नुहोस्:",
    createdBy: "सिर्जनाकर्ता",
  },
};

export function RequestDemoForm({ language = "en", onClose }: RequestDemoFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const t = labels[language];

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.organizationName.trim()) {
      newErrors.organizationName = "Required";
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = "Required";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "Required";
    }
    if (!formData.agreeToPrivacy) {
      newErrors.agreeToPrivacy = "Required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call - in production, this would send to a backend
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Log the submission (in production, send to backend/email service)
    console.log("Demo Request Submitted:", {
      ...formData,
      submittedAt: new Date().toISOString(),
      contactEmail: "reganmaharjann@gmail.com",
      creator: "Regan Maharjan",
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInterestToggle = (interestId: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((i) => i !== interestId)
        : [...prev.interests, interestId],
    }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl border border-[var(--neutral-200)] p-8 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="w-20 h-20 bg-[var(--success)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[var(--success)]" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">{t.successTitle}</h2>
          <p className="text-lg text-[var(--neutral-700)] mb-8">{t.successMessage}</p>

          <div className="bg-[var(--neutral-50)] rounded-lg p-6 mb-6">
            <p className="text-sm text-[var(--neutral-600)] mb-3">{t.contact}</p>
            <div className="flex flex-col items-center gap-2">
              <a
                href="mailto:reganmaharjann@gmail.com"
                className="flex items-center gap-2 text-primary hover:underline font-medium"
              >
                <Mail className="w-5 h-5" />
                reganmaharjann@gmail.com
              </a>
            </div>
          </div>

          <div className="text-sm text-[var(--neutral-500)] flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-primary" />
            <span>{t.createdBy} a <strong>Nepalese</strong></span>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-[var(--healing-teal-dark)] transition-colors"
            >
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-[var(--neutral-200)] overflow-hidden max-w-3xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b border-[var(--neutral-200)]">
        <div className="flex items-center gap-3 mb-2">
          <Send className="w-8 h-8 text-primary" />
          <h2 className="text-2xl font-bold text-[var(--foreground)]">{t.title}</h2>
        </div>
        <p className="text-[var(--neutral-700)]">{t.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Organization Type */}
        <div>
          <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
            <Building2 className="w-4 h-4 inline mr-2" />
            {t.organizationType}
          </label>
          <select
            value={formData.organizationType}
            onChange={(e) => setFormData((prev) => ({ ...prev, organizationType: e.target.value as FormData["organizationType"] }))}
            className="w-full px-4 py-3 border border-[var(--neutral-200)] rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          >
            {Object.entries(t.organizationTypes).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Organization Name */}
        <div>
          <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
            {t.organizationName} *
          </label>
          <input
            type="text"
            value={formData.organizationName}
            onChange={(e) => setFormData((prev) => ({ ...prev, organizationName: e.target.value }))}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${
              errors.organizationName ? "border-[var(--danger)]" : "border-[var(--neutral-200)]"
            }`}
            placeholder="Patan Hospital, AIIMS, etc."
          />
        </div>

        {/* Contact Name & Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
              <User className="w-4 h-4 inline mr-2" />
              {t.contactName} *
            </label>
            <input
              type="text"
              value={formData.contactName}
              onChange={(e) => setFormData((prev) => ({ ...prev, contactName: e.target.value }))}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${
                errors.contactName ? "border-[var(--danger)]" : "border-[var(--neutral-200)]"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              {t.email} *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${
                errors.email ? "border-[var(--danger)]" : "border-[var(--neutral-200)]"
              }`}
            />
          </div>
        </div>

        {/* Phone & Country */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              {t.phone} *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${
                errors.phone ? "border-[var(--danger)]" : "border-[var(--neutral-200)]"
              }`}
              placeholder="+977-1-5522266"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
              <Globe className="w-4 h-4 inline mr-2" />
              {t.country}
            </label>
            <select
              value={formData.country}
              onChange={(e) => setFormData((prev) => ({ ...prev, country: e.target.value as FormData["country"] }))}
              className="w-full px-4 py-3 border border-[var(--neutral-200)] rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            >
              {Object.entries(t.countries).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* City & OPD Volume */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              {t.city} *
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${
                errors.city ? "border-[var(--danger)]" : "border-[var(--neutral-200)]"
              }`}
              placeholder="Kathmandu, Delhi, etc."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
              {t.estimatedOpdVolume}
            </label>
            <select
              value={formData.estimatedOpdVolume}
              onChange={(e) => setFormData((prev) => ({ ...prev, estimatedOpdVolume: e.target.value as FormData["estimatedOpdVolume"] }))}
              className="w-full px-4 py-3 border border-[var(--neutral-200)] rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            >
              {Object.entries(t.opdVolumes).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Interests */}
        <div>
          <label className="block text-sm font-medium text-[var(--foreground)] mb-3">{t.interests}</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {t.interestOptions.map((interest) => (
              <button
                key={interest.id}
                type="button"
                onClick={() => handleInterestToggle(interest.id)}
                className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                  formData.interests.includes(interest.id)
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-[var(--neutral-700)] border-[var(--neutral-200)] hover:border-primary"
                }`}
              >
                {interest.label}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            {t.message}
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
            rows={4}
            className="w-full px-4 py-3 border border-[var(--neutral-200)] rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
            placeholder={t.messagePlaceholder}
          />
        </div>

        {/* Privacy Consent */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="privacy"
            checked={formData.agreeToPrivacy}
            onChange={(e) => setFormData((prev) => ({ ...prev, agreeToPrivacy: e.target.checked }))}
            className={`mt-1 w-5 h-5 rounded border-2 ${
              errors.agreeToPrivacy ? "border-[var(--danger)]" : "border-[var(--neutral-300)]"
            }`}
          />
          <label htmlFor="privacy" className="text-sm text-[var(--neutral-700)]">
            <Shield className="w-4 h-4 inline mr-1 text-primary" />
            {t.privacy}
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-4 rounded-lg font-medium text-lg hover:bg-[var(--healing-teal-dark)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              {t.submitting}
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {t.submit}
            </>
          )}
        </button>

        {/* Contact Info */}
        <div className="text-center pt-4 border-t border-[var(--neutral-200)]">
          <p className="text-sm text-[var(--neutral-600)] mb-2">{t.contact}</p>
          <a
            href="mailto:reganmaharjann@gmail.com"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <Mail className="w-4 h-4" />
            reganmaharjann@gmail.com
          </a>
          <div className="mt-4 text-xs text-[var(--neutral-500)] flex items-center justify-center gap-2">
            <Heart className="w-3 h-3 text-primary" />
            <span>{t.createdBy} a <strong>Nepalese</strong></span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RequestDemoForm;

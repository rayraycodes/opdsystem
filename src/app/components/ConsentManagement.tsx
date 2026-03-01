import { useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Clock,
  User,
  Building2,
  Heart,
  Activity,
  Globe,
  Trash2,
  Download,
  Settings,
} from "lucide-react";

type ConsentCategory = "treatment" | "emergency" | "data-sharing" | "research";
type DataScope = "demographics" | "appointments" | "vitals" | "diagnoses" | "medications" | "lab-results" | "imaging" | "procedures";

interface ConsentItem {
  id: string;
  category: ConsentCategory;
  title: string;
  titleHi: string;
  titleNe: string;
  description: string;
  descriptionHi: string;
  descriptionNe: string;
  scope: DataScope[];
  isGranted: boolean;
  isMandatory: boolean;
  grantedDate?: Date;
  expirationDate?: Date;
}

interface ConsentManagementProps {
  language?: "en" | "hi" | "ne";
  patientName?: string;
  abhaLinked?: boolean;
  nepalHealthIdLinked?: boolean;
  onConsentChange?: (consentId: string, granted: boolean) => void;
  onDataExportRequest?: () => void;
  onDataDeletionRequest?: () => void;
}

const defaultConsents: ConsentItem[] = [
  {
    id: "treatment",
    category: "treatment",
    title: "Medical Treatment Consent",
    titleHi: "चिकित्सा उपचार सहमति",
    titleNe: "चिकित्सा उपचार सहमति",
    description: "Allow healthcare providers to access your records for diagnosis and treatment during your visit.",
    descriptionHi: "स्वास्थ्य सेवा प्रदाताओं को आपकी यात्रा के दौरान निदान और उपचार के लिए आपके रिकॉर्ड तक पहुंचने की अनुमति दें।",
    descriptionNe: "स्वास्थ्य सेवा प्रदायकहरूलाई तपाईंको भ्रमणको समयमा निदान र उपचारको लागि तपाईंको रेकर्डहरू पहुँच गर्न अनुमति दिनुहोस्।",
    scope: ["demographics", "vitals", "diagnoses", "medications", "lab-results"],
    isGranted: true,
    isMandatory: true,
  },
  {
    id: "emergency",
    category: "emergency",
    title: "Emergency Access",
    titleHi: "आपातकालीन पहुंच",
    titleNe: "आपतकालीन पहुँच",
    description: "Allow emergency medical access to your records in life-threatening situations, even without explicit consent.",
    descriptionHi: "जीवन-खतरनाक स्थितियों में स्पष्ट सहमति के बिना भी अपने रिकॉर्ड तक आपातकालीन चिकित्सा पहुंच की अनुमति दें।",
    descriptionNe: "जीवन-खतरा अवस्थाहरूमा स्पष्ट सहमति बिना पनि तपाईंको रेकर्डहरूमा आपतकालीन चिकित्सा पहुँच अनुमति दिनुहोस्।",
    scope: ["demographics", "vitals", "diagnoses", "medications", "procedures"],
    isGranted: true,
    isMandatory: false,
  },
  {
    id: "hospital-sharing",
    category: "data-sharing",
    title: "Share with Referring Hospitals",
    titleHi: "रेफरिंग अस्पतालों के साथ साझा करें",
    titleNe: "रेफर गर्ने अस्पतालहरूसँग साझा गर्नुहोस्",
    description: "Allow sharing of your medical records with hospitals that referred you or where you are referred for specialized care.",
    descriptionHi: "उन अस्पतालों के साथ अपने मेडिकल रिकॉर्ड साझा करने की अनुमति दें जिन्होंने आपको रेफर किया या जहां आपको विशेष देखभाल के लिए रेफर किया गया है।",
    descriptionNe: "तपाईंलाई रेफर गर्ने वा विशेष हेरचाहको लागि रेफर गरिएको अस्पतालहरूसँग तपाईंको मेडिकल रेकर्डहरू साझा गर्न अनुमति दिनुहोस्।",
    scope: ["demographics", "appointments", "diagnoses", "medications", "lab-results"],
    isGranted: false,
    isMandatory: false,
  },
  {
    id: "pharmacy-sharing",
    category: "data-sharing",
    title: "Share with Pharmacies",
    titleHi: "फार्मेसियों के साथ साझा करें",
    titleNe: "फार्मेसीहरूसँग साझा गर्नुहोस्",
    description: "Allow pharmacies to access your prescription history for medication dispensing and interaction checks.",
    descriptionHi: "दवा वितरण और इंटरैक्शन जांच के लिए फार्मेसियों को आपके प्रिस्क्रिप्शन इतिहास तक पहुंचने की अनुमति दें।",
    descriptionNe: "औषधि वितरण र अन्तरक्रिया जाँचको लागि फार्मेसीहरूलाई तपाईंको प्रिस्क्रिप्शन इतिहासमा पहुँच गर्न अनुमति दिनुहोस्।",
    scope: ["demographics", "medications"],
    isGranted: false,
    isMandatory: false,
  },
  {
    id: "insurance-sharing",
    category: "data-sharing",
    title: "Share with Insurance Providers",
    titleHi: "बीमा प्रदाताओं के साथ साझा करें",
    titleNe: "बीमा प्रदायकहरूसँग साझा गर्नुहोस्",
    description: "Allow your insurance provider to access relevant medical records for claims processing.",
    descriptionHi: "दावा प्रसंस्करण के लिए अपने बीमा प्रदाता को प्रासंगिक मेडिकल रिकॉर्ड तक पहुंचने की अनुमति दें।",
    descriptionNe: "दाबी प्रशोधनको लागि तपाईंको बीमा प्रदायकलाई सान्दर्भिक मेडिकल रेकर्डहरूमा पहुँच गर्न अनुमति दिनुहोस्।",
    scope: ["demographics", "appointments", "diagnoses", "procedures"],
    isGranted: false,
    isMandatory: false,
  },
  {
    id: "government-health",
    category: "data-sharing",
    title: "Share with Government Health Programs",
    titleHi: "सरकारी स्वास्थ्य कार्यक्रमों के साथ साझा करें",
    titleNe: "सरकारी स्वास्थ्य कार्यक्रमहरूसँग साझा गर्नुहोस्",
    description: "Allow sharing of anonymized health data with government public health programs for disease surveillance and health planning.",
    descriptionHi: "रोग निगरानी और स्वास्थ्य योजना के लिए सरकारी सार्वजनिक स्वास्थ्य कार्यक्रमों के साथ अनाम स्वास्थ्य डेटा साझा करने की अनुमति दें।",
    descriptionNe: "रोग निगरानी र स्वास्थ्य योजनाको लागि सरकारी सार्वजनिक स्वास्थ्य कार्यक्रमहरूसँग अज्ञात स्वास्थ्य डेटा साझा गर्न अनुमति दिनुहोस्।",
    scope: ["diagnoses", "procedures"],
    isGranted: false,
    isMandatory: false,
  },
  {
    id: "research",
    category: "research",
    title: "Research Participation",
    titleHi: "अनुसंधान भागीदारी",
    titleNe: "अनुसन्धान सहभागिता",
    description: "Allow your anonymized health data to be used for medical research approved by ethics committees.",
    descriptionHi: "नैतिकता समितियों द्वारा अनुमोदित चिकित्सा अनुसंधान के लिए अपने अनाम स्वास्थ्य डेटा का उपयोग करने की अनुमति दें।",
    descriptionNe: "नैतिकता समितिहरूद्वारा स्वीकृत चिकित्सा अनुसन्धानको लागि तपाईंको अज्ञात स्वास्थ्य डेटा प्रयोग गर्न अनुमति दिनुहोस्।",
    scope: ["diagnoses", "medications", "lab-results", "procedures"],
    isGranted: false,
    isMandatory: false,
  },
];

const scopeLabels: Record<DataScope, { en: string; hi: string; ne: string }> = {
  demographics: { en: "Demographics", hi: "जनसांख्यिकी", ne: "जनसांख्यिकी" },
  appointments: { en: "Appointments", hi: "अपॉइंटमेंट", ne: "अपोइन्टमेन्ट" },
  vitals: { en: "Vitals", hi: "महत्वपूर्ण संकेत", ne: "महत्वपूर्ण संकेत" },
  diagnoses: { en: "Diagnoses", hi: "निदान", ne: "निदान" },
  medications: { en: "Medications", hi: "दवाइयां", ne: "औषधिहरू" },
  "lab-results": { en: "Lab Results", hi: "लैब परिणाम", ne: "ल्याब परिणाम" },
  imaging: { en: "Imaging", hi: "इमेजिंग", ne: "इमेजिङ" },
  procedures: { en: "Procedures", hi: "प्रक्रियाएं", ne: "प्रक्रियाहरू" },
};

const categoryIcons: Record<ConsentCategory, React.ReactNode> = {
  treatment: <Heart className="w-5 h-5" />,
  emergency: <Activity className="w-5 h-5" />,
  "data-sharing": <Building2 className="w-5 h-5" />,
  research: <FileText className="w-5 h-5" />,
};

export function ConsentManagement({
  language = "en",
  patientName = "Patient",
  abhaLinked = false,
  nepalHealthIdLinked = false,
  onConsentChange,
  onDataExportRequest,
  onDataDeletionRequest,
}: ConsentManagementProps) {
  const [consents, setConsents] = useState<ConsentItem[]>(defaultConsents);
  const [expandedConsent, setExpandedConsent] = useState<string | null>(null);
  const [showDataRights, setShowDataRights] = useState(false);
  const [showAuditLog, setShowAuditLog] = useState(false);

  const handleConsentToggle = (consentId: string) => {
    setConsents((prev) =>
      prev.map((c) => {
        if (c.id === consentId && !c.isMandatory) {
          const newGranted = !c.isGranted;
          onConsentChange?.(consentId, newGranted);
          return {
            ...c,
            isGranted: newGranted,
            grantedDate: newGranted ? new Date() : undefined,
          };
        }
        return c;
      })
    );
  };

  const getTitle = (item: ConsentItem) => {
    if (language === "hi") return item.titleHi;
    if (language === "ne") return item.titleNe;
    return item.title;
  };

  const getDescription = (item: ConsentItem) => {
    if (language === "hi") return item.descriptionHi;
    if (language === "ne") return item.descriptionNe;
    return item.description;
  };

  const getScopeLabel = (scope: DataScope) => {
    return scopeLabels[scope][language];
  };

  const sectionLabels = {
    en: {
      title: "Health Data Consent Management",
      subtitle: "Control how your health information is shared and used",
      yourRights: "Your Data Rights",
      auditLog: "Access History",
      linkedAccounts: "Linked Health IDs",
      abhaLabel: "ABHA (India)",
      nepalHealthId: "Nepal Health ID",
      linked: "Linked",
      notLinked: "Not Linked",
      mandatory: "Required",
      granted: "Granted",
      notGranted: "Not Granted",
      dataIncluded: "Data included:",
      exportData: "Export My Data",
      deleteData: "Request Data Deletion",
      viewAudit: "View Access History",
      noAuditEntries: "No access history available",
      lastUpdated: "Last updated:",
    },
    hi: {
      title: "स्वास्थ्य डेटा सहमति प्रबंधन",
      subtitle: "नियंत्रित करें कि आपकी स्वास्थ्य जानकारी कैसे साझा और उपयोग की जाती है",
      yourRights: "आपके डेटा अधिकार",
      auditLog: "पहुंच इतिहास",
      linkedAccounts: "लिंक्ड हेल्थ आईडी",
      abhaLabel: "आभा (भारत)",
      nepalHealthId: "नेपाल हेल्थ आईडी",
      linked: "लिंक्ड",
      notLinked: "लिंक नहीं",
      mandatory: "आवश्यक",
      granted: "स्वीकृत",
      notGranted: "स्वीकृत नहीं",
      dataIncluded: "शामिल डेटा:",
      exportData: "मेरा डेटा निर्यात करें",
      deleteData: "डेटा विलोपन का अनुरोध करें",
      viewAudit: "पहुंच इतिहास देखें",
      noAuditEntries: "कोई पहुंच इतिहास उपलब्ध नहीं",
      lastUpdated: "अंतिम अपडेट:",
    },
    ne: {
      title: "स्वास्थ्य डेटा सहमति व्यवस्थापन",
      subtitle: "तपाईंको स्वास्थ्य जानकारी कसरी साझा र प्रयोग गरिन्छ नियन्त्रण गर्नुहोस्",
      yourRights: "तपाईंका डेटा अधिकारहरू",
      auditLog: "पहुँच इतिहास",
      linkedAccounts: "लिङ्क गरिएका हेल्थ आईडीहरू",
      abhaLabel: "आभा (भारत)",
      nepalHealthId: "नेपाल हेल्थ आईडी",
      linked: "लिङ्क गरिएको",
      notLinked: "लिङ्क नभएको",
      mandatory: "आवश्यक",
      granted: "प्रदान गरिएको",
      notGranted: "प्रदान नगरिएको",
      dataIncluded: "समावेश डेटा:",
      exportData: "मेरो डेटा निर्यात गर्नुहोस्",
      deleteData: "डेटा मेटाउने अनुरोध गर्नुहोस्",
      viewAudit: "पहुँच इतिहास हेर्नुहोस्",
      noAuditEntries: "कुनै पहुँच इतिहास उपलब्ध छैन",
      lastUpdated: "अन्तिम अपडेट:",
    },
  };

  const labels = sectionLabels[language];

  return (
    <div className="bg-white rounded-xl border border-[var(--neutral-200)] overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b border-[var(--neutral-200)]">
        <div className="flex items-center gap-3 mb-2">
          <Shield className="w-8 h-8 text-primary" />
          <h2 className="text-2xl font-bold text-[var(--foreground)]">{labels.title}</h2>
        </div>
        <p className="text-[var(--neutral-700)]">{labels.subtitle}</p>

        {/* Linked Health IDs */}
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-[var(--neutral-200)]">
            <Globe className="w-5 h-5 text-primary" />
            <span className="font-medium">{labels.abhaLabel}:</span>
            {abhaLinked ? (
              <span className="flex items-center gap-1 text-[var(--success)]">
                <CheckCircle2 className="w-4 h-4" />
                {labels.linked}
              </span>
            ) : (
              <span className="text-[var(--neutral-500)]">{labels.notLinked}</span>
            )}
          </div>
          <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-[var(--neutral-200)]">
            <Globe className="w-5 h-5 text-secondary" />
            <span className="font-medium">{labels.nepalHealthId}:</span>
            {nepalHealthIdLinked ? (
              <span className="flex items-center gap-1 text-[var(--success)]">
                <CheckCircle2 className="w-4 h-4" />
                {labels.linked}
              </span>
            ) : (
              <span className="text-[var(--neutral-500)]">{labels.notLinked}</span>
            )}
          </div>
        </div>
      </div>

      {/* Consent Items */}
      <div className="p-6 space-y-4">
        {consents.map((consent) => (
          <div
            key={consent.id}
            className={`border rounded-lg overflow-hidden transition-all ${
              consent.isGranted ? "border-primary/30 bg-primary/5" : "border-[var(--neutral-200)]"
            }`}
          >
            <div className="p-4">
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    consent.isGranted ? "bg-primary text-white" : "bg-[var(--neutral-100)] text-[var(--neutral-500)]"
                  }`}
                >
                  {categoryIcons[consent.category]}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-lg">{getTitle(consent)}</h3>
                    {consent.isMandatory && (
                      <span className="text-xs bg-[var(--warning)]/20 text-[var(--warning)] px-2 py-0.5 rounded-full font-medium">
                        {labels.mandatory}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--neutral-700)] mb-2">{getDescription(consent)}</p>

                  {/* Data scope tags */}
                  <div className="flex flex-wrap gap-1">
                    {consent.scope.map((scope) => (
                      <span
                        key={scope}
                        className="text-xs bg-[var(--neutral-100)] text-[var(--neutral-600)] px-2 py-0.5 rounded-full"
                      >
                        {getScopeLabel(scope)}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Toggle */}
                  <button
                    onClick={() => handleConsentToggle(consent.id)}
                    disabled={consent.isMandatory}
                    className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                      consent.isMandatory ? "cursor-not-allowed opacity-60" : "cursor-pointer"
                    } ${consent.isGranted ? "bg-primary" : "bg-[var(--neutral-300)]"}`}
                    role="switch"
                    aria-checked={consent.isGranted}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${
                        consent.isGranted ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>

                  {/* Expand button */}
                  <button
                    onClick={() => setExpandedConsent(expandedConsent === consent.id ? null : consent.id)}
                    className="p-2 hover:bg-[var(--neutral-100)] rounded-lg transition-colors"
                  >
                    {expandedConsent === consent.id ? (
                      <ChevronUp className="w-5 h-5 text-[var(--neutral-500)]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[var(--neutral-500)]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded details */}
              {expandedConsent === consent.id && (
                <div className="mt-4 pt-4 border-t border-[var(--neutral-200)]">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center gap-2 text-[var(--neutral-600)] mb-1">
                        <Clock className="w-4 h-4" />
                        <span>{labels.lastUpdated}</span>
                      </div>
                      <p className="font-medium">
                        {consent.grantedDate
                          ? consent.grantedDate.toLocaleDateString(language === "hi" ? "hi-IN" : language === "ne" ? "ne-NP" : "en-US")
                          : "-"}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-[var(--neutral-600)] mb-1">
                        <Eye className="w-4 h-4" />
                        <span>{labels.dataIncluded}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {consent.scope.map((scope) => (
                          <span
                            key={scope}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium"
                          >
                            {getScopeLabel(scope)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Data Rights Section */}
      <div className="p-6 bg-[var(--neutral-50)] border-t border-[var(--neutral-200)]">
        <button
          onClick={() => setShowDataRights(!showDataRights)}
          className="flex items-center justify-between w-full mb-4"
        >
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            <span className="font-bold text-lg">{labels.yourRights}</span>
          </div>
          {showDataRights ? (
            <ChevronUp className="w-5 h-5 text-[var(--neutral-500)]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[var(--neutral-500)]" />
          )}
        </button>

        {showDataRights && (
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={onDataExportRequest}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[var(--neutral-200)] hover:border-primary transition-colors"
              >
                <Download className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <span className="font-medium block">{labels.exportData}</span>
                  <span className="text-xs text-[var(--neutral-500)]">DPDPA / Nepal Privacy Act</span>
                </div>
              </button>

              <button
                onClick={onDataDeletionRequest}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[var(--neutral-200)] hover:border-[var(--danger)] transition-colors"
              >
                <Trash2 className="w-6 h-6 text-[var(--danger)]" />
                <div className="text-left">
                  <span className="font-medium block">{labels.deleteData}</span>
                  <span className="text-xs text-[var(--neutral-500)]">Right to Erasure</span>
                </div>
              </button>

              <button
                onClick={() => setShowAuditLog(!showAuditLog)}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[var(--neutral-200)] hover:border-secondary transition-colors"
              >
                <Eye className="w-6 h-6 text-secondary" />
                <div className="text-left">
                  <span className="font-medium block">{labels.viewAudit}</span>
                  <span className="text-xs text-[var(--neutral-500)]">Access Transparency</span>
                </div>
              </button>
            </div>

            {showAuditLog && (
              <div className="bg-white rounded-lg border border-[var(--neutral-200)] p-4">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-secondary" />
                  {labels.auditLog}
                </h4>
                <div className="text-center py-8 text-[var(--neutral-500)]">
                  <Eye className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>{labels.noAuditEntries}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Regulatory Compliance Footer */}
      <div className="p-4 bg-[var(--neutral-100)] border-t border-[var(--neutral-200)]">
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--neutral-600)]">
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4" />
            <span>DPDPA 2023 (India)</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4" />
            <span>Nepal Privacy Act 2018/2025</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4" />
            <span>FHIR R4 Compatible</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4" />
            <span>HL7 Consent Standard</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsentManagement;

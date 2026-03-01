import { useState } from "react";
import { Search, ArrowLeft, SlidersHorizontal, Scan } from "lucide-react";
import { Link } from "react-router";
import { DoctorCard } from "../components/DoctorCard";
import { DepartmentCard } from "../components/DepartmentCard";
import { OfflineStatusBar } from "../components/OfflineStatusBar";
import { useApp } from "../contexts/AppContext";

const content = {
  en: {
    title: "Find Care",
    searchPlaceholder: "Search by specialty, symptom, or doctor name",
    scanSlip: "Scan Old OPD Slip",
    filters: "Filters",
    doctors: "Doctors",
    departments: "Departments",
    government: "Government OPD",
    private: "Private",
    building: "Building",
    language: "Language",
    availability: "Earliest Available",
  },
  hi: {
    title: "देखभाल खोजें",
    searchPlaceholder: "विशेषता, लक्षण या डॉक्टर के नाम से खोजें",
    scanSlip: "पुरानी OPD स्लिप स्कैन करें",
    filters: "फ़िल्टर",
    doctors: "डॉक्टर",
    departments: "विभाग",
    government: "सरकारी OPD",
    private: "निजी",
    building: "भवन",
    language: "भाषा",
    availability: "जल्द से जल्द उपलब्ध",
  },
  ne: {
    title: "हेरचाह खोज्नुहोस्",
    searchPlaceholder: "विशेषता, लक्षण वा डाक्टरको नाम द्वारा खोज्नुहोस्",
    scanSlip: "पुरानो OPD स्लिप स्क्यान गर्नुहोस्",
    filters: "फिल्टरहरू",
    doctors: "डाक्टरहरू",
    departments: "विभागहरू",
    government: "सरकारी OPD",
    private: "निजी",
    building: "भवन",
    language: "भाषा",
    availability: "चाँडो उपलब्ध",
  },
};

const mockDoctors = [
  {
    id: "1",
    name: "Dr. Rajesh Kumar",
    qualifications: "MBBS, MD (Medicine)",
    specialty: "General Medicine",
    languages: ["Hindi", "English", "Bengali"],
    location: "OPD Block A",
    building: "Main Building",
    fees: { min: 300, max: 500 },
    earliestSlot: "Today, 2:00 PM",
    onDutyToday: true,
    type: "private" as const,
  },
  {
    id: "2",
    name: "Dr. Priya Sharma",
    qualifications: "MBBS, MS (Ortho)",
    specialty: "Orthopedics",
    languages: ["Hindi", "English"],
    location: "OPD Block B",
    building: "East Wing",
    fees: { min: 400, max: 600 },
    earliestSlot: "Tomorrow, 10:00 AM",
    onDutyToday: false,
    type: "private" as const,
  },
  {
    id: "3",
    name: "Dr. Amit Patel",
    qualifications: "MBBS, MD (Pediatrics)",
    specialty: "Pediatrics",
    languages: ["Hindi", "English", "Gujarati"],
    location: "Children's Wing",
    building: "North Block",
    fees: { min: 50, max: 100 },
    earliestSlot: "Today, 11:00 AM",
    onDutyToday: true,
    type: "government" as const,
  },
  {
    id: "4",
    name: "Dr. Sunita Reddy",
    qualifications: "MBBS, DGO",
    specialty: "Gynecology",
    languages: ["Telugu", "Hindi", "English"],
    location: "Women's Health Center",
    building: "West Wing",
    fees: { min: 350, max: 550 },
    earliestSlot: "Today, 3:30 PM",
    onDutyToday: true,
    type: "private" as const,
  },
];

const mockDepartments = [
  {
    name: "Emergency & Trauma",
    building: "Main Building",
    floor: "Ground",
    averageWait: 15,
    nextTokenWindow: "E-234",
    currentLoad: "medium" as const,
  },
  {
    name: "Cardiology",
    building: "East Wing",
    floor: "2nd",
    averageWait: 45,
    nextTokenWindow: "C-156",
    currentLoad: "high" as const,
  },
  {
    name: "Dental",
    building: "North Block",
    floor: "1st",
    averageWait: 20,
    nextTokenWindow: "D-089",
    currentLoad: "low" as const,
  },
];

export function FindCareScreen() {
  const { language } = useApp();
  const text = content[language];
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"doctors" | "departments">("doctors");

  return (
    <div className="min-h-screen bg-[var(--neutral-50)]">
      <OfflineStatusBar />

      {/* Header */}
      <div className="bg-white border-b border-[var(--neutral-200)] sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <Link
              to="/"
              className="p-2 hover:bg-[var(--neutral-100)] rounded-lg transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            </Link>
            <h1 className="text-xl font-semibold text-[var(--foreground)]">{text.title}</h1>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--neutral-500)]"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder={text.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[var(--neutral-100)] rounded-lg border border-transparent focus:border-primary focus:bg-white outline-none transition-colors min-h-[48px]"
              aria-label="Search for doctors or departments"
            />
          </div>

          <div className="flex gap-2 mt-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-[var(--neutral-100)] rounded-lg hover:bg-[var(--neutral-200)] transition-colors min-h-[48px]">
              <Scan className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm">{text.scanSlip}</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[var(--neutral-100)] rounded-lg hover:bg-[var(--neutral-200)] transition-colors min-h-[48px]">
              <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm">{text.filters}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-[var(--neutral-200)] sticky top-[180px] z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-1" role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === "doctors"}
              onClick={() => setActiveTab("doctors")}
              className={`flex-1 px-4 py-3 font-medium transition-colors border-b-2 min-h-[48px] ${
                activeTab === "doctors"
                  ? "text-primary border-primary"
                  : "text-[var(--neutral-600)] border-transparent hover:text-[var(--foreground)]"
              }`}
            >
              {text.doctors}
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "departments"}
              onClick={() => setActiveTab("departments")}
              className={`flex-1 px-4 py-3 font-medium transition-colors border-b-2 min-h-[48px] ${
                activeTab === "departments"
                  ? "text-primary border-primary"
                  : "text-[var(--neutral-600)] border-transparent hover:text-[var(--foreground)]"
              }`}
            >
              {text.departments}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {activeTab === "doctors" ? (
          <div className="space-y-4" role="tabpanel">
            {mockDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} {...doctor} />
            ))}
          </div>
        ) : (
          <div className="space-y-4" role="tabpanel">
            {mockDepartments.map((dept, index) => (
              <DepartmentCard key={index} {...dept} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

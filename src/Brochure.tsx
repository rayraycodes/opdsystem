import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Users,
  Shield,
  Smartphone,
  Wifi,
  WifiOff,
  Phone,
  MessageCircle,
  Printer,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Heart,
  Activity,
  UserCheck,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Settings,
  Bell,
  FileText,
  HelpCircle,
  Globe,
  Lock,
  Zap,
  TrendingDown,
  Timer,
  Building2,
  Stethoscope,
  ClipboardList,
  Monitor,
  Volume2,
  RefreshCw,
  Database,
  Fingerprint,
  Eye,
  ArrowRight,
  Star,
  Quote,
} from 'lucide-react';

// ============================================
// BROCHURE CONTENT DATA STRUCTURE
// ============================================

const BROCHURE_CONTENT = {
  meta: {
    productName: "SwasthyaSathi",
    tagline: "World-Class Patient-Centered Hospital Appointment & Tracking System",
    valueStatement: "Designed for Nepal. Built for trust. Ready for tomorrow.",
  },

  cover: {
    headline: "End the 4 AM Queue",
    subheadline: "A hospital appointment system that respects patients' time, works on every phone, and brings fairness to Nepal's OPD.",
    cta: "See How It Works",
    stats: [
      { value: "800+", label: "Patients/day at major hospitals" },
      { value: "4:30 AM", label: "When queues start forming" },
      { value: "6-8 hrs", label: "Average wait time" },
    ],
  },

  reality: {
    title: "The Reality Today",
    subtitle: "What patients face at Nepal's government hospitals",
    painPoints: [
      {
        icon: "Clock",
        title: '"Bholi Aaunu" — Come Tomorrow',
        description: "Patients travel 6-14 hours from Jumla, Dolpa, Dhading. They arrive at 4 AM. They wait 8 hours. Then: 'Doctor ko quota sakiyo.' Come back tomorrow. Sleep at Rs 300 lodge. Try again.",
      },
      {
        icon: "Users",
        title: "The Queue Has No Rules",
        description: "Token numbers mean little when 'source' gets priority. Line cutting creates conflict. Patients crowd near the door because if you can't see, you might miss your turn.",
      },
      {
        icon: "AlertTriangle",
        title: "Uncertainty Is the Real Disease",
        description: "No one knows when the doctor will arrive. Will there be a strike? Is this the right counter? Anxiety fills the waiting hall. Patients are afraid to leave for water.",
      },
      {
        icon: "Smartphone",
        title: "Online Booking That Doesn't Work",
        description: "Previous systems promised digital appointments, but walk-ins still got priority. Patients stopped trusting online booking. They arrive at 5 AM 'just in case.'",
      },
    ],
    humanCost: {
      title: "The Human Cost",
      story: "Devi Kumari, 67, traveled 14 hours from Dhading with her son Ramesh to see a cardiologist. Token #47. Waited until 2 PM. Then: 'Bholi aaunu.' She slept at a lodge, returned next day, saw the doctor for 4 minutes. Total cost: Rs 4,200. Ramesh lost two days' wages. His employer was unhappy. Her BP medication ran out during the wait.",
      impact: "This story repeats 500 times a day across Nepal's government hospitals.",
    },
  },

  personas: {
    title: "Who We Serve",
    subtitle: "Every person in the hospital journey deserves dignity and clarity",
    patients: [
      {
        name: "The Elderly Parent",
        nameNp: "बुवा/आमा",
        description: "Cannot read token numbers. Relies on family to navigate. Needs loud announcements and human help desk confirmation.",
        needs: ["Audible token calling", "Family proxy booking", "Physical token printout", "Help desk support"],
        avatar: "👴",
      },
      {
        name: "The Migrant Worker Family",
        nameNp: "वैदेशिक रोजगारी परिवार",
        description: "Husband works in Qatar. Wife manages appointments for in-laws via WhatsApp across time zones. Needs flexible scheduling.",
        needs: ["WhatsApp booking", "SMS reminders", "Appointment rescheduling", "Nepali language support"],
        avatar: "👩‍👧",
      },
      {
        name: "The Chronic Care Patient",
        nameNp: "दीर्घकालीन बिरामी",
        description: "Visits every month for diabetes or heart follow-up. Knows the system but frustrated by unpredictability. Wants guaranteed slots.",
        needs: ["Recurring appointments", "Same doctor preference", "Minimal wait time", "Medicine reminder integration"],
        avatar: "🧓",
      },
    ],
    staff: [
      {
        name: "Front Desk Staff",
        nameNp: "काउन्टर कर्मचारी",
        description: "Bears the brunt of frustrated patients. Needs tools that help explain delays and manage exceptions without conflict.",
        needs: ["Real-time queue view", "Exception handling", "Delay communication tools", "Audit trail"],
        avatar: "👩‍💼",
      },
      {
        name: "Nurse & Triage",
        nameNp: "नर्स / ट्राइएज",
        description: "Must prioritize emergencies without creating resentment. Needs quick emergency insertion and communication.",
        needs: ["Emergency priority insert", "Patient vitals entry", "Doctor notification", "Queue adjustment"],
        avatar: "👩‍⚕️",
      },
      {
        name: "Doctor",
        nameNp: "चिकित्सक",
        description: "Overwhelmed by volume. Needs predictable patient flow and easy schedule management. Wants to focus on care, not chaos.",
        needs: ["Predictable schedule", "Patient history access", "Slot management", "Break/emergency mode"],
        avatar: "👨‍⚕️",
      },
    ],
  },

  solution: {
    title: "The Solution",
    subtitle: "SwasthyaSathi: Patient-centered design for Nepal's reality",
    overview: {
      headline: "One system that connects patients, staff, and doctors — without leaving anyone behind",
      points: [
        "Multiple booking channels: On-site kiosk, call center, WhatsApp, SMS, web — all synchronized",
        "Real-time queue with audible announcements — no more crowding near the door",
        "Offline-first architecture — works during internet outages and power cuts",
        "Fairness built in — emergency priority is visible and explainable",
        "Designed for low-end Android phones and shared devices",
      ],
    },
    differentiators: [
      {
        icon: "Heart",
        title: "Nepal-First Design",
        description: "Built from Bir Hospital waiting halls, not Silicon Valley offices. Every feature tested against real constraints.",
      },
      {
        icon: "Shield",
        title: "Trust Through Transparency",
        description: "Patients see their queue position, estimated time, and reason for any delays. No black boxes.",
      },
      {
        icon: "Zap",
        title: "Resilient by Default",
        description: "Offline mode, low bandwidth, printable tokens. The system doesn't fail when the internet does.",
      },
    ],
  },

  booking: {
    title: "Booking Options",
    subtitle: "Meet patients where they are — every channel synchronized",
    channels: [
      {
        icon: "Building2",
        title: "On-Site Kiosk",
        description: "Touch-screen kiosks with Nepali interface. Big buttons, voice guidance, instant token printing. Help desk nearby for assistance.",
        availability: "Available at hospital entrance",
      },
      {
        icon: "Phone",
        title: "Call Center",
        description: "Dedicated helpline with Nepali/Maithili/Bhojpuri operators. Book, reschedule, or check status. For those who prefer human voice.",
        availability: "7 AM - 8 PM, 7 days",
      },
      {
        icon: "MessageCircle",
        title: "WhatsApp / Viber",
        description: "Send a message, receive appointment options. Confirm with a reply. Perfect for families coordinating across time zones.",
        availability: "24/7 automated + human support",
      },
      {
        icon: "Smartphone",
        title: "SMS Booking",
        description: "Works on any phone, no data required. Send 'BOOK' to shortcode, follow prompts. Confirmation via SMS.",
        availability: "24/7 automated",
      },
      {
        icon: "Globe",
        title: "Low-Bandwidth Web",
        description: "Lightweight web app that loads on 2G. Under 500KB, works on Rs 8,000 smartphones. Saves data.",
        availability: "24/7",
      },
      {
        icon: "Users",
        title: "Family Proxy Booking",
        description: "Son in Kathmandu books for mother in village. Daughter in Dubai books for father. Verified via OTP to patient's registered number.",
        availability: "All channels",
      },
    ],
  },

  queue: {
    title: "Real-Time Queue & Wait Time",
    subtitle: "Fairness through transparency",
    features: [
      {
        icon: "Activity",
        title: "Live Queue Position",
        description: "Patients see their exact position, estimated wait time, and how many people are ahead. Updated every minute.",
      },
      {
        icon: "Volume2",
        title: "Audible Announcements",
        description: "Loudspeaker calls token numbers in Nepali. Visual displays in waiting area. No more crowding near the door.",
      },
      {
        icon: "Timer",
        title: "Realistic Time Estimates",
        description: "Machine learning on historical data. Accounts for doctor pace, time of day, and appointment type. Under-promises, over-delivers.",
      },
      {
        icon: "AlertTriangle",
        title: "Emergency Buffer",
        description: "Built-in slots for emergencies. When used, waiting patients see: 'Emergency case ahead — estimated 10 min additional wait.' Transparency reduces resentment.",
      },
      {
        icon: "Bell",
        title: "Smart Notifications",
        description: "'Your turn in 15 minutes' — sent via SMS and WhatsApp. Patients can wait at the canteen or step outside without anxiety.",
      },
      {
        icon: "TrendingDown",
        title: "Crowd Reduction",
        description: "When patients know their time, they don't arrive 4 hours early. Staggered arrivals reduce waiting hall congestion by 60%.",
      },
    ],
    flowDiagram: {
      title: "How Queue Management Works",
      steps: [
        { label: "Patient arrives", description: "Checks in at kiosk or counter" },
        { label: "Token issued", description: "With estimated wait time" },
        { label: "Real-time tracking", description: "Position updates on phone & display" },
        { label: "15-min alert", description: "Notification sent to patient" },
        { label: "Token called", description: "Audible + visual announcement" },
        { label: "Patient seen", description: "Minimal wait, maximum dignity" },
      ],
    },
  },

  offline: {
    title: "Offline-First & Resilience",
    subtitle: "Designed for Nepal's infrastructure reality",
    features: [
      {
        icon: "WifiOff",
        title: "Works Without Internet",
        description: "Local server at hospital continues operating during outages. Queue management, token printing, announcements — all work offline.",
      },
      {
        icon: "RefreshCw",
        title: "Smart Sync",
        description: "When connectivity returns, data syncs automatically. No lost appointments, no duplicate tokens, no conflicts.",
      },
      {
        icon: "Smartphone",
        title: "Low-End Device Support",
        description: "Tested on Rs 8,000 Android phones with 1GB RAM. App under 10MB, runs smoothly. Progressive web app — no Play Store needed.",
      },
      {
        icon: "Printer",
        title: "Printable Tokens",
        description: "Physical token remains the source of truth. QR code on token links to digital status. Works even if patient has no phone.",
      },
      {
        icon: "Database",
        title: "Local Data Resilience",
        description: "Patient data cached securely on-device. Encrypted, auto-deleted after visit. Privacy preserved even offline.",
      },
      {
        icon: "Zap",
        title: "Battery-Aware",
        description: "Minimal background processing. Dark mode available. Designed for phones with weak batteries.",
      },
    ],
  },

  backend: {
    title: "Hospital Staff Backend",
    subtitle: "Powerful tools that simplify, not complicate",
    roles: [
      { name: "Counter Staff", permissions: "Check-in, token print, basic queue management" },
      { name: "Supervisor", permissions: "Exception handling, queue reorder, delay announcements" },
      { name: "Nurse/Triage", permissions: "Emergency insert, vitals entry, priority assignment" },
      { name: "Doctor", permissions: "Schedule management, patient view, break mode" },
      { name: "Admin", permissions: "Reports, user management, system config" },
    ],
    dashboardFeatures: [
      {
        title: "Queue Monitor",
        description: "Real-time view of all queues across departments. Color-coded status: on-time (green), slight delay (yellow), significant delay (red).",
        mockup: "queue",
      },
      {
        title: "Token Calling",
        description: "One-click to call next patient. Automatic loudspeaker integration. 'Patient not present' button with 5-minute grace period.",
        mockup: "token",
      },
      {
        title: "Doctor Schedule",
        description: "Weekly view with drag-and-drop rescheduling. Leave management, substitute assignment, automatic patient notification.",
        mockup: "schedule",
      },
      {
        title: "Exception Handling",
        description: "VIP/emergency insertion with reason logging. Delay announcement to all waiting patients. Full audit trail.",
        mockup: "exception",
      },
    ],
    auditFeatures: [
      "Every queue change logged with timestamp and user",
      "Exportable reports for accountability",
      "Searchable by patient, staff, or date range",
      "Compliant with government record-keeping requirements",
    ],
  },

  integration: {
    title: "Integration & Compliance",
    subtitle: "Ready for today, built for tomorrow",
    sections: [
      {
        icon: "Fingerprint",
        title: "Modular ID Integration",
        description: "Works with current hospital patient IDs. Ready to integrate National ID, future Health ID, and Social Health Insurance Fund. No vendor lock-in.",
        points: ["Hospital MRN support", "National ID readiness", "Health ID future-proof", "Insurance integration"],
      },
      {
        icon: "Lock",
        title: "Privacy & Consent",
        description: "Explicit consent before data collection. Simple language, verbal option available. Family proxy consent supported. Data minimization by design.",
        points: ["Granular consent controls", "Right to deletion", "Audit trail for access", "Encrypted storage"],
      },
      {
        icon: "Eye",
        title: "Accessibility",
        description: "High contrast mode. Large text option. Screen reader compatible. Audio announcements. Designed for low-literacy users.",
        points: ["WCAG 2.1 compliance", "Nepali language first", "Voice guidance", "Simple iconography"],
      },
      {
        icon: "BarChart3",
        title: "Analytics & Reporting",
        description: "Real-time dashboards for hospital management. Wait time trends, patient flow, staff performance. Exportable for government reporting.",
        points: ["Custom report builder", "Government HMIS export", "Anonymized research data", "Operational insights"],
      },
    ],
  },

  impact: {
    title: "Measurable Impact",
    subtitle: "Real outcomes in Nepal terms",
    metrics: [
      { value: "4 hrs → 45 min", label: "Average wait time reduction", icon: "Timer" },
      { value: "60%", label: "Reduction in waiting hall crowding", icon: "Users" },
      { value: "90%", label: "Patients seen on scheduled day", icon: "CheckCircle" },
      { value: "75%", label: "Reduction in patient complaints", icon: "TrendingDown" },
      { value: "Rs 1,500+", label: "Saved per patient per visit", icon: "Star" },
      { value: "3x", label: "Faster check-in process", icon: "Zap" },
    ],
    testimonialPlaceholder: {
      quote: "अब म ४ बजे उठेर अस्पताल जानु पर्दैन। मलाई थाहा छ मेरो पालो कहिले आउँछ।",
      translation: "Now I don't have to wake up at 4 AM for the hospital. I know when my turn will come.",
      attribution: "— Patient, Bir Hospital (Pilot Program)",
    },
    outcomes: [
      {
        title: "For Patients",
        points: [
          "Predictable appointments, less wasted time",
          "Dignity in waiting — not anxiety",
          "Money saved on travel and lodging",
          "Trust in the system",
        ],
      },
      {
        title: "For Staff",
        points: [
          "Less conflict with frustrated patients",
          "Clear tools for exception handling",
          "Reduced workload through automation",
          "Audit protection",
        ],
      },
      {
        title: "For Hospitals",
        points: [
          "Better patient throughput",
          "Data for operational improvements",
          "Reduced crowding and safety risks",
          "Compliance with modernization mandates",
        ],
      },
    ],
  },

  cta: {
    title: "Ready to Transform Your Hospital?",
    subtitle: "Join Bir Hospital, TU Teaching, Patan, and leading private hospitals in bringing world-class patient experience to Nepal.",
    buttons: [
      { label: "Request Demo", primary: true },
      { label: "Download Brochure", primary: false },
    ],
    contact: {
      email: "info@swasthyasathi.com.np",
      phone: "+977-1-XXXXXXX",
      address: "Kathmandu, Nepal",
    },
  },
};

// ============================================
// NAVIGATION DATA
// ============================================

const PAGES = [
  { id: 'cover', title: 'Home', shortTitle: 'Home' },
  { id: 'reality', title: 'Reality Today', shortTitle: 'Reality' },
  { id: 'personas', title: 'Who We Serve', shortTitle: 'Users' },
  { id: 'solution', title: 'Solution', shortTitle: 'Solution' },
  { id: 'booking', title: 'Booking Options', shortTitle: 'Booking' },
  { id: 'queue', title: 'Queue System', shortTitle: 'Queue' },
  { id: 'offline', title: 'Offline & Resilience', shortTitle: 'Offline' },
  { id: 'backend', title: 'Staff Backend', shortTitle: 'Backend' },
  { id: 'integration', title: 'Integration', shortTitle: 'Compliance' },
  { id: 'impact', title: 'Impact', shortTitle: 'Impact' },
];

// ============================================
// ICON MAPPING
// ============================================

const iconMap: Record<string, React.ElementType> = {
  Clock, Users, AlertTriangle, Smartphone, Heart, Shield, Zap, Building2, Phone,
  MessageCircle, Globe, Activity, Volume2, Timer, Bell, TrendingDown, WifiOff,
  RefreshCw, Printer, Database, Fingerprint, Lock, Eye, BarChart3, CheckCircle, Star,
  Calendar, Wifi, UserCheck, FileText, HelpCircle, Settings, Monitor, ClipboardList,
  Stethoscope, ArrowRight, Quote,
};

function getIcon(name: string): React.ElementType {
  return iconMap[name] || HelpCircle;
}

// ============================================
// REUSABLE COMPONENTS
// ============================================

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl p-6 shadow-sm border border-gray-100
        ${hover ? 'transition-all duration-300 hover:shadow-lg hover:border-gray-200 hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  const IconComponent = getIcon(icon);
  return (
    <Card className={className}>
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
        <IconComponent className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
}

function StatCard({ value, label, icon }: StatCardProps) {
  const IconComponent = icon ? getIcon(icon) : null;
  return (
    <Card className="text-center" hover={false}>
      {IconComponent && (
        <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-3">
          <IconComponent className="w-5 h-5 text-green-600" />
        </div>
      )}
      <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </Card>
  );
}

interface PersonaCardProps {
  name: string;
  nameNp: string;
  description: string;
  needs: string[];
  avatar: string;
  type: 'patient' | 'staff';
}

function PersonaCard({ name, nameNp, description, needs, avatar, type }: PersonaCardProps) {
  const bgColor = type === 'patient' ? 'bg-blue-50' : 'bg-purple-50';
  const accentColor = type === 'patient' ? 'text-blue-600' : 'text-purple-600';
  const badgeColor = type === 'patient' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700';

  return (
    <Card>
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center text-2xl`}>
          {avatar}
        </div>
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${accentColor}`}>{name}</h3>
          <p className="text-sm text-gray-500 mb-2">{nameNp}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mt-4 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {needs.map((need, i) => (
          <span key={i} className={`px-2 py-1 ${badgeColor} text-xs rounded-full`}>
            {need}
          </span>
        ))}
      </div>
    </Card>
  );
}

interface PageSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

function PageSection({ id, title, subtitle, children, className = '', dark = false }: PageSectionProps) {
  return (
    <section
      id={id}
      className={`
        min-h-screen py-16 md:py-24 px-4 md:px-8
        ${dark ? 'bg-gray-900 text-white' : 'bg-gray-50'}
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg ${dark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

interface FlowStepProps {
  label: string;
  description: string;
  isLast?: boolean;
}

function FlowStep({ label, description, isLast = false }: FlowStepProps) {
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
          <CheckCircle className="w-6 h-6" />
        </div>
        <div className="text-center mt-3">
          <div className="font-semibold text-gray-900 text-sm">{label}</div>
          <div className="text-xs text-gray-500 mt-1 max-w-24">{description}</div>
        </div>
      </div>
      {!isLast && (
        <div className="flex-1 h-0.5 bg-blue-200 mx-2 min-w-8 self-start mt-6">
          <div className="w-full h-full bg-gradient-to-r from-blue-400 to-blue-200" />
        </div>
      )}
    </div>
  );
}

interface DashboardMockupProps {
  type: 'queue' | 'token' | 'schedule' | 'exception';
}

function DashboardMockup({ type }: DashboardMockupProps) {
  if (type === 'queue') {
    return (
      <div className="bg-gray-800 rounded-lg p-4 text-white text-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-400">Live Queue Monitor</span>
          <span className="text-green-400 text-xs">● Online</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-green-900/30 rounded">
            <span>Cardiology</span>
            <span className="text-green-400">On Time</span>
            <span>12 waiting</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-yellow-900/30 rounded">
            <span>Orthopedics</span>
            <span className="text-yellow-400">+15 min</span>
            <span>24 waiting</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-red-900/30 rounded">
            <span>General OPD</span>
            <span className="text-red-400">+45 min</span>
            <span>67 waiting</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'token') {
    return (
      <div className="bg-gray-800 rounded-lg p-4 text-white text-sm">
        <div className="text-center mb-4">
          <div className="text-gray-400 text-xs mb-1">Now Calling</div>
          <div className="text-4xl font-bold text-green-400">A-047</div>
          <div className="text-gray-400 mt-1">Room 12 • Dr. Sharma</div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-green-600 hover:bg-green-700 py-2 rounded font-medium">
            Call Next
          </button>
          <button className="flex-1 bg-gray-600 hover:bg-gray-700 py-2 rounded font-medium">
            Not Present
          </button>
        </div>
      </div>
    );
  }

  if (type === 'schedule') {
    return (
      <div className="bg-gray-800 rounded-lg p-4 text-white text-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-400">Dr. Sharma — This Week</span>
          <button className="text-blue-400 text-xs">Edit</button>
        </div>
        <div className="grid grid-cols-5 gap-1 text-xs">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
            <div key={day} className="text-center">
              <div className="text-gray-500 mb-1">{day}</div>
              <div className={`p-2 rounded ${day === 'Wed' ? 'bg-red-900/50 text-red-400' : 'bg-green-900/30 text-green-400'}`}>
                {day === 'Wed' ? 'Leave' : '9-2'}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4 text-white text-sm">
      <div className="text-gray-400 mb-3">Exception Log</div>
      <div className="space-y-2 text-xs">
        <div className="p-2 bg-yellow-900/30 rounded">
          <div className="flex justify-between">
            <span className="text-yellow-400">Emergency Insert</span>
            <span className="text-gray-500">10:32 AM</span>
          </div>
          <div className="text-gray-400 mt-1">Patient #A-089 prioritized — cardiac emergency</div>
        </div>
        <div className="p-2 bg-blue-900/30 rounded">
          <div className="flex justify-between">
            <span className="text-blue-400">Delay Announced</span>
            <span className="text-gray-500">10:35 AM</span>
          </div>
          <div className="text-gray-400 mt-1">All patients notified: +15 min delay</div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// NAVIGATION COMPONENT
// ============================================

interface NavigationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  onDemoClick: () => void;
}

function Navigation({ currentPage, setCurrentPage, onDemoClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string, index: number) => {
    setCurrentPage(index);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 print:hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-gray-900">SwasthyaSathi</span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {PAGES.map((page, index) => (
                <button
                  key={page.id}
                  onClick={() => scrollToSection(page.id, index)}
                  className={`
                    px-3 py-1.5 text-sm rounded-lg transition-colors
                    ${currentPage === index
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }
                  `}
                >
                  {page.shortTitle}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onDemoClick}
                className="hidden sm:block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Request Demo
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
            {PAGES.map((page, index) => (
              <button
                key={page.id}
                onClick={() => scrollToSection(page.id, index)}
                className={`
                  block w-full text-left px-4 py-2 text-sm rounded-lg mb-1
                  ${currentPage === index
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                {page.title}
              </button>
            ))}
            <button
              onClick={onDemoClick}
              className="w-full mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg"
            >
              Request Demo
            </button>
          </div>
        )}
      </nav>

      <div className="fixed bottom-6 right-6 z-50 print:hidden flex items-center gap-3">
        <button
          onClick={() => currentPage > 0 && scrollToSection(PAGES[currentPage - 1].id, currentPage - 1)}
          disabled={currentPage === 0}
          className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => currentPage < PAGES.length - 1 && scrollToSection(PAGES[currentPage + 1].id, currentPage + 1)}
          disabled={currentPage === PAGES.length - 1}
          className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <button
        onClick={onDemoClick}
        className="fixed bottom-6 left-6 z-50 print:hidden sm:hidden px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        Request Demo
      </button>
    </>
  );
}

// ============================================
// PAGE COMPONENTS
// ============================================

function CoverPage() {
  const { cover, meta } = BROCHURE_CONTENT;

  return (
    <section
      id="cover"
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              {meta.productName}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {cover.headline}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {cover.subheadline}
            </p>
            <p className="text-lg text-blue-600 font-medium mb-8">
              {meta.valueStatement}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#solution"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
              >
                {cover.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#reality"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
              >
                See the Problem
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {cover.stats.map((stat, i) => (
              <Card key={i} className="text-center" hover={false}>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RealityPage() {
  const { reality } = BROCHURE_CONTENT;

  return (
    <PageSection id="reality" title={reality.title} subtitle={reality.subtitle}>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {reality.painPoints.map((point, i) => (
          <FeatureCard
            key={i}
            icon={point.icon}
            title={point.title}
            description={point.description}
          />
        ))}
      </div>

      <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-100" hover={false}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Quote className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{reality.humanCost.title}</h3>
            <p className="text-gray-700 leading-relaxed mb-4 italic">
              "{reality.humanCost.story}"
            </p>
            <p className="text-red-600 font-medium">
              {reality.humanCost.impact}
            </p>
          </div>
        </div>
      </Card>
    </PageSection>
  );
}

function PersonasPage() {
  const { personas } = BROCHURE_CONTENT;

  return (
    <PageSection id="personas" title={personas.title} subtitle={personas.subtitle} className="bg-white">
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-600" />
          Patients & Families
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {personas.patients.map((persona, i) => (
            <PersonaCard key={i} {...persona} type="patient" />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Stethoscope className="w-5 h-5 text-purple-600" />
          Hospital Staff
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {personas.staff.map((persona, i) => (
            <PersonaCard key={i} {...persona} type="staff" />
          ))}
        </div>
      </div>
    </PageSection>
  );
}

function SolutionPage() {
  const { solution } = BROCHURE_CONTENT;

  return (
    <PageSection id="solution" title={solution.title} subtitle={solution.subtitle} dark>
      <Card className="mb-12 bg-white/10 backdrop-blur border-white/20" hover={false}>
        <h3 className="text-2xl font-semibold text-white mb-6">{solution.overview.headline}</h3>
        <ul className="space-y-3">
          {solution.overview.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-200">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        {solution.differentiators.map((diff, i) => {
          const IconComponent = getIcon(diff.icon);
          return (
            <Card key={i} className="bg-white/10 backdrop-blur border-white/20" hover={false}>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{diff.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{diff.description}</p>
            </Card>
          );
        })}
      </div>
    </PageSection>
  );
}

function BookingPage() {
  const { booking } = BROCHURE_CONTENT;

  return (
    <PageSection id="booking" title={booking.title} subtitle={booking.subtitle}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {booking.channels.map((channel, i) => {
          const IconComponent = getIcon(channel.icon);
          return (
            <Card key={i}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{channel.title}</h3>
                  <p className="text-xs text-blue-600 mb-2">{channel.availability}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">{channel.description}</p>
            </Card>
          );
        })}
      </div>
    </PageSection>
  );
}

function QueuePage() {
  const { queue } = BROCHURE_CONTENT;

  return (
    <PageSection id="queue" title={queue.title} subtitle={queue.subtitle} className="bg-white">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {queue.features.map((feature, i) => (
          <FeatureCard
            key={i}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <Card hover={false} className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          {queue.flowDiagram.title}
        </h3>
        <div className="flex flex-wrap justify-center items-start gap-2 md:gap-0">
          {queue.flowDiagram.steps.map((step, i) => (
            <FlowStep
              key={i}
              label={step.label}
              description={step.description}
              isLast={i === queue.flowDiagram.steps.length - 1}
            />
          ))}
        </div>
      </Card>
    </PageSection>
  );
}

function OfflinePage() {
  const { offline } = BROCHURE_CONTENT;

  return (
    <PageSection id="offline" title={offline.title} subtitle={offline.subtitle}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offline.features.map((feature, i) => (
          <FeatureCard
            key={i}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </PageSection>
  );
}

function BackendPage() {
  const { backend } = BROCHURE_CONTENT;

  return (
    <PageSection id="backend" title={backend.title} subtitle={backend.subtitle} className="bg-white">
      <Card className="mb-8" hover={false}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Role-Based Access</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-medium text-gray-600">Role</th>
                <th className="text-left py-2 px-3 font-medium text-gray-600">Permissions</th>
              </tr>
            </thead>
            <tbody>
              {backend.roles.map((role, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 px-3 font-medium text-gray-900">{role.name}</td>
                  <td className="py-2 px-3 text-gray-600">{role.permissions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {backend.dashboardFeatures.map((feature, i) => (
          <Card key={i}>
            <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
            <DashboardMockup type={feature.mockup as 'queue' | 'token' | 'schedule' | 'exception'} />
          </Card>
        ))}
      </div>

      <Card className="bg-gray-50" hover={false}>
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          Audit & Accountability
        </h3>
        <ul className="grid md:grid-cols-2 gap-2">
          {backend.auditFeatures.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </Card>
    </PageSection>
  );
}

function IntegrationPage() {
  const { integration } = BROCHURE_CONTENT;

  return (
    <PageSection id="integration" title={integration.title} subtitle={integration.subtitle}>
      <div className="grid md:grid-cols-2 gap-6">
        {integration.sections.map((section, i) => {
          const IconComponent = getIcon(section.icon);
          return (
            <Card key={i}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{section.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{section.description}</p>
              <div className="flex flex-wrap gap-2">
                {section.points.map((point, j) => (
                  <span key={j} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {point}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </PageSection>
  );
}

function ImpactPage() {
  const { impact, cta } = BROCHURE_CONTENT;

  return (
    <PageSection id="impact" title={impact.title} subtitle={impact.subtitle} className="bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {impact.metrics.map((metric, i) => (
          <StatCard key={i} value={metric.value} label={metric.label} icon={metric.icon} />
        ))}
      </div>

      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-100 mb-12" hover={false}>
        <div className="text-center max-w-2xl mx-auto">
          <Quote className="w-8 h-8 text-green-600 mx-auto mb-4" />
          <p className="text-xl text-gray-800 mb-2 font-medium">
            "{impact.testimonialPlaceholder.quote}"
          </p>
          <p className="text-gray-600 italic mb-4">
            "{impact.testimonialPlaceholder.translation}"
          </p>
          <p className="text-green-700 font-medium">
            {impact.testimonialPlaceholder.attribution}
          </p>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {impact.outcomes.map((outcome, i) => (
          <Card key={i}>
            <h3 className="font-semibold text-gray-900 mb-4">{outcome.title}</h3>
            <ul className="space-y-2">
              {outcome.points.map((point, j) => (
                <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0" hover={false}>
        <div className="text-center py-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{cta.title}</h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">{cta.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {cta.buttons.map((btn, i) => (
              <button
                key={i}
                className={`
                  px-6 py-3 rounded-xl font-medium transition-colors
                  ${btn.primary
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-500 text-white hover:bg-blue-400'
                  }
                `}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <div className="text-blue-200 text-sm space-y-1">
            <p>{cta.contact.email}</p>
            <p>{cta.contact.phone}</p>
            <p>{cta.contact.address}</p>
          </div>
        </div>
      </Card>
    </PageSection>
  );
}

// ============================================
// DEMO MODAL
// ============================================

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function DemoModal({ isOpen, onClose }: DemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 print:hidden">
      <Card className="max-w-md w-full" hover={false}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Request a Demo</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hospital Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Bir Hospital"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Hospital Administrator</option>
              <option>IT Department</option>
              <option>Medical Director</option>
              <option>Government Official</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
            <input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="+977-98XXXXXXXX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@hospital.org.np"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </Card>
    </div>
  );
}

// ============================================
// MAIN BROCHURE APP
// ============================================

export default function Brochure() {
  const [currentPage, setCurrentPage] = useState(0);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = PAGES.map(p => document.getElementById(p.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setCurrentPage(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Print styles embedded as CSS comment for reference:
        @media print {
          nav, .fixed { display: none !important; }
          section { page-break-after: always; min-height: auto; padding: 2rem; }
          .shadow-lg, .shadow-sm { box-shadow: none; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      */}
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onDemoClick={() => setDemoModalOpen(true)}
      />

      <main>
        <CoverPage />
        <RealityPage />
        <PersonasPage />
        <SolutionPage />
        <BookingPage />
        <QueuePage />
        <OfflinePage />
        <BackendPage />
        <IntegrationPage />
        <ImpactPage />
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm print:hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white">SwasthyaSathi</span>
          </div>
          <p className="mb-2">World-Class Patient-Centered Hospital Appointment & Tracking System</p>
          <p>Designed for Nepal. Built for trust. Ready for tomorrow.</p>
          <p className="mt-4 text-gray-500">© 2026 SwasthyaSathi. All rights reserved.</p>
        </div>
      </footer>

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />

      <style>{`
        @media print {
          nav, .fixed, footer { display: none !important; }
          section { page-break-after: always; min-height: auto !important; padding: 1.5rem !important; }
          .shadow-lg, .shadow-sm, .shadow { box-shadow: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body { background: white !important; }
          .bg-gray-900 { background: #1a1a1a !important; }
        }
        
        html { scroll-behavior: smooth; }
        
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          * { transition: none !important; animation: none !important; }
        }
      `}</style>
    </div>
  );
}

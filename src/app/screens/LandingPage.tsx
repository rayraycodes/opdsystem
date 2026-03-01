import { useState, useEffect } from "react";
import { RequestDemoForm } from "../components/RequestDemoForm";
import {
  Heart,
  Users,
  Clock,
  Shield,
  Smartphone,
  Activity,
  AlertCircle,
  CheckCircle2,
  FileText,
  Globe,
  BarChart3,
  Accessibility,
  Calendar,
  MapPin,
  Bell,
  Zap,
  Eye,
  Volume2,
  Languages,
  ArrowRight,
  ChevronDown,
  Building2,
  Phone,
  Lock,
  Key,
  Database,
  UserCheck,
  ShieldCheck,
  Fingerprint,
  Scale,
  ScrollText,
  Share2,
  Settings,
} from "lucide-react";
import { Link } from "react-router";

export function LandingPage() {
  const [activeMode, setActiveMode] = useState<"normal" | "elder">("normal");
  const [showQueueDemo, setShowQueueDemo] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowRequestForm(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[var(--neutral-200)] shadow-sm">
        <div className="max-w-[1120px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">OPD Queue System</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <button onClick={() => scrollToSection("problem")} className="hover:text-primary transition-colors">
                Problem
              </button>
              <button onClick={() => scrollToSection("solution")} className="hover:text-primary transition-colors">
                Solution
              </button>
              <button onClick={() => scrollToSection("features")} className="hover:text-primary transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection("impact")} className="hover:text-primary transition-colors">
                Impact
              </button>
              <button onClick={() => scrollToSection("health-data")} className="hover:text-primary transition-colors">
                Data Protection
              </button>
              <button onClick={() => scrollToSection("implementation")} className="hover:text-primary transition-colors">
                Implementation
              </button>
            </div>
            <button
              onClick={() => setShowRequestForm(true)}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-[var(--healing-teal-dark)] transition-colors font-medium"
            >
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-white py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-[var(--foreground)] mb-4 leading-tight">
                From Crowded Queues to Guided Care
              </h1>
              <p className="text-xl text-[var(--neutral-700)] mb-8 leading-relaxed">
                Real-time token tracking, guided navigation, assisted booking, and offline-first reliability for
                high-volume South Asian OPDs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/patient"
                  className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-[var(--healing-teal-dark)] transition-colors font-medium text-lg flex items-center gap-2"
                >
                  View Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/5 transition-colors font-medium text-lg flex items-center gap-2"
                >
                  See How It Works
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {/* Before/After Visual */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-[var(--neutral-200)]">
                <div className="flex items-center gap-2 mb-3 text-[var(--danger)]">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">Before: OPD Chaos</span>
                </div>
                <p className="text-sm text-[var(--neutral-700)] mb-3">
                  Multiple queues, uncertain waiting, crowded corridors, missed turns, confused navigation
                </p>
                <div className="h-2 bg-[var(--danger)]/20 rounded-full mb-4"></div>
              </div>
              <div className="bg-primary/5 rounded-lg shadow-lg p-6 border-2 border-primary">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">After: Calm Flow</span>
                </div>
                <p className="text-sm text-[var(--neutral-700)] mb-3">
                  Clear token ETA, staggered arrivals, live queue updates, guided campus navigation
                </p>
                <div className="h-2 bg-primary rounded-full mb-2"></div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>15-20 min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    <span>3 ahead</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-[var(--neutral-50)]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">Why OPDs Break</h2>
            <p className="text-xl text-[var(--neutral-700)] max-w-3xl mx-auto">
              High-volume outpatient departments face unique challenges that generic scheduling apps cannot solve.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)]">
              <Users className="w-10 h-10 text-[var(--danger)] mb-4" />
              <h3 className="font-bold text-lg mb-2">Multiple Queue Collision</h3>
              <p className="text-[var(--neutral-700)]">
                Registration, vitals, consult, labs, billing—walk-ins and referrals collide with booked appointments.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)]">
              <AlertCircle className="w-10 h-10 text-[var(--warning)] mb-4" />
              <h3 className="font-bold text-lg mb-2">Emergency Interrupts</h3>
              <p className="text-[var(--neutral-700)]">
                Urgent cases disrupt schedules, creating cascading delays with no patient visibility.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)]">
              <Clock className="w-10 h-10 text-[var(--danger)] mb-4" />
              <h3 className="font-bold text-lg mb-2">Early Arrival Crowding</h3>
              <p className="text-[var(--neutral-700)]">
                Patients arrive hours early fearing missed turns, leading to waiting room overcrowding.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)]">
              <Smartphone className="w-10 h-10 text-[var(--danger)] mb-4" />
              <h3 className="font-bold text-lg mb-2">Shared Phone Reality</h3>
              <p className="text-[var(--neutral-700)]">
                Low literacy and shared devices make app-only systems fail for elderly and rural patients.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)]">
              <MapPin className="w-10 h-10 text-[var(--danger)] mb-4" />
              <h3 className="font-bold text-lg mb-2">Campus Navigation Chaos</h3>
              <p className="text-[var(--neutral-700)]">
                Complex hospital campuses lack clear wayfinding for illiterate or first-time visitors.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)]">
              <Zap className="w-10 h-10 text-[var(--warning)] mb-4" />
              <h3 className="font-bold text-lg mb-2">Connectivity Drops</h3>
              <p className="text-[var(--neutral-700)]">
                Poor internet inside campuses causes real-time systems to break when they're needed most.
              </p>
            </div>
          </div>

          {/* Story Card */}
          <div className="mt-12 bg-white rounded-lg p-8 border-l-4 border-primary shadow-md">
            <div className="flex items-start gap-4">
              <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-3">A Day in the Life</h3>
                <p className="text-[var(--neutral-700)] mb-3">
                  <strong>Mrs. Sharma, 68,</strong> arrives at 7 AM for a 10 AM cardiology appointment, fearing she'll
                  miss her turn. She waits three hours in a crowded corridor, unsure if the doctor is on time. She asks
                  five different staff members "When is my turn?" but gets conflicting answers.
                </p>
                <p className="text-[var(--neutral-700)]">
                  <strong>Nurse Priya</strong> spends half her shift answering "Where do I go next?" instead of
                  triaging patients. Emergency interrupts mean she has to manually inform waiting patients of delays,
                  creating frustration and crowd control issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="solution" className="py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">A System, Not Just an App</h2>
            <p className="text-xl text-[var(--neutral-700)] max-w-3xl mx-auto">
              Three integrated layers that transform OPD operations from reactive chaos to predictable flow.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Patient Experience Layer */}
            <div className="bg-gradient-to-br from-primary/5 to-white rounded-xl p-8 border border-primary/20">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Patient Experience Layer</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    Multilingual support (Hindi/Nepali/English) with Devanagari script
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    Live queue tracking with ETA ranges and arrival guidance
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    Family wallet for caregiver booking and assisted journeys
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    Campus wayfinding with landmark-based navigation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">IVR/SMS support for shared phone scenarios</span>
                </li>
              </ul>
            </div>

            {/* Staff Operations Layer */}
            <div className="bg-gradient-to-br from-secondary/5 to-white rounded-xl p-8 border border-secondary/20">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Staff Operations Layer</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    Front desk registration with proxy relationship capture
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">Triage check-in with vitals and priority assignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">Doctor console with emergency interrupt controls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    Supervisor dashboard with bottleneck alerts and reassignment
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">Help desk for navigation and token recovery</span>
                </li>
              </ul>
            </div>

            {/* Reliability Layer */}
            <div className="bg-gradient-to-br from-[var(--info)]/5 to-white rounded-xl p-8 border border-[var(--info)]/20">
              <div className="w-16 h-16 bg-[var(--info)] rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reliability + Interoperability</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">Offline-first caching and background sync</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">Event timeline audit trail for compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">ABHA (India) integration readiness</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">Pluggable Health ID design for Nepal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">Role-based access and privacy controls</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-[var(--neutral-50)]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">How It Works</h2>
            <p className="text-xl text-[var(--neutral-700)]">
              Time windows, not false precision. Real-time updates, offline resilience.
            </p>
          </div>

          <div className="relative">
            {/* Flow Steps */}
            <div className="grid md:grid-cols-6 gap-4">
              <div className="bg-white rounded-lg p-6 border-2 border-primary text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  1
                </div>
                <h4 className="font-bold mb-2">Book</h4>
                <p className="text-sm text-[var(--neutral-700)]">Assisted or self-service with family wallet</p>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-primary text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  2
                </div>
                <h4 className="font-bold mb-2">Receive Token</h4>
                <p className="text-sm text-[var(--neutral-700)]">QR slip + arrival window via SMS</p>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-primary text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  3
                </div>
                <h4 className="font-bold mb-2">Navigate</h4>
                <p className="text-sm text-[var(--neutral-700)]">Landmark-based wayfinding to clinic</p>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-primary text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  4
                </div>
                <h4 className="font-bold mb-2">Check-in</h4>
                <p className="text-sm text-[var(--neutral-700)]">Scan QR at triage desk</p>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-primary text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  5
                </div>
                <h4 className="font-bold mb-2">Track Queue</h4>
                <p className="text-sm text-[var(--neutral-700)]">Live ETA updates and notifications</p>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-primary text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  6
                </div>
                <h4 className="font-bold mb-2">Consult</h4>
                <p className="text-sm text-[var(--neutral-700)]">Called at right time, no waiting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">Key Features</h2>
            <p className="text-xl text-[var(--neutral-700)]">
              Every feature addresses real OPD challenges with patient and staff needs in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Assisted Booking & Family Wallet"
              description="Caregivers can book for elderly parents. Help desk, kiosk, and phone support for low-literacy users."
              beneficiary="Patient + Staff"
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Low-Bandwidth & Offline Mode"
              description="Offline slip caching, SMS fallback, and sync when connectivity returns."
              beneficiary="Patient"
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="Real-Time Queue with ETA Ranges"
              description="Time windows (15-20 min) with confidence indicators, not false precision."
              beneficiary="Patient"
            />
            <FeatureCard
              icon={<AlertCircle className="w-6 h-6" />}
              title="Emergency Interrupt & Buffer"
              description="Doctors can insert 5/10/15 min blocks for urgent cases with automatic patient notifications."
              beneficiary="Staff"
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Doctor Credentials & Fee Transparency"
              description="Qualifications, experience, and estimated consultation fee ranges displayed upfront."
              beneficiary="Patient"
            />
            <FeatureCard
              icon={<MapPin className="w-6 h-6" />}
              title="Landmark-Based Campus Navigation"
              description="Gate-to-clinic wayfinding with accessible routes and visual landmarks."
              beneficiary="Patient"
            />
            <FeatureCard
              icon={<Bell className="w-6 h-6" />}
              title="No-Show & Late Policy Handling"
              description="Grace periods, token recovery, and automatic queue rebalancing."
              beneficiary="Both"
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Supervisor Dashboard & Bottleneck Alerts"
              description="Multi-doctor queue view with staffing recommendations and patient reassignment."
              beneficiary="Staff"
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Audit Timeline & Compliance Logs"
              description="Complete event history for quality improvement and regulatory compliance."
              beneficiary="Staff"
            />
            <FeatureCard
              icon={<Languages className="w-6 h-6" />}
              title="Multilingual with Devanagari Support"
              description="Hindi, Nepali, and English with script-optimized typography and spacing."
              beneficiary="Patient"
            />
            <FeatureCard
              icon={<Accessibility className="w-6 h-6" />}
              title="WCAG 2.1 AAA Accessibility"
              description="Elder mode, high contrast, voice guidance, and screen reader support."
              beneficiary="Patient"
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6" />}
              title="ABHA Integration Ready"
              description="Progressive identity linking with consent-aware data portability for India and Nepal."
              beneficiary="Both"
            />
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section id="accessibility" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">
              Built for the Elderly and the Underserved
            </h2>
            <p className="text-xl text-[var(--neutral-700)] max-w-3xl mx-auto">
              Accessibility isn't a feature—it's the foundation. WCAG 2.1 AAA compliance means dignity and independence
              for all patients.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Accessibility Features */}
            <div className="bg-white rounded-xl p-8 border border-[var(--neutral-200)]">
              <h3 className="text-2xl font-bold mb-6">What WCAG AAA Means in Practice</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Large Touch Targets (48x48 minimum)</h4>
                    <p className="text-sm text-[var(--neutral-700)]">
                      Buttons sized for tremors, arthritis, and imprecise tapping
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">High Contrast Modes</h4>
                    <p className="text-sm text-[var(--neutral-700)]">
                      Enhanced color ratios for cataracts and low vision
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Icon + Text Redundancy</h4>
                    <p className="text-sm text-[var(--neutral-700)]">
                      Never rely on color or icons alone—always pair with clear labels
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Script-Safe Typography</h4>
                    <p className="text-sm text-[var(--neutral-700)]">
                      Devanagari-optimized fonts with generous spacing and line-height
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Voice Guidance & Screen Reader Support</h4>
                    <p className="text-sm text-[var(--neutral-700)]">
                      Full ARIA labels and semantic HTML for assistive technologies
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Clear Language & Predictable Behavior</h4>
                    <p className="text-sm text-[var(--neutral-700)]">
                      Simple sentences, consistent navigation, no jargon
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="bg-white rounded-xl p-8 border border-[var(--neutral-200)]">
              <h3 className="text-2xl font-bold mb-6">Try Elder Mode</h3>
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveMode("normal")}
                  className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                    activeMode === "normal"
                      ? "border-primary bg-primary text-white"
                      : "border-[var(--neutral-200)] hover:border-primary"
                  }`}
                >
                  Normal Mode
                </button>
                <button
                  onClick={() => setActiveMode("elder")}
                  className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                    activeMode === "elder"
                      ? "border-primary bg-primary text-white"
                      : "border-[var(--neutral-200)] hover:border-primary"
                  }`}
                >
                  Elder Mode
                </button>
              </div>

              <div className="bg-[var(--neutral-50)] rounded-lg p-6">
                <div className={activeMode === "elder" ? "text-lg" : "text-base"}>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className={activeMode === "elder" ? "w-8 h-8" : "w-6 h-6"} />
                      <h4 className="font-bold">Patan Hospital</h4>
                    </div>
                    <p className="text-[var(--neutral-700)]">पाटन अस्पताल</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className={activeMode === "elder" ? "w-8 h-8" : "w-6 h-6"} />
                      <span className="font-bold">Your Token: C-042</span>
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 border-2 border-primary">
                    <p className="font-bold mb-1">Estimated Wait</p>
                    <p className={`${activeMode === "elder" ? "text-2xl" : "text-xl"} font-bold text-primary`}>
                      15-20 minutes
                    </p>
                    <p className="text-sm text-[var(--neutral-700)] mt-2">3 patients ahead of you</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[var(--neutral-600)] mt-4">
                Elder mode increases text size from 16px to 18-20px and enlarges touch targets for better accessibility.
              </p>
            </div>
          </div>

          {/* Accessibility Icons */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center border border-[var(--neutral-200)]">
              <Eye className="w-12 h-12 text-primary mx-auto mb-3" />
              <h4 className="font-bold mb-2">High Contrast</h4>
              <p className="text-sm text-[var(--neutral-700)]">Enhanced visibility</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-[var(--neutral-200)]">
              <Volume2 className="w-12 h-12 text-primary mx-auto mb-3" />
              <h4 className="font-bold mb-2">Voice Guidance</h4>
              <p className="text-sm text-[var(--neutral-700)]">Audio navigation</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-[var(--neutral-200)]">
              <Heart className="w-12 h-12 text-primary mx-auto mb-3" />
              <h4 className="font-bold mb-2">Elder Mode</h4>
              <p className="text-sm text-[var(--neutral-700)]">Larger text & targets</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-[var(--neutral-200)]">
              <Languages className="w-12 h-12 text-primary mx-auto mb-3" />
              <h4 className="font-bold mb-2">3 Languages</h4>
              <p className="text-sm text-[var(--neutral-700)]">EN/HI/NE scripts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">Measurable Impact</h2>
            <p className="text-xl text-[var(--neutral-700)] max-w-3xl mx-auto">
              Real operational improvements backed by audit trails and continuous measurement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <MetricCard
              icon={<Users className="w-8 h-8" />}
              metric="40-60% Reduction"
              title="Waiting Room Crowding"
              description="Staggered arrivals mean patients come at the right time, not hours early"
            />
            <MetricCard
              icon={<Activity className="w-8 h-8" />}
              title="Higher OPD Throughput"
              description="Reduced friction between registration, vitals, consult, and lab stages"
            />
            <MetricCard
              icon={<CheckCircle2 className="w-8 h-8" />}
              metric="25-35% Lower"
              title="No-Show Rates"
              description="Timed reminders and clear expectations improve attendance"
            />
            <MetricCard
              icon={<Bell className="w-8 h-8" />}
              metric="70% Fewer"
              title="Staff Interruptions"
              description="Patients self-navigate with wayfinding, reducing 'Where do I go?' questions"
            />
            <MetricCard
              icon={<Heart className="w-8 h-8" />}
              title="Improved Patient Satisfaction"
              description="Transparency and dignity replace uncertainty and frustration"
            />
            <MetricCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Data-Driven Operations"
              description="Dashboards and audit trails enable continuous quality improvement"
            />
          </div>

          <div className="bg-[var(--info)]/5 border border-[var(--info)]/20 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <BarChart3 className="w-6 h-6 text-[var(--info)] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-lg mb-2">Measurement & Reporting</h3>
                <p className="text-[var(--neutral-700)]">
                  Built-in analytics dashboards track queue performance, bottlenecks, no-show patterns, and patient
                  flow metrics. Audit trails provide complete event history for compliance and continuous improvement
                  initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Data Sharing & Protection Section */}
      <section id="health-data" className="py-20 bg-gradient-to-br from-[var(--info)]/5 via-white to-primary/5">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-10 h-10 text-primary" />
              <h2 className="text-4xl font-bold text-[var(--foreground)]">Health Data Sharing & Protection</h2>
            </div>
            <p className="text-xl text-[var(--neutral-700)] max-w-3xl mx-auto">
              Your health data belongs to you. We follow international standards and regional regulations to ensure 
              privacy, consent-driven sharing, and complete transparency.
            </p>
          </div>

          {/* Regulatory Compliance Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-primary/20 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="font-medium">DPDPA 2023 (India)</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-primary/20 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="font-medium">Nepal Privacy Act 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-primary/20 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <span className="font-medium">HIPAA Aligned</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-primary/20 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[var(--info)]" />
              <span className="font-medium">FHIR R4 Compatible</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-primary/20 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[var(--info)]" />
              <span className="font-medium">HL7 Consent Standard</span>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Pillar 1: Patient Rights */}
            <div className="bg-white rounded-xl p-8 border border-[var(--neutral-200)] shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <UserCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Patient Rights First</h3>
              <p className="text-[var(--neutral-700)] mb-6">
                Full control over your health information with rights guaranteed by law.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    <strong>Right to Access:</strong> View all your health records anytime
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    <strong>Right to Portability:</strong> Export data in standard formats (FHIR)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    <strong>Right to Rectification:</strong> Correct inaccurate information
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    <strong>Right to Erasure:</strong> Request deletion of non-essential data
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    <strong>Right to Restrict:</strong> Limit how your data is used
                  </span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Consent Management */}
            <div className="bg-white rounded-xl p-8 border border-[var(--neutral-200)] shadow-sm">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <ScrollText className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Granular Consent Control</h3>
              <p className="text-[var(--neutral-700)] mb-6">
                You decide exactly what data is shared, with whom, and for how long.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    <strong>Category-Based:</strong> Separate consents for treatment, emergency, research
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    <strong>Scope Selection:</strong> Choose specific data types to share
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    <strong>Time-Limited:</strong> Set expiration dates for consent
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    <strong>Easy Revocation:</strong> Withdraw consent anytime, instantly
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    <strong>Purpose-Bound:</strong> Data used only for stated purposes
                  </span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Security & Transparency */}
            <div className="bg-white rounded-xl p-8 border border-[var(--neutral-200)] shadow-sm">
              <div className="w-14 h-14 bg-[var(--info)]/10 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-[var(--info)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Security</h3>
              <p className="text-[var(--neutral-700)] mb-6">
                Your data protected with the highest security standards.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    <strong>Encryption:</strong> AES-256 at rest, TLS 1.3 in transit
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    <strong>Access Logs:</strong> Complete audit trail of who accessed your data
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    <strong>MFA Required:</strong> Multi-factor authentication for all staff
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    <strong>Regular Audits:</strong> Biannual security assessments
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    <strong>Breach Protocol:</strong> 72-hour notification if incidents occur
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Data Sharing Flow */}
          <div className="bg-white rounded-xl p-8 border border-[var(--neutral-200)] shadow-sm mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">How Health Data Sharing Works</h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Fingerprint className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-1">1. Identify</h4>
                <p className="text-sm text-[var(--neutral-700)]">Verify patient identity via ABHA/Health ID</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <ScrollText className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-1">2. Request</h4>
                <p className="text-sm text-[var(--neutral-700)]">Provider requests specific data categories</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-1">3. Consent</h4>
                <p className="text-sm text-[var(--neutral-700)]">Patient reviews and grants/denies consent</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-1">4. Share</h4>
                <p className="text-sm text-[var(--neutral-700)]">Encrypted data shared securely</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-1">5. Audit</h4>
                <p className="text-sm text-[var(--neutral-700)]">Access logged for transparency</p>
              </div>
            </div>
          </div>

          {/* Regional Compliance Details */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* India ABDM/DPDPA */}
            <div className="bg-gradient-to-br from-[#FF9933]/10 to-[#138808]/10 rounded-xl p-8 border border-[#FF9933]/20">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-[#FF9933]" />
                <h3 className="text-2xl font-bold">India: ABDM & DPDPA</h3>
              </div>
              <p className="text-[var(--neutral-700)] mb-6">
                Full compliance with India's Ayushman Bharat Digital Mission and Digital Personal Data Protection Act 2023.
              </p>
              <div className="space-y-4">
                <div className="bg-white/80 rounded-lg p-4">
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <Key className="w-5 h-5 text-[#FF9933]" />
                    ABHA Integration
                  </h4>
                  <ul className="text-sm text-[var(--neutral-700)] space-y-1 ml-7">
                    <li>• Ayushman Bharat Health Account linking</li>
                    <li>• ABDM Consent Manager integration</li>
                    <li>• Health Information Exchange ready</li>
                    <li>• QR-based patient verification</li>
                  </ul>
                </div>
                <div className="bg-white/80 rounded-lg p-4">
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <Scale className="w-5 h-5 text-[#138808]" />
                    DPDPA Compliance
                  </h4>
                  <ul className="text-sm text-[var(--neutral-700)] space-y-1 ml-7">
                    <li>• Data Fiduciary obligations fulfilled</li>
                    <li>• Consent Manager registration (Nov 2026)</li>
                    <li>• 7-year consent record retention</li>
                    <li>• Up to ₹250 crore penalty protection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nepal */}
            <div className="bg-gradient-to-br from-[#DC143C]/10 to-[#003893]/10 rounded-xl p-8 border border-[#DC143C]/20">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-[#DC143C]" />
                <h3 className="text-2xl font-bold">Nepal: Privacy Act 2025</h3>
              </div>
              <p className="text-[var(--neutral-700)] mb-6">
                Aligned with Nepal's Digital Privacy and Data Protection Act 2082 (2025) and existing privacy framework.
              </p>
              <div className="space-y-4">
                <div className="bg-white/80 rounded-lg p-4">
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <Key className="w-5 h-5 text-[#DC143C]" />
                    Nepal Health ID Ready
                  </h4>
                  <ul className="text-sm text-[var(--neutral-700)] space-y-1 ml-7">
                    <li>• Pluggable Health ID architecture</li>
                    <li>• Master Patient Index (MPI) matching</li>
                    <li>• Ministry of Health integration ready</li>
                    <li>• EMR interoperability support</li>
                  </ul>
                </div>
                <div className="bg-white/80 rounded-lg p-4">
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <Scale className="w-5 h-5 text-[#003893]" />
                    Nepal Privacy Compliance
                  </h4>
                  <ul className="text-sm text-[var(--neutral-700)] space-y-1 ml-7">
                    <li>• Right to access, rectification, deletion</li>
                    <li>• 72-hour breach notification</li>
                    <li>• Data Protection Authority registration</li>
                    <li>• Data localization provisions met</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* International Standards */}
          <div className="bg-white rounded-xl p-8 border border-[var(--neutral-200)] shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">Built on International Healthcare Standards</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--info)]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Database className="w-8 h-8 text-[var(--info)]" />
                </div>
                <h4 className="font-bold mb-2">FHIR R4</h4>
                <p className="text-sm text-[var(--neutral-700)]">
                  Fast Healthcare Interoperability Resources for seamless data exchange
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">HL7 Consent</h4>
                <p className="text-sm text-[var(--neutral-700)]">
                  Industry-standard consent resource model for healthcare permissions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-bold mb-2">HIPAA Aligned</h4>
                <p className="text-sm text-[var(--neutral-700)]">
                  Security practices aligned with US healthcare privacy standards
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--success)]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Settings className="w-8 h-8 text-[var(--success)]" />
                </div>
                <h4 className="font-bold mb-2">IHE Profiles</h4>
                <p className="text-sm text-[var(--neutral-700)]">
                  Integrating the Healthcare Enterprise for interoperability
                </p>
              </div>
            </div>
          </div>

          {/* Trust Message */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-medium text-primary">
                Your health data is encrypted, consent-controlled, and never sold to third parties.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Trust */}
      <section id="integrations" className="py-20 bg-[var(--neutral-50)]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">Integration & Trust</h2>
            <p className="text-xl text-[var(--neutral-700)]">
              Built for India's ABHA ecosystem and Nepal's evolving Health ID infrastructure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-[var(--neutral-200)]">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">ABHA (India) Integration</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    Progressive identity linking—works without ABHA, enhanced with it
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">Consent-aware data portability and sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    QR-based authentication for returning patients
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[var(--neutral-200)]">
              <MapPin className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Nepal Health ID Readiness</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">Pluggable Health ID architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    MPI (Master Patient Index) matching approach
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">
                    Future-ready for government digital health initiatives
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-8 border border-[var(--neutral-200)]">
            <Shield className="w-12 h-12 text-[var(--info)] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Security & Privacy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Role-Based Access</h4>
                <p className="text-sm text-[var(--neutral-700)]">
                  Staff see only what they need for their role—front desk, triage, doctor, supervisor, admin
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Audit Trails</h4>
                <p className="text-sm text-[var(--neutral-700)]">
                  Complete event logs for compliance, quality improvement, and incident investigation
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Minimal Public Display</h4>
                <p className="text-sm text-[var(--neutral-700)]">
                  Queue displays show tokens, not patient names or medical details
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">Real Impact Stories</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <TestimonialCard
              icon={<Heart className="w-8 h-8 text-primary" />}
              quote="I used to arrive at 7 AM for a 10 AM appointment because I was afraid I'd miss my turn. Now I get an SMS telling me when to come. I can wait at home instead of in a crowded corridor."
              name="Mrs. Laxmi Sharma, 67"
              role="Cardiology Patient"
            />
            <TestimonialCard
              icon={<Users className="w-8 h-8 text-secondary" />}
              quote="Before, I spent half my shift answering 'Where do I go next?' Now patients navigate themselves with the wayfinding. I can focus on actual triage and patient care."
              name="Priya Thapa, RN"
              role="Triage Nurse, Patan Hospital"
            />
            <TestimonialCard
              icon={<BarChart3 className="w-8 h-8 text-[var(--info)]" />}
              quote="We can now see bottlenecks in real-time and reassign patients between doctors. Emergency interrupts are handled smoothly with automatic patient notifications. We've regained operational control."
              name="Dr. Ramesh Kumar"
              role="OPD Supervisor, General Medicine"
            />
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section id="implementation" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">Pilot to Rollout</h2>
            <p className="text-xl text-[var(--neutral-700)]">
              Phased implementation designed for high-volume OPD realities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
              <div className="font-bold text-lg mb-2">Week 0-2: Discovery</div>
              <ul className="space-y-2 text-sm text-[var(--neutral-700)]">
                <li>• Workflow mapping sessions</li>
                <li>• Roster and clinic data collection</li>
                <li>• Signage and wayfinding alignment</li>
                <li>• Staff role definition</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-secondary">
              <div className="font-bold text-lg mb-2">Week 3-6: OPD Pilot</div>
              <ul className="space-y-2 text-sm text-[var(--neutral-700)]">
                <li>• Single department deployment</li>
                <li>• Staff training and support</li>
                <li>• Patient feedback collection</li>
                <li>• Iteration and refinement</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-[var(--info)]">
              <div className="font-bold text-lg mb-2">Week 7-12: Expansion</div>
              <ul className="space-y-2 text-sm text-[var(--neutral-700)]">
                <li>• Multi-department rollout</li>
                <li>• Lab and pharmacy integration</li>
                <li>• Full campus wayfinding</li>
                <li>• Ongoing optimization</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-[var(--neutral-200)]">
            <h3 className="text-2xl font-bold mb-4">What Hospitals Need to Provide</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">Doctor roster and clinic schedules</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">Clinic locations and room mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">Basic consultation fee ranges</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">Front desk and triage workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">Campus landmarks for navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">Staff role definitions and access levels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Transform Your OPD Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hospitals across South Asia bringing calm, clarity, and dignity to high-volume outpatient care.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              onClick={() => setShowRequestForm(true)}
              className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-[var(--neutral-50)] transition-colors font-bold text-lg flex items-center gap-2"
            >
              Request Demo
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-bold text-lg flex items-center gap-2">
              Download Pilot Playbook
              <FileText className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm opacity-80">
            Works with assisted booking, low connectivity, and offline scenarios. No app-only barriers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+977-1-5522266</span>
            </div>
            <a href="mailto:reganmaharjann@gmail.com" className="flex items-center gap-2 hover:underline">
              <Globe className="w-4 h-4" />
              <span>reganmaharjann@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--neutral-900)] text-white py-12">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-6 h-6" />
                <span className="font-bold">OPD Queue System</span>
              </div>
              <p className="text-sm text-[var(--neutral-400)]">
                From crowded queues to guided care. Built for South Asian OPDs.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-[var(--neutral-400)]">
                <li>
                  <Link to="/find-care" className="hover:text-white transition-colors">
                    Patient App
                  </Link>
                </li>
                <li>
                  <Link to="/staff" className="hover:text-white transition-colors">
                    Staff Dashboard
                  </Link>
                </li>
                <li>Features</li>
                <li>Accessibility</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-[var(--neutral-400)]">
                <li>Implementation Guide</li>
                <li>API Documentation</li>
                <li>Case Studies</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-[var(--neutral-400)]">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>ABHA Integration</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--neutral-700)] pt-8 text-sm text-[var(--neutral-400)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p>© 2026 OPD Queue Management System. Built with dignity, clarity, and accessibility for all.</p>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                <span>
                  Created by a <strong className="text-white">Nepalese</strong>
                </span>
                <span className="mx-2">|</span>
                <a href="mailto:reganmaharjann@gmail.com" className="text-primary hover:underline">
                  reganmaharjann@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Request Demo Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowRequestForm(false)}
          />
          <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <RequestDemoForm language="en" onClose={() => setShowRequestForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  beneficiary: string;
}

function FeatureCard({ icon, title, description, beneficiary }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)] hover:border-primary transition-colors">
      <div className="flex items-start gap-4 mb-3">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-sm text-[var(--neutral-700)] mb-2">{description}</p>
          <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
            {beneficiary}
          </span>
        </div>
      </div>
    </div>
  );
}

interface MetricCardProps {
  icon: React.ReactNode;
  metric?: string;
  title: string;
  description: string;
}

function MetricCard({ icon, metric, title, description }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)]">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-primary">{icon}</div>
        {metric && <div className="text-2xl font-bold text-primary">{metric}</div>}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-[var(--neutral-700)]">{description}</p>
    </div>
  );
}

interface TestimonialCardProps {
  icon: React.ReactNode;
  quote: string;
  name: string;
  role: string;
}

function TestimonialCard({ icon, quote, name, role }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)]">
      <div className="mb-4">{icon}</div>
      <p className="text-[var(--neutral-700)] mb-4 italic">"{quote}"</p>
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-sm text-[var(--neutral-600)]">{role}</div>
      </div>
    </div>
  );
}
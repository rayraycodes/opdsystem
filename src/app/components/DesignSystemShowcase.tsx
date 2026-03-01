import {
  Heart,
  Shield,
  AlertCircle,
  CheckCircle2,
  Info,
  AlertTriangle,
} from "lucide-react";

export function DesignSystemShowcase() {
  return (
    <div className="min-h-screen bg-[var(--neutral-50)] p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">
            Hospital Appointment System
          </h1>
          <p className="text-xl text-[var(--neutral-600)]">
            World-Class Patient-Centered Design System
          </p>
        </div>

        {/* Color Palette */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="h-24 bg-[var(--healing-teal)] rounded-lg mb-2"></div>
              <p className="font-medium">Healing Teal</p>
              <p className="text-sm text-[var(--neutral-600)]">Primary Brand</p>
            </div>
            <div>
              <div className="h-24 bg-[var(--trust-blue)] rounded-lg mb-2"></div>
              <p className="font-medium">Trust Blue</p>
              <p className="text-sm text-[var(--neutral-600)]">Secondary</p>
            </div>
            <div>
              <div className="h-24 bg-[var(--success)] rounded-lg mb-2"></div>
              <p className="font-medium">Success</p>
              <p className="text-sm text-[var(--neutral-600)]">Confirmation</p>
            </div>
            <div>
              <div className="h-24 bg-[var(--warning)] rounded-lg mb-2"></div>
              <p className="font-medium">Warning</p>
              <p className="text-sm text-[var(--neutral-600)]">Delays</p>
            </div>
            <div>
              <div className="h-24 bg-[var(--danger)] rounded-lg mb-2"></div>
              <p className="font-medium">Danger</p>
              <p className="text-sm text-[var(--neutral-600)]">Emergency</p>
            </div>
            <div>
              <div className="h-24 bg-[var(--info)] rounded-lg mb-2"></div>
              <p className="font-medium">Info</p>
              <p className="text-sm text-[var(--neutral-600)]">Navigation</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Typography Scale</h2>
          <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)] space-y-4">
            <div>
              <p className="text-sm text-[var(--neutral-600)] mb-1">Display (32px/40px)</p>
              <p style={{ fontSize: "var(--text-display)", lineHeight: "var(--text-display-lh)" }}>
                Welcome to Patan Hospital
              </p>
            </div>
            <div>
              <p className="text-sm text-[var(--neutral-600)] mb-1">H1 (20px/28px)</p>
              <p style={{ fontSize: "var(--text-h1)", lineHeight: "var(--text-h1-lh)" }}>
                Find Care & Book Appointments
              </p>
            </div>
            <div>
              <p className="text-sm text-[var(--neutral-600)] mb-1">H2 (18px/26px)</p>
              <p style={{ fontSize: "var(--text-h2)", lineHeight: "var(--text-h2-lh)" }}>
                Queue Tracking Dashboard
              </p>
            </div>
            <div>
              <p className="text-sm text-[var(--neutral-600)] mb-1">Body (16px/24px)</p>
              <p style={{ fontSize: "var(--text-base)", lineHeight: "var(--text-base-lh)" }}>
                This is the default body text with optimal readability
              </p>
            </div>
            <div>
              <p className="text-sm text-[var(--neutral-600)] mb-1">Large Body (18px/28px)</p>
              <p style={{ fontSize: "var(--text-large)", lineHeight: "var(--text-large-lh)" }}>
                Elder mode text for enhanced legibility
              </p>
            </div>
            <div>
              <p className="text-sm text-[var(--neutral-600)] mb-1">Caption (14px/20px)</p>
              <p style={{ fontSize: "var(--text-caption)", lineHeight: "var(--text-caption-lh)" }}>
                Small supporting text and labels
              </p>
            </div>
          </div>
        </section>

        {/* Multilingual Support */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Multilingual Support (Devanagari)
          </h2>
          <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)] space-y-4">
            <div>
              <p className="text-sm text-[var(--neutral-600)] mb-1">English</p>
              <p className="text-xl">Welcome to Patan Hospital</p>
            </div>
            <div>
              <p className="text-sm text-[var(--neutral-600)] mb-1">Hindi (हिंदी)</p>
              <p className="text-xl">पाटन अस्पताल में आपका स्वागत है</p>
            </div>
            <div>
              <p className="text-sm text-[var(--neutral-600)] mb-1">Nepali (नेपाली)</p>
              <p className="text-xl">पाटन अस्पताल मा स्वागत छ</p>
            </div>
          </div>
        </section>

        {/* Semantic Components */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Semantic Alert Components
          </h2>
          <div className="space-y-4">
            <div className="bg-[var(--success)]/10 border-l-4 border-[var(--success)] p-4 rounded-lg flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-[var(--foreground)] mb-1">Success</h4>
                <p className="text-sm text-[var(--neutral-700)]">
                  Your appointment has been confirmed successfully.
                </p>
              </div>
            </div>

            <div className="bg-[var(--warning)]/10 border-l-4 border-[var(--warning)] p-4 rounded-lg flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--warning)] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-[var(--foreground)] mb-1">Warning</h4>
                <p className="text-sm text-[var(--neutral-700)]">
                  There is a 15-20 minute delay due to an emergency case.
                </p>
              </div>
            </div>

            <div className="bg-[var(--danger)]/10 border-l-4 border-[var(--danger)] p-4 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[var(--danger)] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-[var(--foreground)] mb-1">Danger</h4>
                <p className="text-sm text-[var(--neutral-700)]">
                  Emergency interrupt - please contact help desk immediately.
                </p>
              </div>
            </div>

            <div className="bg-[var(--info)]/10 border-l-4 border-[var(--info)] p-4 rounded-lg flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-[var(--foreground)] mb-1">Info</h4>
                <p className="text-sm text-[var(--neutral-700)]">
                  Please arrive 15 minutes before your appointment time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Touch Targets */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Accessible Touch Targets (48x48 min)
          </h2>
          <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)]">
            <div className="flex flex-wrap gap-3">
              <button className="min-w-[48px] min-h-[48px] px-4 bg-primary text-white rounded-lg hover:bg-[var(--healing-teal-dark)] transition-colors">
                Primary
              </button>
              <button className="min-w-[48px] min-h-[48px] px-4 bg-white border border-[var(--neutral-200)] rounded-lg hover:bg-[var(--neutral-50)] transition-colors">
                Secondary
              </button>
              <button className="min-w-[48px] min-h-[48px] px-4 bg-[var(--danger)] text-white rounded-lg hover:bg-[var(--danger)]/90 transition-colors">
                Danger
              </button>
            </div>
          </div>
        </section>

        {/* Spacing System */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            8pt Spacing System
          </h2>
          <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)]">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm text-[var(--neutral-600)]">8px</div>
                <div className="h-2 bg-primary" style={{ width: "var(--space-1)" }}></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm text-[var(--neutral-600)]">16px</div>
                <div className="h-2 bg-primary" style={{ width: "var(--space-2)" }}></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm text-[var(--neutral-600)]">24px</div>
                <div className="h-2 bg-primary" style={{ width: "var(--space-3)" }}></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm text-[var(--neutral-600)]">32px</div>
                <div className="h-2 bg-primary" style={{ width: "var(--space-4)" }}></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm text-[var(--neutral-600)]">40px</div>
                <div className="h-2 bg-primary" style={{ width: "var(--space-5)" }}></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm text-[var(--neutral-600)]">48px</div>
                <div className="h-2 bg-primary" style={{ width: "var(--space-6)" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            WCAG 2.1 AAA Accessibility
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)]">
              <Heart className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-medium mb-2">Elder Mode</h3>
              <p className="text-sm text-[var(--neutral-600)]">
                Larger text sizes (18-20px) for improved readability
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)]">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-medium mb-2">High Contrast</h3>
              <p className="text-sm text-[var(--neutral-600)]">
                Enhanced color contrast for vision impairment
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[var(--neutral-200)]">
              <AlertCircle className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-medium mb-2">Screen Reader</h3>
              <p className="text-sm text-[var(--neutral-600)]">
                ARIA labels and semantic HTML for assistive tech
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
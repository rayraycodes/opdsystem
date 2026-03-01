import { MapPin, CheckCircle2, Accessibility } from "lucide-react";

interface Step {
  landmark: string;
  instruction: string;
  completed: boolean;
}

interface NavigationStepperProps {
  steps: Step[];
  accessibleRoute: boolean;
  onToggleAccessibleRoute: () => void;
}

export function NavigationStepper({
  steps,
  accessibleRoute,
  onToggleAccessibleRoute,
}: NavigationStepperProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-[var(--neutral-200)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-[var(--foreground)]">Directions to Clinic</h3>
        <button
          onClick={onToggleAccessibleRoute}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors min-h-[48px] ${
            accessibleRoute
              ? "bg-primary text-white border-primary"
              : "bg-white text-[var(--neutral-700)] border-[var(--neutral-200)]"
          }`}
          aria-pressed={accessibleRoute}
        >
          <Accessibility className="w-4 h-4" aria-hidden="true" />
          <span className="text-sm">Accessible Route</span>
        </button>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-3">
            <div className="flex flex-col items-center">
              {step.completed ? (
                <CheckCircle2
                  className="w-6 h-6 text-[var(--success)] flex-shrink-0"
                  aria-hidden="true"
                />
              ) : (
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
              )}
              {index < steps.length - 1 && (
                <div
                  className={`w-0.5 flex-1 min-h-[24px] ${
                    step.completed ? "bg-[var(--success)]" : "bg-[var(--neutral-300)]"
                  }`}
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="flex-1 pb-4">
              <h4
                className={`font-medium mb-1 ${
                  step.completed ? "text-[var(--neutral-500)]" : "text-[var(--foreground)]"
                }`}
              >
                {step.landmark}
              </h4>
              <p className="text-sm text-[var(--neutral-600)]">{step.instruction}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

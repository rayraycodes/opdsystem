import { AlertCircle } from "lucide-react";
import { motion } from "motion/react";

interface EmergencyBannerProps {
  message: string;
  newEtaMin?: number;
  newEtaMax?: number;
}

export function EmergencyBanner({ message, newEtaMin, newEtaMax }: EmergencyBannerProps) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-[var(--warning)]/10 border-l-4 border-[var(--warning)] p-4 rounded-lg"
      role="alert"
      aria-live="assertive"
    >
      <div className="flex gap-3">
        <AlertCircle className="w-5 h-5 text-[var(--warning)] flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div className="flex-1">
          <h4 className="font-medium text-[var(--foreground)] mb-1">Delay Notice</h4>
          <p className="text-sm text-[var(--neutral-700)]">{message}</p>
          {newEtaMin && newEtaMax && (
            <p className="text-sm text-[var(--neutral-700)] mt-2">
              <span className="font-medium">Updated wait time:</span> {newEtaMin}-{newEtaMax} minutes
            </p>
          )}
          <p className="text-xs text-[var(--neutral-600)] mt-2 italic">
            We appreciate your patience and understanding during this time.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

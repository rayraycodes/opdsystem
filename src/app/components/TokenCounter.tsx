import { Clock, Users, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

interface TokenCounterProps {
  nowServing: number;
  yourToken: number;
  etaMin: number;
  etaMax: number;
  confidence: "high" | "medium" | "low";
  lastUpdated: Date;
}

const confidenceLabels = {
  high: "High Accuracy",
  medium: "Moderate Accuracy",
  low: "Estimate Only",
};

const confidenceColors = {
  high: "text-[var(--success)]",
  medium: "text-[var(--warning)]",
  low: "text-[var(--neutral-500)]",
};

export function TokenCounter({
  nowServing,
  yourToken,
  etaMin,
  etaMax,
  confidence,
  lastUpdated,
}: TokenCounterProps) {
  const tokensAhead = yourToken - nowServing;
  const timeAgo = Math.floor((Date.now() - lastUpdated.getTime()) / 60000);

  return (
    <div className="bg-gradient-to-br from-primary to-[var(--trust-blue)] p-6 rounded-2xl text-white">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5" aria-hidden="true" />
            <span className="text-sm opacity-90">Now Serving</span>
          </div>
          <div className="text-4xl font-bold" role="status" aria-live="polite">
            {nowServing}
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5" aria-hidden="true" />
            <span className="text-sm opacity-90">Your Token</span>
          </div>
          <div className="text-4xl font-bold" role="status" aria-live="polite">
            {yourToken}
          </div>
        </motion.div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" aria-hidden="true" />
            <span className="text-sm">Estimated Wait Time</span>
          </div>
          <span className={`text-xs ${confidenceColors[confidence]}`}>
            {confidenceLabels[confidence]}
          </span>
        </div>
        <div className="text-3xl font-bold" role="status" aria-live="polite">
          {etaMin}-{etaMax} min
        </div>
        <p className="text-sm opacity-75 mt-2">
          {tokensAhead} {tokensAhead === 1 ? "person" : "people"} ahead of you
        </p>
      </div>

      <div className="text-xs opacity-75 text-center" role="status">
        Last updated {timeAgo === 0 ? "just now" : `${timeAgo} min ago`}
      </div>
    </div>
  );
}

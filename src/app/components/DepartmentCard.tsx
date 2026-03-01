import { Building2, Users, Clock } from "lucide-react";

interface DepartmentCardProps {
  name: string;
  building: string;
  floor: string;
  averageWait: number;
  nextTokenWindow?: string;
  currentLoad: "low" | "medium" | "high";
}

const loadColors = {
  low: { bg: "bg-[var(--success)]/10", text: "text-[var(--success)]" },
  medium: { bg: "bg-[var(--warning)]/10", text: "text-[var(--warning)]" },
  high: { bg: "bg-[var(--danger)]/10", text: "text-[var(--danger)]" },
};

const loadLabels = {
  low: "Light Queue",
  medium: "Moderate Queue",
  high: "Heavy Queue",
};

export function DepartmentCard({
  name,
  building,
  floor,
  averageWait,
  nextTokenWindow,
  currentLoad,
}: DepartmentCardProps) {
  const colors = loadColors[currentLoad];

  return (
    <div className="p-4 bg-white rounded-lg border border-[var(--neutral-200)]">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-medium text-[var(--foreground)]">{name}</h3>
          <div className="flex items-center gap-1 text-sm text-[var(--neutral-600)] mt-1">
            <Building2 className="w-4 h-4" aria-hidden="true" />
            <span>
              {building} · Floor {floor}
            </span>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full ${colors.bg}`}>
          <span className={`text-xs font-medium ${colors.text}`}>
            {loadLabels[currentLoad]}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-[var(--neutral-200)]">
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-[var(--neutral-600)]" aria-hidden="true" />
          <span className="text-[var(--neutral-600)]">
            Avg Wait: <span className="font-medium text-[var(--foreground)]">{averageWait} min</span>
          </span>
        </div>

        {nextTokenWindow && (
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-[var(--neutral-600)]" aria-hidden="true" />
            <span className="text-[var(--neutral-600)]">Next: {nextTokenWindow}</span>
          </div>
        )}
      </div>
    </div>
  );
}

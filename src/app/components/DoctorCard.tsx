import { Clock, MapPin, Languages, IndianRupee, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

interface DoctorCardProps {
  id: string;
  name: string;
  qualifications: string;
  specialty: string;
  languages: string[];
  location: string;
  building: string;
  fees: { min: number; max: number };
  earliestSlot?: string;
  onDutyToday: boolean;
  type: "government" | "private";
}

export function DoctorCard({
  id,
  name,
  qualifications,
  specialty,
  languages,
  location,
  building,
  fees,
  earliestSlot,
  onDutyToday,
  type,
}: DoctorCardProps) {
  return (
    <Link to={`/appointment/${id}`}>
      <div className="p-4 bg-white rounded-lg border border-[var(--neutral-200)] hover:border-primary transition-colors cursor-pointer">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-medium text-[var(--foreground)] mb-1">{name}</h3>
            <p className="text-sm text-[var(--neutral-600)]">{qualifications}</p>
            <p className="text-sm text-primary font-medium mt-1">{specialty}</p>
          </div>
          {onDutyToday && (
            <div className="flex items-center gap-1 px-2 py-1 bg-[var(--success)]/10 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-[var(--success)]" aria-hidden="true" />
              <span className="text-xs text-[var(--success)]">On Duty</span>
            </div>
          )}
        </div>

        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2 text-sm text-[var(--neutral-600)]">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>
              {location} · {building}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-[var(--neutral-600)]">
            <Languages className="w-4 h-4" aria-hidden="true" />
            <span>{languages.join(", ")}</span>
          </div>

          {earliestSlot && (
            <div className="flex items-center gap-2 text-sm text-[var(--neutral-600)]">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>Next: {earliestSlot}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[var(--neutral-200)]">
          <div className="flex items-center gap-1 text-sm">
            <IndianRupee className="w-4 h-4" aria-hidden="true" />
            <span className="font-medium">
              {type === "government" ? "₹50-100" : `₹${fees.min}-${fees.max}`}
            </span>
            <span className="text-[var(--neutral-500)] ml-1">
              {type === "government" ? "(Govt. OPD)" : "(Private)"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

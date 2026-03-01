import { useState } from "react";
import {
  Users,
  Clock,
  AlertTriangle,
  Printer,
  UserX,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

interface Token {
  id: string;
  number: number;
  patientName: string;
  visitType: "new" | "followup";
  arrivalTime: string;
  status: "waiting" | "in-progress" | "completed" | "no-show";
  priority: "normal" | "emergency";
}

const mockTokens: Token[] = [
  {
    id: "1",
    number: 95,
    patientName: "Ramesh Kumar",
    visitType: "followup",
    arrivalTime: "1:45 PM",
    status: "in-progress",
    priority: "normal",
  },
  {
    id: "2",
    number: 96,
    patientName: "Priya Sharma",
    visitType: "new",
    arrivalTime: "2:00 PM",
    status: "waiting",
    priority: "normal",
  },
  {
    id: "3",
    number: 97,
    patientName: "Amit Patel",
    visitType: "new",
    arrivalTime: "2:15 PM",
    status: "waiting",
    priority: "emergency",
  },
  {
    id: "4",
    number: 98,
    patientName: "Sunita Reddy",
    visitType: "followup",
    arrivalTime: "2:20 PM",
    status: "waiting",
    priority: "normal",
  },
  {
    id: "5",
    number: 99,
    patientName: "Rajesh Singh",
    visitType: "new",
    arrivalTime: "2:25 PM",
    status: "waiting",
    priority: "normal",
  },
];

const statusColors = {
  waiting: { bg: "bg-[var(--info)]/10", text: "text-[var(--info)]", label: "Waiting" },
  "in-progress": {
    bg: "bg-[var(--warning)]/10",
    text: "text-[var(--warning)]",
    label: "In Progress",
  },
  completed: { bg: "bg-[var(--success)]/10", text: "text-[var(--success)]", label: "Completed" },
  "no-show": { bg: "bg-[var(--neutral-200)]", text: "text-[var(--neutral-600)]", label: "No Show" },
};

export function StaffDashboard() {
  const [tokens, setTokens] = useState<Token[]>(mockTokens);
  const [doctorDelay, setDoctorDelay] = useState(0);
  const [selectedToken, setSelectedToken] = useState<string | null>(null);

  const stats = {
    totalToday: 45,
    completed: 32,
    waiting: tokens.filter((t) => t.status === "waiting").length,
    averageWait: 28,
  };

  const handleMarkNoShow = (id: string) => {
    setTokens((prev) =>
      prev.map((token) => (token.id === id ? { ...token, status: "no-show" as const } : token))
    );
  };

  const handleComplete = (id: string) => {
    setTokens((prev) =>
      prev.map((token) => (token.id === id ? { ...token, status: "completed" as const } : token))
    );
  };

  const handlePriorityToggle = (id: string) => {
    setTokens((prev) =>
      prev.map((token) =>
        token.id === id
          ? {
              ...token,
              priority: token.priority === "emergency" ? "normal" : ("emergency" as const),
            }
          : token
      )
    );
  };

  return (
    <div className="min-h-screen bg-[var(--neutral-50)]">
      {/* Header */}
      <div className="bg-white border-b border-[var(--neutral-200)]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-[var(--foreground)]">Queue Dashboard</h1>
              <p className="text-[var(--neutral-600)] mt-1">
                Dr. Rajesh Kumar · General Medicine · OPD Block A
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white rounded-lg border border-[var(--neutral-200)] hover:bg-[var(--neutral-50)] transition-colors min-h-[48px]">
                <Printer className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="text-sm text-[var(--neutral-700)]">Total Today</span>
              </div>
              <div className="text-3xl font-bold text-primary">{stats.totalToday}</div>
            </div>

            <div className="bg-gradient-to-br from-[var(--success)]/10 to-[var(--success)]/5 rounded-xl p-4 border border-[var(--success)]/20">
              <div className="flex items-center gap-2 mb-2">
                <ChevronRight className="w-5 h-5 text-[var(--success)]" aria-hidden="true" />
                <span className="text-sm text-[var(--neutral-700)]">Completed</span>
              </div>
              <div className="text-3xl font-bold text-[var(--success)]">{stats.completed}</div>
            </div>

            <div className="bg-gradient-to-br from-[var(--info)]/10 to-[var(--info)]/5 rounded-xl p-4 border border-[var(--info)]/20">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-[var(--info)]" aria-hidden="true" />
                <span className="text-sm text-[var(--neutral-700)]">Waiting</span>
              </div>
              <div className="text-3xl font-bold text-[var(--info)]">{stats.waiting}</div>
            </div>

            <div className="bg-gradient-to-br from-[var(--warning)]/10 to-[var(--warning)]/5 rounded-xl p-4 border border-[var(--warning)]/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-[var(--warning)]" aria-hidden="true" />
                <span className="text-sm text-[var(--neutral-700)]">Avg Wait</span>
              </div>
              <div className="text-3xl font-bold text-[var(--warning)]">{stats.averageWait}m</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Token Queue */}
          <div className="col-span-2 space-y-4">
            <div className="bg-white rounded-lg border border-[var(--neutral-200)] p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[var(--foreground)]">Token Queue</h2>
                <div className="flex gap-2">
                  <button className="px-3 py-2 text-sm bg-primary text-white rounded-lg hover:bg-[var(--healing-teal-dark)] transition-colors min-h-[40px]">
                    Call Next
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                {tokens.map((token) => (
                  <div
                    key={token.id}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedToken === token.id
                        ? "border-primary bg-primary/5"
                        : "border-[var(--neutral-200)] hover:border-[var(--neutral-300)]"
                    }`}
                    onClick={() => setSelectedToken(token.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                            token.priority === "emergency"
                              ? "bg-[var(--danger)]/10 text-[var(--danger)]"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {token.number}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-[var(--foreground)]">
                              {token.patientName}
                            </h3>
                            {token.priority === "emergency" && (
                              <span className="px-2 py-0.5 bg-[var(--danger)]/10 text-[var(--danger)] text-xs rounded-full flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3" aria-hidden="true" />
                                Emergency
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-sm text-[var(--neutral-600)] mt-1">
                            <span>{token.visitType === "new" ? "New Visit" : "Follow-up"}</span>
                            <span>•</span>
                            <span>Arrived: {token.arrivalTime}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            statusColors[token.status].bg
                          } ${statusColors[token.status].text}`}
                        >
                          {statusColors[token.status].label}
                        </span>
                      </div>
                    </div>

                    {selectedToken === token.id && token.status !== "completed" && (
                      <div className="mt-3 pt-3 border-t border-[var(--neutral-200)] flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleComplete(token.id);
                          }}
                          className="px-4 py-2 bg-[var(--success)] text-white rounded-lg hover:bg-[var(--success)]/90 transition-colors text-sm min-h-[40px]"
                        >
                          Mark Complete
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMarkNoShow(token.id);
                          }}
                          className="px-4 py-2 bg-white rounded-lg border border-[var(--neutral-200)] hover:bg-[var(--neutral-50)] transition-colors text-sm min-h-[40px] flex items-center gap-2"
                        >
                          <UserX className="w-4 h-4" aria-hidden="true" />
                          No Show
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePriorityToggle(token.id);
                          }}
                          className={`px-4 py-2 rounded-lg border transition-colors text-sm min-h-[40px] flex items-center gap-2 ${
                            token.priority === "emergency"
                              ? "bg-[var(--danger)]/10 border-[var(--danger)] text-[var(--danger)]"
                              : "bg-white border-[var(--neutral-200)] hover:bg-[var(--neutral-50)]"
                          }`}
                        >
                          <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                          {token.priority === "emergency" ? "Remove Priority" : "Mark Emergency"}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            {/* Doctor Delay */}
            <div className="bg-white rounded-lg border border-[var(--neutral-200)] p-4">
              <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                Update Delays
              </h2>
              <label htmlFor="delay-input" className="text-sm text-[var(--neutral-700)] mb-2 block">
                Doctor Delay (minutes)
              </label>
              <input
                id="delay-input"
                type="number"
                value={doctorDelay}
                onChange={(e) => setDoctorDelay(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-[var(--neutral-50)] rounded-lg border border-[var(--neutral-200)] focus:border-primary outline-none mb-3 min-h-[48px]"
              />
              <button className="w-full px-4 py-3 bg-[var(--warning)] text-white rounded-lg hover:bg-[var(--warning)]/90 transition-colors min-h-[48px]">
                Broadcast Delay Update
              </button>
              <p className="text-xs text-[var(--neutral-600)] mt-2">
                This will notify all waiting patients about the expected delay.
              </p>
            </div>

            {/* Emergency Insert */}
            <div className="bg-white rounded-lg border border-[var(--neutral-200)] p-4">
              <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                Emergency Insert
              </h2>
              <button className="w-full px-4 py-3 bg-[var(--danger)] text-white rounded-lg hover:bg-[var(--danger)]/90 transition-colors min-h-[48px] flex items-center justify-center gap-2">
                <AlertTriangle className="w-5 h-5" aria-hidden="true" />
                Insert Emergency Case
              </button>
              <p className="text-xs text-[var(--neutral-600)] mt-2">
                Add an emergency patient to the front of the queue.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg border border-[var(--neutral-200)] p-4">
              <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                Today's Summary
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--neutral-600)]">Start Time:</span>
                  <span className="font-medium">9:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--neutral-600)]">Current Time:</span>
                  <span className="font-medium">2:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--neutral-600)]">No Shows:</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--neutral-600)]">Emergency Cases:</span>
                  <span className="font-medium">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

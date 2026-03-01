import { WifiOff, RefreshCw } from "lucide-react";
import { useApp } from "../contexts/AppContext";

export function OfflineStatusBar() {
  const { isOnline, lastSyncTime } = useApp();

  if (isOnline) return null;

  const timeAgo = lastSyncTime
    ? Math.floor((Date.now() - lastSyncTime.getTime()) / 60000)
    : null;

  const handleRetry = () => {
    // Trigger sync attempt
    window.location.reload();
  };

  return (
    <div
      className="bg-[var(--warning)]/10 border-b border-[var(--warning)] px-4 py-3"
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <WifiOff className="w-5 h-5 text-[var(--warning)]" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium text-[var(--foreground)]">Working Offline</p>
            {timeAgo !== null && (
              <p className="text-xs text-[var(--neutral-600)]">
                Last synced {timeAgo === 0 ? "just now" : `${timeAgo} min ago`}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={handleRetry}
          className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-[var(--neutral-200)] hover:bg-[var(--neutral-50)] transition-colors min-h-[48px]"
          aria-label="Retry connection"
        >
          <RefreshCw className="w-4 h-4" aria-hidden="true" />
          <span className="text-sm">Retry</span>
        </button>
      </div>
    </div>
  );
}

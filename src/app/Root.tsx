import { Outlet } from "react-router";
import { AppProvider } from "./contexts/AppContext";
import { HealthDataProvider } from "./contexts/HealthDataContext";

export function Root() {
  return (
    <AppProvider>
      <HealthDataProvider>
        <div className="min-h-screen bg-background">
          <Outlet />
        </div>
      </HealthDataProvider>
    </AppProvider>
  );
}

import { Outlet } from "react-router";
import { AppProvider } from "./contexts/AppContext";

export function Root() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-background">
        <Outlet />
      </div>
    </AppProvider>
  );
}

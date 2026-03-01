import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { EntryScreen } from "./screens/EntryScreen";
import { FindCareScreen } from "./screens/FindCareScreen";
import { AppointmentDetailsScreen } from "./screens/AppointmentDetailsScreen";
import { ConfirmationScreen } from "./screens/ConfirmationScreen";
import { QueueTrackingScreen } from "./screens/QueueTrackingScreen";
import { StaffDashboard } from "./screens/StaffDashboard";
import { DesignSystemShowcase } from "./components/DesignSystemShowcase";
import { LandingPage } from "./screens/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: LandingPage },
      { path: "patient", Component: EntryScreen },
      { path: "find-care", Component: FindCareScreen },
      { path: "appointment/:doctorId", Component: AppointmentDetailsScreen },
      { path: "confirmation/:appointmentId", Component: ConfirmationScreen },
      { path: "queue/:tokenId", Component: QueueTrackingScreen },
      { path: "staff", Component: StaffDashboard },
      { path: "design-system", Component: DesignSystemShowcase },
    ],
  },
]);
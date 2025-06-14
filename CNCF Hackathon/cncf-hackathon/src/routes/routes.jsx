import { createBrowserRouter } from "react-router-dom";
import {
  LazyAnalyticsPage,
  LazyDashboardLayout,
  LazyDashboardPage,
  LazyRepoPage,
  LazySettingsPage,
} from "./lazy-routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyDashboardLayout />, // ✅ Correct: use element
    children: [
      { index: true, element: <LazyDashboardPage /> }, // ✅ Correct: use element
      { path: "repository", element: <LazyRepoPage /> },
      { path: "analytics", element: <LazyAnalyticsPage /> },
      { path: "settings", element: <LazySettingsPage /> },
    ],
  },
]);

export default router;

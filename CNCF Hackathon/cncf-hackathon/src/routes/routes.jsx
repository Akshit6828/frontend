import { createBrowserRouter } from "react-router-dom";
import { LazyDashboardLayout } from "./lazy-routes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LazyDashboardLayout,
    children: [
      { index: true, Component: LazyDashboardLayout },
      { path: "/view-repo-dashboard", Component: LazyDashboardLayout },
    ],
  },
]);

import React from "react";

const LazyDashboardLayout = React.lazy(() =>
  import("../layouts/dashboard-layout/dashboard-layout")
);
const LazyDashboard = React.lazy(() => import("../pages/dashboard/dashboard"));
const LazyRepoDashboard = React.lazy(() =>
  import("../pages/repo-dashboard/repo-dashboard")
);
const LazyAnalytics = React.lazy(() => import("../pages/analytics/analytics"));
const LazySettings = React.lazy(() => import("../pages/settings/settings"));

export {
  LazyDashboard,
  LazyDashboardLayout,
  LazyRepoDashboard,
  LazyAnalytics,
  LazySettings,
};

import React from "react";

export const LazyDashboardPage = React.lazy(() =>
  import("../pages/dashboard/dashboard")
);
export const LazyRepoPage = React.lazy(() =>
  import("../pages/repository/repository")
);
export const LazyAnalyticsPage = React.lazy(() =>
  import("../pages/analytics/analytics")
);
export const LazySettingsPage = React.lazy(() =>
  import("../pages/settings/settings")
);
export const LazyDashboardLayout = React.lazy(() =>
  import("../layouts/dashboard-layout/dashboard-layout")
);

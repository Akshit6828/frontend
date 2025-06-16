import { createBrowserRouter } from "react-router-dom";
import { LazyDashboard, LazyDashboardLayout, LazyViewDetails } from "./lazy-routes";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: LazyDashboardLayout,
        children: [
            { index: true, Component: LazyDashboard },
            { path: 'view-details', Component: LazyViewDetails }
        ]
    },
]);

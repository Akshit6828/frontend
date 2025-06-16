import React from 'react';

const LazyDashboardLayout = React.lazy(()=> import('../layouts/dashboard-layout/dashboard-layout'));
const LazyDashboard = React.lazy(()=> import('../pages/dashboard/dashboard'));
const LazyViewDetails = React.lazy(()=> import('../pages/view-details/view-details'));

export {LazyDashboard,LazyDashboardLayout, LazyViewDetails};
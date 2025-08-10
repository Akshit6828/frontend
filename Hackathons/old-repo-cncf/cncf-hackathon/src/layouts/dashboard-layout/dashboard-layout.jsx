import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "../../components/app-header/app-header";
import "./dashboard-layout.scss";
import RightPanel from "../../components/right-panel/right-panel";
import LeftPanel from "../../components/left-panel/left-panel";

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="dashboard-container">
      <AppHeader />
      <div className="dashboard-body">
        <LeftPanel isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <RightPanel>
          {/* ✅ This is where your routed pages will render */}
          <Outlet />
        </RightPanel>
      </div>
    </div>
  );
};

export default DashboardLayout;

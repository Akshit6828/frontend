import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppHeader from "../../components/app-header/app-header";
import "./dashboard-layout.scss";
import RightPanel from "../../components/right-panel/right-panel";
import AppTable from "../../components/app-table/app-table";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Repository", path: "/view-repo-dashboard" },
  { name: "Analytics", path: "/analytics" },
  { name: "Settings", path: "/settings" },
];

const data = [
  { name: "John Doe", email: "john@example.com", status: "Active" },
  { name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
];
const columns = [
  { header: "Name", key: "name" },
  { header: "Email", key: "email" },
  { header: "Status", key: "status" },
];
const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const navigate = useNavigate();
  // const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="dashboard-container">
      <AppHeader />
      <div className="dashboard-body">
        <div className={`left-panel ${isCollapsed ? "collapsed" : ""}`}>
          <div className="left-panel-top">
            <h2>Navigation</h2>
            <ul>
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="left-panel-bottom">
            <button className="toggle-btn" onClick={toggleSidebar}>
              {isCollapsed ? "→" : "←"}
            </button>
          </div>
        </div>
        <RightPanel>
          <div>
            <h1 style={{ color: "var(--color-text-primary)" }}>
              Dashboard Table
            </h1>
            <AppTable data={data} columns={columns} />
          </div>
        </RightPanel>
      </div>
    </div>
  );
};

export default DashboardLayout;

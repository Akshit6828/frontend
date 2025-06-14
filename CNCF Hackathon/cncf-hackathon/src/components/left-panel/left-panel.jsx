import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./left-panel.scss";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Repository", path: "/repository" },
  { name: "Analytics", path: "/analytics" },
  { name: "Settings", path: "/settings" },
];

export default function LeftPanel({ isCollapsed, toggleSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log({ isCollapsed });
  }, []);
  return (
    <div className={`left-panel ${isCollapsed ? "collapsed" : ""}`}>
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
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? "Expand" : "Collapse"}
      </button>
    </div>
  );
}

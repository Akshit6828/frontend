import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  FolderGit2,
  BarChart2,
} from "lucide-react";
import "./left-panel.scss";

const navItems = [
  { name: "Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
  { name: "Repository", path: "/repository", icon: <FolderGit2 size={20} /> },
  { name: "Analytics", path: "/analytics", icon: <BarChart2 size={20} /> },
];

export default function LeftPanel({ isCollapsed, toggleSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log({ isCollapsed });
  }, []);

  return (
    <div className={`left-panel ${isCollapsed ? "collapsed" : ""}`}>
      <div className="nav-items">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.path}
              className={location.pathname === item.path ? "active" : ""}
              onClick={() => navigate(item.path)}
            >
              {item.icon}
              {!isCollapsed && <span className="item-label">{item.name}</span>}
            </li>
          ))}
        </ul>
      </div>

      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>
    </div>
  );
}

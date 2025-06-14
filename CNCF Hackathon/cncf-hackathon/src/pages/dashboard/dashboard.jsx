import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard Layout Starts here</h2>

      <div className="outlet-wrapper">
        <Outlet />
      </div>
    </div>
  );
}

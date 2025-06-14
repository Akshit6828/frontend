import React from "react";
import AppTable from "../../components/app-table/app-table";

const DashboardPage = () => {
  const data = [
    { name: "John Doe", email: "john@example.com", status: "Active" },
    { name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
  ];

  const columns = [
    { header: "Name", key: "name" },
    { header: "Email", key: "email" },
    { header: "Status", key: "status" },
  ];

  return (
    <div>
      <h1 style={{ color: "var(--color-text-primary)" }}>Dashboard Table</h1>
      <AppTable data={data} columns={columns} />
    </div>
  );
};

export default DashboardPage;

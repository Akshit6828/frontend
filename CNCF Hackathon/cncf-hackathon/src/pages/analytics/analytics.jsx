import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
} from "recharts";
import "./analytics.scss"; // 👈 Add this file for custom styling

const pieData = [
  { name: "High", value: 5 },
  { name: "Medium", value: 3 },
  { name: "Low", value: 2 },
];

const barData = [
  { repo: "Frontend", high: 2, medium: 1, low: 0 },
  { repo: "Backend", high: 1, medium: 1, low: 1 },
  { repo: "Database", high: 2, medium: 1, low: 1 },
];

const lineData = [
  { month: "Jan", vulnerabilities: 8 },
  { month: "Feb", vulnerabilities: 6 },
  { month: "Mar", vulnerabilities: 5 },
  { month: "Apr", vulnerabilities: 3 },
];

const COLORS = ["#ff4d4f", "#faad14", "#52c41a"];

export default function Analytics() {
  return (
    <div className="analytics-page">
      <h1>Analytics Dashboard</h1>
      <div className="analytics-grid">
        {/* Pie Chart */}
        <div className="chart-card">
          <h3>Severity Distribution</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Bar Chart */}
        <div className="chart-card">
          <h3>Vulnerabilities per Repository</h3>
          <BarChart width={400} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="repo" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="high" stackId="a" fill="#ff4d4f" />
            <Bar dataKey="medium" stackId="a" fill="#faad14" />
            <Bar dataKey="low" stackId="a" fill="#52c41a" />
          </BarChart>
        </div>

        {/* Line Chart */}
        <div className="chart-card">
          <h3>Vulnerabilities Over Time</h3>
          <LineChart width={400} height={300} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="vulnerabilities" stroke="#1890ff" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}

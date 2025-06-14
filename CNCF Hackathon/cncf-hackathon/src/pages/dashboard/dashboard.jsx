import React from "react";
import { useNavigate } from "react-router-dom";
import RepoTile from "../../components/repo-tile/repo-tile";
import "./dashboard.scss";

const DashboardPage = () => {
  const navigate = useNavigate();

  const repositories = [
    { id: 1, name: "Frontend Service", vulnerabilities: 5 },
    { id: 2, name: "Backend API", vulnerabilities: 2 },
    { id: 3, name: "Database Config", vulnerabilities: 8 },
    { id: 4, name: "Notification Service", vulnerabilities: 0 },
  ];

  const handleRepoClick = (repo) => {
    navigate("/repository", { state: { repo } });
  };

  return (
    <div className="dashboard-page">
      <h1 style={{ color: "var(--color-text-primary)" }}>Your Repositories</h1>
      <div className="repo-grid">
        {repositories.map((repo) => (
          <RepoTile
            key={repo.id}
            name={repo.name}
            vulnerabilities={repo.vulnerabilities}
            onClick={() => handleRepoClick(repo)}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;

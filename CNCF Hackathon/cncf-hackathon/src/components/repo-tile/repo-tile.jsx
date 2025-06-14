import React from "react";
import "./repo-tile.scss";
import { ArrowRight } from "lucide-react";

const RepoTile = ({ name, vulnerabilities, onClick }) => {
  return (
    <div className="repo-tile" onClick={onClick}>
      <div className="tile-header">
        <h2>{name}</h2>
      </div>
      <div className="vulnerability-section">
        <div
          className={`vuln-count ${vulnerabilities > 0 ? "danger" : "safe"}`}
        >
          {vulnerabilities}
        </div>
        <span className="vuln-label">
          {vulnerabilities > 0 ? "Vulnerabilities" : "Safe"}
        </span>
      </div>
      <button className="view-button">
        View Details <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default RepoTile;

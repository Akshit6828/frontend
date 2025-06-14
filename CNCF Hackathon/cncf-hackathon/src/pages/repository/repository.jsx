import React, { useEffect, useState } from "react";
// import axios from "axios"; // Commented as API is not being used currently
import SeverityTile from "../../components/severity-tile/severity-tile";
import "./repository.scss";

const RepoDashboard = () => {
  const [repoName, setRepoName] = useState("Frontend Service");
  const [branchName, setBranchName] = useState("main");
  const [vulnerabilities, setVulnerabilities] = useState({
    high: [],
    medium: [],
    low: [],
  });

  const repoOptions = [
    "Frontend Service",
    "Backend API",
    "Database Config",
    "Notification Service",
  ];

  useEffect(() => {
    fetchRepoData();
  }, [repoName]); // Fetch data whenever repo changes

  const fetchRepoData = async () => {
    try {
      // API call - Uncomment when real API is available
      // const response = await axios.get(`/api/repo/vulnerabilities?repo=${repoName}`);
      // const { high, medium, low } = response.data.vulnerabilities;
      // setVulnerabilities({ high, medium, low });

      // Dummy Hardcoded Data per repo
      let dummyData = {};

      if (repoName === "Frontend Service") {
        dummyData = {
          high: [
            {
              name: "SQL Injection",
              foundInVersion: "1.0.0",
              solution: "Upgrade to 1.2.0",
            },
            {
              name: "Cross-Site Scripting",
              foundInVersion: "2.1.0",
              solution: "Sanitize inputs",
            },
          ],
          medium: [
            {
              name: "Sensitive Data Exposure",
              foundInVersion: "2.0.0",
              solution: "Use HTTPS",
            },
          ],
          low: [
            {
              name: "Clickjacking",
              foundInVersion: "2.2.0",
              solution: "Use X-Frame-Options header",
            },
          ],
        };
      } else if (repoName === "Backend API") {
        dummyData = {
          high: [
            {
              name: "Remote Code Execution",
              foundInVersion: "3.0.0",
              solution: "Apply security patch",
            },
          ],
          medium: [
            {
              name: "Broken Authentication",
              foundInVersion: "3.1.0",
              solution: "Implement OAuth2",
            },
          ],
          low: [],
        };
      } else if (repoName === "Database Config") {
        dummyData = {
          high: [
            {
              name: "Privilege Escalation",
              foundInVersion: "4.0.0",
              solution: "Restrict user roles",
            },
            {
              name: "SQL Injection",
              foundInVersion: "4.1.0",
              solution: "Use parameterized queries",
            },
          ],
          medium: [
            {
              name: "Exposed Database Backup",
              foundInVersion: "4.2.0",
              solution: "-",
            },
          ],
          low: [
            {
              name: "Verbose Error Messages",
              foundInVersion: "4.3.0",
              solution: "Disable detailed errors",
            },
          ],
        };
      } else if (repoName === "Notification Service") {
        dummyData = {
          high: [],
          medium: [],
          low: [
            {
              name: "Deprecated Library",
              foundInVersion: "5.0.0",
              solution: "Upgrade library version",
            },
          ],
        };
      }

      setVulnerabilities(dummyData);
    } catch (error) {
      console.error("Error fetching repo data", error);
    }
  };

  const handleRepoChange = (e) => {
    setRepoName(e.target.value);
  };

  const allVulnerabilities = [
    ...vulnerabilities.high.map((item) => ({ ...item, severity: "High" })),
    ...vulnerabilities.medium.map((item) => ({ ...item, severity: "Medium" })),
    ...vulnerabilities.low.map((item) => ({ ...item, severity: "Low" })),
  ];

  return (
    <div className="repo-dashboard">
      <div className="repo-header">
        <h1>
          {repoName}
          <select
            value={repoName}
            onChange={handleRepoChange}
            className="repo-dropdown"
          >
            {repoOptions.map((repo) => (
              <option key={repo} value={repo}>
                {repo}
              </option>
            ))}
          </select>
        </h1>
        <span className="branch-name">Branch: {branchName}</span>
      </div>

      <div className="severity-tiles">
        <SeverityTile
          title="High"
          count={vulnerabilities.high.length}
          color="var(--color-error)"
        />
        <SeverityTile
          title="Medium"
          count={vulnerabilities.medium.length}
          color="var(--color-warning)"
        />
        <SeverityTile
          title="Low"
          count={vulnerabilities.low.length}
          color="var(--color-success)"
        />
      </div>

      <div className="vulnerability-table">
        <h3>Vulnerabilities</h3>
        <table>
          <thead>
            <tr>
              <th>Severity</th>
              <th>Name</th>
              <th>Found in Version</th>
              <th>Solution</th>
            </tr>
          </thead>
          <tbody>
            {allVulnerabilities.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No vulnerabilities found
                </td>
              </tr>
            ) : (
              allVulnerabilities.map((vuln, index) => (
                <tr key={index}>
                  <td>{vuln.severity}</td>
                  <td>{vuln.name}</td>
                  <td>{vuln.foundInVersion}</td>
                  <td>{vuln.solution !== "-" ? vuln.solution : "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RepoDashboard;

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import RepoTile from "../../components/repo-tile/repo-tile";
// import "./dashboard.scss";

// const DashboardPage = () => {
//   const navigate = useNavigate();

//   const repositories = [
//     { id: 1, name: "Frontend Service", vulnerabilities: 5 },
//     { id: 2, name: "Backend API", vulnerabilities: 2 },
//     { id: 3, name: "Database Config", vulnerabilities: 8 },
//     { id: 4, name: "Notification Service", vulnerabilities: 0 },
//   ];

//   const handleRepoClick = (repo) => {
//     navigate("/repository", { state: { repo } });
//   };

//   useEffect(() => {});

//   return (
//     <div className="dashboard-page">
//       <h1 style={{ color: "var(--color-text-primary)" }}>Your Repositories</h1>
//       <div className="repo-grid">
//         {repositories.map((repo) => (
//           <RepoTile
//             key={repo.id}
//             name={repo.name}
//             vulnerabilities={repo.vulnerabilities}
//             onClick={() => handleRepoClick(repo)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import RepoTile from "../../components/repo-tile/repo-tile";
// import "./dashboard.scss";
// import { apiConfig } from "../../env/config";

// const DashboardPage = () => {
//   const navigate = useNavigate();
//   const [repositories, setRepositories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${apiConfig.domain}/api/projects`, {
//         headers: {
//           Accept: "application/json", // Tells the server you expect JSON
//         },
//       });
//       console.log(response);

//       const formattedData = response.data.map((repo) => ({
//         id: repo.id,
//         name: repo.name,
//         vulnerabilities: repo.vulnerabilities.length,
//       }));

//       setRepositories(formattedData);
//     } catch (error) {
//       console.error("Error fetching repository data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   const handleRepoClick = (repo) => {
//     navigate("/repository", { state: { repo } });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="dashboard-page">
//       <h1 style={{ color: "var(--color-text-primary)" }}>Your Repositories</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="repo-grid">
//           {repositories.map((repo) => (
//             <RepoTile
//               key={repo.id}
//               name={repo.name}
//               vulnerabilities={repo.vulnerabilities}
//               onClick={() => handleRepoClick(repo)}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardPage;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RepoTile from "../../components/repo-tile/repo-tile";
import "./dashboard.scss";
import { apiConfig } from "../../env/config";
import goData from "../../data/go.json";
import javaData from "../../data/java.json";
import nodejsData from "../../data/nodejs.json";
import pythonData from "../../data/python.json";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Combine data from all JSON files
    const allData = [goData, javaData, nodejsData, pythonData];

    // Extract relevant information and format it
    const formattedData = allData.map((data) => ({
      id: data.Metadata.ImageID, // Use a unique identifier
      name: data.ArtifactName,
      vulnerabilities: data.Results.reduce(
        (sum, result) =>
          sum + (result.Vulnerabilities ? result.Vulnerabilities.length : 0),
        0
      ),
    }));

    setRepositories(formattedData);
    setLoading(false);
  }, []);

  const handleRepoClick = (repo) => {
    navigate("/repository", { state: { repo } });
  };

  return (
    <div className="dashboard-page">
      <h1 style={{ color: "var(--color-text-primary)" }}>Your Repositories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </div>
  );
};

export default DashboardPage;

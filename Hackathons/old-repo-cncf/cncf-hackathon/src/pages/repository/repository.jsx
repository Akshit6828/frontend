// // import React, { useEffect, useState } from "react";
// // import SeverityTile from "../../components/severity-tile/severity-tile";
// // import "./repository.scss";

// // import goData from "../../data/go.json";
// // import javaData from "../../data/java.json";
// // import nodejsData from "../../data/nodejs.json";
// // import pythonData from "../../data/python.json";

// // const RepositoryPage = () => {
// //   const repositories = [
// //     { name: "java-app", data: javaData },
// //     { name: "nodejs-todo-app", data: nodejsData },
// //     { name: "go-app", data: goData },
// //     { name: "py-app", data: pythonData },
// //   ];

// //   const [repoName, setRepoName] = useState(repositories[0].name);
// //   const [branchName] = useState("main");
// //   const [vulnerabilities, setVulnerabilities] = useState({
// //     high: [],
// //     medium: [],
// //     low: [],
// //   });
// //   const [selectedVulnerability, setSelectedVulnerability] = useState(null);
// //   const [aiSuggestions, setAiSuggestions] = useState([]);
// //   const [loadingSuggestions, setLoadingSuggestions] = useState(false);

// //   useEffect(() => {
// //     fetchRepoData();
// //   }, [repoName]);

// //   const fetchRepoData = () => {
// //     const selectedRepo = repositories.find((repo) => repo.name === repoName);

// //     let high = [];
// //     let medium = [];
// //     let low = [];

// //     selectedRepo?.data?.Results?.forEach((result) => {
// //       result.Vulnerabilities?.forEach((vuln) => {
// //         const vulnData = {
// //           name: vuln.VulnerabilityID || "Unknown",
// //           description: vuln.Description || "No description",
// //           foundInVersion: vuln.PkgName || "Unknown",
// //           solution: vuln.FixedVersion || "-",
// //           severity: vuln.Severity || "Unknown",
// //         };

// //         if (vuln.Severity === "HIGH") {
// //           high.push(vulnData);
// //         } else if (vuln.Severity === "MEDIUM") {
// //           medium.push(vulnData);
// //         } else {
// //           low.push(vulnData);
// //         }
// //       });
// //     });

// //     setVulnerabilities({ high, medium, low });
// //   };

// //   const handleRepoChange = (e) => {
// //     setRepoName(e.target.value);
// //   };

// //   const handleAskAI = () => {
// //     setLoadingSuggestions(true);
// //     setAiSuggestions([]);

// //     // Simulate API Call
// //     setTimeout(() => {
// //       setAiSuggestions([
// //         "Ensure input validation at all layers.",
// //         "Consider using a WAF (Web Application Firewall).",
// //         "Regularly update third-party libraries.",
// //       ]);
// //       setLoadingSuggestions(false);
// //     }, 1500);
// //   };

// //   const allVulnerabilities = [
// //     ...vulnerabilities.high.map((item) => ({ ...item, severity: "High" })),
// //     ...vulnerabilities.medium.map((item) => ({ ...item, severity: "Medium" })),
// //     ...vulnerabilities.low.map((item) => ({ ...item, severity: "Low" })),
// //   ];

// //   return (
// //     <div className="repo-dashboard">
// //       <div className="repo-header">
// //         <h1>
// //           {repoName}
// //           <select
// //             value={repoName}
// //             onChange={handleRepoChange}
// //             className="repo-dropdown"
// //           >
// //             {repositories.map((repo) => (
// //               <option key={repo.name} value={repo.name}>
// //                 {repo.name}
// //               </option>
// //             ))}
// //           </select>
// //         </h1>
// //         <span className="branch-name">Branch: {branchName}</span>
// //       </div>

// //       <div className="severity-tiles">
// //         <SeverityTile
// //           title="High"
// //           count={vulnerabilities.high.length}
// //           color="var(--color-error)"
// //         />
// //         <SeverityTile
// //           title="Medium"
// //           count={vulnerabilities.medium.length}
// //           color="var(--color-warning)"
// //         />
// //         <SeverityTile
// //           title="Low"
// //           count={vulnerabilities.low.length}
// //           color="var(--color-success)"
// //         />
// //       </div>

// //       <div className="vulnerability-table">
// //         <h3>Vulnerabilities</h3>
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Severity</th>
// //               <th>Name</th>
// //               <th>Found in Package</th>
// //               <th>Solution</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {allVulnerabilities.length === 0 ? (
// //               <tr>
// //                 <td colSpan="4" style={{ textAlign: "center" }}>
// //                   No vulnerabilities found
// //                 </td>
// //               </tr>
// //             ) : (
// //               allVulnerabilities.map((vuln, index) => (
// //                 <tr
// //                   key={index}
// //                   onClick={() => {
// //                     setSelectedVulnerability(vuln);
// //                     setAiSuggestions([]);
// //                   }}
// //                   style={{ cursor: "pointer" }}
// //                 >
// //                   <td>{vuln.severity}</td>
// //                   <td>{vuln.name}</td>
// //                   <td>{vuln.foundInVersion}</td>
// //                   <td>{vuln.solution !== "-" ? vuln.solution : "-"}</td>
// //                 </tr>
// //               ))
// //             )}
// //           </tbody>
// //         </table>
// //       </div>

// //       {selectedVulnerability && (
// //         <div
// //           className="modal-overlay"
// //           onClick={() => setSelectedVulnerability(null)}
// //         >
// //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// //             <h2>{selectedVulnerability.name}</h2>
// //             <p>
// //               <strong>Severity:</strong> {selectedVulnerability.severity}
// //             </p>
// //             <p>
// //               <strong>Found in Package:</strong>{" "}
// //               {selectedVulnerability.foundInVersion}
// //             </p>
// //             <p>
// //               <strong>Solution:</strong> {selectedVulnerability.solution}
// //             </p>
// //             <p>
// //               <strong>Description:</strong> {selectedVulnerability.description}
// //             </p>

// //             <button onClick={handleAskAI} style={{ marginRight: "10px" }}>
// //               Ask AI
// //             </button>
// //             <button onClick={() => setSelectedVulnerability(null)}>
// //               Close
// //             </button>

// //             {loadingSuggestions && <p>Loading AI suggestions...</p>}

// //             {aiSuggestions.length > 0 && (
// //               <div className="ai-suggestions">
// //                 <h4>AI Suggestions:</h4>
// //                 <ul>
// //                   {aiSuggestions.map((suggestion, idx) => (
// //                     <li key={idx}>{suggestion}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default RepositoryPage;

// import React, { useEffect, useState } from "react";
// import SeverityTile from "../../components/severity-tile/severity-tile";
// import "./repository.scss";

// import goData from "../../data/go.json";
// import javaData from "../../data/java.json";
// import nodejsData from "../../data/nodejs.json";
// import pythonData from "../../data/python.json";

// const RepositoryPage = () => {
//   const repositories = [
//     { name: "java-app", data: javaData },
//     { name: "nodejs-todo-app", data: nodejsData },
//     { name: "go-app", data: goData },
//     { name: "py-app", data: pythonData },
//   ];

//   const [repoName, setRepoName] = useState(repositories[0].name);
//   const [branchName] = useState("main");
//   const [vulnerabilities, setVulnerabilities] = useState({
//     high: [],
//     medium: [],
//     low: [],
//   });
//   const [selectedVulnerability, setSelectedVulnerability] = useState(null);
//   const [aiSuggestions, setAiSuggestions] = useState([]);
//   const [loadingSuggestions, setLoadingSuggestions] = useState(false);

//   useEffect(() => {
//     fetchRepoData();
//   }, [repoName]);

//   const fetchRepoData = () => {
//     const selectedRepo = repositories.find((repo) => repo.name === repoName);

//     let high = [];
//     let medium = [];
//     let low = [];

//     selectedRepo?.data?.Results?.forEach((result) => {
//       result.Vulnerabilities?.forEach((vuln) => {
//         const vulnData = {
//           name: vuln.VulnerabilityID || "Unknown",
//           description: vuln.Description || "No description",
//           foundInVersion: vuln.PkgName || "Unknown",
//           solution: vuln.FixedVersion || "-",
//           severity: vuln.Severity || "Unknown",
//           primaryURL: vuln.PrimaryURL || null,
//         };

//         if (vuln.Severity === "HIGH") {
//           high.push(vulnData);
//         } else if (vuln.Severity === "MEDIUM") {
//           medium.push(vulnData);
//         } else {
//           low.push(vulnData);
//         }
//       });
//     });

//     setVulnerabilities({ high, medium, low });
//   };

//   const handleRepoChange = (e) => {
//     setRepoName(e.target.value);
//   };

//   const handleAskAI = () => {
//     setLoadingSuggestions(true);
//     setAiSuggestions([]);

//     // Simulate API Call
//     setTimeout(() => {
//       setAiSuggestions([
//         "Ensure input validation at all layers.",
//         "Consider using a WAF (Web Application Firewall).",
//         "Regularly update third-party libraries.",
//       ]);
//       setLoadingSuggestions(false);
//     }, 1500);
//   };

//   const allVulnerabilities = [
//     ...vulnerabilities.high.map((item) => ({ ...item, severity: "High" })),
//     ...vulnerabilities.medium.map((item) => ({ ...item, severity: "Medium" })),
//     ...vulnerabilities.low.map((item) => ({ ...item, severity: "Low" })),
//   ];

//   return (
//     <div className="repo-dashboard">
//       <div className="repo-header">
//         <h1>
//           {repoName}
//           <select
//             value={repoName}
//             onChange={handleRepoChange}
//             className="repo-dropdown"
//           >
//             {repositories.map((repo) => (
//               <option key={repo.name} value={repo.name}>
//                 {repo.name}
//               </option>
//             ))}
//           </select>
//         </h1>
//         <span className="branch-name">Branch: {branchName}</span>
//       </div>

//       <div className="severity-tiles">
//         <SeverityTile
//           title="High"
//           count={vulnerabilities.high.length}
//           color="var(--color-error)"
//         />
//         <SeverityTile
//           title="Medium"
//           count={vulnerabilities.medium.length}
//           color="var(--color-warning)"
//         />
//         <SeverityTile
//           title="Low"
//           count={vulnerabilities.low.length}
//           color="var(--color-success)"
//         />
//       </div>

//       <div className="vulnerability-table">
//         <h3>Vulnerabilities</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Severity</th>
//               <th>Name (Click to Open)</th>
//               <th>Found in Package</th>
//               <th>Solution</th>
//             </tr>
//           </thead>
//           <tbody>
//             {allVulnerabilities.length === 0 ? (
//               <tr>
//                 <td colSpan="4" style={{ textAlign: "center" }}>
//                   No vulnerabilities found
//                 </td>
//               </tr>
//             ) : (
//               allVulnerabilities.map((vuln, index) => (
//                 <tr
//                   key={index}
//                   onClick={() => {
//                     setSelectedVulnerability(vuln);
//                     setAiSuggestions([]);
//                   }}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <td>{vuln.severity}</td>
//                   <td>
//                     {vuln.primaryURL ? (
//                       <a
//                         href={vuln.primaryURL}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{
//                           color: "#0e639c",
//                           textDecoration: "underline",
//                         }}
//                         onClick={(e) => e.stopPropagation()} // Prevent modal open on link click
//                       >
//                         {vuln.name}
//                       </a>
//                     ) : (
//                       vuln.name
//                     )}
//                   </td>
//                   <td>{vuln.foundInVersion}</td>
//                   <td>{vuln.solution !== "-" ? vuln.solution : "-"}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {selectedVulnerability && (
//         <div
//           className="modal-overlay"
//           onClick={() => setSelectedVulnerability(null)}
//         >
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <h2>{selectedVulnerability.name}</h2>
//             <p>
//               <strong>Severity:</strong> {selectedVulnerability.severity}
//             </p>
//             <p>
//               <strong>Found in Package:</strong>{" "}
//               {selectedVulnerability.foundInVersion}
//             </p>
//             <p>
//               <strong>Solution:</strong> {selectedVulnerability.solution}
//             </p>
//             <p>
//               <strong>Description:</strong> {selectedVulnerability.description}
//             </p>

//             {selectedVulnerability.primaryURL && (
//               <p>
//                 <strong>More Info: </strong>
//                 <a
//                   href={selectedVulnerability.primaryURL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{ color: "blue", textDecoration: "underline" }}
//                 >
//                   {selectedVulnerability.primaryURL}
//                 </a>
//               </p>
//             )}

//             <button onClick={handleAskAI} style={{ marginRight: "10px" }}>
//               Ask AI
//             </button>
//             <button onClick={() => setSelectedVulnerability(null)}>
//               Close
//             </button>

//             {loadingSuggestions && <p>Loading AI suggestions...</p>}

//             {aiSuggestions.length > 0 && (
//               <div className="ai-suggestions">
//                 <h4>AI Suggestions:</h4>
//                 <ul>
//                   {aiSuggestions.map((suggestion, idx) => (
//                     <li key={idx}>{suggestion}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RepositoryPage;

import React, { useEffect, useState } from "react";
import SeverityTile from "../../components/severity-tile/severity-tile";
import "./repository.scss";

import goData from "../../data/go.json";
import javaData from "../../data/java.json";
import nodejsData from "../../data/nodejs.json";
import pythonData from "../../data/python.json";

const RepositoryPage = () => {
  const repositories = [
    { name: "java-app", data: javaData },
    { name: "nodejs-todo-app", data: nodejsData },
    { name: "go-app", data: goData },
    { name: "py-app", data: pythonData },
  ];

  const [repoName, setRepoName] = useState(repositories[0].name);
  const [branchName] = useState("main");
  const [vulnerabilities, setVulnerabilities] = useState({
    high: [],
    medium: [],
    low: [],
  });
  const [selectedVulnerability, setSelectedVulnerability] = useState(null);
  const [stream, setStream] = useState("");
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);

  const chatHistory = [
    {
      role: "user",
      content: "What are common vulnerabilities in software packages?",
    },
    {
      role: "assistant",
      content:
        "Common vulnerabilities include input validation flaws, memory corruption, and outdated libraries.",
    },
  ];

  const userPrompt =
    "Analyze this vulnerability and suggest detailed remediation steps.";

  useEffect(() => {
    fetchRepoData();
  }, [repoName]);

  const fetchRepoData = () => {
    const selectedRepo = repositories.find((repo) => repo.name === repoName);

    let high = [];
    let medium = [];
    let low = [];

    selectedRepo?.data?.Results?.forEach((result) => {
      result.Vulnerabilities?.forEach((vuln) => {
        const vulnData = {
          name: vuln.VulnerabilityID || "Unknown",
          description: vuln.Description || "No description",
          foundInVersion: vuln.PkgName || "Unknown",
          solution: vuln.FixedVersion || "-",
          severity: vuln.Severity || "Unknown",
          primaryURL: vuln.PrimaryURL || null,
          InstalledVersion: vuln.InstalledVersion || "Unknown",
        };

        if (vuln.Severity === "HIGH") {
          high.push(vulnData);
        } else if (vuln.Severity === "MEDIUM") {
          medium.push(vulnData);
        } else {
          low.push(vulnData);
        }
      });
    });

    setVulnerabilities({ high, medium, low });
  };

  const handleRepoChange = (e) => {
    setRepoName(e.target.value);
  };

  const handleAskAI = async () => {
    setLoadingSuggestions(true);
    setStream("");

    const selectedVuln = {
      VulnerabilityID: selectedVulnerability.name,
      PkgName: selectedVulnerability.foundInVersion,
      InstalledVersion: selectedVulnerability.InstalledVersion,
      Severity: selectedVulnerability.severity,
      Title: selectedVulnerability.name,
      Description: selectedVulnerability.description,
    };

    const res = await fetch("http://172.17.0.2:5000/stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vulnerability: selectedVuln,
        history: chatHistory,
        prompt: userPrompt,
      }),
    });

    if (!res.body) return;

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunk = decoder.decode(value);
      setStream((prev) => prev + chunk);
    }

    setLoadingSuggestions(false);
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
            {repositories.map((repo) => (
              <option key={repo.name} value={repo.name}>
                {repo.name}
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
              <th>Name (Click to Open)</th>
              <th>Found in Package</th>
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
                <tr
                  key={index}
                  onClick={() => {
                    setSelectedVulnerability(vuln);
                    setStream("");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <td>{vuln.severity}</td>
                  <td>
                    {vuln.primaryURL ? (
                      <a
                        href={vuln.primaryURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#0e639c",
                          textDecoration: "underline",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {vuln.name}
                      </a>
                    ) : (
                      vuln.name
                    )}
                  </td>
                  <td>{vuln.foundInVersion}</td>
                  <td>{vuln.solution !== "-" ? vuln.solution : "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedVulnerability && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedVulnerability(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedVulnerability.name}</h2>
            <p>
              <strong>Severity:</strong> {selectedVulnerability.severity}
            </p>
            <p>
              <strong>Found in Package:</strong>{" "}
              {selectedVulnerability.foundInVersion}
            </p>
            <p>
              <strong>Solution:</strong> {selectedVulnerability.solution}
            </p>
            <p>
              <strong>Description:</strong> {selectedVulnerability.description}
            </p>

            {selectedVulnerability.primaryURL && (
              <p>
                <strong>More Info: </strong>
                <a
                  href={selectedVulnerability.primaryURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  {selectedVulnerability.primaryURL}
                </a>
              </p>
            )}

            <button
              onClick={handleAskAI}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
              style={{ marginRight: "10px" }}
            >
              Ask AI
            </button>
            <button onClick={() => setSelectedVulnerability(null)}>
              Close
            </button>

            <div className="mt-4 p-4 bg-gray-100 rounded h-60 overflow-auto whitespace-pre-wrap">
              {/* {loadingSuggestions ? "" : stream || ""} */}
              {stream}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RepositoryPage;

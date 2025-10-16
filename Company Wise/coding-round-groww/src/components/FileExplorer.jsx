import React, { useEffect, useMemo, useState } from "react";
import "./FileExplorer.css";

/*
CSS: Issue - Done
Bugs: 1. All folder of same heirarchy are being opened - Done

- Features to consider:
// Adding / Deleting Folder

*/

export default function FileExplorer({ folderData }) {
  const [show, setShow] = useState({});

  const handleClick = (item) => {
    if (item.children.length > 0) {
      // If it has children, then only it makes sense to store
      setShow((prevState) => {
        return {
          ...prevState,
          [item.id]: show[item.id] === 1 ? 0 : 1, // O indicating closed and 1 indicating opened
        };
      });
    }
  };

  const sortedFolderData = useMemo(() => {
    let temp = [...folderData];
    temp.sort((a, b) => {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    });
    return temp;
  }, [folderData]);

  const isItemOpened = (item) => {
    const res = show[item.id] ? show[item.id] === 1 : false;
    debugger;
    return res;
  };

  return (
    <div className="container">
      {sortedFolderData.map((item) => (
        <React.Fragment key={item.id}>
          <h5 className="item" onClick={() => handleClick(item)}>
            {item.children ? "📁" : "🗄️"} {item.name}
          </h5>
          {show[item.id] === 1 && item.children.length > 0 && (
            <FileExplorer folderData={item.children} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

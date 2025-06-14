import React from "react";
import "./app-table.scss";

const AppTable = ({ data = [], columns = [] }) => {
  return (
    <div className="app-table">
      <div className="app-table-header app-table-row">
        {columns.map((col) => (
          <div key={col.key} className="app-table-col app-table-header-col">
            {col.header}
          </div>
        ))}
      </div>
      <div className="app-table-body">
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="app-table-row">
            {columns.map((col) => (
              <div key={col.key} className="app-table-col">
                {row[col.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppTable;

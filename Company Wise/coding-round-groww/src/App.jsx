import { useState } from "react";
import "./App.css";
import FileExplorer from "./components/FileExplorer";
import { data } from "./dummy-data";

/*
Flow: 

 - Render files / folders based on the children (Signifier) from dummy data
 - While rendering, it should be sorted manner.(which needed later)
 - Aria Label Tags are Proper so assestive technologies is followed

*/

function App() {
  return (
    <div className="container-lhs">
      <FileExplorer folderData={data} />
    </div>
  );
}

export default App;

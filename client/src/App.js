import React, { useState } from "react";
import "./App.css";
import IssueList from "./components/IssueList";
import IssueForm from "./components/IssueForm";

const App = () => {
  const [issues, setIssues] = useState([]);

  const handleCreate = (newIssue) => {
    setIssues([...issues, newIssue]);
  };

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <IssueForm onCreate={handleCreate} />
      <IssueList issues={issues} />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import IssueItem from "./IssueItem";

const IssueList = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch("/issues")
      .then((response) => response.json())
      .then((data) => setIssues(data))
      .catch((error) => console.error("Error fetching issues:", error));
  }, []);

  return (
    <div>
      <h2>Issue List</h2>
      <ul>
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </ul>
    </div>
  );
};

export default IssueList;

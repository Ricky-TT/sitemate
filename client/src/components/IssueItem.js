import React from "react";

const IssueItem = ({ issue }) => {
  return (
    <li>
      <h3>{issue.title}</h3>
      <p>{issue.description}</p>
    </li>
  );
};

export default IssueItem;

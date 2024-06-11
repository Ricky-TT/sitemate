const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

let issues = [
  { id: 1, title: "Login Issue", description: "Can't log in on Firefox" },
  { id: 2, title: "UI Bug", description: "Button misaligned on the dashboard" },
];

app.get("/", (req, res) => {
  res.send("Welcome to the Issues API");
});

app.get("/issues", (req, res) => {
  res.status(200).json(issues);
});

app.get("/issues/:id", (req, res) => {
  const issue = issues.find((i) => i.id === parseInt(req.params.id));
  if (!issue) {
    return res.status(404).send("Issue not found.");
  }
  res.json(issue);
});

app.post("/issues", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).send("Title and description are required.");
  }
  const newIssue = {
    id: issues.length + 1,
    title: title,
    description: description,
  };
  issues.push(newIssue);
  res.status(201).json(newIssue);
});

app.put("/issues/:id", (req, res) => {
  const issue = issues.find((i) => i.id === parseInt(req.params.id));
  if (!issue) {
    return res.status(404).send("Issue not found.");
  }
  const { title, description } = req.body;
  if (title) issue.title = title;
  if (description) issue.description = description;
  res.json(issue);
});

app.delete("/issues/:id", (req, res) => {
  const issueIndex = issues.findIndex((i) => i.id === parseInt(req.params.id));
  if (issueIndex === -1) {
    return res.status(404).send("Issue not found.");
  }
  issues.splice(issueIndex, 1);
  res.status(204).send();
});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

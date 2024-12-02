const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

const tasks = [
  {
    id: 1,
    text: "Buy groceries",
    completed: false,
    date: null,
    reminder: false,
    repeat: false,
    priority: "Medium",
  },
  {
    id: 2,
    text: "Finish project report",
    completed: false,
    important: true,
    date: null,
    reminder: false,
    repeat: false,
    priority: "High",
  },
  {
    id: 3,
    text: "Call the bank",
    completed: false,
    date: null,
    reminder: false,
    repeat: false,
    priority: "Low",
  },
  {
    id: 4,
    text: "Attend meeting with the client",
    completed: false,
    date: null,
    reminder: true,
    repeat: false,
    priority: "High",
  },
  {
    id: 5,
    text: "Write blog post",
    completed: false,
    date: null,
    reminder: false,
    repeat: true,
    priority: "Medium",
  },
];

const completedTasks = [
  {
    id: 4,
    text: "Read a book",
    completed: true,
    date: null,
    reminder: false,
    repeat: false,
    priority: "Medium",
  },
];

app.get("/api/tasks", (req, res) => {
  res.json({ tasks, completedTasks });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

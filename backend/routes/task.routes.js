const express = require("express");
const {
  addTask,
  getAllTasks,
  updateTask,
  deleteTask,
  getSingleTask,
  markAsDone,
} = require("../controllers/task.controller");
const taskRouter = express.Router();

taskRouter.post("/create", addTask);
taskRouter.get("/all", getAllTasks);
taskRouter.get("/single/:id", getSingleTask);
taskRouter.patch("/done/:id", markAsDone);
taskRouter.patch("/update/:id", updateTask);
taskRouter.delete("/delete/:id", deleteTask);
module.exports = taskRouter;

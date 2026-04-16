const Task = require("../models/tasks.model");

const addTask = async (req, res) => {
  const { title, description } = req.body;
  await Task.create({ title, description });
  res.status(201).json({
    message: "Task added successfully",
  });
};

const getAllTasks = async (req, res) => {
  const tasks = await Task.find().select("-__v");
  res.status(200).json({
    data: tasks,
  });
};

const updateTask = async (req, res) => {
  const id = req.params.id;
  await Task.findByIdAndUpdate(id, req.body);
  res.status(200).json({
    message: "Task updated successfully",
  });
};

const getSingleTask = async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id).select("-__v");
  res.status(200).json({
    data: task,
  });
};

const markAsDone = async (req, res) => {
  const id = req.params.id;
  await Task.findByIdAndUpdate(id, { isDone: true });
  res.status(200).json({
    message: "Task completed",
  });
};

const deleteTask = async (req, res) => {
  const id = req.params.id;
  await Task.findByIdAndDelete(id);
  res.status(200).json({
    message: "Task deleted successfully",
  });
};

module.exports = {
  addTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
  markAsDone,
};

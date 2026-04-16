const express = require("express");

const taskRouter = require("./routes/task.routes");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/tasks", taskRouter);

module.exports = app;

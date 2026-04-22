require("dotenv").config();
const express = require("express");
const cors = require("cors");
const taskRouter = require("./routes/task.routes");
const errorHandler = require("./errors/global-error-handler");
const ApiError = require("./errors/api-error");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/tasks", taskRouter);

app.all("/{*splat}", (req, res, next) => {
  throw ApiError.notFound(`Route ${req.method} ${req.originalUrl} not found`);
});

app.use(errorHandler);

module.exports = app;

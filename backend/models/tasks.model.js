const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, `{PATH} is required`],
    minlength: [3, `{PATH} should be minimum of {MINLENGTH} characters`],
    maxlength: [15, `{PATH} should be maximum of {MAXLENGTH} characters`],
  },
  description: {
    type: String,
    required: [true, `{PATH} is required`],
    minlength: [3, `{PATH} should be minimum of {MINLENGTH} characters`],
    maxlength: [40, `{PATH} should be maximum of {MAXLENGTH} characters`],
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("task", taskSchema);

module.exports = Task;

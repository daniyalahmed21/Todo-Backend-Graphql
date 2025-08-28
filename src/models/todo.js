import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
});

const Todo = new mongoose.model("Todo", todoSchema);
export default Todo;

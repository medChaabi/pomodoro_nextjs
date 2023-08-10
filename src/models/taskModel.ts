import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  note: String,
  user_id: String,
});

const Task = mongoose.models.tasks || mongoose.model("tasks", taskSchema);
export default Task;

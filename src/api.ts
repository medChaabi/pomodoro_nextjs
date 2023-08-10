import ITask from "@/interfaces/ITask";
import axios from "axios";
import IUser from "./interfaces/IUser ";

// get all tasks
export const getAllTasks = async (): Promise<ITask[]> => {
  const res = await axios.get("/api/tasks");
  return res.data.Tasks;
};
// update task
export const updateTask = async (task: ITask): Promise<ITask> => {
  return await axios.put(`/api/tasks/${task?._id}`, task);
};
// delete task
export const deleteTask = async (id: string): Promise<ITask> => {
  return await axios.delete(`/api/tasks?id=${id}`);
};
// add task
export const addTask = async (task: ITask): Promise<ITask> => {
  return await axios.post("/api/tasks", task);
};

//
export const login = async (user: IUser): Promise<IUser> => {
  return await axios.post("/api/users/login", user);
};

//
export const signUp = async (user: IUser): Promise<IUser> => {
  return await axios.post("/api/users/signup", user);
};

//
export const logOut = async () => {
  return await axios.get("/api/users/logout");
};

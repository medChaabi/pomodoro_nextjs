import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect("mongodb://localhost:27017/pomodoro");
    const connection = mongoose.connection;
  } catch (error) {
    console.log(error);
  }
}

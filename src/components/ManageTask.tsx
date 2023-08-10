"use client";
import React from "react";
import {  TaskList, AddNTask } from "@/components";
import { getAllTasks } from "@/api";
import ITask from "@/interfaces/ITask";
import { ThemeContext } from "@/helpers/context/ThemeContext";

const AddTask = () => {
  const [tasks, setTasks] = React.useState<ITask[]>([]);
  const { state, dispatch } = React.useContext(ThemeContext);

  React.useEffect(() => {
    const getTasks = async () => {
      setTasks(await getAllTasks());
    };
    getTasks();
  }, [state.reload]);


  return (
    <>
      <div>
        <AddNTask />
        <TaskList tasks={tasks} />
      </div>
    </>
  );
};

export default AddTask;

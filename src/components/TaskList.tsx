import ITask from "@/interfaces/ITask";
import React from "react";
import { Task } from "@/components";

interface TaskListProps {
  tasks: ITask[];
}
const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table text-xl">
        <thead className="text-xl">
          <tr >
            <th>Task</th>
            <th>Note</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-xl">
          {tasks.map((task) => (
            <Task key={task._id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;

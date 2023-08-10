import { deleteTask, updateTask } from "@/api";
import { ThemeContext } from "@/helpers/context/ThemeContext";
import { TaskModal } from "@/components";
import ITask from "@/interfaces/ITask";
import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const { state, dispatch } = React.useContext(ThemeContext);
  const [openEdit, setOpenEdit] = React.useState(false);

  const onDelete = async (id: string) => {
    await deleteTask(id);
    dispatch({ type: "Realod" });
  };
  const [taskToEdit, setTaskToEdit] = React.useState<ITask>({
    title: "",
    note: "",
  });

  const showEdit = (data: ITask) => {
    setTaskToEdit(data);
    console.log(taskToEdit);
    setOpenEdit(!openEdit);
  };

  const onEdit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await updateTask(taskToEdit);
    setOpenEdit(!openEdit);
    dispatch({ type: "Realod" });
  };

  return (
    <>
      <tr>
        <th>{task.title}</th>
        <td>{task.note}</td>
        <td>
          <div className="flex gap-5">
            <FiEdit size={24} onClick={() => showEdit(task)} />
            <FiTrash2
              size={24}
              onClick={() => {
                onDelete(task._id);
              }}
            />
          </div>
        </td>
      </tr>

      <TaskModal open={openEdit} setOpen={setOpenEdit}>
        <form onSubmit={onEdit}>
          <h3 className="font-bold text-xl mb-2">Add Task</h3>
          <input
            type="text"
            className="input input-bordered w-full mb-2"
            placeholder="Task Title"
            value={taskToEdit?.title}
            onChange={(e) =>
              setTaskToEdit({ ...taskToEdit, title: e.target.value })
            }
          />
          <input
            type="text"
            className="input input-bordered w-full mb-2"
            placeholder="Task note"
            value={taskToEdit?.note}
            onChange={(e) =>
              setTaskToEdit({ ...taskToEdit, note: e.target.value })
            }
          />
          <button className="btn btn-primary" type="submit">
            update
          </button>
        </form>
      </TaskModal>
    </>
  );
};

export default Task;

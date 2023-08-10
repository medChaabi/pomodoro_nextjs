import React from "react";
import { TaskModal } from "@/components";
import ITask from "@/interfaces/ITask";
import { addTask } from "@/api";
import { ThemeContext } from "@/helpers/context/ThemeContext";
import { AiOutlinePlus } from "react-icons/ai";

const AddNTask = () => {
  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = React.useContext(ThemeContext);

  const [task, setTask] = React.useState<ITask>({
    title: "",
    note: "",
  });

  const onAdd: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTask(task);
    dispatch({ type: "Realod" });
    setOpen(!open);
  };

  return (
    <>	
      <button className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-2xl font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
 onClick={() => setOpen(true)}>
        <AiOutlinePlus size={40} />
      </button>
      <TaskModal open={open} setOpen={setOpen}>
        <form onSubmit={onAdd}>
          <h3 className="font-bold text-xl mb-2">Add Task</h3>
          <input
            type="text"
            className="input input-bordered w-full mb-2"
            placeholder="Task Title"
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
          <input
            type="text"
            className="input input-bordered w-full mb-2"
            placeholder="Task note"
            onChange={(e) => setTask({ ...task, note: e.target.value })}
          />
          <button className="btn btn-primary" type="submit">
            save
          </button>
        </form>
      </TaskModal>
    </>
  );
};

export default AddNTask;

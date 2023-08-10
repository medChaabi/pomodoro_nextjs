import React from "react";

interface TaskModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children?: React.ReactNode;
}

const TaskModal: React.FC<TaskModalProps> = ({ open, setOpen, children }) => {
  return (
    <>
      <div className={`modal ${open ? "modal-open" : ""}`}>
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </>
  );
};
export default TaskModal;

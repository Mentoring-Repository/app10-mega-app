import { useState } from "react";

const TaskForm = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    depcricion: "",
    id: "",
  });

  const addTask = () => {
    setNewTask({ ...newTask, id: Number(tasks[tasks.length - 1].id + 1) });
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="d-flex flex-column p-3 border mb-5">
      <span>Tittle of task</span>
      <input
        className="form-control my-3"
        type="text"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <span>Depscricion of task</span>
      <input
        className="form-control my-3"
        type="text"
        value={newTask.depcricion}
        onChange={(e) => setNewTask({ ...newTask, depcricion: e.target.value })}
      />
      <button className="btn btn-success my-3" onClick={() => addTask()}>
        add new Task
      </button>
    </div>
  );
};

export default TaskForm;

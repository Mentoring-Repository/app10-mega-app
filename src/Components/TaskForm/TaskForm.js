import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from "../../features/taskSlice";

const TaskForm = () => {
  const [newTask, setNewTask] = useState({
    title: "",
    depcricion: "",
  });

  const dispatch = useDispatch()

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
      <button className="btn btn-success my-3" onClick={() => dispatch(addTask(newTask))}>
        add new Task
      </button>
    </div>
  );
};

export default TaskForm;

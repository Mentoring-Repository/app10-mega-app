import { useState } from "react";
import TaskForm from "../Components/TaskForm/TaskForm";
import TaskList from "../Components/TaskList/TaskList";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { title: "title1", depcricion: "dep1", id: "1" },
    { title: "title2", depcricion: "dep2", id: "2" },
    { title: "title3", depcricion: "dep3", id: "3" },
    { title: "title4", depcricion: "dep4", id: "4" },
    { title: "title5", depcricion: "dep5", id: "5" },
  ]);

  return (
    <div className=" d-flex flex-column p-5">
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TaskManager;

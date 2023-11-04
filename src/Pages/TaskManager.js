import TaskForm from "../Components/TaskForm/TaskForm";
import TaskList from "../Components/TaskList/TaskList";

const TaskManager = () => {


  return (
    <div className=" d-flex flex-column p-5">
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TaskManager;

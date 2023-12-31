import { useSelector, useDispatch } from 'react-redux'
import { completeTask } from '../../features/taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.value)
  const dispatch = useDispatch()

  return (
    <div className="d-flex ">
      {tasks.map((task) => (
        <div className="d-flex flex-column m-2 border p-3" key={task.id}>
          <span className="my-3 ">{task.title}</span>
          <p className="my-3">{task.depcricion}</p>
          <button
            className="btn btn-success my-3"
            onClick={() => dispatch(completeTask(task.id))}
          >
            Complete task
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

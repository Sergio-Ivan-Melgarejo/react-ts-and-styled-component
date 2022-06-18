// Components
import TaskCard from "../TaskCard/TaskCard";

// interface
import { Task } from "../../Interfaces/Task";
import { TaskListStyle } from "./TaskListStyle";

interface Props {
  tasks: Task[];
  deleteTask: (id:number) => void;
}

const TaskList = ( { tasks, deleteTask } : Props ) => {
  return (
    <TaskListStyle>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskCard data={task} deleteTask={deleteTask} />
        </div>
      ))}
    </TaskListStyle>
  );
};

export default TaskList;

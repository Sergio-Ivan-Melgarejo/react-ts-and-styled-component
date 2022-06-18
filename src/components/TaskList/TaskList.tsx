// Components
import TaskCard from "../TaskCard/TaskCard";

// interface
import { Task } from "../../Interfaces/Task";
import { TaskListStyle } from "./TaskListStyle";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

const relleno = 4;

const TaskList = ({ tasks, deleteTask }: Props) => {
  console.log(new Array(relleno - tasks.length))
  return (
    <TaskListStyle>
      {tasks.map((task) => (
        <div className="container" key={task.id}>
          <TaskCard data={task} deleteTask={deleteTask} />
        </div>
      ))}
      {
        relleno - tasks.length > 0 &&
      new Array(relleno - tasks.length).fill("relleno").map((task,index) => (
        <div key={`relleno-${index}`} className="container"></div>
      ))}
    </TaskListStyle>
  );
};

export default TaskList;

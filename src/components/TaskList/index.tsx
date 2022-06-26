// Components
import TaskCard from "../TaskCard";

// interface
import { Task } from "../../Interfaces/Task";
import { TaskListStyle } from "./TaskList";

interface Props {
  tasks: Array<Task>
  deleteTask: (id: number) => void
  editTask: (id:number,editedTask:Task) => void
  openCard: (data:Task) => void
}

const relleno = 4;

const TaskList = ({ tasks, deleteTask, editTask, openCard }: Props) => {
  console.log(new Array(relleno - tasks.length))
  return (
    <TaskListStyle>
      {tasks.map((task) => (
        <div className="container" key={task.id}>
          <TaskCard data={task} openCard={openCard} />
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

// Components
import TaskCard from "../TaskCard/TaskCard";

// interface
import { Task } from "../../Interfaces/Task";
import { TaskListStyle } from "./TaskListStyle";

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <TaskListStyle>
      {tasks.map((task) => (
        <TaskCard data={task} />
      ))}
    </TaskListStyle>
  );
};

export default TaskList;

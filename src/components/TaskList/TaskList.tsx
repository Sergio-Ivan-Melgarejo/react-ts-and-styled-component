// Components
import TaskCard from "../TaskCard/TaskCard";

// interface
import { Task } from "../Interfaces/Task";

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard data={task} />
      ))}
    </>
  );
};

export default TaskList;

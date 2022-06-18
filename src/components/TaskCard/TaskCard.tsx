// Components
import { useState } from "react";
import { Task } from "../../Interfaces/Task";
import { TaskCardStyle } from "./TaskCardStyles";

interface Props{
  data: Task;
  deleteTask: (id:number) => void;
}

const TaskCard = ( { data, deleteTask } : Props ) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((prev) => !prev);

  const { id, title, description } = data;

  const handleDelete = () => deleteTask(id)
  return (
    <TaskCardStyle className={open ? "open" : ""}>
      <div className="card" key={id} color="blue" onClick={handleClick}>
        <h3>{title}</h3>
        <span>{id}</span>
        {open && <p>{description}</p>}
      </div>
      <button className="Edit">Edit</button>
      <button onClick={handleDelete} className="Delete">Delete</button>
    </TaskCardStyle>
  )
}

export default TaskCard;

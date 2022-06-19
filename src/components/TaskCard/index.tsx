// Components
import { useState } from "react";
import { limitString } from "../../hooks/useLimitString";
import { Task } from "../../Interfaces/Task";
import { StylesContainer } from "./TaskCard";

interface Props{
  data: Task;
  deleteTask: (id:number) => void;
}

const TaskCard = ( { data, deleteTask } : Props ) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((prev) => !prev);
  const handleDelete = () => deleteTask(id)

  const { id, title, description } = data;
  const dataTime = new Date(id).toLocaleString() + " hr.";
  return (
    <StylesContainer className={open ? "open" : ""}>
      <div className="bg"></div>
      <div className="card" key={id} color="blue" onClick={handleClick}>
        {
          open 
          ? <h3>{title}</h3>
          : <p>{limitString({str:title,limit:30})}</p>
        }
        <span>{dataTime}</span>
        {
          open 
          ? <p>{description}</p>
          : <p>{limitString({str:description,limit:60})}</p>
        }
      </div>
      {
        open && 
        <>
          <button className="Edit">Edit</button>
          <button onClick={handleDelete} className="Delete">Delete</button>
        </>
      }
    </StylesContainer>
  )
}

export default TaskCard;

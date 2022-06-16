// Components
import { useState } from "react";
import { TaskCardStyle } from "./TaskCardStyles";

const TaskCard = ({data}:any) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(prev => !prev)
  
  const {id,title,decription} = data;
  return (
   <div className="relative hidden">
    <TaskCardStyle className={open ? "open" : ""} key={id} color="blue" onClick={handleClick}>
        <h3>{title}</h3>
        <span>{id}</span>
        {
          open && <p>{decription}</p>
        }
    </TaskCardStyle>
    <button className="Edit">
      Edit
    </button>
    <button className="Delete">
      Delete
    </button>
   </div>
  )
};

export default TaskCard;
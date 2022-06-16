// Components
import { useState } from "react";
import { TaskCardStyle } from "./TaskCardStyles";

const TaskCard = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((prev) => !prev);

  const { id, title, decription } = data;
  return (
    <TaskCardStyle className={open ? "open" : ""}>
      <div className="card" key={id} color="blue" onClick={handleClick}>
        <h3>{title}</h3>
        <span>{id}</span>
        {open && <p>{decription}</p>}
      </div>
      <button className="Edit">Edit</button>
      <button className="Delete">Delete</button>
    </TaskCardStyle>
  )
}

export default TaskCard;

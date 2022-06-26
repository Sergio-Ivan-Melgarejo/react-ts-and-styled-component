// Components
import { limitString } from "../../hooks/useLimitString";
import { Task } from "../../Interfaces/Task";
import { StylesContainer } from "./TaskCard";

interface Props{
  data: Task
  openCard: (data:Task) => void
}

const TaskCard = ( { data, openCard } : Props ) => {
  const handleClick = () => openCard(data)
  const { id, title, description } = data;
  const dataTime = new Date(id).toLocaleString() + " hr.";
  return (
    <StylesContainer onClick={handleClick}>
      <div className="card">
        <h3>{limitString({str:title,limit:30})}</h3>
        <span>{dataTime}</span>
        <p>{limitString({str:description,limit:60})}</p>
      </div>
    </StylesContainer>
  )
}

export default TaskCard;

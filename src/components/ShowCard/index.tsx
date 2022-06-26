import { useState } from "react";
import { Task } from "../../Interfaces/Task";
import { ShowCardStyle } from "./ShowCardStyle";

interface Props {
  dataCard: Task | null
  closeCard: () => void
}

const ShowCard = ({dataCard,closeCard}: Props) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(false)
    setTimeout(()=> {
      closeCard()
      setOpen(true)
    }, 500)
  }
  return (
    <ShowCardStyle open={open}>
      <div onClick={handleClick} className="bg"></div>
      <div onClick={handleClick} className="bg"></div>
        <form>
          <span>{dataCard?.id}</span>
          <h3>{dataCard?.title}</h3>
          <p>{dataCard?.description}</p>
        </form>
        <button onClick={handleClick}>X</button>
    </ShowCardStyle>
  );
};

export default ShowCard;

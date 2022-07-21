import React, { useState } from "react";
import { Task } from "../../Interfaces/Task";
import { ModalCardStyle } from "./ModalCardStyle";

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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <ModalCardStyle open={open}>
      <div onClick={handleClick} className="bg"></div>
      <div onClick={handleClick} className="bg"></div>
        <form onSubmit={handleSubmit}>
          <div>
            <span>{dataCard?.id}</span>
            <button className="close" onClick={handleClick}>X</button>
          </div>
          <h3>{dataCard?.title}</h3>
          <p>{dataCard?.content}</p>
          <div>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </form>
    </ModalCardStyle>
  );
};

export default ShowCard;

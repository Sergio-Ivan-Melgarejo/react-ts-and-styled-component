import { StylesContainer } from "./TaskForm";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Task } from "../../Interfaces/Task";

const initialState = {
  title: "",
  content: "",
};

interface Props {
  addNewTask: (task:Task) => void;
}

type handleTypeChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const TaskForm = ( {addNewTask} : Props ) => {
  const [task, setTask] = useState(initialState);
  const inputTitle = useRef<HTMLInputElement>(null);
  

  const handleChange = ({
    target,
  }: handleTypeChange) => {
    const { name, value } = target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = ( e : FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    addNewTask({...task, id: getCurentTimeTamp(), completed: false})
    setTask(initialState)
    inputTitle.current?.focus();
  }

  const getCurentTimeTamp = ():number => new Date().getTime();

  return (
    <StylesContainer onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <input
        onChange={handleChange}
        value={task.title}
        type="text"
        name="title"
        placeholder="write a title"
        autoFocus
        ref={inputTitle}
        required
        minLength={4}
      />
      <label htmlFor="title"></label>
      <textarea
        onChange={handleChange}
        value={task.content}
        name="content"
        placeholder="write a content"
        rows={3}
      />
      <button>
        <span>Save</span>
      </button>
    </StylesContainer>
  );
};

export default TaskForm;

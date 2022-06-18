import { Form } from "./TaskFormStyles";
import { AiOutlinePlus } from "react-icons/ai";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Task } from "../../Interfaces/Task";

const initialState = {
  title: "",
  description: "",
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
    <Form onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <input
        onChange={handleChange}
        value={task.title}
        type="text"
        name="title"
        placeholder="write a title"
        autoFocus
        ref={inputTitle}
      />
      <textarea
        onChange={handleChange}
        value={task.description}
        name="description"
        placeholder="write a description"
        rows={3}
      />
      <button>
        <span>Save</span>
        <AiOutlinePlus />
      </button>
    </Form>
  );
};

export default TaskForm;

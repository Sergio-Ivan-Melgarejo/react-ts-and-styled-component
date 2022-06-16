import { TaskFormStyle } from "./TaskFormStyles";
import { AiOutlinePlus } from "react-icons/ai"
import { useState } from "react";

const dataInitial = {
  title:"",
  description:""
}

const TaskForm = () => {
  const [task, setTask] = useState(dataInitial);
  return (
    <TaskFormStyle>
      <h2>Add Task</h2>
      <input type="text" name="title" placeholder="write a title" />
      <textarea name="description" placeholder="write a description" rows={3} />
      <button>
        <span>Save</span> 
        <AiOutlinePlus />
      </button>
    </TaskFormStyle>
  );
};

export default TaskForm;

import { useState } from 'react';

// components
import Nav from './components/Nav';
import TaskList from './components/TaskList';
import AppContainer from './components/AppContainer';
import Bg from './components/Bg';
import Main from './components/Main';
import TaskForm from './components/TaskForm';

// interfaces
import { Task } from './Interfaces/Task';
import ShowCard from './components/ShowCard';
interface AppProps {
  title?:string
}

const data = [
  {
    id:1,
    title: "Learn React",
    description: "Learn React",
    completed: false
  },
  {
    id:2,
    title: "Learn Typescript",
    description: "Learn Typescript",
    completed: false
  },
  {
    id:3,
    title: "Learn Styled Component",
    description: "Learn Styled Component",
    completed: false
  }
]

function App({ title }: AppProps) {
  const [tasks, setTasks] = useState<Task[]>(data);
  const addNewTask = (task:Task) => setTasks([...tasks, task]);
  const deleteTask = (id:number) => setTasks(tasks.filter((task) => task.id !== id))
  const editTask = (id:number, editedTask:Task) => setTasks(tasks.filter((task) => task.id !== id ? task : editedTask))

  const [show, setShow] = useState(false);
  const [dataCard, setDataCard] = useState<Task | null>(null);
  const openCard = (data:Task) => {
    setShow(true)
    setDataCard(data)
  }
  const closeCard = () => {
    setShow(false)
    setDataCard(null)
  }
  return (
    <AppContainer>
      <Bg />
      <Main>
        <Nav title={title} />
        <TaskForm addNewTask={addNewTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} openCard={openCard} />
        {
          show && <ShowCard dataCard={dataCard} closeCard={closeCard} />
        }
      </Main>
    </AppContainer>
  );
}

export default App;
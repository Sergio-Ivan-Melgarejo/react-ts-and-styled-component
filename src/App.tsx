import { useEffect, useState } from 'react';

// components
import Nav from './components/Nav';
import TaskList from './components/TaskList';
import AppContainer from './components/AppContainer';
import Bg from './components/Bg';
import Main from './components/Main';
import TaskForm from './components/TaskForm';

// interfaces
import { Task } from './Interfaces/Task';
import ShowCard from './components/ModalCard';
import getTasks from './services/getTasks';
interface AppProps {
  title?:string
}

function App({ title }: AppProps) {
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const addNewTask = (task:Task) => { if (tasks) setTasks([...tasks, task]) }
  const deleteTask = (id:number) => { if (tasks) setTasks(tasks.filter((task) => task.id !== id)) }
  const editTask = (id:number, editedTask:Task) => { if (tasks) setTasks(tasks.filter((task) => task.id !== id ? task : editedTask)) }

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

  useEffect(() => {
    getTasks()
    .then((res) => {
      console.log(res)
      if (!res?.error) setTasks(res)
    })
  }, []);
  
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
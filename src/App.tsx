import { useState } from 'react';

// components
import Nav from './components/Nav/Nav';
import TaskList from './components/TaskList/TaskList';
import Container from './components/GeneralComponents/Container';


// interfaces
import { Task } from './Interfaces/Task';

// Styles
import './App.css';
interface AppProps {
  title?:string
}

const data = [
  {
    id:1,
    title: "Learn React",
    decription: "Learn React",
    completed: false
  },
  {
    id:2,
    title: "Learn Typescript",
    decription: "Learn Typescript",
    completed: false
  },
  {
    id:3,
    title: "Learn Styled Component",
    decription: "Learn Styled Component",
    completed: false
  }
]

function App({ title }: AppProps) {
  const [tasks, setTasks] = useState<Task[]>(data)
  return (
    <Container >
      <Nav title={title} />
      {/* <header className="App-header"></header> */}
      <h1>
        {title && <h1>{title}</h1>}
      </h1>
      <main>
        <TaskList tasks={tasks} />
      </main>
    </Container>
  );
}

export default App;
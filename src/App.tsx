import { useState } from 'react';
import TaskCard from './components/TaskCard/TaskCard';
import './App.css';
import styled from 'styled-components';
import Nav from './components/Nav/Nav';

interface AppProps {
  title:string
}
interface Task {
  id:number,
  title:string,
  decription:string,
  completed:boolean
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
    <AppContainer >
      <Nav title={title} />

      {/* <header className="App-header">
       
      </header> */}
      <h1>
        {title}
      </h1>
      {
        tasks.map(task => (<TaskCard data={task} />))
      }
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`

`

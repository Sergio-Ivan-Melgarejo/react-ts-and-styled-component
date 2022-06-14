import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
interface AppProps {
  title:string
}

interface Task {
  id:number,
  title:string,
  decription:string,
  completed:boolean
}

function App({ title }: AppProps) {
  const [tasks, setTasks] = useState<Task[]>([
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
  ])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          {title}
        </h1>
      </header>
      {
        tasks.map(task => (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.decription}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;

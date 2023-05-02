import { v4 as uuidv4 } from 'uuid'
import { Header } from './Components/Header';
import styles from './App.module.css';
import { NewTask } from './Components/NewTask';
import { TasksInfos } from './Components/TasksInfos';
import { useState } from 'react';

type Tasks = {
  id: string;
  description: string;
  isCompleted: boolean
}

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  function addNewTask(newTaskDescription: string) {
    const newId = uuidv4();
    const newTask: Tasks = { id: newId, description: newTaskDescription, isCompleted: false}
    setTasks([...tasks, newTask]);
  }

  function completeTask(taskId: string) {
    console.log(`Tarefa ${taskId} completa!`);
  }


  return (
      <div className={styles.wrapper}>
        <Header />
        <NewTask onCreateNewTask={addNewTask}/>
        <TasksInfos
          onCompleteTask={completeTask}
          tasks={tasks}
        />
      </div>
  )
}

export default App

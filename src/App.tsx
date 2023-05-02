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
    setTasks((state) => { // state contém o estado mais atualizado
      return state.map((item) => {
        if(item.id === taskId) {
          return {
            ...item,
            isCompleted: !item.isCompleted
          }
        }
        return item;
      })
    })
  }

  function removeTask(taskId: string) {
    setTasks((state) => {
      return state.filter((item) => {
        return item.id !== taskId;
      })
    })
  }

  return (
      <div className={styles.wrapper}>
        <Header />
        <NewTask onCreateNewTask={addNewTask}/>
        <TasksInfos
          onCompleteTask={completeTask}
          onRemoveTask={removeTask}
          tasks={tasks}
        />
      </div>
  )
}

export default App

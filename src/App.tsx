import { v4 as uuidv4 } from 'uuid'
import { Header } from './Components/Header';
import styles from './App.module.css';
import { NewTask } from './Components/NewTask';
import { TaskType, TasksInfos } from './Components/TasksInfos';

const taskList: TaskType[] = [
  {
    id: uuidv4(),
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true
  },
  {
    id: uuidv4(),
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true
  }
]

function App() {
  return (
      <div className={styles.wrapper}>
        <Header />
        <NewTask />
        <TasksInfos 
          tasks={taskList}
        />
      </div>
  )
}

export default App
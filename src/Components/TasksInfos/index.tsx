import { Trash } from 'phosphor-react';
import styles from './TasksInfos.module.css';

export interface TaskType {
  id: string;
  description: string;
  isCompleted: boolean;
}

interface TasksProps {
  tasks: TaskType[];
}

export function TasksInfos({ tasks }: TasksProps) {
  console.log(tasks);
  return (
    <div className={styles.tasksContainer}>
      <div className={styles.infoHeader}>
        <div className={styles.tasksInfos}>
          <p className={styles.tasksCreatedText}>Tarefas criadas</p>
          <p className={styles.counter}>
            <span className={styles.counterText}>0</span>
          </p>
        </div>
        <div className={styles.tasksInfos}>
          <p className={styles.tasksDoneText}>Concluídas</p>
          <p className={styles.counter}>
            <span className={styles.counterText}>0</span>
          </p>
        </div>
      </div>
      {tasks.map((task) => {
        return (
          <li key={task.id} className={styles.list}>
          <input
            className={styles.taskCheckbox}
            type="checkbox"
          />
          <label>{task.description}</label>
          <button title="Deletar tarefa">
            <Trash size={20} />  
          </button>
          </li>
        )
      })} 
      
    </div>
  )
}

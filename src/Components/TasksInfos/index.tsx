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
  return (
    <div className={styles.info}>
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
    </div>
  )
}

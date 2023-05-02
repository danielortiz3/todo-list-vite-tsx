import { Trash } from 'phosphor-react';
import styles from './TasksInfos.module.css';
import ClipboardPng from '../../assets/Clipboard.png'
import Unchecked from '../../assets/unchecked.png'
import Checked from '../../assets/checked.svg'
import { FormEvent } from 'react';

export interface TaskType {
  id: string;
  description: string;
  isCompleted: boolean;
}

interface TasksProps {
  tasks: TaskType[];
  onCompleteTask: (taskId: string) => void;
  onRemoveTask: (taskId: string) => void;
}

export function TasksInfos({ tasks, onCompleteTask, onRemoveTask }: TasksProps) {
function handleCompletedChange(event: FormEvent<HTMLImageElement>, taskId: string): void {
  event.preventDefault();
  onCompleteTask(taskId);
}

function handleRemoveTask(taskId: string): void {
  onRemoveTask(taskId);
}

const tasksCreated = tasks.length;
const tasksCompleted = tasks.filter(task => task.isCompleted).length;

return (
  <div className={styles.info}>
    <div className={styles.infoHeader}>
      <div className={styles.tasksInfos}>
        <p className={styles.tasksCreatedText}>Tarefas criadas</p>
        <p className={styles.counter}>
          <span className={styles.counterText}>{tasksCreated}</span>
        </p>
      </div>
      <div className={styles.tasksInfos}>
        <p className={styles.tasksDoneText}>Concluídas</p>
        <p className={styles.counter}>
          <span className={styles.counterText}>{tasksCompleted} de {tasksCreated}</span>
        </p>
      </div>
    </div>
    {tasks.length ===0 ? (
      <div className={styles.emptyList}>
        <img
          className={styles.clipboard}
          src={ClipboardPng} 
          alt="Clipboard" 
        />
        <div className={styles.taskListText}>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    </div>
    ) : (
      <div className={styles.listContainer}>
        {tasks.map((task) => {
          return(
            <li key={task.id} className={styles.listItens}>
              <img
                className={styles.listCheckbox}
                src={task.isCompleted ? Checked : Unchecked}
                alt="Checkbox"
                onClick={(error) => handleCompletedChange(error, task.id)}
              />
              <label 
                className={styles.listDescription}
              >
                {task.description}
              </label>
              <button 
                title="Deletar tarefa"
                onClick={() => handleRemoveTask(task.id)}
              >
                <Trash size={20} />  
              </button>
            </li>
          )
        })}
      </div>
    )}
    
  </div>
)
}

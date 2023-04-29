import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';

export function NewTask(){
  return(
      <form className={styles.container}>
        <input
          className={styles.input}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit" className={styles.button}>
          Criar <PlusCircle size={20} />
        </button>
      </form>
  )
}
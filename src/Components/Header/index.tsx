import logoImg from '../../assets/Logo.png';
import styles from './Header.module.css';

export function Header() {
  return(
    <div className={styles.container}>
      <img 
        className={styles.imgLogo}
        src={logoImg}
        alt="Rocket logo" />
    </div>
  )
}
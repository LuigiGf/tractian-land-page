import { useState } from 'react'
import styles from './styles.module.scss'

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className={styles.navMain}>
        <a href="#" className={styles.logo}>
          <img src="./images/Logo-Tractian.svg" alt="Tractian" />
        </a>
        <div onClick={handleClick} className={isOpen === false ? styles.mobileMenu : styles.mobileMenuActive}>
          <div className={styles.first}></div>
          <div className={styles.second}></div>
          <div className={styles.third}></div>
        </div>
        <ul className={isOpen === false ? styles.navList : styles.navListActive}>
          <li><a href="#">Já é cliente?</a></li>
          <li><a href="#">Demonstração</a></li>
        </ul>
      </nav>
      <main className={styles.heroImage}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Monitoramento online e Gestão de Ativos</h1>
            <p>Preveja possíveis problemas e acabe com períodos de inatividade</p>
            <a href="#">Receba uma Demonstração</a>
          </div>
        </div>
      </main>
    </header>
  )
}
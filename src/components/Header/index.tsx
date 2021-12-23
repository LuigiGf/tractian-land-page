import { NavBar } from '../NavBar'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header>
      <NavBar />
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
import styles from './styles.module.scss'

export function StyledButton({ content }) {
  return <a href="#" className={styles.styledButton}>{content}</a>
}
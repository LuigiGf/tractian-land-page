import styles from './styles.module.scss'

export function Carousel() {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.items}>
        <div className={styles.item}><img src="./images/suzano-logo-1.png" alt="" /></div>
        <div className={styles.item}><img src="./images/embraer-logo.png" alt="" /></div>
        <div className={styles.item}><img src="./images/electrolux-logo.svg" alt="" /></div>
        <div className={styles.item}><img src="./images/air-liquide-2017.svg" alt="" /></div>
      </div>
    </div>
  )
}
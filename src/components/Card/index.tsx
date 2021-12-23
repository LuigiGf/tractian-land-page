import styles from './styles.module.scss'

type CardProps = {
  imageURL: string
  title: string
  bodyContent: string
}

export function Card(props: CardProps) {
  return (
    <div className={styles.cardContainer}>
      <a href="">
        <div className={styles.imageContainer}><img src={props.imageURL} alt={props.title} /></div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}><h3>{props.title}</h3></div>
          <div className={styles.cardBody}><p>{props.bodyContent}</p></div>
        </div>
      </a>
    </div>
  )
}
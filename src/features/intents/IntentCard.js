import styles from './IntentCard.module.css';

export function IntentCard(props) {
  const expressionsList = props.intent.trainingData.expressions.map(expression => {
    return <div key={expression.id} className={`${styles.expression} ${styles.bubble}`}>{expression.text}</div>
  })

  const selectedClass = props.selected ? styles.selectedCard : ''
  return (
    <div className={`${styles.card} ${selectedClass}`} onClick={() => props.handleClick(props.intent.id)}>
      <div className={styles.title}>{props.intent.name}</div>
      <div className={styles.description}>{props.intent.description}</div>
      <div className={styles.expressions}>{expressionsList}</div>
      <div className={styles.replies}>
        <div className={`${styles.reply} ${styles.bubble}`}>{props.intent.reply.text}</div>
      </div>
    </div>
  )
}

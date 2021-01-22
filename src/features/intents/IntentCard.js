import styles from './IntentCard.module.css';

export function IntentCard(props) {
  const expressionsList = props.intent.trainingData.expressions.map(expression => {
    return <div key={expression.id} className={styles.expression}>{expression.text}</div>
  })

  return (
    <div className={styles.card}>
      <div className={styles.title}>{props.intent.name}</div>
      <div className={styles.description}>{props.intent.description}</div>
      <div className={styles.expressions}>{expressionsList}</div>
      <div className={styles.reply}>{props.intent.reply.text}</div>
    </div>
  )
}

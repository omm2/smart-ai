import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Intents.module.css';
import { IntentCard } from './IntentCard';

export function Intents() {
  const intents = useSelector(state => state.intents.list)
  const [selectedIds, setSelectedIds] = useState([]);
  console.log(intents)

  const listItems = intents.map(intent => {
    return <IntentCard key={intent.id} intent={intent}/>
  })

  return (
    <div className="Page-wrapper">
      <h3 className={styles.header}>Please choose your Intents</h3>
      <sub className={styles.headerSub}>Below you can see the list with our pre-defined intends. Please chooose Intents important for your Application.</sub>
      <div className={styles.cards}>{listItems}</div>
    </div>
  )
}

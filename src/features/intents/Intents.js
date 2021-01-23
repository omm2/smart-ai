import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Intents.module.css';
import { IntentCard } from './IntentCard';

export function Intents() {
  const intents = useSelector(state => state.intents.list)
  const [selectedIds, setSelectedIds] = useState([]);

  function handleClick(id) {
    let ids
    if (selectedIds.includes(id)) {
      ids = selectedIds.filter(selectedId => selectedId !== id)
    } else {
      ids = [...selectedIds, id]
    }
    setSelectedIds(ids)
  }

  function selectAll() {
    setSelectedIds(intents.map(intent => intent.id))
  }

  function deselectAll() {
    setSelectedIds([])
  }

  const listItems = intents.map(intent => {
    return <IntentCard
      key={intent.id}
      handleClick={handleClick}
      intent={intent}
      selected={selectedIds.includes(intent.id)}
    />
  })

  return (
    <div>
      <header className={styles.headerWrapper}>
        <h3 className={styles.header}>Please choose your Intents</h3>
        <sub className={styles.headerSub}>Below you can see the list with our pretrained intents. Please select intents that you want to use in your AI bot.</sub>
      </header>
      <div className={styles.info}>
        <div>Items Selected: <span data-testid='counter'>{selectedIds.length}</span></div>
        <div className={styles.buttonsWrapper}>
          {(selectedIds.length > 0) && <button onClick={deselectAll}>Deselect All</button>}
          <button onClick={selectAll}>Select All</button>
        </div>
      </div>
      <div className={styles.cards}>{listItems}</div>
    </div>
  )
}

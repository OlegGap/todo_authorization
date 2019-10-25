import React from 'react';
import Card from '../Card/Card';
import styles from './List.module.css';
import AddCard from '../AddCard/AddCardContainer';

const ListContainer = ({ listName, listCards }) => (
  <div className={styles.listContainer}>
    <h2 className={styles.listTitle}>{listName}</h2>
    <ul className={styles.list}>
      {listCards.map(card => (
        <Card key={card.id} cardData={card} />
      ))}
      <AddCard currentListName={listName} />
    </ul>
  </div>
);

export default ListContainer;

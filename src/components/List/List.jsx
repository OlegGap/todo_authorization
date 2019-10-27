import React from 'react';
import Card from './Card/Card';
import styles from './List.module.css';

const ListContainer = ({ listCards }) => (
  <ul className={styles.list}>
    {listCards.map(card => (
      <Card key={card.id} cardData={card} />
    ))}
  </ul>
);

export default ListContainer;

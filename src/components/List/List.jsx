import React from 'react';
import Card from './Card/Card';
import styles from './List.module.css';

const List = ({ listCards, authenticated, modifyCard }) => (
  <ul className={styles.list}>
    {listCards.map(card => (
      <Card
        key={card.id}
        cardData={card}
        authenticated={authenticated}
        modifyCard={modifyCard}
      />
    ))}
  </ul>
);

export default List;

import React from 'react';
import styles from './Card.module.css';
import cutString from '../../../utils/cutString.js';

const ListContainer = ({ cardData }) => (
  <li className={styles.cardContainer}>
    <h4 className={styles.cardTitle}>
      Title: {cutString(cardData.username, 20)}
    </h4>
    <div className={styles.content}>
      <h4>{cutString(cardData.text, 150)}</h4>
      <h4 className={styles.contentEmail}>Email: {cardData.email}</h4>
    </div>
  </li>
);

export default ListContainer;

import React, { useState } from 'react';
import Cookies from 'js-cookie';
import styles from './Card.module.css';
import cutString from '../../../utils/cutString.js';
import CardEdit from './CardEdit/CardEdit';

const Card = ({ cardData, authenticated, modifyCard }) => {
  const [doneCard, setDoneCard] = useState(cardData.status);
  const [currentText, setCurrentText] = useState(cardData.text);

  const hundelChangeStatus = () => {
    setDoneCard(!doneCard);
    const resultModifiedCard = {
      status: cardData.status ? 0 : 1,
      token: Cookies.get('authenticated'),
      id: cardData.id,
    };
    modifyCard(resultModifiedCard);
  };
  const hundelModifyCard = text => {
    setCurrentText(text);
    const resultModifiedCard = {
      text,
      token: Cookies.get('authenticated'),
      id: cardData.id,
    };
    modifyCard(resultModifiedCard);
  };
  return (
    <li className={styles.cardContainer}>
      <h4 className={styles.cardTitle}>
        Title: {cutString(cardData.username, 20)}
      </h4>
      <div className={styles.content}>
        <h4>{cutString(currentText, 150)}</h4>
        <h4 className={styles.contentEmail}>Email: {cardData.email}</h4>
      </div>
      <div className={styles.status}>
        Status: {doneCard ? 'DONE' : 'IN PROGRESS'}
      </div>
      {authenticated && (
        <div className={styles.adminButtons}>
          <div className={styles.statusChangeContainer}>
            Done:
            <input
              type="checkbox"
              className={styles.statusChange}
              defaultChecked={doneCard}
              onChange={hundelChangeStatus}
            />
          </div>
          <CardEdit cardData={cardData} hundelModifyCard={hundelModifyCard} />
        </div>
      )}
    </li>
  );
};

export default Card;

import React, { useRef, useEffect } from 'react';
import styles from './Card.module.css';
import cutString from '../../utils/cutString.js';
import DetailsCard from '../DetailsCard/DetailsCard';

const ListContainer = ({ cardData }) => {
  const cardRef = useRef(null);
  useEffect(() => {
    // console.log('basic', cardRef);
  }, []);
  return (
    <>
      <li className={styles.cardContainer} ref={cardRef}>
        <div className={styles.cardContent}>
          <h4 className={styles.cardTitle}>{cutString(cardData.title, 50)}</h4>
          <div className={styles.shortInfo}>
            <div className={styles.subtasks} />
            <div className={styles.deadline}>
              {cardData.deadline ? `DL:${cardData.deadline}` : null}
            </div>
          </div>
        </div>
        <div
          className={styles.cardMark}
          style={{ backgroundColor: `${cardData.mark}` }}
        />
      </li>
      <DetailsCard cardRef={cardRef} />
    </>
  );
};

export default ListContainer;

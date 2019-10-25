import React from 'react';
import Popup from 'reactjs-popup';
import styles from './DetailsCard.module.css';

const AddCard = ({ cardRef }) => {
  return (
    <Popup className={styles.addCardWrapper} trigger={null} modal>
      {/* //FIX it!!! */}
      {() => <div className={styles.modal}>{cardRef}</div>}
    </Popup>
  );
};

export default AddCard;

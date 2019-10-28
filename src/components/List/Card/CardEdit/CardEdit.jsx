import React from 'react';
import Popup from 'reactjs-popup';
import styles from './CardEdit.module.css';

const CardEdit = ({ cardData, hundelModifyCard }) => {
  const handleModify = (evt, close) => {
    evt.preventDefault();
    hundelModifyCard(evt.target.querySelector('textarea[name="text"]').value);
    close();
  };

  return (
    <Popup
      className={styles.wrapper}
      trigger={
        <button type="button" className={styles.modifyButton}>
          EDIT CARD
        </button>
      }
      modal
    >
      {close => (
        <form
          onSubmit={evt => handleModify(evt, close)}
          className={styles.form}
        >
          Text: <br />
          <textarea
            name="text"
            type="text"
            className={styles.modifyText}
            defaultValue={cardData.text}
          />
          <button type="submit" className={styles.modifyButtonConfirm}>
            Edit
          </button>
        </form>
      )}
    </Popup>
  );
};

export default CardEdit;

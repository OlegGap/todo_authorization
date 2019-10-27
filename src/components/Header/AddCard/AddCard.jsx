import React from 'react';
import Popup from 'reactjs-popup';
import styles from './AddCard.module.css';
import {
  createResultAddCard,
  validationForm,
} from '../../../utils/createResultOrCheckAddCard.js';

const AddCard = ({ addCard }) => {
  const handleAddCard = (event, close) => {
    event.preventDefault();
    const { target } = event;
    if (validationForm(target)) {
      addCard(createResultAddCard(target));
      target.reset();
      close();
    }
  };

  return (
    <Popup
      className={styles.addCardWrapper}
      trigger={
        <button type="button" className={styles.addNewCard}>
          &#43; ADD CARD
        </button>
      }
      modal
    >
      {close => (
        <div className={styles.modal}>
          <button type="button" className={styles.close} onClick={close}>
            &times;
          </button>
          <div className={styles.header}> Add new card </div>
          <div className={styles.content}>
            <form
              onSubmit={event => handleAddCard(event, close)}
              className={styles.contentForm}
            >
              <div className={styles.contentFormName}>
                Name: <input type="text" name="name" />
              </div>
              <div className={styles.contentFormEmail}>
                Email: <input type="email" name="email" />
              </div>
              <div className={styles.contentFormDescription}>
                Description: <input type="text" name="text" />
              </div>
              <button type="submit" className={styles.button}>
                ADD CARD
              </button>
            </form>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default AddCard;

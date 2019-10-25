import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styles from './AddCard.module.css';
import getDate from '../../utils/getDate.js';
import markColors from '../../utils/markColors.json';
import {
  createResultAddCard,
  validationForm,
} from '../../utils/createResultOrCheckAddCard.js';

const AddCard = ({ addCard, lists, currentListName }) => {
  const [deadline, setDeadline] = useState(false);
  const [mark, setMark] = useState(false);

  const handleAddCard = (event, close) => {
    event.preventDefault();
    const { target } = event;
    if (validationForm(target)) {
      const selectedList = target.querySelector(`input[name="list"]:checked`)
        .value;

      const resultLists = lists;
      resultLists[selectedList] = [
        ...lists[selectedList],
        createResultAddCard(target),
      ];
      addCard(resultLists);
      target.reset();
      close();
    }
  };

  return (
    <Popup
      className={styles.addCardWrapper}
      trigger={<li className={styles.addNewCard}>&#43; ADD CARD</li>}
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
              <ul className={styles.contentFormList}>
                {Object.keys(lists).map(key => (
                  <li key={key}>
                    <input
                      type="radio"
                      name="list"
                      value={key}
                      id={key}
                      defaultChecked={currentListName === key}
                    />
                    <label htmlFor={key}>{key}</label>
                  </li>
                ))}
              </ul>

              <div className={styles.contentFormTitle}>
                Title*: <input type="text" name="title" />
              </div>
              <div className={styles.contentFormDescription}>
                Description: <input type="text" name="description" />
              </div>
              <div className={styles.contentFormDeadline}>
                Deadline:
                <input
                  type="checkbox"
                  onChange={() => setDeadline(!deadline)}
                />
                {deadline && (
                  <input
                    type="date"
                    name="deadline"
                    defaultValue={getDate()}
                    min={getDate()}
                    max="2020-12-31"
                  />
                )}
              </div>
              <ul className={styles.contentFormMark}>
                Mark:
                <input type="checkbox" onChange={() => setMark(!mark)} />
                {mark &&
                  markColors.map(color => (
                    <li key={color}>
                      <input
                        type="radio"
                        name="mark"
                        value={color}
                        id={color}
                      />
                      <label
                        htmlFor={color}
                        style={{
                          backgroundColor: `${color}`,
                        }}
                      >
                        {}
                      </label>
                    </li>
                  ))}
              </ul>
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

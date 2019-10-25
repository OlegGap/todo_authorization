import React from 'react';
import styles from './Lists.module.css';
import List from '../List/List';

const ListContainer = ({ lists }) => (
  <div className={styles.listsContainer}>
    <div className={styles.currentList}>
      {!lists.length &&
        Object.entries(lists).map(list => (
          <List key={list[0]} listName={list[0]} listCards={list[1]} />
        ))}
    </div>
    <div className={styles.addNewListContainer}>
      <div className={styles.addNewList}>&#43;</div>
    </div>
  </div>
);

export default ListContainer;

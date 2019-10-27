import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from './Sort.module.css';

const optionsSortField = ['id', 'username', 'email', 'status'];
const optionsSortDirection = ['asc', 'desc'];

const Sort = ({ fetchList }) => {
  const [currentSortField, setCurrentSortField] = useState(optionsSortField[0]);
  const [currentSortDirection, setCurrentSortDirection] = useState(
    optionsSortDirection[0],
  );

  const hundleChangeSortField = selected => {
    fetchList(1, selected.value, null);
    setCurrentSortField(selected.value);
  };
  const hundleChangeSortDirection = selected => {
    fetchList(1, null, selected.value);
    setCurrentSortDirection(selected.value);
  };
  return (
    <div className={styles.sortContainer}>
      <h2 className={styles.sortTitle}>Sort: </h2>
      <div className={styles.sortField}>
        <Dropdown
          options={optionsSortField}
          onChange={hundleChangeSortField}
          placeholder="Select an option"
          value={currentSortField}
        />
      </div>
      <div className={styles.sortDirection}>
        <Dropdown
          options={optionsSortDirection}
          onChange={hundleChangeSortDirection}
          placeholder="Select an option"
          value={currentSortDirection}
        />
      </div>
    </div>
  );
};

export default Sort;

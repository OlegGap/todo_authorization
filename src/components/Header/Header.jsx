import React from 'react';
import styles from './Header.module.css';
import Login from './Login/LoginContainer.js';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div>TODO</div>
        <Login />
      </div>
    </div>
  );
};
export default Header;

import React from 'react';
import styles from './Header.module.css';
import Login from './Login/Login';
import AddCard from './AddCard/AddCardContainer.js';

const Header = ({ logout, login, errorLogin, authenticated }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div>TODO</div>
        <div className={styles.sesionButtons}>
          <AddCard />
          {!authenticated && (
            <Login
              authenticated={authenticated}
              login={login}
              error={errorLogin}
            />
          )}
          {authenticated && (
            <button
              type="button"
              onClick={logout}
              className={styles.logoutButton}
            >
              LOG OUT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;

import React from 'react';
import Popup from 'reactjs-popup';
import styles from './Login.module.css';

const Login = ({ authenticated, error, loginRequest }) => {
  const handleLogin = evt => {
    const currentLogin = evt.target.querySelector('input[name="login"]').value;
    const currentPassword = evt.target.querySelector('input[name="password"]')
      .value;

    evt.preventDefault();
    loginRequest({
      username: currentLogin,
      password: currentPassword,
    });
  };
  return (
    <Popup
      className={styles.loginWrapper}
      trigger={
        <div className={styles.loginButton}>
          {authenticated ? 'LOG OUT' : 'LOG IN'}
        </div>
      }
      modal
    >
      {close => (
        <form onSubmit={handleLogin} className={styles.loginForm}>
          Login: <br />
          <input
            name="login"
            type="text"
            className={styles.inputLogin}
            placeholder="Type a login"
          />
          <br />
          {error && error.username && (
            <div className={styles.error}>{error.username}</div>
          )}
          Password: <br />
          <input
            type="password"
            name="password"
            className={styles.inputPassword}
            placeholder="Type a password"
          />
          <br />
          {error && error.password && (
            <div className={styles.error}>{error.password}</div>
          )}
          <button type="submit" className={styles.loginButtonSubmit}>
            Submit
          </button>
          {authenticated ? close() : null}
        </form>
      )}
    </Popup>
  );
};

export default Login;

import React, { useEffect } from 'react';
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';
import styles from './Login.module.css';

const Login = ({ authenticated, error, login }) => {
  useEffect(() => {
    if (authenticated) {
      toast.success('You are logged in!', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  }, [authenticated]);

  const handleLogin = evt => {
    evt.preventDefault();

    const currentLogin = evt.target.querySelector('input[name="login"]').value;
    const currentPassword = evt.target.querySelector('input[name="password"]')
      .value;
    login({
      username: currentLogin,
      password: currentPassword,
    });
  };
  return (
    <Popup
      className={styles.loginWrapper}
      trigger={
        <button type="button" className={styles.loginButton}>
          LOG IN
        </button>
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
            Login
          </button>
          {authenticated ? close() : null}
        </form>
      )}
    </Popup>
  );
};

export default Login;

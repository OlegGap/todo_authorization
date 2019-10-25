import React from 'react';
import styles from './Header.module.css';

// export interface Header {
//   profile: string;
// }

const Header = ({ profile }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div>TODO</div>
        <div>{profile && profile.name}</div>
      </div>
    </div>
  );
};
export default Header;

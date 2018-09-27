import React from 'react';
import styles from './Header.scss';

const Header = () => (
    <div data-test-hook="HeaderElement" className={styles.header}>
      Welcome to the Commercial Platform Early Access Program
      <p className={styles.subHeading}>
        Sign up now to start your account today!
      </p>
    </div>
  );

export default Header;
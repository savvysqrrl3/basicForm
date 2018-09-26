import React from 'react';
import styles from './Header.scss';

const Header = () => (
    <div data-test-hook="HeaderElement" className={styles.header}>
      <p>
          <h2>Welcome to the Commercial Platform Early Access Program</h2>
      </p>
    </div>
  );

export default Header;
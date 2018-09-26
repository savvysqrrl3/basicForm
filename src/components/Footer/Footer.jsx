import React from 'react';
import styles from './Footer.scss';

const Footer = () => (
    <div data-test-hook="FooterElement" className={styles.footer}>
      <p>
          Use Cases | Architecture | Terms of Use | Audit Results
      </p>
      <p className={styles.copyText}>
          Copyright &copy; 2018 Fake, Inc.
      </p>
    </div>
  );

export default Footer;
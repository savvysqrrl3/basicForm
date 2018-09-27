import React from 'react';
import styles from './FormBox.scss';

const FormBox = () => (
    <div data-test-hook="FormBoxElement" className={styles.formBox}>
      Create New Account
      <p className={styles.inputLabel}>Account Email</p>
      <p className={styles.inputLabel}>Password</p>
      <p className={styles.inputLabel}>Verify Password</p>
      <p className={styles.inputLabel}>Terms and Conditions</p>
    </div>
  );

export default FormBox;
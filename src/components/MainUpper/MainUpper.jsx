import React from 'react';
import styles from './MainUpper.scss';

const FormWrapper = () => (
    <div data-test-hook="FormWrapper" className={styles.mainUpper}>
      Create New Account
      <p className={styles.inputLabel}>Account Email</p>
      <p className={styles.inputLabel}>Password</p>
      <p className={styles.inputLabel}>Verify Password</p>
      <p className={styles.inputLabel}>Terms and Conditions</p>
    </div>
  );

export default FormWrapper;
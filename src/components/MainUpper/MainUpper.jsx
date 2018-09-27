import React from 'react';
import styles from './MainUpper.scss';
import Form from './../Form';

const FormWrapper = () => (
    <div data-test-hook="FormWrapper" className={styles.mainUpper}>
      Create New Account
      <div>
          <Form />
      </div>
    </div>
  );

export default FormWrapper;
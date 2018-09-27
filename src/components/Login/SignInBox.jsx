import React from 'react';
import styles from './SignInBox.scss';

const SignInBox = () => (
    <div data-test-hook="SignInBoxElement" className={styles.signInBox}>
      Already have an account? <button>Sign In</button>
    </div>
  );

export default SignInBox;
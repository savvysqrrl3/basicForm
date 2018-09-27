import React from 'react';
import styles from './MainLower.scss';

const SignIn = () => (
    <div className={styles.mainLower}>
        Already have an account? 
       <button className={styles.buttonSmall}>Sign In</button>
    </div>
  );

export default SignIn;
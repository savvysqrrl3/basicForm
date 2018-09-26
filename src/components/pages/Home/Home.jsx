import React from 'react';
import Header from '../../Header'
import styles from './Home.scss';

const Home = () => (
  <div data-test-hook="homePage" className={styles.home}>
    <Header />
  </div>
);

export default Home;

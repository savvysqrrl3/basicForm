import React from 'react';
import Header from '../../Header'
import Footer from '../../Footer'
import styles from './Home.scss';

const Home = () => (
  <div data-test-hook="homePage" className={styles.home}>
    <Header />
    <Footer />
  </div>
);

export default Home;

import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import FormBox from '../../FormBox';
import SignInBox from '../../SignInBox';


import styles from './Home.scss';

const Home = () => (
  <div data-test-hook="homePage" className={styles.home}>
    <Header />
    <FormBox />
    <SignInBox />
    <Footer />
  </div>
);

export default Home;

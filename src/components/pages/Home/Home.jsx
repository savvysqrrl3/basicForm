import React from 'react';
import Header from '../../Header';
import FormWrapper from '../../MainUpper';
import SignIn from '../../MainLower';
import Footer from '../../Footer';
import styles from './Home.scss';

const Home = () => (
  <div data-test-hook="homePage" className={styles.home}>
    <Header />
    <FormWrapper />
    <SignIn />
    <Footer />
  </div>
);

export default Home;

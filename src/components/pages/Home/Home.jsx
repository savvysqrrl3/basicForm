import React from 'react';
import Header from '../../Header';
// import FormBox from '../../Register';
// import SignInBox from '../../Login';
import Footer from '../../Footer';
import SampleComponent from '../../SampleComponent';

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

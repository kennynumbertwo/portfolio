import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

import OrbsContainer from '../components/OrbsContainer';

import KellysCoupons from '../components/KellysCoupons';

const Home: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMidsize, setIsMidsize] = useState(false);

  const [scroll, setScroll] = useState<number>(0);

  return (
    <div className={styles.main}>
      <Head>
        <title>Kenny Tye</title>
        <link rel="icon" href="/favicon/ico" />
        <meta
          name="Kenny Tye's Web Developement Portfolio"
          content="Professional web development portfolio for Kenny Tye."
        />
      </Head>
      <OrbsContainer
        scroll={scroll}
        isMobile={isMobile}
        isMidsize={isMidsize}
      />
      <KellysCoupons />
    </div>
  );
};

export default Home;

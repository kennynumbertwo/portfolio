import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import LinkFooter from '../components/LinkFooter';
import AboutMe from '../components/AboutMe';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

const Home: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [orbPos, setOrbPos] = useState(0);
  // Listen for the window size
  useEffect(() => {
    if (window.innerWidth <= 576) {
      setIsMobile(true);
    }
    function handleMobileResize() {
      if (window.innerWidth <= 576) {
        setIsMobile(true);
      }
      if (window.innerWidth > 576) {
        setIsMobile(false);
      }
    }
    window.addEventListener('resize', handleMobileResize);
  }, [isMobile]);

  useEffect(() => {
    function handleScroll() {
      setOrbPos(window.scrollY * 0.33);
    }
    window.addEventListener('scroll', handleScroll);
  });
  return (
    <div className={styles.main}>
      <Head>
        <title>Kenny Tye</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar
        navItemLeft="Resume"
        navItemsRight={{
          itemOne: 'About',
          itemTwo: 'Projects',
          itemThree: 'Contact',
        }}
        isMobile={isMobile}
      />
      <div className="bgOvalOne" style={{ right: orbPos }} />
      <Introduction />
      <AboutMe />
      <Projects />
      <Contact />
      <LinkFooter />
      <Footer />
    </div>
  );
};

export default Home;

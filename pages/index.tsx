import type { NextPage } from 'next';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import LinkFooter from '../components/LinkFooter';
import AboutMe from '../components/AboutMe';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import OrbsContainer from '../components/OrbsContainer';
import LinkFooterMobile from '../components/LinkFooterMobile';

const Home: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<string>('');

  // Scroll Refs
  const aboutRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    if (scrollPosition === 'about') {
      window.scrollTo(0, aboutRef.current.offsetTop - 40);
      setScrollPosition('');
    }
    if (scrollPosition === 'projects') {
      window.scrollTo(0, projectsRef.current.offsetTop - 40);
      setScrollPosition('');
    }
    if (scrollPosition === 'contact') {
      window.scrollTo(0, contactRef.current.offsetTop);
      setScrollPosition('');
    }
  }, [scrollPosition]);

  // scrollFunction
  const executeScroll = (refId: string) => {
    setScrollPosition(refId);
  };

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

  return (
    <div className={styles.main}>
      <Head>
        <title>Kenny Tye</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <OrbsContainer isMobile={isMobile} />
      <Navbar
        navItemLeft="Resume"
        navItemsRight={{
          itemOne: 'About',
          itemTwo: 'Projects',
          itemThree: 'Contact',
        }}
        isMobile={isMobile}
        executeScroll={executeScroll}
      />
      <Introduction />
      <div ref={aboutRef} />
      <AboutMe />
      <div ref={projectsRef} />
      {isMobile ? null : <Projects />}
      <div ref={contactRef} />
      <Contact />
      {isMobile ? <LinkFooterMobile /> : <LinkFooter />}
      <Footer />
    </div>
  );
};

export default Home;

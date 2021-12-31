import type { NextPage } from 'next';
import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import LinkFooter from '../components/LinkFooter';
import AboutMe from '../components/AboutMe';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import OrbsContainer from '../components/OrbsContainer';
import LinkFooterMobile from '../components/LinkFooterMobile';
import Intro from '../components/Intro';

const Home: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMidsize, setIsMidsize] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<string>('');
  const [scroll, setScroll] = useState<number>(0);
  const [animateAbout, setAnimateAbout] = useState<boolean>(false);
  const [animateProjects, setAnimateProjects] = useState<boolean>(false);
  const [animateContact, setAnimateContact] = useState<boolean>(false);
  const [animateFooter, setAnimateFooter] = useState<boolean>(false);

  // Scroll Refs
  const aboutRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
    if (window.scrollY > 100) {
      setAnimateAbout(true);
    }
    if (window.scrollY <= 100) {
      setAnimateAbout(false);
    }
    if (window.scrollY > 1100 && !isMobile) {
      setAnimateProjects(true);
    }
    if (window.scrollY <= 1100 && !isMobile) {
      setAnimateProjects(false);
    }
    if (window.scrollY > 1800 && isMobile) {
      setAnimateProjects(true);
    }
    if (window.scrollY <= 1800 && isMobile) {
      setAnimateProjects(false);
    }
    if (window.scrollY > 1750 && !isMobile) {
      setAnimateContact(true);
    }
    if (window.scrollY <= 1750 && !isMobile) {
      setAnimateContact(false);
    }
    if (window.scrollY > 2500 && isMobile) {
      setAnimateContact(true);
    }
    if (window.scrollY <= 2500 && isMobile) {
      setAnimateContact(false);
    }
    if (window.scrollY > 1700 && !isMobile) {
      setAnimateFooter(true);
    }
    if (window.scrollY <= 1700 && !isMobile) {
      setAnimateFooter(false);
    }
    if (window.scrollY > 2500 && isMobile) {
      setAnimateFooter(true);
    }
    if (window.scrollY <= 2500 && isMobile) {
      setAnimateFooter(false);
    }
  };

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
      if (window.innerWidth <= 900) {
        setIsMidsize(true);
      }
      if (window.innerWidth > 900) {
        setIsMidsize(false);
      }
    }
    window.addEventListener('resize', handleMobileResize);
  }, [isMobile]);

  return (
    <div className={styles.main}>
      <Head>
        <title>Kenny Tye</title>
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
      <Intro />
      <div ref={aboutRef} />
      <AboutMe animateAbout={animateAbout} />
      <div ref={projectsRef} />
      <Projects animateProjects={animateProjects} isMobile={isMobile} />
      <div ref={contactRef} />
      <Contact animateContact={animateContact} />
      {isMidsize || isMobile ? <LinkFooterMobile /> : <LinkFooter />}
      <Footer animateFooter={animateFooter} />
    </div>
  );
};

export default Home;

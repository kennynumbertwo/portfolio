import styles from '../styles/Navbar.module.css';
import { useState, useEffect, useLayoutEffect } from 'react';

interface NavbarProps {
  navItemLeft: string;
  navItemsRight: {
    itemOne: string;
    itemTwo: string;
    itemThree: string;
  };
  isMobile: boolean;
  executeScroll(refId: string): any;
}

function Navbar({
  navItemLeft,
  navItemsRight,
  isMobile,
  executeScroll,
}: NavbarProps) {
  const [isActive, setIsActive] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsActive(false);
    setIsShowing(false);
  }, [isMobile]);

  const handleSetHamburgerClass = () => {
    setIsActive(!isActive);
    setIsShowing(true);
    if (isActive) {
      setTimeout(() => {
        setIsShowing(false);
      }, 240);
    }
  };

  if (isMobile) {
    return (
      <>
        <div className={styles.burgerWrapper}>
          <button
            className={`${styles.hamburger} ${isActive && styles.active}`}
            onClick={handleSetHamburgerClass}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {isShowing && (
          <nav
            className={`${styles.container} ${
              isActive ? styles.showing : styles.hidden
            }`}
          >
            <div className={styles.resumeWrapper}>
              <a
                className={styles.resumeText}
                href="https://drive.google.com/file/d/1lpmy8RF3kpTp0BewTL5CaUWbuPQ9jetK/view?usp=sharing"
                target="_blank"
              >
                {navItemLeft}
              </a>
            </div>
            <div className={styles.linksWrapper}>
              <a
                className={`${styles.navItem} ${styles.about}`}
                onClick={() => executeScroll('about')}
              >
                {navItemsRight.itemOne}
              </a>
              <a
                className={styles.navItem}
                onClick={() => executeScroll('projects')}
              >
                {navItemsRight.itemTwo}
              </a>
              <a
                className={styles.navItem}
                onClick={() => executeScroll('contact')}
              >
                {navItemsRight.itemThree}
              </a>
            </div>
          </nav>
        )}
      </>
    );
  }
  return (
    <nav className={styles.container}>
      <div className={styles.resumeWrapper}>
        <a
          className={styles.resumeText}
          href="https://drive.google.com/file/d/1lpmy8RF3kpTp0BewTL5CaUWbuPQ9jetK/view?usp=sharing"
          target="_blank"
        >
          {navItemLeft}
        </a>
      </div>
      <div className={styles.linksWrapper}>
        <a
          className={`${styles.navItem} ${styles.about}`}
          onClick={() => executeScroll('about')}
        >
          {navItemsRight.itemOne}
        </a>
        <a className={styles.navItem} onClick={() => executeScroll('projects')}>
          {navItemsRight.itemTwo}
        </a>
        <a className={styles.navItem} onClick={() => executeScroll('contact')}>
          {navItemsRight.itemThree}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

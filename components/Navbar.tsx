import styles from '../styles/Navbar.module.css';

interface NavbarProps {
  navItemLeft: string;
  navItemsRight: {
    itemOne: string;
    itemTwo: string;
    itemThree: string;
  };
}

function Navbar({ navItemLeft, navItemsRight }: NavbarProps) {
  return (
    <nav className={styles.container}>
      <div className={styles.resumeWrapper}>
        <a className={styles.resumeText}>{navItemLeft}</a>
      </div>
      <div className={styles.linksWrapper}>
        <a className={`${styles.navItem} ${styles.about}`}>
          {navItemsRight.itemOne}
        </a>
        <a className={styles.navItem}>{navItemsRight.itemTwo}</a>
        <a className={styles.navItem}>{navItemsRight.itemThree}</a>
      </div>
    </nav>
  );
}

export default Navbar;

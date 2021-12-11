import { syncBuiltinESMExports } from 'module';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.iconsWrapper}>
        <i className={styles.iconGithub} />
        <i className={styles.iconDiscord} />
        <i className={styles.iconLinkedIn} />
        <i className={styles.iconMail} />
      </div>
      <p className={styles.text}>
        This site was designed and built by Kenny Tye
      </p>
    </footer>
  );
}

export default Footer;

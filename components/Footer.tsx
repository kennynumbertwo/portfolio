import { syncBuiltinESMExports } from 'module';
import styles from '../styles/Footer.module.css';
import DiscordIcon from './icons/Discord';
import GithubIcon from './icons/Github';
import LinkedInIcon from './icons/LinkedIn';
import MailIcon from './icons/Mail';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.iconsWrapper}>
        <span className={styles.iconGithub}>
          <GithubIcon />
        </span>
        <span className={styles.iconDiscord}>
          <DiscordIcon />
        </span>
        <span className={styles.iconLinkedIn}>
          <LinkedInIcon />
        </span>
        <span className={styles.iconMail}>
          <MailIcon />
        </span>
      </div>
      <p className={styles.text}>
        This site was designed and built by Kenny Tye
      </p>
    </footer>
  );
}

export default Footer;

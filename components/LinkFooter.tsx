import classes from '../styles/LinkFooter.module.css';
import styles from '../styles/LinkFooter.module.css';
import DiscordIcon from './icons/Discord';
import GithubIcon from './icons/Github';
import LinkedInIcon from './icons/LinkedIn';
import MailIcon from './icons/Mail';

function LinkFooter() {
  return (
    <div className={styles.iconsWrapperOuter}>
      <div className={styles.iconsWrapperInner}>
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
        <div className={styles.verticalLine} />
      </div>
    </div>
  );
}

export default LinkFooter;

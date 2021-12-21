import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import DiscordIcon from './icons/Discord';
import GithubIcon from './icons/Github';
import LinkedInIcon from './icons/LinkedIn';
import MailIcon from './icons/Mail';
import copy from 'copy-to-clipboard';

function Footer() {
  const handleCopyClick = (link: string) => {
    copy(link);
  };

  return (
    <footer className={styles.container}>
      <div className={styles.iconsWrapper}>
        <Link href={'https://github.com/kennynumbertwo'}>
          <a target="_blank">
            <span className={styles.iconGithub}>
              <GithubIcon />
            </span>
          </a>
        </Link>
        <button onClick={() => handleCopyClick('kennynumbertwo#8561')}>
          <span className={styles.iconDiscord}>
            <DiscordIcon />
          </span>
        </button>
        <Link href={'https://www.linkedin.com/in/kenny-tye-3559106b/'}>
          <a target="_blank">
            <span className={styles.iconLinkedIn}>
              <LinkedInIcon />
            </span>
          </a>
        </Link>
        <button onClick={() => handleCopyClick('kennytye.dev@gmail.com')}>
          <span className={styles.iconMail}>
            <MailIcon />
          </span>
        </button>
      </div>
      <p className={styles.text}>
        This site was designed and built by Kenny Tye
      </p>
    </footer>
  );
}

export default Footer;

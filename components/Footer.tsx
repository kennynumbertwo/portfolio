import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from '../styles/Footer.module.css';
import DiscordIcon from './icons/Discord';
import GithubIcon from './icons/Github';
import LinkedInIcon from './icons/LinkedIn';
import MailIcon from './icons/Mail';
import copy from 'copy-to-clipboard';

interface FooterProps {
  isMobile: boolean;
}
function Footer({ isMobile }: FooterProps) {
  const handleCopyClick = (link: string) => {
    copy(link);
  };

  if (isMobile) {
    return (
      <footer className={styles.container}>
        <div className={styles.iconsWrapper}>
          <Link href={'https://github.com/kennynumbertwo'}>
            <a target="_blank">
              <span className={styles.iconGithub}>
                <GithubIcon size={isMobile ? 20 : 24} />
              </span>
            </a>
          </Link>
          <button onClick={() => handleCopyClick('kennynumbertwo#8561')}>
            <span className={styles.iconDiscord}>
              <DiscordIcon size={isMobile ? 22 : 27} />
            </span>
          </button>
          <Link href={'https://www.linkedin.com/in/kenny-tye-3559106b/'}>
            <a target="_blank">
              <span className={styles.iconLinkedIn}>
                <LinkedInIcon size={isMobile ? 20 : 24} />
              </span>
            </a>
          </Link>
          <button onClick={() => handleCopyClick('kennytye.dev@gmail.com')}>
            <span className={styles.iconMail}>
              <MailIcon size={isMobile ? 20 : 24} />
            </span>
          </button>
        </div>
        <p className={styles.text}>
          This site was designed and built by Kenny Tye
        </p>
      </footer>
    );
  }
  return (
    <footer className={styles.container}>
      <p className={styles.text}>
        This site was designed and built by Kenny Tye
      </p>
    </footer>
  );
}

export default Footer;

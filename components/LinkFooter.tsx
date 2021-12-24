import Link from 'next/link';

import styles from '../styles/LinkFooter.module.css';
import DiscordIcon from './icons/Discord';
import GithubIcon from './icons/Github';
import LinkedInIcon from './icons/LinkedIn';
import MailIcon from './icons/Mail';
import copy from 'copy-to-clipboard';

function LinkFooter({ isShowingFooterLink }) {
  const handleCopyClick = (link: string) => {
    copy(link);
  };

  if (isShowingFooterLink)
    return (
      <div className={styles.iconsWrapperOuter} id="footer">
        <div className={styles.iconsWrapperInner}>
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
          <div className={styles.verticalLine} />
        </div>
      </div>
    );
  return null;
}

export default LinkFooter;

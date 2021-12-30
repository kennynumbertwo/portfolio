import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/LinkFooter.module.css';
import DiscordIcon from './icons/Discord';
import GithubIcon from './icons/Github';
import LinkedInIcon from './icons/LinkedIn';
import MailIcon from './icons/Mail';
import copy from 'copy-to-clipboard';
import ClipboardIcon from './icons/Clipboard';

function LinkFooter() {
  const [isShowingClipDiscord, setIsShowingClipDiscord] =
    useState<boolean>(false);
  const [isShowingClipMail, setIsShowingClipMail] = useState<boolean>(false);
  const handleCopyDiscordClick = (link: string) => {
    copy(link);
    setIsShowingClipDiscord(true);
    setTimeout(() => {
      setIsShowingClipDiscord(false);
    }, 500);
  };
  const handleCopyMailClick = (link: string) => {
    copy(link);
    setIsShowingClipMail(true);
    setTimeout(() => {
      setIsShowingClipMail(false);
    }, 500);
  };

  return (
    <div className={styles.iconsWrapperOuter} id="footer">
      <div className={styles.iconsWrapperInner}>
        <Link href={'https://github.com/kennynumbertwo'}>
          <a target="_blank">
            <span className={styles.iconGithub}>
              <GithubIcon size={24} />
            </span>
          </a>
        </Link>
        <button onClick={() => handleCopyDiscordClick('kennynumbertwo#8561')}>
          {isShowingClipDiscord ? (
            <span className={styles.iconClip}>
              <ClipboardIcon size={27} />
            </span>
          ) : (
            <span className={styles.iconDiscord}>
              <DiscordIcon size={27} />
            </span>
          )}
        </button>
        <Link href={'https://www.linkedin.com/in/kenny-tye-3559106b/'}>
          <a target="_blank">
            <span className={styles.iconLinkedIn}>
              <LinkedInIcon size={24} />
            </span>
          </a>
        </Link>
        <button onClick={() => handleCopyMailClick('kennytye.dev@gmail.com')}>
          {isShowingClipMail ? (
            <span className={styles.iconClip}>
              <ClipboardIcon size={24} />
            </span>
          ) : (
            <span className={styles.iconMail}>
              <MailIcon size={24} />
            </span>
          )}
        </button>
        <div className={styles.verticalLine} />
      </div>
    </div>
  );
}

export default LinkFooter;

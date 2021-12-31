import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/LinkFooterMobile.module.css';
import DiscordIcon from './icons/Discord';
import GithubIcon from './icons/Github';
import LinkedInIcon from './icons/LinkedIn';
import MailIcon from './icons/Mail';
import copy from 'copy-to-clipboard';
import LinkIcon from './icons/Link';
import MinusIcon from './icons/Minus';
import ClipboardIcon from './icons/Clipboard';

function LinkFooterMobile(): JSX.Element {
  const [isShowing, setIsShowing] = useState<boolean>(false);
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

  const handleOpenClick = () => {
    setIsShowing(true);
  };
  const handleCloseClick = () => {
    setIsShowing(false);
  };

  if (isShowing) {
    return (
      <div className={styles.iconsWrapperOuter} id="footer">
        <div className={styles.iconsWrapperInner}>
          <Link href="https://github.com/kennynumbertwo">
            <a target="_blank">
              <span className={styles.iconGithub}>
                <GithubIcon size={24} />
              </span>
            </a>
          </Link>
          <button
            onClick={() => handleCopyDiscordClick('kennynumbertwo#8561')}
            type="button"
          >
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
          <Link href="https://www.linkedin.com/in/kenny-tye-3559106b/">
            <a target="_blank">
              <span className={styles.iconLinkedIn}>
                <LinkedInIcon size={24} />
              </span>
            </a>
          </Link>
          <button
            onClick={() => handleCopyMailClick('kennytye.dev@gmail.com')}
            type="button"
          >
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
          <button onClick={handleCloseClick} type="button">
            <span className={styles.iconMail}>
              <MinusIcon size={24} />
            </span>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.iconsWrapperOuterMobile} id="footer">
      <div className={styles.iconsWrapperInnerMobile}>
        <button onClick={handleOpenClick} type="button">
          <span className={styles.iconMail}>
            <LinkIcon size={24} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default LinkFooterMobile;

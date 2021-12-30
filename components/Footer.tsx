import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from '../styles/Footer.module.css';
import DiscordIcon from './icons/Discord';
import GithubIcon from './icons/Github';
import LinkedInIcon from './icons/LinkedIn';
import MailIcon from './icons/Mail';
import copy from 'copy-to-clipboard';
function Footer() {
  return (
    <footer className={styles.container}>
      <p className={styles.text}>Designed and built by Kenny Tye</p>
    </footer>
  );
}

export default Footer;

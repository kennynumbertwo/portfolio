import styles from '../styles/Footer.module.css';
interface FooterProps {
  animateFooter: boolean;
}
function Footer({ animateFooter }: FooterProps) {
  return (
    <footer
      className={styles.container}
      style={{
        opacity: animateFooter ? 1 : 0,
        transform: animateFooter ? 'translateY(0px)' : 'translateY(20px)',
      }}
    >
      <p className={styles.text}>Designed and built by Kenny Tye</p>
    </footer>
  );
}

export default Footer;

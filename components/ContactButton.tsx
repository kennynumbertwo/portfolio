import styles from '../styles/ContactButton.module.css';

function ContactButton() {
  return (
    <a href="mailto: kennytye.dev@gmail.com" target="_blank">
      <button className={styles.contactButton}>Get In Touch</button>
    </a>
  );
}

export default ContactButton;

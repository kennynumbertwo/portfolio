import styles from '../styles/Contact.module.css';
import ContactButton from './ContactButton';

function Contact() {
  return (
    <section className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.lineLeft} />
        <h2 className={styles.header}>Contact</h2>
        <div className={styles.lineRight} />
      </div>
      <p>
        I am currently seeking new freelance and full-time developer
        opportunities.
      </p>
      <p>Need a developer for your next project?</p>
      <ContactButton />
    </section>
  );
}

export default Contact;

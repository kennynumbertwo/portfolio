import styles from '../styles/Contact.module.css';
import ContactButton from './ContactButton';

interface ContactProps {
  animateContact: boolean;
}
function Contact({ animateContact }: ContactProps) {
  return (
    <section
      className={styles.container}
      style={{
        opacity: animateContact ? 1 : 0,
        transform: animateContact ? 'translateY(0px)' : 'translateY(20px)',
      }}
    >
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

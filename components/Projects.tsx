import classes from '../styles/Projects.module.css';
import styles from '../styles/Projects.module.css';

function Projects(): JSX.Element {
  return (
    <section className={styles.wrapper}>
      <div className={styles.containerMain}>
        <div className={styles.containerProject}>
          <div className={`${styles.projectWrapper} ${styles.selected}`}>
            <div className={`${styles.border} ${styles.selected}`} />
            <h3 className={styles.projectTitle}>Flashcards App</h3>
          </div>
          <div className={styles.projectWrapper}>
            <div className={`${styles.border}`} />
            <h3 className={styles.projectTitle}>
              Peermusic Neighbouring Rights
            </h3>
          </div>
          <div className={styles.projectWrapper}>
            <div className={`${styles.border}`} />
            <h3 className={styles.projectTitle}>Destroybox</h3>
          </div>
        </div>
        <div className={styles.containerInfo}>
          <div className={styles.headerBG}></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

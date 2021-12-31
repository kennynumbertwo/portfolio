import styles from '../styles/Intro.module.css';

function Intro(): JSX.Element {
  return (
    <div className={styles.introductionWrapper}>
      <section className={styles.introduction}>
        <h4 className={styles.hello}>Hello, I'm</h4>
        <h1 className={styles.name}>Kenny Tye</h1>
        <h2 className={styles.developer}>I'm a web developer.</h2>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            I’m a developer specializing in building React applications. I’m a
            natural tinkerer and love expanding my knowledge about coding and
            technology. I hope to join a team of talented individuals that I can
            learn from and build interesting projects with.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Intro;
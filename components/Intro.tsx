import styles from '../styles/Intro.module.css';

function Intro(): JSX.Element {
  return (
    <div className={styles.introductionWrapper}>
      <section className={styles.introduction}>
        <h4 className={styles.hello}>Hello, I'm</h4>
        <h1 className={styles.name}>Kenny Tye</h1>
        <h2 className={styles.developer}>I'm a full stack developer.</h2>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            I’m an engineer specializing in front-end development. I am
            naturally curious, creative and I love to solve difficult problems.
            I'm currently available for select freelance work. If you'd like to
            connect, please get in touch.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Intro;

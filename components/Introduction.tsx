import classes from '../styles/Introduction.module.css';
import styles from '../styles/Introduction.module.css';

function Introduction() {
  return (
    <section className={styles.container}>
      <h4 className={classes.hello}>Hello, I'm</h4>
      <h1 className={classes.name}>Kenny Tye</h1>
      <h2 className={classes.developer}>I'm a web developer.</h2>
      <div className={classes.descriptionWrapper}>
        <p className={classes.description}>
          I’m a developer specializing in building React applications. I’m a
          natural tinkerer and truly enjoy expanding my knowledge on all things
          coding and technology. I hope to join a team of talented individuals
          that I can learn from and build interesting projects with.
        </p>
      </div>
    </section>
  );
}

export default Introduction;

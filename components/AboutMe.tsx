import styles from '../styles/AboutMe.module.css';
import SkillsList from '../components/SkillsList';

interface AboutProps {
  animateAbout: boolean;
}

function AboutMe({ animateAbout }: AboutProps): JSX.Element {
  return (
    <>
      <h2
        className={styles.header}
        id="aboutMe"
        style={{
          opacity: animateAbout ? 1 : 0,
          transform: animateAbout ? 'translateY(0px)' : 'translateY(20px)',
        }}
      >
        About Me
      </h2>
      <section
        className={styles.container}
        style={{
          opacity: animateAbout ? 1 : 0,
          transform: animateAbout ? 'translateY(0px)' : 'translateY(20px)',
        }}
      >
        <div className={styles.leftSection}>
          <div className={styles.textWrapper}>
            <p className={styles.text}>
              I am a frontend software engineer from Los Angeles, CA. My
              development journey started in 2020 when I began learning to write
              Python scripts and webscrapers to automate monotonous tasks. I
              quickly transitioned into web development and have been working
              professionally as frontend engineer since February, 2022. In the
              time since then, have worked closely several development teams on
              ecommerce stores, marketing websites and core business web
              applications. I am currently building brand-focused ecommerce and
              marketing experiences with Bondfire Inc. and our partners as a
              fulltime software engineer.
            </p>
          </div>
          <div className={styles.skillsListWrapper}>
            <SkillsList />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;

import styles from '../styles/AboutMe.module.css';
import Image from 'next/image';
import headshot from '../public/headshot_sized.jpg';
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
              I am a full stack developer and programmer from Los Angeles, CA. I
              started coding with Python after developing an interest in
              automating some of the repetitive tasks I was responsible for
              while working as the A&R Manager at a music publisher. I built
              myself tools to streamline some of the processes the company had
              been doing by hand for the prior decade, and increased my own
              productivity by a wide margin. I also wrote scripts to enhance the
              research I was doing on songwriters who were just bubbling up on
              the Billboard Hot 100 charts. It gave me the edge against my
              competitors and put us at the table for negotiating publishing
              deals early. {'\n'} {'\n'}
              I’ve since become completely enamored with learning as much as I
              can about coding, web development, data science and automation.
              It’s been an incredible journey and I’ve created applications with
              the following technologies:
            </p>
          </div>
          <div className={styles.skillsListWrapper}>
            <SkillsList />
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.image}>
            <Image src={headshot} width={399} height={468} />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;

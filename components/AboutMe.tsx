import styles from '../styles/AboutMe.module.css';
import Image from 'next/image';
import headshot from '../public/headshot_sized.jpg';
import SkillsList from '../components/SkillsList';

function AboutMe(): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.leftSection}>
        <h2 className={styles.header}>About Me</h2>
        <div className={styles.textWrapper}>
          <p className={styles.text}>
            I am a web developer and programmer from Los Angeles, CA. I started
            coding in Python after developing an interest in automating some of
            the repetitive tasks haunting me while working as an A&R at a music
            publisher. I built myself tools to streamline some of the processes
            the company had been doing by hand for the prior decade, and
            increased my own productivity tenfold. I also wrote scripts to
            enhance the research I was doing on songwriters who were just
            bubbling up on the Billboard Hot 100 charts. It gave me the edge
            againt my competitors and put us at the table for negotiating
            publishing deals early. {'\n'} {'\n'}
            I’ve since become completely enamored with learning as much as I can
            about coding, web developement, data science and automation. It’s
            been an incredible journey and I’ve since created applications with
            the following technologies.
          </p>
        </div>
        <div className={styles.skillsListWrapper}>
          <SkillsList />
        </div>
      </div>
      <div className={styles.rightSection}>
        <Image src={headshot} width={399} height={468} />
      </div>
    </section>
  );
}

export default AboutMe;

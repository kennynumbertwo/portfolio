import styles from '../styles/ProjectDetails.module.css';
import ProjectSkill from './ProjectSkill';
import Image from 'next/image';
import flashcard_1 from '../public/projects/flashcard_1.png';
import flashcard_2 from '../public/projects/flashcard_2.png';
import pm_1 from '../public/projects/pm_1.png';
import pm_2 from '../public/projects/pm_2.png';
import destroybox_1 from '../public/projects/destroybox_1.png';
import destroybox_2 from '../public/projects/destroybox_2.png';

interface ProjectDetailsProps {
  selected: string;
  headerText: string;
  description: string;
  skills: string[];
  imageOne: StaticImageData;
  imageTwo: StaticImageData;
}

function ProjectDetails({
  selected,
  headerText,
  description,
  skills,
  imageOne,
  imageTwo,
}: ProjectDetailsProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.headerBG}>
        <div className={styles.headerWrapper}>
          <h3>{headerText}</h3>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <p>{description}</p>
      </div>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => {
          return (
            <ProjectSkill
              key={`${selected}-${skill}`}
              text={skill}
              delay={index}
            />
          );
        })}
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image
            className={styles.screenshotOne}
            src={imageOne}
            width={315}
            height={211}
          />
        </div>
        <div className={styles.image}>
          <Image
            className={styles.screenshotTwo}
            src={imageTwo}
            width={315}
            height={211}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;

import styles from '../styles/ProjectDetails.module.css';
import ProjectSkill from './ProjectSkill';
import Image from 'next/image';

interface ProjectDetailsProps {
  selected: string;
  headerText: string;
  description: string;
  skills: string[];
  images: StaticImageData[];
}

function ProjectDetails({
  selected,
  headerText,
  description,
  skills,
  images,
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
            className={styles.screenshot}
            src={images[0]}
            width={315}
            height={211}
          />
        </div>
        <div className={styles.image}>
          <Image
            className={styles.screenshot}
            src={images[1]}
            width={315}
            height={211}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;

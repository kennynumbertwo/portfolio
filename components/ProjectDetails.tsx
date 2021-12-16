import styles from '../styles/ProjectDetails.module.css';
import ProjectSkill from './ProjectSkill';

interface ProjectDetailsProps {
  headerText: string;
  description: string;
  skills: string[];
  images: string[];
}

function ProjectDetails({
  headerText,
  description,
  skills,
  images,
}: ProjectDetailsProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.headerBG}>
        <h3>{headerText}</h3>
      </div>
      <div>
        <p>{description}</p>
      </div>
      {skills.map((skill) => {
        <ProjectSkill text={skill} />;
      })}
    </div>
  );
}

export default ProjectDetails;

import styles from '../styles/ProjectSkill.module.css';

interface ProjectSkillProps {
  text: string;
}
function ProjectSkill({ text }: ProjectSkillProps): JSX.Element {
  console.log(text);
  return (
    <div className={styles.container}>
      <p>{text}</p>
    </div>
  );
}

export default ProjectSkill;

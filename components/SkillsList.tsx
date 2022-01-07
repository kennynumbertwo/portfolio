import Skill from '../components/Skill';
import styles from '../styles/SkillsList.module.css';

const skills: string[] = [
  'JavaScript',
  'React',
  'Next JS',
  'HTML',
  'CSS / Sass',
  'Python',
  'Beautiful Soup',
  'Git & Github',
  'Figma',
  'Material UI',
  'SQL / MySQL',
  'NoSQL / Firebase',
];

function SkillsList() {
  return (
    <div className={styles.container}>
      <div className={styles.skillsWrapper}>
        {skills.map((skill) => (
          <Skill key={skill} text={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsList;

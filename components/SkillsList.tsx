import Skill from '../components/Skill';
import styles from '../styles/SkillsList.module.css';

const skills: string[] = [
  'JavaScript (ES6+)',
  'React',
  'Next JS',
  'HTML',
  'CSS',
  'Python',
  'Beautiful Soup',
  'Git & Github',
  'Firebase Firestore',
  'Figma',
  'Material UI',
  'Bootstrap',
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

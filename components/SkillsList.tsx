import Skill from '../components/Skill';
import styles from '../styles/SkillsList.module.css';

const skills: string[] = [
  'JavaScript',
  'React',
  'Next JS',
  'Gatsby',
  'Alpine JS',
  'Liquid / Shopify',
  'Redux Toolkit',
  'Jest / RTL',
  'Sanity',
  'Tailwind',
  'CSS / Sass',
  'Material UI',
  'Git & Github',
  'SQL / MySQL',
  'NoSQL / Firebase',
  'JS Force / Salesforce',
  'Python',
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

import ChevronRight from './icons/ChevronRight';
import styles from '../styles/Skill.module.css';

function Skill({ text }: { text: string; key: string }) {
  return (
    <div className={styles.wrapper}>
      <ChevronRight />
      <h4 className={styles.text}>{text}</h4>
    </div>
  );
}

export default Skill;

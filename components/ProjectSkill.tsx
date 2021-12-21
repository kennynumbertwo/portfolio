import styles from '../styles/ProjectSkill.module.css';
import { useState, useEffect } from 'react';

interface ProjectSkillProps {
  text: string;
  delay: number;
}
function ProjectSkill({ text, delay }: ProjectSkillProps): JSX.Element {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowing(true);
    }, 20 * delay);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isShowing) {
    return (
      <div className={styles.container}>
        <p>{text}</p>
      </div>
    );
  }
  return (
    <div className={styles.containerHidden}>
      <p>{text}</p>
    </div>
  );
}

export default ProjectSkill;

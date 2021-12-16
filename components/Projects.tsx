import classes from '../styles/Projects.module.css';
import { useState } from 'react';
import styles from '../styles/Projects.module.css';
import ProjectDetails from './ProjectDetails';

function Projects(): JSX.Element {
  const [selected, setSelected] = useState<number>(1);

  const getStyle = (id: number) => {
    if (selected === id) return styles.selected;
    else return '';
  };

  const handleClick = (id: number) => {
    setSelected(id);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.containerMain}>
        <div className={styles.containerProject}>
          <button
            className={`${styles.projectWrapper} ${getStyle(1)}`}
            onClick={() => handleClick(1)}
          >
            <div className={`${styles.border} ${getStyle(1)}`} />
            <h3 className={styles.projectTitle}>Flashcards App</h3>
          </button>
          <button
            className={`${styles.projectWrapper} ${getStyle(2)}`}
            onClick={() => handleClick(2)}
          >
            <div className={`${styles.border} ${getStyle(2)}`} />
            <h3 className={styles.projectTitle}>Peermusic</h3>
          </button>
          <button
            className={`${styles.projectWrapper} ${getStyle(3)}`}
            onClick={() => handleClick(3)}
          >
            <div className={`${styles.border} ${getStyle(3)}`} />
            <h3 className={styles.projectTitle}>Destroybox</h3>
          </button>
        </div>
        <div className={styles.containerInfo}>
          {/* <div className={styles.headerBG}></div> */}
          <ProjectDetails
            headerText="Flashcard App"
            description="testing props"
            skills={['React', 'Javascript']}
            images={['string 1']}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;

import classes from '../styles/Projects.module.css';
import { useState } from 'react';
import styles from '../styles/Projects.module.css';
import ProjectDetails from './ProjectDetails';
import flashcard_1 from '../public/projects/flashcard_1.png';
import flashcard_2 from '../public/projects/flashcard_2.png';
import pm_1 from '../public/projects/pm_1.png';
import pm_2 from '../public/projects/pm_2.png';
import destroybox_1 from '../public/projects/destroybox_1.png';
import destroybox_2 from '../public/projects/destroybox_2.png';

const projects = {
  flashcard: {
    headerText: 'A Flashcard Application built with React',
    description:
      'This is a full featured flashcard application I built with React and Firebase Firestore. The application allows individual user to create, edit and delete decks within their personal collection. The user can also track their knowledge through the mastery rating that can be tracked on each run through the deck. On top of that, there are a large number of stock decks a user can choose from and add to their collection. I wrote Python web scrapers to collect most of the stock decks in the collection.',
    skills: [
      'React',
      'JavaScript',
      'Firebase Firestore',
      'Material UI',
      'JSS',
      'React Router',
      'Python',
      'Beautiful Soup',
    ],
    images: [flashcard_1, flashcard_2],
  },
  peermusic: {
    headerText: 'Peermusic Neighbouring Rights',
    description: 'I built this site with for peermusics Neighbouring Rights',
    skills: ['Bootstrap', 'HTML', 'CSS', 'JavaScript', 'AOS Library'],
    images: [pm_1, pm_2],
  },
  destroybox: {
    headerText: 'Destroy Box Audio',
    description: 'Website for Destroy Box Audio',
    skills: ['JavaScript', 'HTML', 'CSS', 'React'],
    images: [destroybox_1, destroybox_2],
  },
};

function Projects(): JSX.Element {
  const [selected, setSelected] = useState<string>('flashcard');

  const getStyle = (id: string) => {
    if (selected === id) return styles.selected;
    else return '';
  };

  const handleClick = (id: string) => {
    setSelected(id);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.containerMain}>
        <div className={styles.containerProject}>
          <button
            className={`${styles.projectWrapper} ${getStyle('flashcard')}`}
            onClick={() => handleClick('flashcard')}
          >
            <div className={`${styles.border} ${getStyle('flashcard')}`} />
            <h3 className={styles.projectTitle}>Flashcards App</h3>
          </button>
          <button
            className={`${styles.projectWrapper} ${getStyle('peermusic')}`}
            onClick={() => handleClick('peermusic')}
          >
            <div className={`${styles.border} ${getStyle('peermusic')}`} />
            <h3 className={styles.projectTitle}>Peermusic</h3>
          </button>
          <button
            className={`${styles.projectWrapper} ${getStyle('destroybox')}`}
            onClick={() => handleClick('destroybox')}
          >
            <div className={`${styles.border} ${getStyle('destroybox')}`} />
            <h3 className={styles.projectTitle}>Destroybox</h3>
          </button>
        </div>
        <div className={styles.containerInfo}>
          <ProjectDetails
            selected={selected}
            headerText={projects[selected].headerText}
            description={projects[selected].description}
            skills={projects[selected].skills}
            images={projects[selected].images}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;

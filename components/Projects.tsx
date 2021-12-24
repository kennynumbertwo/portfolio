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
  portfolio: {
    headerText: 'Web Development Portfolio',
    description:
      'I built this website with React, Next JS and Typescript. I was very focused on designing every component myself without the help of any libraries. I had the same mentality when I wrote the animations. ',
    skills: ['React', 'TypeScript', 'Next JS', 'CSS Modules', 'HTML', 'CSS'],
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
            className={`${styles.projectWrapper} ${getStyle('portfolio')}`}
            onClick={() => handleClick('portfolio')}
          >
            <div className={`${styles.border} ${getStyle('portfolio')}`} />
            <h3 className={styles.projectTitle}>Portfolio</h3>
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
          {selected === 'flashcard' && (
            <ProjectDetails
              selected={selected}
              headerText={projects.flashcard.headerText}
              description={projects.flashcard.description}
              skills={projects.flashcard.skills}
              imageOne={projects.flashcard.images[0]}
              imageTwo={projects.flashcard.images[1]}
            />
          )}
          {selected === 'portfolio' && (
            <ProjectDetails
              selected={selected}
              headerText={projects.portfolio.headerText}
              description={projects.portfolio.description}
              skills={projects.portfolio.skills}
              imageOne={projects.portfolio.images[0]}
              imageTwo={projects.portfolio.images[1]}
            />
          )}
          {selected === 'peermusic' && (
            <ProjectDetails
              selected={selected}
              headerText={projects.peermusic.headerText}
              description={projects.peermusic.description}
              skills={projects.peermusic.skills}
              imageOne={projects.peermusic.images[0]}
              imageTwo={projects.peermusic.images[1]}
            />
          )}
          {selected === 'destroybox' && (
            <ProjectDetails
              selected={selected}
              headerText={projects.destroybox.headerText}
              description={projects.destroybox.description}
              skills={projects.destroybox.skills}
              imageOne={projects.destroybox.images[0]}
              imageTwo={projects.destroybox.images[1]}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;

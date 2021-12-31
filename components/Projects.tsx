import { useState } from 'react';
import styles from '../styles/Projects.module.css';
import ProjectDetails from './ProjectDetails';
import flashcard_1 from '../public/projects/flashcard_1.png';
import flashcard_2 from '../public/projects/flashcard_2.png';
import pm_1 from '../public/projects/pm_1.png';
import pm_2 from '../public/projects/pm_2.png';
import destroybox_1 from '../public/projects/destroybox_1.png';
import destroybox_2 from '../public/projects/destroybox_2.png';
import portfolio_1 from '../public/projects/portfolio_1.png';
import portfolio_2 from '../public/projects/portfolio_2.png';

const projects = {
  flashcard: {
    headerText: 'Flashcard Application',
    description:
      'This is a full featured flashcard application I built with React and Firebase Firestore. The application allows individual users to create, edit and delete decks within their personal collection. The user can also track their knowledge through the mastery rating tracked on each run through a specific deck. On top of that, there are a large number of stock decks a user can choose from and add to their collection. I wrote Python web scrapers to collect and catalog all of the stock decks in the application.',
    skills: [
      'React',
      'JavaScript',
      'Firebase',
      'MUI',
      'JSS',
      'React Router',
      'Python',
      'Beautiful Soup',
    ],
    images: [flashcard_1, flashcard_2],
    links: {
      github: 'https://github.com/kennynumbertwo/flashcard-app',
      external: 'https://trusting-easley-bb7a76.netlify.app/',
      isShowingGithub: true,
      isShowingExternal: true,
    },
  },
  portfolio: {
    headerText: 'Web Development Portfolio',
    description:
      'I built this website with React, Next JS and Typescript. I started out designing the UI and components with Figma before moving into VS Code. I was set on designing every component and all CSS myself, without the help of any external  libraries. The floating orbs in the background were meant to be static in my initial design. Once I started writing the code, I thought it would be fun for the user to realize they can interact with the background through the user interface.',
    skills: [
      'React',
      'TypeScript',
      'Next JS',
      'CSS Modules',
      'HTML',
      'CSS',
      'Figma',
    ],
    images: [portfolio_1, portfolio_2],
    links: {
      github: 'https://github.com/kennynumbertwo/portfolio',
      external: '',
      isShowingGithub: true,
      isShowingExternal: false,
    },
  },
  peermusic: {
    headerText: 'Peermusic Neighbouring Rights',
    description:
      'I built this site for Peermusic after they completed their deal with three of the largest neighbouring rights companies in the world. I built the bulk of this site with HTML, CSS and a touch of JavaScript. I used Bootstrap as the styling library.',
    skills: ['Bootstrap', 'HTML', 'CSS', 'JavaScript', 'AOS Library'],
    images: [pm_1, pm_2],
    links: {
      github: '',
      external: 'https://nr.peermusic.com/',
      isShowingGithub: false,
      isShowingExternal: true,
    },
  },
  destroybox: {
    headerText: 'Destroy Box Audio',
    description:
      'I am also a professional audio/mix engineer and wanted to build a simple site to show off the projects I’ve worked on over the years. This was my first attempt at a React application and I built it with class-based React components (I hadn’t learned hooks yet). It also allows a user to submit a form if they are interested in hiring me to work on their bands next project.',
    skills: ['JavaScript', 'HTML', 'CSS', 'React'],
    images: [destroybox_1, destroybox_2],
    links: {
      github: 'https://github.com/kennynumbertwo/destroyboxaudio',
      external: 'https://www.destroyboxaudio.com/',
      isShowingGithub: true,
      isShowingExternal: true,
    },
  },
};
interface ProjectsProps {
  isMobile: boolean;
  animateProjects: boolean;
}

function Projects({ isMobile, animateProjects }: ProjectsProps): JSX.Element {
  const [selected, setSelected] = useState<string>('flashcard');

  const getStyle = (id: string) => {
    if (selected === id) return styles.selected;
    else return '';
  };

  const handleClick = (id: string) => {
    setSelected(id);
  };

  return (
    <>
      <h2
        className={styles.header}
        style={{
          opacity: animateProjects ? 1 : 0,
          transform: animateProjects ? 'translateY(0px)' : 'translateY(20px)',
        }}
        id="projects"
      >
        Projects
      </h2>
      <section
        className={styles.wrapper}
        style={{
          opacity: animateProjects ? 1 : 0,
          transform: animateProjects ? 'translateY(0px)' : 'translateY(20px)',
        }}
      >
        <div className={styles.containerMain}>
          <div className={styles.containerProject}>
            <button
              className={`${styles.projectWrapper} ${getStyle('flashcard')}`}
              onClick={() => handleClick('flashcard')}
            >
              <div className={`${styles.border} ${getStyle('flashcard')}`} />
              <h3 className={styles.projectTitle}>Flashcard</h3>
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
              <h3 className={styles.projectTitle}>Destroy Box</h3>
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
                links={projects.flashcard.links}
                isMobile={isMobile}
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
                links={projects.portfolio.links}
                isMobile={isMobile}
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
                links={projects.peermusic.links}
                isMobile={isMobile}
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
                links={projects.destroybox.links}
                isMobile={isMobile}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;

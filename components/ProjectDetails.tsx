import styles from '../styles/ProjectDetails.module.css';
import ProjectSkill from './ProjectSkill';
import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from './icons/Github';
import ExternalLink from './icons/ExternalLink';

interface ProjectDetailsProps {
  selected: string;
  headerText: string;
  description: string;
  skills: string[];
  isMobile: boolean;
  imageOne: StaticImageData;
  imageTwo: StaticImageData;
  links: {
    github: string;
    external: string;
    isShowingGithub: boolean;
    isShowingExternal: boolean;
  };
}

function ProjectDetails({
  selected,
  headerText,
  description,
  skills,
  imageOne,
  imageTwo,
  links,
  isMobile,
}: ProjectDetailsProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.headerBG}>
        <div className={styles.headerWrapper}>
          <h3>{headerText}</h3>
        </div>
      </div>
      {selected !== 'portfolio' ? (
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image
              className={styles.screenshotOne}
              src={imageOne}
              width={315}
              height={211}
            />
          </div>
          <div className={styles.image}>
            <Image
              className={styles.screenshotTwo}
              src={imageTwo}
              width={315}
              height={211}
            />
          </div>
        </div>
      ) : (
        <div className={styles.imageContainer}>
          <div className={styles.imagePortfolio}>
            <Image
              className={styles.screenshotOne}
              src={imageOne}
              width={315}
              height={211}
            />
          </div>
          <div className={styles.imagePortfolio}>
            <Image
              className={styles.screenshotTwo}
              src={imageTwo}
              width={315}
              height={211}
            />
          </div>
        </div>
      )}
      <div className={styles.descriptionContainer}>
        <p>{description}</p>
        <div className={styles.iconContainer}>
          {links.isShowingGithub && (
            <Link href={links.github}>
              <a target="_blank">
                <span>
                  <GithubIcon size={isMobile ? 20 : 24} />
                </span>
              </a>
            </Link>
          )}
          {links.isShowingExternal && (
            <Link href={links.external}>
              <a target="_blank">
                <span>
                  <ExternalLink size={isMobile ? 20 : 24} />
                </span>
              </a>
            </Link>
          )}
        </div>
      </div>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <ProjectSkill
            key={`${selected}-${skill}`}
            text={skill}
            delay={index}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;

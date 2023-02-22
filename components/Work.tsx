import styles from '../styles/Work.module.css';

interface WorkProps {
  animateProjects: boolean;
}

const workList = [
  {
    name: "Buddy's Wine",
    year: 'Coming Soon',
    client: 'Bondfire',
    link: '',
  },
  {
    name: "Frankie's 457",
    year: 'Coming Soon',
    client: 'Bondfire',
    link: '',
  },
  {
    name: 'Trendsetters-Consulting Inc.',
    year: 'Coming Soon',
    client: 'Contract',
    link: '',
  },
  {
    name: 'RAD Furniture',
    year: '2023',
    client: 'Bondfire',
    link: 'https://radfurniture.com/',
  },
  { name: 'bf.inc', year: '2022', client: 'Bondfire', link: 'https://bf.inc' },
  {
    name: 'Strong Brand Social',
    year: '2022',
    client: 'Bondfire',
    link: 'https://strongbrandsocial.com/',
  },
  {
    name: 'GSTQ',
    year: '2023',
    client: 'Bondfire',
    link: 'https://gstq.com/',
  },
  {
    name: 'Start Small Thing Big - App',
    year: '2022 - 2023',
    client: 'Contract',
    link: 'https://app.startsmallthinkbig.org/',
  },
  {
    name: 'Donda Sports',
    year: '2022',
    client: 'Oneup View',
    link: '',
  },
];

function Work({ animateProjects }: WorkProps): JSX.Element {
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
        Professional Work
      </h2>
      <section
        className={styles.wrapper}
        style={{
          opacity: animateProjects ? 1 : 0,
          transform: animateProjects ? 'translateY(0px)' : 'translateY(20px)',
        }}
      >
        <div className={styles.workWrapper}>
          {workList.map((item) => (
            <div className={styles.workItem}>
              {item.link ? (
                <a className={styles.nameLink} href={item.link}>
                  {item.name}
                </a>
              ) : (
                <p className={styles.name}>{item.name}</p>
              )}
              {item.year === 'Coming Soon' ? (
                <p className={styles.yearInactive}>{item.year}</p>
              ) : (
                <p className={styles.year}>{item.year}</p>
              )}
              <p className={styles.client}>{item.client}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Work;

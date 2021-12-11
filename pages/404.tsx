import Link from 'next/link';
import styles from '../styles/NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.NotFound}>
      <h1>Ooooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{' '}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;

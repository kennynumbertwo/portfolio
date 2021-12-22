import styles from '../styles/OrbsContainer.module.css';
import { useEffect, useState } from 'react';
import Orb from './Orb';

function OrbsContainer() {
  const [orbs, setOrbs] = useState<string[]>([]);
  const [userOrbs, setUserOrbs] = useState<string[]>([]);
  const [orbCount, setOrbCount] = useState<number>(1);
  const [orbCountUser, setOrbCountUser] = useState<number>(1);
  const [orbTimer, setOrbTimer] = useState<number>(2000);

  useEffect(() => {
    if (orbs.length >= 2) {
      setOrbTimer(4000);
      setOrbs([...orbs, `orb${orbCount}`]);
    }
    if (orbs.length > 10) {
      let orbsCopy = [...orbs];
      let updatedOrbs = orbsCopy.slice(1);
      setOrbs(updatedOrbs);
    } else {
      setOrbs([...orbs, `orb${orbCount}`]);
    }
    setTimeout(() => {
      setOrbCount(orbCount + 1);
    }, orbTimer);
  }, [orbCount]);

  const handleAddOrbClick = () => {
    if (userOrbs.length > 10) {
      let userOrbsCopy = [...userOrbs];
      let updatedUserOrbs = userOrbsCopy.slice(1);
      let newUserOrbs = [...updatedUserOrbs, `userOrb${orbCountUser}`];
      setUserOrbs(newUserOrbs);
      setOrbCountUser(orbCountUser + 1);
    } else {
      let newUserOrbs = [...userOrbs, `userOrb${orbCountUser}`];
      setUserOrbs(newUserOrbs);
      setOrbCountUser(orbCountUser + 1);
    }
  };
  return (
    <div className={styles.container}>
      {orbs.map((orb) => (
        <Orb key={orb} />
      ))}
      {userOrbs.map((orb) => (
        <Orb key={orb} />
      ))}
    </div>
  );
}

export default OrbsContainer;

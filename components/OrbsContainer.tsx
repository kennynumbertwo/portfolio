import styles from '../styles/OrbsContainer.module.css';
import { useEffect, useState } from 'react';
import Orb from './Orb';

interface NewOrb {
  id: string;
  isFading: boolean;
}

function OrbsContainer() {
  const [orbs, setOrbs] = useState<Array<NewOrb>>([]);
  const [userOrbs, setUserOrbs] = useState<Array<NewOrb>>([]);
  const [orbCount, setOrbCount] = useState<number>(1);
  const [orbCountUser, setOrbCountUser] = useState<number>(1);
  const [orbTimer, setOrbTimer] = useState<number>(2000);

  useEffect(() => {
    if (orbs.length >= 2) {
      setOrbTimer(2500);
      setOrbs([...orbs, { id: `orb${orbCount}`, isFading: false }]);
    }
    if (orbs.length > 15) {
      const firstOrb = orbs[0].id;
      console.log(firstOrb);
      const newOrbs = [...orbs, { id: `orb${orbCount}`, isFading: false }];
      newOrbs[1].isFading = true;
      const updatedOrbs = newOrbs.slice(1);
      setOrbs(updatedOrbs);
    } else {
      setOrbs([...orbs, { id: `orb${orbCount}`, isFading: false }]);
    }
    const timer = setTimeout(() => {
      setOrbCount(orbCount + 1);
    }, orbTimer);
    return () => clearTimeout(timer);
  }, [orbCount]);

  const handleAddOrbClick = () => {
    if (userOrbs.length > 10) {
      let userOrbsCopy = [...userOrbs];
      let updatedUserOrbs = userOrbsCopy.slice(1);
      let newUserOrbs = [
        ...updatedUserOrbs,
        { id: `userOrb${orbCountUser}`, isFading: false },
      ];
      setUserOrbs(newUserOrbs);
      setOrbCountUser(orbCountUser + 1);
    } else {
      let newUserOrbs = [
        ...userOrbs,
        { id: `userOrb${orbCountUser}`, isFading: false },
      ];
      setUserOrbs(newUserOrbs);
      setOrbCountUser(orbCountUser + 1);
    }
  };
  return (
    <div className={styles.container}>
      {orbs.map((orb) => (
        <Orb key={orb.id} id={orb.id} isFading={orb.isFading} />
      ))}
      {userOrbs.map((orb) => (
        <Orb key={orb.id} id={orb.id} isFading={orb.isFading} />
      ))}
    </div>
  );
}

export default OrbsContainer;

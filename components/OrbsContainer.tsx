import styles from '../styles/OrbsContainer.module.css';
import { useEffect, useState } from 'react';
import Orb from './Orb';
import LinkFooterBubble from './LinkFooterBubble';

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
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    if (isRunning) {
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
    }
  }, [orbCount, isRunning]);

  const handleAddOrbClick = () => {
    if (userOrbs.length > 15) {
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
  const handleClearOrbClick = () => {
    const orbsCopy = [...orbs];
    const userOrbsCopy = [...userOrbs];
    orbsCopy.forEach((orb) => {
      orb.isFading = true;
    });
    userOrbsCopy.forEach((orb) => {
      orb.isFading = true;
    });
    setOrbs(orbsCopy);
    setUserOrbs(userOrbsCopy);
    setTimeout(() => {
      setOrbs([]);
      setUserOrbs([]);
    }, 200);
  };

  const handleStartClick = () => {
    if (!isRunning) setIsRunning(true);
  };
  const handleStopClick = () => {
    if (isRunning) setIsRunning(false);
  };

  return (
    <div className={styles.container}>
      {orbs.map((orb) => (
        <Orb key={orb.id} id={orb.id} isFading={orb.isFading} isUser={false} />
      ))}
      {userOrbs.map((orb) => (
        <Orb key={orb.id} id={orb.id} isFading={orb.isFading} isUser={true} />
      ))}
      <LinkFooterBubble
        handleAddOrbClick={handleAddOrbClick}
        handleClearOrbClick={handleClearOrbClick}
        handleStartClick={handleStartClick}
        handleStopClick={handleStopClick}
      />
    </div>
  );
}

export default OrbsContainer;

import styles from '../styles/OrbsContainer.module.css';
import { useEffect, useState } from 'react';
import Orb from './Orb';
import LinkFooterBubble from './LinkFooterBubble';
import LinkFooterBubbleMobile from './LinkFooterBubbleMobile';

interface NewOrb {
  id: string;
  isFading: boolean;
}
interface OrbsContainerProps {
  isMobile: boolean;
}

function OrbsContainer({ isMobile }: OrbsContainerProps) {
  const [scroll, setScroll] = useState<number>(0);
  const [orbs, setOrbs] = useState<Array<NewOrb>>([]);
  const [userOrbs, setUserOrbs] = useState<Array<NewOrb>>([]);
  const [orbCount, setOrbCount] = useState<number>(1);
  const [orbCountUser, setOrbCountUser] = useState<number>(1);
  const [orbTimer, setOrbTimer] = useState<number>(2000);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  // While isRunning, automatically creates orbs in the background
  useEffect(() => {
    if (isRunning) {
      if (orbs.length >= 2) {
        setOrbTimer(2500);
        setOrbs([...orbs, { id: `orb${orbCount}`, isFading: false }]);
      }
      if (orbs.length > 15) {
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

  // Click handler for the add orb button. If over a certain length, will delete an orb when a new orb is created.
  const handleAddOrbClick = () => {
    if (userOrbs.length > 20) {
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

  // Click handler for the clear orbs button
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

  // Click handler for the start orbs button
  const handleStartClick = () => {
    if (!isRunning) setIsRunning(true);
  };

  // Click handler for the stop orbs button
  const handleStopClick = () => {
    if (isRunning) setIsRunning(false);
  };

  return (
    <div className={styles.container}>
      {orbs.map((orb) => (
        <Orb
          key={orb.id}
          id={orb.id}
          isFading={orb.isFading}
          isUser={false}
          scroll={scroll}
          isMobile={isMobile}
        />
      ))}
      {userOrbs.map((orb) => (
        <Orb
          key={orb.id}
          id={orb.id}
          isFading={orb.isFading}
          isUser={true}
          scroll={scroll}
          isMobile={isMobile}
        />
      ))}
      {isMobile ? (
        <LinkFooterBubbleMobile
          handleAddOrbClick={handleAddOrbClick}
          handleClearOrbClick={handleClearOrbClick}
          handleStartClick={handleStartClick}
          handleStopClick={handleStopClick}
        />
      ) : (
        <LinkFooterBubble
          handleAddOrbClick={handleAddOrbClick}
          handleClearOrbClick={handleClearOrbClick}
          handleStartClick={handleStartClick}
          handleStopClick={handleStopClick}
        />
      )}
    </div>
  );
}

export default OrbsContainer;

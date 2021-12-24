import { useState, useEffect } from 'react';

const orbColors = [
  'rgba(7, 31, 69, 0.5)',
  'rgba(55, 88, 102, 0.5)',
  'rgba(55, 59, 102, 0.5)',
  'rgba(16, 80, 58, 0.5)',
  'rgba(154, 72, 43, 0.3)',
  'rgba(213, 111, 79, 0.2)',
  'rgba(79, 213, 95, 0.2)',
  'rgba(143, 57, 130, 0.3)',
];

interface OrbProps {
  id: string;
  isFading: boolean;
  isUser: boolean;
}

function Orb({ id, isFading, isUser }: OrbProps) {
  const [scroll, setScroll] = useState<number>(0);
  const [orbPosX, setOrbPosX] = useState<number>(0);
  const [orbPosY, setOrbPosY] = useState<number>(0);
  const [orbSize, setOrbSize] = useState<number>(0);
  const [orbOpacity, setOrbOpacity] = useState<number>(1);
  const [orbGrowth, setOrbGrowth] = useState<number>(0);
  const [orbColor, setOrbColor] = useState<string>('');
  const [orbSpeedHor, setOrbSpeedHor] = useState<number>(0);
  const [orbSpeedVert, setOrbSpeedVert] = useState<number>(0);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    initializeOrb();
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      let x = orbPosX + orbSpeedHor / 10;
      let y = orbPosY + orbSpeedVert / 10;
      let g = orbSize + orbGrowth / 10;
      setOrbPosX(x);
      setOrbPosY(y);
      if (timer > 100) {
        let opacity = orbOpacity - 0.02;
        let shrink = orbSize * 0.999;
        setOrbOpacity(opacity);
        setOrbSize(shrink);
      }
      if (timer <= 100) {
        setOrbSize(g);
      }
      if (isFading) {
        let opacity = orbOpacity - 0.02;
        let shrink = orbSize * 0.999;
        setOrbOpacity(opacity);
        setOrbSize(shrink);
      }
      const timeout = setTimeout(() => {
        setTimer(timer + 0.1);
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [isInitialized, timer]);

  useEffect(() => {
    if (isInitialized) window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      let x = orbPosX + orbSpeedHor;
      let y = orbPosY + orbSpeedVert;
      let g = orbSize + orbGrowth;
      setOrbPosX(x);
      setOrbPosY(y);
      setOrbSize(g);
    }
  }, [scroll]);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const initializeOrb = () => {
    let x = Math.floor(Math.random() * 2000) - 500;
    let y = Math.floor(Math.random() * 500);
    let speedX = getSpeed();
    let speedY = getSpeed();
    let growth = getGrowth();
    let size = getSize();
    let color = getColor();
    setOrbPosX(x);
    setOrbPosY(y);
    setOrbSize(size);
    setOrbColor(color);
    setOrbSpeedHor(speedX);
    setOrbSpeedVert(speedY);
    setOrbGrowth(growth);
  };

  // const orbTimer = () => {
  //   let x = orbPosX + orbSpeedHor;
  //   let y = orbPosY + orbSpeedVert;
  //   let g = orbSize + orbGrowth;
  //   setOrbPosX(x);
  //   setOrbPosY(y);
  //   setOrbSize(g);
  // };

  const getSpeed = () => {
    let speed = Math.random() * 10;
    let direction = Math.floor(Math.random() * 10);
    if (direction >= 5) {
      return speed;
    }
    return -speed;
  };

  const getGrowth = () => {
    let rate = Math.random() * 2;
    let direction = Math.floor(Math.random() * 10);
    if (direction >= 5) {
      return rate;
    }
    return -rate;
  };

  const getSize = () => {
    let size = Math.floor(Math.random() * 500);
    if (size < 200) {
      size = size + 300;
    }
    return size;
  };

  const getColor = () => {
    let colorIndex = Math.floor(Math.random() * orbColors.length);
    return orbColors[colorIndex];
  };

  return (
    <div
      className={isUser ? 'userOrb' : 'orb'}
      style={{
        left: orbPosX,
        top: orbPosY,
        height: orbSize,
        width: `${orbSize}px`,
        backgroundColor: orbColor,
        opacity: orbOpacity,
      }}
    />
  );
}

export default Orb;

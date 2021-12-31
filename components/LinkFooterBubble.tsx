import { useState } from 'react';
import styles from '../styles/LinkFooterBubble.module.css';
import AddIcon from './icons/Add';
import MinusIcon from './icons/Minus';
import PauseIcon from './icons/Pause';
import PlayIcon from './icons/Play';
import QuestionMarkIcon from './icons/QuestionMark';
import TrashIcon from './icons/Trash';
interface LinkFooterBubbleMobileProps {
  handleAddOrbClick(): any;
  handleClearOrbClick(): any;
  handleStartClick(): any;
  handleStopClick(): any;
}
function LinkFooterBubble({
  handleAddOrbClick,
  handleClearOrbClick,
  handleStartClick,
  handleStopClick,
}: LinkFooterBubbleMobileProps) {
  const [isShowingControls, setIsShowingContols] = useState<boolean>(false);
  const [animation, setAnimation] = useState<string>('');

  const handleShowControls = () => {
    setIsShowingContols(true);
  };
  const handleHideControls = () => {
    setAnimation('animateOut 350ms ease-in-out');
    setTimeout(() => {
      setAnimation('');
      setIsShowingContols(false);
    }, 340);
  };

  return (
    <div className={styles.iconsWrapperOuter}>
      <div className={styles.iconsWrapperInner}>
        {isShowingControls ? (
          <div className={styles.controller}>
            <button
              onClick={handleAddOrbClick}
              style={{ animation: `${animation}` }}
            >
              <span className={styles.iconTrash}>
                <AddIcon />
              </span>
            </button>
            <button
              onClick={handleClearOrbClick}
              style={{ animation: `${animation}` }}
            >
              <span className={styles.iconTrash}>
                <TrashIcon />
              </span>
            </button>
            <button
              onClick={handleStartClick}
              style={{ animation: `${animation}` }}
            >
              <span className={styles.iconPlay}>
                <PlayIcon />
              </span>
            </button>
            <button
              onClick={handleStopClick}
              style={{ animation: `${animation}` }}
            >
              <span className={styles.iconPause}>
                <PauseIcon />
              </span>
            </button>
            <button
              onClick={handleHideControls}
              style={{ animation: `${animation}` }}
            >
              <span className={styles.iconMinus}>
                <MinusIcon />
              </span>
            </button>
          </div>
        ) : (
          <>
            <button onClick={handleShowControls}>
              <span className={styles.iconQuestion}>
                <QuestionMarkIcon />
              </span>
            </button>
          </>
        )}
        <div className={styles.verticalLine} />
      </div>
    </div>
  );
}

export default LinkFooterBubble;

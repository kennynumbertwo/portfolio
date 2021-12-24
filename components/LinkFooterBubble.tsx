import { useState } from 'react';
import styles from '../styles/LinkFooterBubble.module.css';
import AddIcon from './icons/Add';
import PauseIcon from './icons/Pause';
import PlayIcon from './icons/Play';
import QuestionMarkIcon from './icons/QuestionMark';
import TrashIcon from './icons/Trash';

function LinkFooterBubble({
  handleAddOrbClick,
  handleClearOrbClick,
  handleStartClick,
  handleStopClick,
}) {
  const [isShowingControls, setIsShowingContols] = useState<boolean>(false);

  const handleShowControls = () => {
    setIsShowingContols(true);
  };

  return (
    <div className={styles.iconsWrapperOuter}>
      <div className={styles.iconsWrapperInner}>
        {isShowingControls ? (
          <>
            <button onClick={handleAddOrbClick}>
              <span className={styles.iconAdd}>
                <AddIcon />
              </span>
            </button>
            <button onClick={handleClearOrbClick}>
              <span className={styles.iconTrash}>
                <TrashIcon />
              </span>
            </button>
            <button onClick={handleStartClick}>
              <span className={styles.iconPlay}>
                <PlayIcon />
              </span>
            </button>
            <button onClick={handleStopClick}>
              <span className={styles.iconPause}>
                <PauseIcon />
              </span>
            </button>
          </>
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

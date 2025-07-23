import styles from './task_example.module.scss';
import React, { use, useState} from 'react';

const items = [
  { id: 1, image: '/images/carousel1.jpg', alt: 'Image 1' },
  { id: 2, image: '/images/carousel2.jpg', alt: 'Image 2' },
  { id: 3, image: '/images/carousel3.jpg', alt: 'Image 3' },
  { id: 4, image: '/images/carousel4.jpg', alt: 'Image 4' },
];
function LightDarkSwitcher({theme, setTheme}) {
  // a theme switcher compenent
  return (
    <div className = {styles.switcherContainer}>
      <button className={styles.lightButton} onClick={() => setTheme('light')}>
        sun
        <img src = 'image/sun.png' alt = 'Light Mode' />
      </button>
      <button className={styles.darkButton} onClick={() => setTheme('dark')}> 
        dark
        <img src = 'image/moon.png' alt = 'Dark Mode' />
      </button>
    </div>
  );
}

export default function Task() {
  const[theme, setTheme] = useState('light');


  //click on themeButton to make the switcher visible
  const [isSwitcherVisible, setSwitcherVisible] = useState(false);
  const handleClick = () => {
    setSwitcherVisible(!isSwitcherVisible);
  }

  return (
    <main>
      {/* adding TWO classNames to this div */}
      <div className={`${styles.container} ${theme === 'light' ? styles.light : styles.dark}`}>
        <div className={styles.switcher}>
          <button className={styles.themeButton} onClick={handleClick}>Theme Switcher</button>
          {isSwitcherVisible && <LightDarkSwitcher theme={theme} setTheme={setTheme}/>}
        </div>
        <h1>Task: Trying to make a color changing carousel</h1>
      </div>
    </main>
  );
}
import styles from './task2.module.scss';
import Carousel from '../_components/Carousel/Carousel';
import DarkModeToggle from '../_components/Theme/ThemeToggle/ThemeToggle'
import ThemeProvider from '../_components/Theme/ThemeProvider/ThemeProvider';

const images = [
  "/cute.png",
  "/baseball.png",
  "/beast.png",
  "/cookie.png",
  "/tears.png"
]

export default function Task() {
  return (
    <ThemeProvider>
      <div className={styles.mainContainer}>
        <DarkModeToggle/>
        <Carousel images={images}/>
      </div>
    </ThemeProvider>
  );
}
import styles from './task2.module.scss';
import Carousel from '../_components/Carousel/Carousel';

const images = [
  "/cute.png",
  "/baseball.png",
  "/beast.png",
  "/cookie.png",
  "/tears.png"
]

export default function Task() {
  return (
    <main>
      <div className={styles.mainContainer}>
        <Carousel images={images}/>
      </div>
    </main>
  );
}
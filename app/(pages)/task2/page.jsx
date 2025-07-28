import styles from './task2.module.scss';
import Carousel from '../_components/Carousel/Carousel';

export default function Task() {
  return (
    <main>
      <div className={styles.mainContainer}>
        <Carousel/>
      </div>
    </main>
  );
}
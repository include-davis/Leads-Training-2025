import styles from './task_example.module.scss';
import TaskCard from '../_components/taskCard';
import TaskCarousel from '../_components/taskCarousel';

export default function Task() {
  return (
    <main>
      <div className={styles.container}>
        <TaskCarousel />
      </div>
    </main>
  );
}
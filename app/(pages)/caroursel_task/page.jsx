import styles from './task_example.module.scss';
import TaskCard from '../_components/taskCard';
import TaskCarousel from '../_components/taskCarousel';
import Switch from '../_components/switch';


export default function Task() {
  return (
    
    <main>
      <div>
        <Switch />
      </div>
      <div className={styles.container}>
        <TaskCarousel />
      </div>
    </main>
  );
}
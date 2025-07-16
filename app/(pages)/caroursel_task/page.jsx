import styles from './task_example.module.scss';
import TaskCard from '../_components/taskCard';

export default function Task() {
  return (
    <main>
      <div className={styles.container}>
        <TaskCard props={{ title: 'Task 1', description: 'Task 1 description', url: '/task_example' }} />
        <TaskCard props={{ title: 'Task 2', description: 'Task 2 description', url: '/task_example' }} />
        <TaskCard props={{ title: 'Task 3', description: 'Task 3 description', url: '/task_example' }} />
        <TaskCard props={{ title: 'Task 4', description: 'Task 4 description', url: '/task_example' }} />
        <TaskCard props={{ title: 'Task 5', description: 'Task 5 description', url: '/task_example' }} />
      </div>
    </main>
  );
}
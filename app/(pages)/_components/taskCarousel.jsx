import TaskCard from './taskCard';
import styles from './taskCarousel.module.scss';

export default function TaskCarousel({ }) {

    return (
        <div className={styles.carousel}>
            <button>Prev</button>
            <TaskCard props={{ title: 'Task 1', description: 'Task 1 description', url: '/task_example', hidden: true, small: true }} />
            <TaskCard props={{ title: 'Task 2', description: 'Task 2 description', url: '/task_example', hidden: false, small: true }} />
            <TaskCard props={{ title: 'Task 3', description: 'Task 3 description', url: '/task_example', hidden: false, small: false }} />
            <TaskCard props={{ title: 'Task 4', description: 'Task 4 description', url: '/task_example', hidden: false, small: true }} />
            <TaskCard props={{ title: 'Task 5', description: 'Task 5 description', url: '/task_example', hidden: true, small: true}} />
            <button>Next</button>
        </div>
    );
}
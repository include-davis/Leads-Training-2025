import TaskCard from './taskCard';
import styles from './taskCarousel.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';

function rotateCards(props) {
    if (center){
        return (
            styles.smallCard
        )
    }
}





export default function TaskCarousel({ }) {

    const data = ["1", "2", "3", "4", "5"];
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselInfiniteScroll = () =>{
        if (currentIndex === data.length - 1){
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    }

    useEffect(()=> {
        const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
        return () => clearInterval(interval);
    })

    
    return (
        <div className={styles.carousel}>
            <button
                className={styles.prevButton}
                onClick={() => {
                    console.log('Prev');

                }}
            >Prev</button>
            <TaskCard props={{ id: 1, title: 'Task 1', description: 'Task 1 description', url: '/task_example', hidden: true, small: true, center: false }} />
            <TaskCard props={{ id: 2, title: 'Task 2', description: 'Task 2 description', url: '/task_example', hidden: false, small: true, center: false }} />
            <TaskCard props={{ id: 3, title: 'Task 3', description: 'Task 3 description', url: '/task_example', hidden: false, small: false, center:true }} />
            <TaskCard props={{ id: 4, title: 'Task 4', description: 'Task 4 description', url: '/task_example', hidden: false, small: true, center: false }} />
            <TaskCard props={{ id: 5, title: 'Task 5', description: 'Task 5 description', url: '/task_example', hidden: true, small: true, center: false}} />
            <button>Next</button>
        </div>
    );
}
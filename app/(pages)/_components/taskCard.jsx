import styles from './taskCard.module.scss';
import Link from 'next/link';

export default function TaskCard({ props }) {
    const { title, description, url } = props;

    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link href={url}></Link>
        </div>
    );
}

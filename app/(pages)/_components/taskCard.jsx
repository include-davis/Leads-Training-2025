import styles from './taskCard.module.scss';
import Link from 'next/link';

export default function TaskCard({ props }) {
    const { title, description, url, hidden, small } = props;

    if (hidden) {
        return null; // Don't render anything if hidden
    }

    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link href={url}></Link>
        </div>
    );
}

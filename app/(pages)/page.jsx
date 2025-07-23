import Link from 'next/link';
import styles from './page.module.scss';

const days = [
  { day: 1, title: 'Task 1', description: 'Add task description here.', url: '/task_example' },
  { day: 2, title: 'Task 2', description: 'Make an image carousel (button for left/right) with a theme switcher (night and day) to change background and text colors defined in globals.scss', url: '/#' },
  { day: 3, title: 'Task 3', description: 'Add task description here.', url: '/#' },
  { day: 4, title: 'Task 4', description: 'Add task description here.', url: '/#' },
  { day: 5, title: 'Task 5', description: 'Add task description here.', url: '/#' },
];

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <h1>2025–2026 <i>#include</i> Leads Training Onboarding</h1>
        <p>In preparation for leading your own cohort.</p>
        <a href="#plan" className={styles.ctaBtn}>Get Started</a>
      </header>

      <section id="plan" className={styles.planSection}>
        <h2>Task Dashboard</h2>
        <p>Add more tasks as you progress through the onboarding.</p>
        <div className={styles.grid}>
          {days.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <Link href={item.url} className={styles.link}>
                <div className={styles.day}>Day {item.day}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

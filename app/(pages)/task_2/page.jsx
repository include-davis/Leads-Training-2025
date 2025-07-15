'use client';
import styles from './task_2.module.scss';
// import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import Carousel from '../_components/Carousel/Carousel';

export default function Task_2() {
  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <h1>🌓 Theme Switcher + Anime Carousel</h1>
        {/* <ThemeSwitcher /> */}
      </header>

      <section className={styles.carouselSection}>
        {/* Placeholder for carousel */}
        <Carousel />
      </section>
    </main>
  );
}

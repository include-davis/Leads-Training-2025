"use client";
import styles from './task4.module.scss';
import ContactForm from '../_components/ContactForm/ContactForm';


export default function task4() {
  return (
    <main>
      <div className={styles.mainContainer}>
        <ContactForm/>
      </div>
    </main>
  );

}
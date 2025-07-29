"use client";
import styles from './task4.module.scss';
import { useState } from 'react';


export default function Task() {
  return (
    <main>
      <div className={styles.mainContainer}>
        Contact Form
        <form className={styles.formContainer}>
          <input name="name" placeholder='name'/>
          <input name="email" placeholder='email'/>
          <textarea name="message" placeholder='message'/>
          <button type='submit'>submit</button>
        </form>
      </div>
    </main>
  );
}
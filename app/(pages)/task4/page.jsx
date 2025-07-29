"use client";
import styles from './task4.module.scss';
import { useState } from 'react';


export default function ContactForm() {
  const [form, updateForm] = useState({name: '', email: '', message: ''})

  const handleChange = (e) => {
    updateForm({...form, [e.target.name]: e.target.value})
  }
  return (
    <main>
      <div className={styles.mainContainer}>
        Contact Form
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input name="name" placeholder='name' onChange={handleChange}/>
          <input name="email" placeholder='email' onChange={handleChange}/>
          <textarea name="message" placeholder='message' onChange={handleChange}/>
          <button type='submit'>submit</button>
        </form>
      </div>
    </main>
  );
}
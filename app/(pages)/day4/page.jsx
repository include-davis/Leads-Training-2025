
'use client';
import React, { useState, useRef } from "react";
import styles from './page.module.scss';
import Image from "next/image";

export default function ContactForm() {

  const [form, setForm] = useState({name: '', email: '', message: ''});
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const resData = await res.json();
      if (!res.ok) {
        throw new Error(resData.error || "Unknown error");
      }
      setStatus("Success");
    } catch (e) {
      setStatus("Failed");
    }
  };
  return (
    
    <div className={styles.formBox}>

      <form id="contactForm" className={styles.contactForm} onSubmit={handleSubmit}> 
        <h1> Contact Form </h1>
        
        <label htmlFor="name">Name:</label>
        <input className={styles.input} type="text" id="name" name="name" onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input className={styles.input} type="email" id="email" name="email" onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea className={styles.textarea} id="message" name="message" onChange={handleChange}></textarea>

        <button className={styles.submit} type="submit">Submit</button>
      </form>

      <div id="statusMessage">{status}</div>

    </div>
  );
}

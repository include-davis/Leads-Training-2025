'use client';

import { useState } from 'react'
import styles from './basic-contact.module.scss'

export default function BasicContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) 

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  // handler
  async function handleSubmit(e) {
    e.preventDefault()
    setStatus(null)
    const res = await fetch('/api/contact', {
      method: 'POST', // since we sending the info for the email to our backend
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  return (
    // this is just the basic form
    <form onSubmit={handleSubmit} className={styles.form}> 
      <input
        className={styles.input}
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className={styles.input}
        name="email"
        type="email"
        placeholder="Your email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="Your message"
        value={form.message}
        onChange={handleChange}
        required
      />
      <button className={styles.button} type="submit">
        Send
      </button>

      {/* msgs to show user */}
      {status === 'success' && (
        <p className={`${styles.message} ${styles.success}`}>
          yay it worked!!
        </p>
      )}
      {status === 'error' && (
        <p className={`${styles.message} ${styles.error}`}>
          smth went wrong
        </p>
      )}
    </form>
  )
}

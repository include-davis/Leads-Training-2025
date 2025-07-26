import styles from './page.module.scss';


export default function ContactForm() {
  return (
    
    <div className={styles.formBox}>

      <form id="contactForm" className={styles.contactForm}> 
        <h1> Contact Form </h1>
        
        <label htmlFor="name">Name:</label>
        <input className={styles.input} type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input className={styles.input} type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea className={styles.textarea} id="message" name="message" required></textarea>

        <button className={styles.submit} type="submit">Submit</button>
      </form>
      <div id="statusMessage"></div>


    </div>
  );
}

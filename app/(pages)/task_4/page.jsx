'use client';
import {useState} from "react";
import styles from "./page.module.scss";

export default function contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState("");
    const [previewUrl, setPreviewUrl]= useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        
        try{
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          
          const data = await res.json();

          if (res.ok){
            setStatus("Message sent successfully!");
            setPreviewUrl(data.preview);
            setFormData({ name: '', email: '', message: '' }); // Reset form
          }

          else{
            setStatus(`Error: ${data.error}`);

          }
        } catch(err){
          console.error("Submission error:", err);
          setStatus("An error occurred while sending the message.");
        }
};

return (
  <div className={styles.contactForm}>
      <h1 className={styles.header}>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <br />


        <label>
          Your Message:
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <br />

        <button type="submit">Send</button>
      </form>

      <p>{status}</p>

      {previewUrl && (
        <p>
          Preview Email:{" "}
          <a href={previewUrl} target="_blank" rel="noopener noreferrer">
            View Message
          </a>
        </p>
      )}
    </div>
  );
}
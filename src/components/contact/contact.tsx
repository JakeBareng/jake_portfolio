import { useForm } from "@formspree/react"
import { useState } from "react";
import styles from './contact_style.module.css'

export default function Contact() {
    const [state, handleSubmit] = useForm(`${import.meta.env.VITE_FORMSPREE_ID}`);
    const [name, setName] = useState('');

    if (state.succeeded) {
        return (
            <div>
                <h1>Thanks {name} for reaching out!</h1>
                <p>I'll get back to you as soon as possible.</p>
            </div>
        )
    }

    return (
        <section id="contact" className={styles.container}>
            <form className={styles.contact_form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Send Me A Message!</h1>
                <input placeholder="Your Name" type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
                <input placeholder="name@email.com" type="email" name="email" />
                <input placeholder="Your Business" type="text" name="business" />
                <textarea placeholder="Your Message" name="message" />
                <button type="submit" disabled={state.submitting}>
                    Send Message
                </button>
            </form>
        </section>
    )
}
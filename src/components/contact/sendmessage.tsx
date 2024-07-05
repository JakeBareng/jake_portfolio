import { ValidationError, useForm } from "@formspree/react"
import { useState } from "react";
import styles from './sendmessage.module.css'

export default function SendMessage() {
    const [state, handleSubmit] = useForm(`${import.meta.env.VITE_FORMSPREE_ID}`);
    const [name, setName] = useState('');

    return (
        <section className={styles.container}>
            <form className={styles.contact_form} onSubmit={handleSubmit}>
                {
                    state.succeeded ?
                        <>
                            <h1 className={styles.title}>Thanks {name} for reaching out!</h1>
                            <p className={styles.title}>I'll get back to you as soon as possible.</p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p className={styles.title}>Jake Bareng.</p>
                        </>
                        :
                        <>
                            <h1 className={styles.title}>Send Me A Message!</h1>
                            <input id="name" placeholder="Your Name" type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                            <ValidationError className={styles.error} prefix="name" field="name" errors={state.errors} />
                            <input id="email" placeholder="name@email.com" type="email" name="email" />
                            <ValidationError className={styles.error} prefix="email" field="email" errors={state.errors} />
                            <input placeholder="Your Business" type="text" name="business" />
                            <textarea placeholder="Your Message" name="message" />
                            <ValidationError className={styles.error} errors={state.errors} />
                            <button type="submit" disabled={state.submitting}>
                                Send Message
                            </button>
                        </>
                }
            </form>
        </section>
    )
}
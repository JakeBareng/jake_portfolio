import SendMessage from "./sendmessage";
import Socials from "./socials";
import styles from './contact.module.css'

export default function Contact() {
    return (
        <div className={styles.container}>
            <SendMessage />
            <Socials />
        </div>
    )
}
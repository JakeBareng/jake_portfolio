import TextScrollEffect from "./textScrollEffect";
import Headshot from "./headshot";
import ContactMeButn from "./contactme_butn";
import styles from "./intro_styles.module.css"

export default function Intro() {
    return (
        <section className={styles.container}>
            <div>
                <h3 className={styles.title}>Hi, I'm&nbsp;</h3>
                <h3 className={styles.title__name}>Jake!</h3>
            </div>
            <TextScrollEffect />
            <Headshot />
            <ContactMeButn />
        </section>
    )
}
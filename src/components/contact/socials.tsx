import styles from './socials.module.css';

export default function Socials() {
    return (
        <section id="contact" className={styles.container}>
            <h2 className={styles.title}>Contacts</h2>
            <div className={styles.socials_list}>
                <a href="mailto:barengjake@gmail.com" className={styles.socials_item}>
                    barengjake@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/jakebareng/" className={styles.socials_item}>
                    linkedin.com/in/jakebareng
                </a>
                <a href="https://github.com/jakebareng" className={styles.socials_item}>
                    github.com/jakebareng
                </a>
            </div>
        </section>
    )
}
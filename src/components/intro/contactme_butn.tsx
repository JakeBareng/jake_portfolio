import styles from './contactme_butn_style.module.css'

export default function ContactMeButn() {
    return (
        <div className={styles.container}>
            <a href="#">
                <div className={styles.button}>
                    <span className={styles.button__text}>Contact Me</span>
                </div>
            </a>
        </div>
    )
}
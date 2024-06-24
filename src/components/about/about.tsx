import styles from "./about_style.module.css"

export default function About() {
    return (
        <section className={styles.container}>
            <div className={styles.content_container}>
                <div className={styles.content_container_sub}>
                    <h1 className={styles.title}>About Me</h1>
                    <p className={styles.content}> As a web and software developer, I am passionate about transforming ideas into reality through digital innovation and versatile solutions.</p>
                </div>
            </div>
        </section>
    );
}
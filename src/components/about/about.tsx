import styles from "./about_style.module.css"

export default function About() {
    return (
        <section id="about" className={styles.container}>
            <div className={styles.content_container}>
                <h1 className={styles.title}>About Me</h1>
                <p className={styles.content}>As a web and software developer, I am passionate about transforming ideas into reality through digital innovation and versatile solutions.</p>
                <p className={styles.content}>I'm currently a computer science student at Simon Fraser University, where I'm continuously expanding my technical expertise and creative problem-solving skills. Although I am early in my career, my growing portfolio of projects demonstrates my ability to build functional and user-friendly applications. With a strong passion for technology and a commitment to learning, I am always eager to take on new challenges and bring fresh, impactful perspectives to my work.</p>
            </div>
        </section>
    );
}
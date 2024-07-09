import styles from "./about_style.module.css"
import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.section
            initial={{
                opacity: 0,
                y: -100
            }}
            transition={{
                delay: 0.5,
            }}
            whileInView={{
                y: 0,
                opacity: 1
            }}   
            viewport={{once: true}}
        id="about" className={styles.container}>
            <div className={styles.content_container}>
                <h1 className={styles.title}>About Me</h1>
                <p className={styles.content}>As a web and software developer, I am passionate about transforming ideas into reality through digital innovation and versatile solutions.</p>
                <p className={styles.content}>I'm currently a computer science student at Simon Fraser University, where I'm continuously expanding my technical expertise and creative problem-solving skills. With a passion for technology and a commitment to learning, I am driven to take on new challenges </p>
            </div>
        </motion.section>
    );
}
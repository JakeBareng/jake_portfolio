import styles from './contactme_butn_style.module.css'
import { motion } from 'framer-motion'

export default function ContactMeButn() {
    return (
        <motion.a
            transition={{
                duration: 1,
                type: "spring",
            }}
            whileHover={{
                scale: 1.5,
                transition: {
                    duration: 0.3,
                    type: "spring",
                },
            }}

            href="#contact">
            <div className={styles.button}>
                <span className={styles.button__text}>Contact Me</span>
            </div>
        </motion.a>
    )
}
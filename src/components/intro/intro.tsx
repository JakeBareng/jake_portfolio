import TextScrollEffect from "./textScrollEffect";
import Headshot from "./headshot";
import ContactMeButn from "./contactme_butn";
import styles from "./intro_styles.module.css"
import { motion } from "framer-motion";
import { useState } from "react";

export default function Intro() {
    const [isTextHover, setIsTextHover] = useState(false)

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section className={styles.section_container}>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className={styles.container}
            >
                <motion.div onHoverStart={() => setIsTextHover(true)} onHoverEnd={() => setIsTextHover(false)} >
                    <motion.h3

                        className={styles.title}>Hi, I'm&nbsp;</motion.h3>
                    <motion.h3
                        animate={{
                            y: isTextHover ? [0, -30, 0, -20, 0] : 0,
                        }}
                        transition={{
                            duration: 1,
                            repeat: isTextHover ? Infinity : 0,
                            repeatType: "loop",
                        }}
                        className={styles.title__name}>Jake!</motion.h3>
                </motion.div>
                {[TextScrollEffect, Headshot, ContactMeButn].map((Component, index) => (
                    <motion.div key={index} variants={item}>
                        <Component />
                    </motion.div>
                ))}
            </motion.div>

        </section>
    )
}
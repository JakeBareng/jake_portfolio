import SendMessage from "./sendmessage";
import Socials from "./socials";
import styles from './contact.module.css'
import { motion } from 'framer-motion'

export default function Contact() {


    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -100
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            id="contact"
            className={styles.container}
        >

            <SendMessage />
            <Socials />


        </motion.div>
    )
}
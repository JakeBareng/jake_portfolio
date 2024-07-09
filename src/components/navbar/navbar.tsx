import styles from './navbar_style.module.css';
import { motion, useScroll } from 'framer-motion';

export default function Navbar() {

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
            
            className={styles.container}>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#techstack">Tools</a></li>
                <li><a href="#myservices">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </motion.div>
    )
}
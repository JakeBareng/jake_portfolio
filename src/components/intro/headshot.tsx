import headshot2 from '../../assets/headshot_2.png';
import styles from "./headshot_styles.module.css"
import { motion } from "framer-motion"

export default function Headshot() {
    const images = [
        headshot2,
    ]

    return (
        <motion.div
            whileHover={
                {
                    scale: 1.1,
                    transition: {
                        duration: 0.3,
                        type: "spring",
                    },

                }
            }
            className={styles.container}>
            {
                images.map((image, index) => (
                    <img className={styles.headshot} key={index} src={image} alt="headshot" />
                ))
            }
        </motion.div>
    )
}

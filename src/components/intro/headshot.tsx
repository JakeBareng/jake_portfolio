import headshot1 from '../../assets/headshot_1.png';
import headshot2 from '../../assets/headshot_2.png';
import headshot3 from '../../assets/headshot_3.png';
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

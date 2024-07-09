import headshot1 from '../../assets/headshot_1.png';
import headshot2 from '../../assets/headshot_2.png';
import headshot3 from '../../assets/headshot_3.png';
import styles from "./headshot_styles.module.css"
import { motion } from "framer-motion"

export default function Headshot() {
    const images = [
        headshot1,
        headshot2,
        headshot3,
    ]

    return (
        <motion.div
            transition={{
                type: "spring",
                duration: 1
            }}
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

            <motion.div
                animate={{
                    opacity: 1,
                    x: [0,"-100%", "-200%"], 
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    type: "linear",
                    repeatType: "reverse",
                    delay: 1,
                    repeatDelay: 1
                }} 
            className={styles.img_collection}>
                {
                    images.map((image, index) => (
                        <img className={styles.headshot} key={index} src={image} alt="headshot" />
                    ))
                }
            </motion.div>
        </motion.div>
    )
}

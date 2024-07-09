import { icon_data } from "./icondata"
import styles from "./carousel_style.module.css"
import { motion } from "framer-motion"

export default function TechStack() {
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
            id="techstack" className={styles.section_container}>
            <h3 className={styles.title}>My Tools</h3>
            <div className={styles.container}>
                <div className={styles.list}>
                    {
                        icon_data.map((item, index) => {
                            return (
                                <div key={index} className={styles.icon_container}>
                                    <img src={item.icon} alt={item.alt} className={styles.icon} />
                                    <p className={styles.icon_title}>{item.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.list}>
                    {
                        icon_data.map((item, index) => {
                            return (
                                <div key={index} className={styles.icon_container}>
                                    <img src={item.icon} alt={item.alt} className={styles.icon} />
                                    <p className={styles.icon_title}>{item.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.list}>
                    {
                        icon_data.map((item, index) => {
                            return (
                                <div key={index} className={styles.icon_container}>
                                    <img src={item.icon} alt={item.alt} className={styles.icon} />
                                    <p className={styles.icon_title}>{item.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </motion.section>
    )
}
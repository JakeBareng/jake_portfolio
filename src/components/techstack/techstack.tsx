import { icon_data } from "./icondata"
import styles from "./carousel_style.module.css"

export default function TechStack() {
    return (
        <section className={styles.section_container}>
            <h3 className={styles.title}>My Toolkit</h3>
            <div className={styles.container}>
                <div className={styles.list}>
                    {
                        icon_data.map((icon, index) => {
                            return (
                                <div key={index} className={styles.icon_container}>
                                    <img src={icon} alt="icon" className={styles.icon} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.list}>
                    {
                        icon_data.map((icon, index) => {
                            return (
                                <div key={index} className={styles.icon_container}>
                                    <img src={icon} alt="icon" className={styles.icon} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.list}>
                    {
                        icon_data.map((icon, index) => {
                            return (
                                <div key={index} className={styles.icon_container}>
                                    <img src={icon} alt="icon" className={styles.icon} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
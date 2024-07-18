import { icon_data } from "./icondata"
import styles from "./carousel_style.module.css"

export default function TechStack() {
    return (
        <section
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
        </section>
    )
}
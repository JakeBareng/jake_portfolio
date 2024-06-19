import styles from "./textScrollEffect.module.css"

export default function TextScrollEffect() {
    const texts = [
        "HTML5/CSS3",
        "JavaScript",
        "React",
        "web developer",
    ]

    return (
        <div className={styles.container}>
            <div className={styles.container_text}>
                {
                    texts.map((text, index) => (
                        <h3 key={index}>{text}</h3>
                    ))
                }
            </div>
        </div>
    )
}
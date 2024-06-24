import { MyServicesProps } from "./myservices"
import styles from "./card_style.module.css"

type cartProps = {
    data: MyServicesProps
}

export default function Card({ data }: cartProps) {
    const { img_url, title, body } = data

    return (
        <div className={styles.container}>
            <div className={styles.img_container}>
                <img src={img_url} alt={title} className={styles.img} />
            </div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.body}>{body}</p>
        </div>
    )
}

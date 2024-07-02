import { ProjectType } from "./project_list"
import styles from "./project_card.module.css"

export default function Project_card({ project }: { project: ProjectType }) {
    return (
        <div className={styles.container}>
            <img src={project.img_url} alt={project.title} className={styles.card_img} />
            <div className={styles.content}>
                <h2 className={styles.card_title}>{project.title}</h2>
                <p className={styles.card_body}>{project.body}</p>
            </div>
        </div>
    )
}
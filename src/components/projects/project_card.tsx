import { ProjectType } from "./project_list"
import styles from "./project_card.module.css"

export default function Project_card({ project }: { project: ProjectType }) {
    return (
        <a href={project.link}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title_body_group}>
                        <h2 className={styles.card_title}>{project.title}</h2>
                        <p className={styles.card_body}>{project.body}</p>
                    </div>
                    <div className={styles.tag_container}>
                        {
                            project.tags.map((tag, index) => (
                                <span key={index} className={styles.tag}>{tag}</span>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.img_container}>
                    <img src={project.img_url} alt={project.title} className={styles.card_img} />
                </div>
            </div>
        </a>
    )
}
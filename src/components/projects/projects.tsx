import Project_card from "./project_card"
import { projects } from "./project_list"
import style from "./projects.module.css"

export default function Projects() {
    return (
        <section
            className={style.container} id="projects"
        >
            <h1 className={style.title}>Projects</h1>
            <div className={style.card_list}>
                {
                    projects.map((project, index) => {
                        return (
                                <Project_card project={project} key={index} />
                        )
                    })
                }
            </div>
        </section>
    )
}
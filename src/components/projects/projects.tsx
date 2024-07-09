import Project_card from "./project_card"
import { projects } from "./project_list"
import style from "./projects.module.css"
import { motion } from "framer-motion"

export default function Projects() {
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
            viewport={{ once: true }}
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
        </motion.section>
    )
}
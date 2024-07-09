import Project_card from "./project_card"
import { projects } from "./project_list"
import style from "./projects.module.css"
import { motion } from "framer-motion"

export default function Projects() {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
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
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={style.card_list}>
                {
                    projects.map((project, index) => {
                        return (
                            <motion.div variants={item} style={{ width: "100%" }}>
                                <Project_card project={project} key={index} />
                            </motion.div>
                        )
                    })
                }
            </motion.div>
        </motion.section>
    )
}
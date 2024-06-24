import styles from "./services_style.module.css"
import cloud from "/cloud.svg"
import database from "/database.svg"
import headphone from "/headphone.svg"
import terminal from "/terminal.svg"
import window_icon from "/window.svg"
import web from "/web.svg"
import Card from "./card"

export type MyServicesProps = {
    img_url: string,
    title: string,
    body: string
}


export default function MyServices() {
    const services_list: MyServicesProps[] = [
        {
            img_url: web,
            title: "Web Development",
            body: "Crafting dynamic digital experiences by designing and developing web applications."
        },
        {
            img_url: window_icon,
            title: "Software Development",
            body: "Building software applications that are scalable, maintainable, and efficient."
        },
        {
            img_url: cloud,
            title: "Cloud Computing",
            body: "Leveraging cloud services to deploy, manage, and scale applications."
        },
        {
            img_url: database,
            title: "Database Management",
            body: "Designing and managing databases to store, retrieve, and manipulate data."
        },
        {
            img_url: headphone,
            title: "Customer Support",
            body: "Providing technical support to customers to troubleshoot and resolve issues."
        }
    ]


    return (
        <section className={styles.section}>
            <h3 className={styles.title}>My Services</h3>
            <div className={styles.container}>
                {
                    services_list.map((data, index) => {
                        return <Card data={data} key={index} />
                    })
                }
            </div>
        </section>
    )
}
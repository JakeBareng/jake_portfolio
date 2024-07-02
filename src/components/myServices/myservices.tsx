import styles from "./services_style.module.css"
import cloud from "/cloud.svg"
import database from "/database.svg"
import headphone from "/headphone.svg"
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
            body: "Creating dynamic digital experiences by designing and developing visually appealing and highly functional web applications. I use the latest technologies and best practices to ensure optimized performance, accessibility, and user engagement for each project."
        },
        {
            img_url: window_icon,
            title: "Software Development",
            body: "Building scalable, maintainable, and efficient software solutions tailored to specific business needs. My expertise in various programming languages and frameworks ensures robust applications with clean code and comprehensive testing for reliable performance."
        },
        {
            img_url: cloud,
            title: "Cloud Computing",
            body: "Leveraging cloud services to deploy, manage, and scale applications. Proficient in platforms like Amazon Web Service, and Google Cloud, I provide flexible, secure, and cost-efficient solutions for both migrating existing systems and building new cloud-native applications."
        },
        {
            img_url: database,
            title: "Database Management",
            body: "Expertly designing and managing databases for effective data storage, retrieval, and manipulation. With experience in SQL and NoSQL systems, I create optimized data structures, ensure data integrity, and enhance database performance for faster access and processing."
        },
        {
            img_url: headphone,
            title: "Customer Support",
            body: "Delivering top-notch technical support to troubleshoot and resolve issues efficiently. My approach includes clear communication, deep technical knowledge, and a commitment to customer satisfaction, ensuring smooth and reliable business operations."
        }
    ]


    return (
        <section id="myservices" className={styles.section}>
            <h3 className={styles.title}>Services</h3>
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
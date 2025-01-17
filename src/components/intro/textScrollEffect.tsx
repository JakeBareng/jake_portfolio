import { useEffect } from "react"
import styles from "./textScrollEffect.module.css"

export default function TextScrollEffect() {
    const texts = [
        "web developer",
        "full stack developer",
        "frontend developer",
        "backend developer",
        "software engineer",
        "computer science student",
    ]

    // const texts = [
    //     "HTML5/CSS3",
    //     "JavaScript",
    //     "React.js",
    //     "Web Developer",
    //     "Full Stack Developer",
    //     "Frontend Developer",
    //     "Backend Developer",
    //     "Typescript",
    //     "Angular",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "PostgreSQL",
    //     "Python",
    //     "Next.js",
    //     "Java",
    //     "Spring Boot",
    // ]

    function shuffleArray(array: number[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    const traversePath: number[] = []
    for (let i = 0; i < texts.length; i++) {
        traversePath.push(i)
    }
    shuffleArray(traversePath)

    // timer 
    useEffect(() => {
        const textContainer = document.getElementById("textContainer")!
        const textHeight = 42
        let index = 0
        const timer = setInterval(() => {
            const y = textHeight * traversePath[index]
            textContainer.style.transform = `translateY(-${y}px)`
            index++
            if (index === texts.length) {
                index = 0
                shuffleArray(traversePath)
            }
        }, 1400)

        return () => clearInterval(timer)
    })

    return (
        <div className={styles.container}>
            <div id="textContainer" className={styles.container_collection}>
                {
                    texts.map((text, index) => (
                        <h3 className={styles.text} key={index}>{text}</h3>
                    ))
                }
            </div>
        </div>
    )
}
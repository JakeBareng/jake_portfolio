import { useEffect } from "react"
import styles from "./textScrollEffect.module.css"

export default function TextScrollEffect() {
    const texts = [
        "HTML5/CSS3",
        "JavaScript",
        "React",
        "Web Developer",
        "Typescript",
        "Angular",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Python",
    ]

    function shuffleArray(array: number[]) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    let traversePath: number[] = []
    for (let i = 0; i < texts.length; i++) {
        traversePath.push(i)
    }
    shuffleArray(traversePath)

    // timer 
    useEffect(() => {
        const textContainer = document.getElementById("textContainer")!
        let textHeight = 42
        let index = 0
        const timer = setInterval(() => {
            let y = textHeight * traversePath[index]
            textContainer.style.transform = `translateY(-${y}px)`
            index++
            if (index === texts.length) {
                index = 0
                shuffleArray(traversePath)
            }
        }, 1700)

        return () => clearInterval(timer)
    }, [])

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
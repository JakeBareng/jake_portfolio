import project1 from "/project_images/project1.png"
import project2 from "/project_images/project2.png"

export type ProjectType = {
    img_url: string,
    title: string,
    body: string,
    tags: string[],
    link: string
}

export const projects: ProjectType[]  = [
    {
        img_url: project1,
        title: "Music Website",
        body: "A music producer website with a 3D reactive visualizer. Built with Next.js, Tailwind CSS, vercel, and three.js.",
        tags: [ "Next.js", "Tailwind CSS", "Vercel", "Three.js"],
        link: "https://jakebeats.vercel.app/"
    },
    {
        img_url: project2,
        title: "Chatroom App",
        body: "A chatroom app built with React, Firebase, and bootstrap.",
        tags: [ "React", "Firebase", "Bootstrap"],
        link: "https://greenchatchannel.web.app/"
    },
]
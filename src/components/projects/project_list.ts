import music_app from "../../assets/images/project_images/music_app.png"
import chatroom_app from "../../assets/images/project_images/chatroom_app.png"
import DJ_landing_page from "../../assets/images/project_images/DJ_landing_page.png"
import ProjectType from "../../types/projectList.ts";

export const projects: ProjectType[]  = [
    {
        img_url: DJ_landing_page,
        title: "DJ Landing Page",
        body: "A landing page for a DJ built with HTML, CSS, JavaScript and three.js.",
        tags: [ "HTML", "CSS", "JavaScript", "Three.js"],
        link: "https://djjakevancouver.com/"
    },
    {
        img_url: music_app,
        title: "Music Website",
        body: "A music producer website with a 3D reactive visualizer. Built with Next.js, Tailwind CSS, vercel, and three.js.",
        tags: [ "Next.js", "Tailwind CSS", "Vercel", "Three.js"],
        link: "https://jakebeats.vercel.app/"
    },
    {
        img_url: chatroom_app,
        title: "Chatroom App",
        body: "A chatroom app built with React, Firebase, and bootstrap.",
        tags: [ "React", "Firebase", "Bootstrap"],
        link: "https://greenchatchannel.web.app/"
    },
]
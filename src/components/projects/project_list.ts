import music_app from "../../assets/images/project_images/music_app.png"
import chatroom_app from "../../assets/images/project_images/chatroom_app.png"
import DJ_landing_page from "../../assets/images/project_images/DJ_landing_page.png"
import ProjectType from "../../types/projectList.ts";
import foodconnect from "../../assets/images/project_images/foodconnect.png"

export const projects: ProjectType[]  = [
    {
        img_url: foodconnect,
        title: "Food Connect",
        body: "FoodConnect is a web platform that bridges the gap between food donors and recipients. It provides a marketplace for food donations, AI-powered food expiry predictions, a real-time chat system, and various filtering options to ensure food accessibility for those in need.",
        tags:['React', 'Tailwind', 'CSS', 'TypeScript', 'JavaScript', 'HTML', 'Express.js', 'AWS', 'PostgreSQL'],
        link:"https://github.com/Priyanshsarvaiya/Food-Connect"
    },
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
import { Code2, Globe, Server, Layout } from "lucide-react";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiTypescript, SiNodedotjs, SiPostgresql, SiVercel, SiMongodb } from "react-icons/si";

const bims = "https://image.thum.io/get/width/800/crop/500/https://bims-web.vercel.app/";

export const APP_CONTENT = {
  hero: {
    name: "Robel Getaneh",
    role: "Full-Stack Developer",
    subtitle: "I build web applications that are fast, accessible, and built to scale. Currently focused on React, Node.js, and cloud infrastructure.",
    availability: "Available for work",
  },
  experience: [
    {
      role: "Junior Web Developer",
      period: "Oct 2024",
      description: [
        "Built and maintained reusable UI components with React, reducing development time for new features.",
        "Improved site performance scores by 30% through frontend optimization and code splitting.",
      ]
    }
  ],
  projects: [
    {
      title: "BIMS",
      subtitle: "Broker Information Management System",
      description: "Full-stack web and mobile application for property and vehicle transactions through broker intermediation. Serves brokers, owners, and clients.",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind"],
      liveUrl: "https://bims-web.vercel.app/",
      codeUrl: "#",
      image: bims,
    },
  ],
  skills: [
    {
      title: "Frontend",
      description: "React, TypeScript, Tailwind CSS, responsive interfaces",
      icon: Layout,
    },
    {
      title: "Backend",
      description: "Node.js, Express, REST APIs, WebSocket",
      icon: Server,
    },
    {
      title: "Infrastructure",
      description: "Vercel, MongoDB, PostgreSQL, CI/CD",
      icon: Globe,
    },
  ],
  techStackIcons: [
    { name: "React", icon: RiReactjsLine, color: "#61DAFB", href: "https://react.dev" },
    { name: "Express", icon: SiExpress, color: "#000000", href: "https://expressjs.com" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", href: "https://www.typescriptlang.org" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", href: "https://nodejs.org" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", href: "https://www.mongodb.com" },
    { name: "Vercel", icon: SiVercel, color: "#000000", href: "https://vercel.com" },
  ],
};


import { Code2, Globe, Server, Database, Layout, Terminal } from "lucide-react";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiTypescript, SiNodedotjs, SiPostgresql, SiVercel, SiMongodb } from "react-icons/si";
const bims = "./bims.png";
export const APP_CONTENT = {
  hero: {
    title: "Building Scalable Digital Experiences",
    subtitle: "Full-stack developer specializing in frontend precision and backend architecture. I turn complex problems into elegant, high-performance web applications that scale with your users.",
    ctaPrimary: "View Work",
    ctaSecondary: "Contact Me",
  },
  experience: [
    // {
    //   role: "Senior Full-Stack Engineer",
    //   company: "TechCorp Solutions",
    //   period: "Jan 2021 — Present",
    //   description: [
    //     "Led the migration of a legacy monolithic PHP system to a modern microservices architecture using Node.js and Docker, reducing infrastructure costs by 40%.",
    //     "Implemented a real-time data visualization dashboard using WebSocket and D3.js, handling 50k+ concurrent users.",
    //     "Mentored a team of 5 junior developers, establishing CI/CD best practices and improving code review turnaround time by 30%."
    //   ]
    // },
    // {
    //   role: "Full-Stack Developer",
    //   company: "InnovateSoft",
    //   period: "Mar 2018 — Dec 2020",
    //   description: [
    //     "Developed 10+ high-traffic client websites using React and PostgreSQL with a focus on SEO and performance optimization.",
    //     "Engineered a custom CMS that allowed non-technical staff to update content, reducing internal support tickets by 60%."
    //   ]
    // },
    {
      role: "Junior Web Developer",
      // company: "StartUp Hub",
      period: "October 2024",
      description: [
        "Assisted in front-end development using react.js and improved site performance scores by 30%.",
        "Built and maintained reusable UI components, reducing development time for new features."
      ]
    }
  ],
  projects: [
    {
      title: "BIMS - Broker Infromation Management System",
      description: "Full-stack web and mobile application designed to facilitate property and vehicle transactions through broker intermediation. The system serves three primary user Brokers, Property/Vehicle Owners, and Clients (buyers/renters). ",
      techStack: ["REST API", "Socket.io","Tailwind", "MERN","Chapa"],
      liveUrl: "https://bims-web.vercel.app/",
      codeUrl: "#",
      image: bims, // We'll handle images carefully
      isFeatured: false
    },
    // {
    //   title: "E-Commerce API",
    //   description: "Scalable microservices architecture using Node.js and PostgreSQL. Implemented full CI/CD pipelines with GitHub Actions and Docker orchestration for zero-downtime deployments.",
    //   techStack: ["Node.js", "PostgreSQL", "Docker", "Redis"],
    //   liveUrl: "#",
    //   codeUrl: "#",
    //   image: "api",
    //   isFeatured: true
    // },
    // {
    //   title: "Vanguard Messaging",
    //   description: "End-to-end encrypted messaging service using WebSockets. Engineered for high concurrency with Redis pub/sub patterns to support thousands of simultaneous active users.",
    //   techStack: ["React", "Socket.io", "Redis", "WebRTC"],
    //   liveUrl: "#",
    //   codeUrl: "#",
    //   image: "messaging",
    //   isFeatured: false
    // },
    // {
    //   title: "Cognito AI Engine",
    //   description: "Generative AI tool leveraging OpenAI API. Features a custom streaming response architecture and automated subscription management via Stripe hooks.",
    //   techStack: ["OpenAI SDK", "Next.js", "Stripe", "Supabase"],
    //   liveUrl: "#",
    //   codeUrl: "#",
    //   image: "ai",
    //   isFeatured: false
    // }
  ],
  skills: [
    {
      title: "Frontend Precision",
      description: "Creating responsive, accessible, and high-performance user interfaces using modern frameworks like React.",
      icon: Layout
    },
    {
        title: "Backend Architecture",
        description: "Designing robust REST APIs and optimized database schemas that scale seamlessly with your growth.",
        icon: Server
    },
    {
        title: "Cloud Infrastructure",
        description: "Deploying secure, automated cloud environments on Vercel with CI/CD pipelines and monitoring.",
        icon: Globe
    }
  ],
  techStackIcons: [
    { name: "React", icon: RiReactjsLine, color: "#61DAFB", href: "https://react.dev" },
    { name: "Express.js", icon: SiExpress, color: "#000000", href: "https://expressjs.com" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", href: "https://www.typescriptlang.org" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", href: "https://nodejs.org" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", href: "https://www.mongodb.com" },
    { name: "Vercel", icon: SiVercel, color: "#000000", href: "https://vercel.com" }
  ]
};

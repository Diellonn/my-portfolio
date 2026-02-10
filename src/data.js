import { video } from "framer-motion/client";

export const DATA = {
  en: {
    role: "Software Engineering Student",
    description: "I build robust, scalable applications and solve complex problems with code. Passionate about full-stack development and AI.",
    longDescription: "I am a dedicated software engineering student with a passion for crafting robust and scalable applications. With a strong foundation in both front-end and back-end technologies, I thrive on solving complex problems through code. My enthusiasm for full-stack development and artificial intelligence drives me to continuously learn and innovate in the ever-evolving tech landscape.",
    skillsTitle: "Technical Toolkit",
    projectsTitle: "Featured Work",
    aboutTitle: "A bit about me",
    contactTitle: "Let's Work Together",
    projects: [
      { 
        id: 1,
        title: "Hospital Management System", 
        desc: "A hospital management system that i made for my final year.", 
        longDesc: "A full-stack healthcare ERP engineered to modernize hospital workflows. I architected the backend using .NET Core, implementing a repository pattern to manage complex interactions with a MySQL database. The system features a real-time administrative dashboard and granular Role-Based Access Control (RBAC) to ensure HIPAA-compliant data handling. By optimizing SQL indexing and API response times, I ensured the platform remains performant under heavy data loads, all while delivering a fluid UI via React and Framer Motion.",
        tech: ["React", "MySQL", "Tailwind CSS", ".NET Core"],
        github: "",
        link: "perpunim.html",
        video: "/videos/hmslivedemo.mp4",
        images: [
          "/projects/login.png", 
          "/projects/signup.png", 
          "/projects/dashboard.png"
        ]
      },
      { 
        id: 2,
        title: "E-Commerce Ecosystem", 
        desc: "A full-stack online shopping platform with secure checkout.", 
        longDesc: "Developed a robust e-commerce solution including a custom-built API. Features include product filtering, a persistent shopping cart, user profile management, and integration with Stripe for secure payment processing.",
        tech: ["Node.js", "Express", "MongoDB", "Redux"],
        github: "",
        link: "perpunim.html",
        images: [
          "/projects/ecomerce.png",
          "/projects/shop-admin.jpg"
        ]
      },
      { 
        id: 3,
        title: "AI Algorithm Visualizer", 
        desc: "Interactive tool to visualize complex pathfinding algorithms.", 
        longDesc: "This tool helps students understand how algorithms like A* and Dijkstra work. Users can draw walls, move start/end nodes, and watch the algorithm 'think' and find the shortest path in real-time.",
        tech: ["React", "Algorithms", "CSS Grid", "Vite"],
        github: "",
        link: "",
        images: [
          "/projects/ai.png",
          "/projects/ai-viz-2.jpg"
        ]
      },
    ]
  },
  sq: {
    role: "Student i Inxhinierisë Softuerike",
    description: "Unë ndërtoj aplikacione të fuqishme dhe zgjidh probleme komplekse përmes kodit. I apasionuar pas zhvillimit full-stack dhe AI.",
    longDescription: "Jam një student i përkushtuar i inxhinierisë softuerike me një pasion për krijimin e aplikacioneve të fuqishme dhe të shkallëzueshme. Me një themel të fortë si në teknologjitë front-end ashtu edhe në ato back-end, unë lulëzoj në zgjidhjen e problemeve komplekse përmes kodit. Entuziazmi im për zhvillimin full-stack dhe inteligjencën artificiale më shtyn të mësoj dhe të inovoj vazhdimisht në peizazhin teknologjik në zhvillim e sipër.",
    skillsTitle: "Shkathtësitë Teknike",
    projectsTitle: "Punët e Fundit",
    aboutTitle: "Pak rreth meje",
    contactTitle: "Le të punojmë së bashku",
    projects: [
      { 
        id: 1,
        title: "Projekti i Menaxhimit të Spitalit", 
        desc: "Një sistem menaxhimi spitali që e krijova për vitin tim të fundit.", 
        longDesc: "Një sistem ERP i kujdesit shëndetësor full-stack i projektuar për të modernizuar rrjedhat e punës në spitale. Unë e arkitektura backend-in duke përdorur .NET Core, duke zbatuar një model depozite për të menaxhuar ndërveprimet komplekse me një bazë të dhënash MySQL. Sistemi përmban një panel kontrolli administrativ në kohë reale dhe një Kontroll Qasjeje të Bazuar në Role (RBAC) të detajuar për të siguruar trajtimin e të dhënave në përputhje me HIPAA. Duke optimizuar indeksimin SQL dhe kohët e përgjigjes së API-t, sigurova që platforma të mbetet performuese edhe nën ngarkesa të mëdha të të dhënave, ndërkohë që ofroj një ndërfaqe përdoruesi fluide nëpërmjet React dhe Framer Motion.",
        tech: ["React", "MySQL", "Tailwind CSS", ".NET Core"],
        github: "#",
        link: "perpunim.html",
        video: "/videos/hmslivedemo.mp4",
        images: [
          "/projects/login.png", 
          "/projects/signup.png", 
          "/projects/dashboard.png"
        ]
      },
      { 
        id: 2,
        title: "Ekosistemi E-Commerce", 
        desc: "Një platformë blerjeje online me pagesa të sigurta.", 
        longDesc: "Zhvillova një zgjidhje të fuqishme e-commerce duke përfshirë një API të personalizuar. Karakteristikat përfshijnë filtrat e produkteve, karrocën e blerjeve dhe integrimin me Stripe.",
        tech: ["Node.js", "Express", "MongoDB"],
        github: "#",
        images: ["/projects/ecomerce.png", "/projects/shop-cart.jpg"]
      },
      { 
        id: 3,
        title: "Vizualizuesi i Algoritmeve AI", 
        desc: "Mjet interaktiv për të vizualizuar algoritmet komplekse të kërkimit të rrugës.", 
        longDesc: "Ky mjet ndihmon studentët të kuptojnë se si funksionojnë algoritmet si A* dhe Dijkstra në kohë reale.",
        tech: ["React", "Algoritme", "Vite"],
        github: "#",
        images: ["/projects/ai.png", "/projects/ai-viz-2.jpg"]
      },
    ]
  },
  common: {
    name: "Diellon Haxhaj",
    skills: ["React", "JavaScript", "Node.js", "Python", "Tailwind CSS", "Git", "MongoDB", "Express", "Firebase",".NET Core", "Java", "C#", "pHp"],
    socials: {
      email: "diellon.haxhaj.com@gmail.com",
      linkedin: "https://www.linkedin.com/in/diellon-haxhaj-31454a3a3/",
      instagram: "https://www.instagram.com/haxhajdiellon_/",
      facebook: "https://www.facebook.com/diellon.haxhaj.7",
      github: "https://github.com/diellon-haxhaj"
    }
  }
};
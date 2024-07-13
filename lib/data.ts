import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import ozsolarneeds from "@/public/ozsolarneeds.png"
import kmchowksi from "@/public/kmchowksi.png"
import realtimenewsapp from "@/public/realtimenewsapp.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const

export const experiencesData = [
  {
    title: "Graduated High School",
    location: "New Magdalla, Surat",
    description: "I graduated from High School after 2 years of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2021",
  },
  {
    title: "Back-End Developer",
    location: "Adajan, Surat",
    description:
      "I worked as a back-end developer for 5 months. My stack included HTML5, CSS3, PHP, MySQL, SQLite and cPanel. I also upskilled to the front-end development with React, Next.js and Tailwind.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Sep 2023",
  },
  {
    title: "Front-End Developer",
    location: "Udhna Darwaja, Surat",
    description:
      "I worked as a front-end developer for 7 months. I also upskilled to the full stack. My stack included React, Next.js, Tailwind and MongoDB. Currently I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Dec 2023 - Jun 2024",
  },
] as const

export const projectsData = [
  {
    title: "Oz Solar Needs",
    description:
      "This Next.js project features static page generation, dynamic data rendering, admin panel, MongoDB database, ShadcnUI and TailwindCSS UI, efficient data sorting, CRUD operations, and mobile responsiveness.",
    tags: ["Next.js", "Tailwind", "ShadcnUI", "Node.js", "MongoDB"],
    imageUrl: ozsolarneeds,
    projectLink: "https://ozsolarneeds.com.au",
  },
  {
    title: "K M Chowksi",
    description:
      "A Next.js based project that features TailwindCSS for its styling with ShadCN as its component library.",
    tags: ["Next.js", "Tailwind", "ShadcnUI"],
    imageUrl: kmchowksi,
    projectLink: "https://kmchoksi.in/",
  },
  {
    title: "Real Time News App",
    description:
      "A Next.js based News website uses server-side rendering, Tailwind CSS for styling, and the MediaStack API for news retrieval, updating every 60 seconds.",
    tags: ["Next.js", "Tailwind", "ShadcnUI"],
    imageUrl: realtimenewsapp,
    projectLink: "https://news-yr.vercel.app/",
  },
] as const

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "React",
  "VITE",
  "Next.js",
  "Node.js",
  "Express.js",
  "npm",
  "yarn",
  "bun",
  "Git",
  "GitHub",
  "Bootstrap",
  "Tailwind",
  "MySQL",
  "SQLite",
  "MongoDB",
  "Redux",
  "Framer Motion",
  "Docker",
] as const

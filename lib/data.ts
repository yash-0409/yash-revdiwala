import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import corpcommentImg from "@/public/corpcomment.png"
import rmtdevImg from "@/public/rmtdev.png"
import wordanalyticsImg from "@/public/wordanalytics.png"

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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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

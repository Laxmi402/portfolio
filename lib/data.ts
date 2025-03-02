import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact,FaAngular } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import examImg from "@/public/exam.png";
import levelNextImg from "@/public/levelnext.png";
import taskManagerImg from "@/public/taskmanager.png";
import rahulProfileImg from "../public/rahul_profile.jpeg"
import { calculateExperience } from "./utils";

export const userName = "Laxmi Rajbhar";
export const userPhoto = laxmiProfileImg;
export const userEmail = "laxmirajbhar39@gmail.com";


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
] as const;

export const experiencesData = [
  {
    title: "Bachelor's of Banking and Insurance (BBI) ",
    location: "Ramniranjan Jhunjhunwala College",
    description: "Earned a Bachelor's degree in Banking and Insurance, gaining insights into financial management and business operations.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2019 - Apr 2021",
  },
  {
    title: "Master's in Business Management (CGPA- 8.96)",
    location: "Ramniranjan Jhunjhunwala College",
    description: "Completed a Master's in Business Management, focusing on digital marketing and business strategies.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2021 - Apr 2023",
  },
  {
    title: "SEO Intern",
    location: "Kerkar Media, Andheri",
    description:
      "Assisted in SEO tasks, including keyword research, content optimization, and link-building. Contributed to UI/UX improvements and technical SEO fixes.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2024 - April 2024",
  },
  {
    title: "SEO Executive",
    location: "Kerkar Media, Andheri",
    description:
      "Implemented SEO strategies, conducted website audits, optimized content, and improved organic traffic. Specialized in keyword research, on-page optimization, and link-building techniques.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - November 2024",
  }
] as const;


export const projectsData = [
  {
    title: "Exam",
    description:
      "I worked as a full-stack developer on this project for 1 years. The project focused on facilitating exam processes and generating mark sheets",
    tags: ["React", "Next.js", "Typescript", "MySQL", "Tailwind", "Node"],
    imageUrl: examImg,
  },
  {
    title: "LevelNext",
    description:
      `Built a learning management mobile application similar to Udemy from scratch.`,
    tags: ["React","React Native", "Node js", "Express js", "MongoDB"],
    imageUrl: levelNextImg,
  },
  {
    title: "Task Manager",
    description:
      "Task Manager Web App allows users to create tasks and subtasks, mark them as completed, and delete them as needed, providing efficient task management.",
    tags: ["Angular", "Node js", "MongoDB", "Express js"],
    imageUrl: taskManagerImg,
  },
] as const;

export const skillsData = [
  "SEO Strategy Development",
  "Technical SEO Audits",
  "Keyword Research",
  "On-Page Optimization",
  "Google Analytics",
  "Google Search Console",
  "Content Optimization",
  "Link-Building Techniques",
  "HTML & CSS",
  "WordPress",
  "Ahrefs",
  "Semrush",
  "CorelDraw",
  "Photoshop",
  "Canva",
] as const;

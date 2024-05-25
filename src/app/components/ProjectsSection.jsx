"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "AdminDo WEB",
        description: "React, Django and PostgreSQL",
        image: "/images/projects/1.2.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/AxelYeray/Admindo-final",
        previewUrl: "https://admindo-final.onrender.com",
    },
    {
        id: 2,
        title: "Train Maya App",
        description: "React Native, expo GO and Firebase",
        image: "/images/projects/2.1.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/AxelYeray/AppMovil_TrenMaya",
        previewUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7197786681805000705/",
    },
    {
        id: 3,
        title: "SomeGraphs App",
        description: "Python. The project its about some algorithms of graphs in only one program.",
        image: "/images/projects/3.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/AxelYeray/Final_Project_Graphs_BUAP.",
        previewUrl: "https://github.com/AxelYeray/Final_Project_Graphs_BUAP.",
    },
    {
        id: 4,
        title: "ProjectsInOpenGL",
        description: "OpenGL, C++ and CMake. Some projects in OpenGL with C++ and CMake.",
        image: "/images/projects/4.1.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/AxelYeray/ProyectosEnOpenGL",
        previewUrl: "https://github.com/AxelYeray/ProyectosEnOpenGL",
    },
    {
        id: 5,
        title: "To Do Web App",
        description: "Django and Reacr. A simple To Do App with Django and React.",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/AxelYeray/proyecto_ingeSoft",
        previewUrl: "https://github.com/AxelYeray/proyecto_ingeSoft",
    },
    {
        id: 6,
        title: "React-ms",
        description: "Some exercises of React in Microsof Learn.",
        image: "/images/projects/7.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/AxelYeray/React-ms",
        previewUrl: "https://github.com/AxelYeray/React-ms",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
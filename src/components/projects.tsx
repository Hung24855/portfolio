"use client";
import Tittle from "@/_core/app/components/Title";
import { ProjectDetal, projects } from "@/_core/app/constant/projects";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { IoLayers } from "react-icons/io5";
import Modal, { ModalRef } from "@/_core/app/components/Modal";
import ProjectDetail from "@/_core/app/components/ProjectDetail";

const Projects = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const modalRef = useRef<ModalRef>(null);
    const [selectedProject, setSelectedProject] = useState<ProjectDetal | null>(null);

    const openModal = () => {};

    return (
        <div id="projects" className="min-h-screen">
            <Tittle title="Projects" />

            <div className="grid grid-cols-1 tab:grid-cols-2 lap:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="relative group"
                        onHoverStart={() => setHoveredId(project.id)}
                        onHoverEnd={() => setHoveredId(null)}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Project Card */}
                        <div
                            className="relative overflow-hidden rounded-xl bg-[#131c4a] border border-[#1e2a5a] shadow-xl"
                            data-aos="fade-up"
                            data-aos-delay={100 * index + 1}
                        >
                            {/* Project Image */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image[0]}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Dark Overlay */}
                                <motion.div className="absolute inset-0 bg-black/60 opacity-100 transition-opacity duration-300 hidden group-hover:block" />
                            </div>

                            {/* Project Info */}
                            <motion.div
                                className="absolute inset-0 flex flex-col justify-end p-6"
                                initial={false}
                                animate={{
                                    opacity: hoveredId === project.id ? 1 : 0,
                                    y: hoveredId === project.id ? 0 : 20
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Category Badge */}
                                <div className="w-fit mb-2 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 flex items-center px-1 rounded-lg">
                                    <IoLayers className="w-3 h-3 mr-1" />
                                    {project.category}
                                </div>

                                {/* Title*/}
                                <h3 className="text-xl font-bold text-gray-100 mb-2 drop-shadow-md">{project.title}</h3>

                                {/* Tags */}
                                {/* <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div> */}

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <motion.a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FiExternalLink className="w-4 h-4" />
                                        Demo
                                    </motion.a>
                                    {project.githubLink && (
                                        <motion.a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e2a5a] text-white font-medium hover:bg-[#2a3a6a] transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaGithub className="w-4 h-4" />
                                            Code
                                        </motion.a>
                                    )}

                                    <motion.button
                                        rel="noopener noreferrer"
                                        className=" px-4 py-2 rounded-lg bg-[#1e2a5a] text-white font-medium hover:bg-[#2a3a6a] transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={(e) => {
                                            setSelectedProject(project);
                                            modalRef?.current?.open(e);
                                        }}
                                    >
                                        Chi tiết
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Modal
                ref={modalRef}
                onClose={() => {
                    if (modalRef.current) {
                        modalRef.current.close();
                    }
                }}
                onOk={() => {}}
                modalContainerClassName="w-3/4 h-[95vh]"
                isShowIconClose={false}
            >
                {selectedProject && <ProjectDetail projectDetail={selectedProject} />}
            </Modal>
        </div>
    );
};

export default Projects;

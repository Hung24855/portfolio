import { FiExternalLink } from "react-icons/fi";
import { ProjectDetal } from "../../constant/projects";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

interface ProjectDetailProps {
    projectDetail: ProjectDetal;
}

const ProjectDetail = ({ projectDetail }: ProjectDetailProps) => {
    return (
        <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2">
                <div className="space-y-4">
                    <div>
                        <span className="font-semibold">Name: </span>
                        {projectDetail.title}
                    </div>
                    <div className="">
                        <span className="font-semibold">Description: </span>
                        <span className="text-placeholder">{projectDetail.description}</span>
                    </div>
                    <div className="">
                        <span className="font-semibold">Position: </span>
                        <span className="">{projectDetail.position}</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="font-semibold whitespace-nowrap">Tech stack: </span>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {projectDetail.tags.map((tag, index) => (
                                <span key={index} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <motion.a
                            href={projectDetail.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiExternalLink className="w-4 h-4" />
                            Demo
                        </motion.a>
                        {projectDetail.githubLink && (
                            <motion.a
                                href={projectDetail.githubLink}
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
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center space-y-4 col-span-3 h-[95vh] overflow-y-scroll">
                {projectDetail.image.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        className="max-w-2xl w-full aspect-video"
                        alt={`Project image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectDetail;

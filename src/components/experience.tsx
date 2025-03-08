"use client";
import Tittle from "@/_core/app/components/Title";
import { FaCode } from "react-icons/fa6";
import { GoRocket, GoBriefcase } from "react-icons/go";
import { FiDatabase } from "react-icons/fi";
import { IoIosGitBranch } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { motion } from "framer-motion";

const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: "MAPSTUDY",
            position: "Fresher Front End Developer",
            period: { start: "June 2024", end: "March 2025" },
            duration: "10 months",
            responsibilities: [
                {
                    id: "resp1",
                    text: "Writing clean, maintainable, and efficient code",
                    icon: <FaCode className="h-5 w-5 text-sky-400" />
                },
                {
                    id: "resp2",
                    text: "Developing and optimizing web interfaces using React.js and Next.js",
                    icon: <GoRocket className="h-5 w-5 text-purple-400" />
                },
                {
                    id: "resp3",
                    text: "Utilizing Docker and Docker Compose for application deployment",
                    icon: <FiDatabase className="h-5 w-5 text-blue-400" />
                },
                {
                    id: "resp4",
                    text: "Implementing CI/CD pipelines to automate deployment workflows",
                    icon: <IoIosGitBranch className="h-5 w-5 text-green-400" />
                }
            ],
            skills: ["React", "Next.js", "Postgresql", "Docker", "CI/CD", "JavaScript", "TypeScript"]
        }
        // You can add more experiences here following the same structure
    ];
    return (
        <div id="experience" className="min-h-screen">
            <Tittle title="Work Experience" />

            <div className="mt-12 space-y-8 max-w-5xl mx-auto text-white">
                <div className="space-y-12">
                    {experiences.map((experience) => (
                        <div key={experience.id} className="relative">
                            {/* Experience Card */}
                            <div className="bg-gradient-to-br from-[#131c4a] to-[#0c0117] rounded-xl overflow-hidden border border-[#1e2a5a] shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
                                <div className="p-6 tab:p-8">
                                    {/* Header with Company and Duration */}
                                    <div className="flex flex-col tab:flex-row tab:items-center justify-between mb-6">
                                        <div>
                                            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-2">
                                                {experience.company}
                                            </div>
                                            <h3 className="text-2xl tab:text-3xl font-bold text-white">
                                                {experience.position}
                                            </h3>
                                        </div>
                                        <div className="flex items-center mt-4 tab:mt-0 space-x-2 text-gray-300">
                                            <CiCalendarDate className="h-5 w-5 text-emerald-400" />
                                            <span className="text-sm tab:text-base">
                                                {experience.period.start} — {experience.period.end}
                                            </span>
                                            <span className="px-2 py-1 rounded-full bg-[#1e2a5a] text-xs">
                                                {experience.duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1e2a5a] to-transparent my-6"></div>

                                    {/* Responsibilities */}
                                    <div className="mb-8">
                                        <h4 className="text-lg font-semibold text-white/90 mb-4 flex items-center">
                                            <GoBriefcase className="h-5 w-5 mr-2 text-emerald-400" />
                                            Responsibilities
                                        </h4>
                                        <ul className="grid grid-cols-1 tab:grid-cols-2 gap-4">
                                            {experience.responsibilities.map((responsibility) => (
                                                <li
                                                    key={responsibility.id}
                                                    className="flex items-start space-x-3 p-3 rounded-lg bg-[#0c0117]/50 hover:bg-[#131c4a] transition-colors duration-200"
                                                >
                                                    <div className="mt-0.5">{responsibility.icon}</div>
                                                    <span className="text-gray-200">{responsibility.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-white/90 mb-4">Skills Applied</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {experience.skills.map((skill, index) => (
                                                <span key={index} className="tag">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline left*/}
                            <div className="hidden tab:block absolute left-[-60px] top-0 h-full">
                                <motion.div className="h-full w-0.5 bg-emerald-500/30 absolute left-4"></motion.div>
                                <div className="h-8 w-8 rounded-full bg-emerald-500 border-4 border-[#0c0117] absolute left-0 flex items-center justify-center">
                                    <span className="text-xs font-bold text-[#0c0117]">{experience.id}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;

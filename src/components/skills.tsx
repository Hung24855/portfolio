"use client";

import Tittle from "@/_core/app/components/Title";
import { skillCategories } from "@/_core/app/constant/mySkills";
import clsx from "clsx";
import { MdOutlineStar } from "react-icons/md";
import Tilt from "react-parallax-tilt";

const Skills = () => {
    return (
        <div id="skills" className="min-h-screen mb-20 responsive-layout overflow-hidden scrollbar-y-none py-5">
            <Tittle title="My skills" />

            <div className="space-y-10">
                {skillCategories.map((category) => (
                    <div key={category.name} className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white/90 border-l-4 border-emerald-500 pl-3">
                            {category.name}
                        </h3>

                        <div className="grid grid-cols-2 tab:grid-cols-3 lap:grid-cols-5 gap-4 ">
                            {category.skills.map((skill, index) => (
                                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} key={skill.name}>
                                    <div
                                        className={clsx(
                                            "relative rounded-xl bg-gradient-to-br from-[#131c4a] to-[#0c0117] shadow-xl  transition-all duration-300 overflow-hidden  hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/10"
                                        )}
                                        data-aos="fade-left"
                                        data-aos-delay={100 * index + 1}
                                    >
                                        {skill.isPrimary && (
                                            <div className="absolute top-2 right-2">
                                                <div className="bg-emerald-500 hover:bg-emerald-600 flex px-1 text-sm rounded-lg items-center text-white">
                                                    <MdOutlineStar className="h-3 w-3 mr-1 fill-white" /> Primary
                                                </div>
                                            </div>
                                        )}

                                        <div className="p-6 flex flex-col items-center">
                                            {/* BORDER OF PRIMARY SKILL */}
                                            <div
                                                className={clsx(
                                                    "w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4",
                                                    skill.isPrimary ? "ring-4 ring-emerald-500/30" : ""
                                                )}
                                            >
                                                <img
                                                    src={skill.logo}
                                                    alt={skill.name}
                                                    className="w-12 h-12 object-contain"
                                                />
                                            </div>

                                            <h4 className="text-lg font-medium text-white mb-2">{skill.name}</h4>

                                            <div className="flex space-x-1 mt-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={clsx(
                                                            "w-2 h-2 rounded-full",
                                                            i < skill.level ? "bg-emerald-500" : "bg-gray-600"
                                                        )}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

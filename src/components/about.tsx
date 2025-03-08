import Tittle from "@/_core/app/components/Title";
import { aboutMe } from "@/_core/app/constant/aboutMe";
import { FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBookOpen, FaTrophy } from "react-icons/fa";

const About = () => {
    return (
        <div id="about" className="min-h-screen text-white">
            <Tittle title="About me" />

            <div className="grid grid-cols-6 grid-rows-7 gap-4  max-w-5xl mx-auto">
                <div
                    className="col-span-2 row-span-3 p-6 rounded-lg bg-gradient-to-br from-[#131c4a] to-[#0c0117]"
                    data-aos="fade-right"
                >
                    <h2 className="text-primary text-2xl mb-4">CONTACT INFO</h2>
                    <ul className="text-sm space-y-3">
                        <li className="flex gap-2 items-center">
                            <IoCalendar className="shrink-0" color="var(--primary)" />
                            {aboutMe.dayofbirth}
                        </li>
                        <li className="flex gap-2 items-center">
                            <FaPhone className="shrink-0" color="var(--primary)" />
                            {aboutMe.phone}
                        </li>
                        <li className="flex gap-2 items-center">
                            <MdEmail className="shrink-0" color="var(--primary)" />
                            <span className="break-words w-full">{aboutMe.email}</span>
                        </li>

                        <li className="flex gap-2 items-center">
                            <MdLocationOn className="shrink-0" color="var(--primary)" />
                            {aboutMe.address}
                        </li>
                    </ul>
                </div>
                <div
                    className="col-span-4 row-span-3 col-start-3 p-6 rounded-lg bg-gradient-to-br from-[#131c4a] to-[#0c0117] "
                    data-aos="fade-left"
                >
                    <div className="flex gap-4 items-center mb-4">
                        <h3 className="text-xl font-semibold flex items-center text-emerald-400">
                            <FaGraduationCap className="w-5 h-5 mr-2 " />
                            EDUCATION
                        </h3>
                        <div className="border-b grow border-primary"></div>
                    </div>

                    <div className="flex gap-3 text-sm">
                        <div className="h-[115px] relative border-r border-primary">
                            <div className="absolute size-4 rounded-full top-0 bg-primary left-1/2 -translate-x-1/2 shadow-[0_0_10px_#6ee7b7]"></div>
                        </div>
                        <div>
                            <div className="text-primary text-xl mb-4">10/2020 - 6/2024</div>
                            <div className="space-y-2">
                                <p>HANOI UNIVERSITY OF INDUSTRY</p>
                                <div className="flex items-center space-x-3">
                                    <FaBookOpen className="w-4 h-4 text-emerald-400" />
                                    <p className="text-gray-300">Information Technology</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaTrophy className="w-4 h-4 text-emerald-400" />
                                    <p className="text-gray-300">GPA: 3.02</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="col-span-6 row-span-4 row-start-4 p-6 rounded-lg bg-gradient-to-br from-[#131c4a] to-[#0c0117]"
                    data-aos="fade-top"
                    data-aos-delay="100"
                >
                    <h1 className="text-2xl mb-2">Nghiêm Đình Hồng</h1>
                    <div className="inline-block px-4 py-2 bg-emerald-500/20 rounded-lg text-emerald-400 font-medium mb-6">
                        FRESHER FRONT END DEVELOPER
                    </div>

                    <div className="mt-8 space-y-6 ">
                        <p className="opacity-70">
                            I am a passionate front-end developer with a strong foundation in web technologies. Recently
                            graduated from Hanoi University of Industry with a degree in Information Technology, I am
                            eager to apply my skills and knowledge to create engaging and user-friendly web experiences.
                        </p>
                        <p className="opacity-70">
                            My goal is to continuously improve my skills and stay updated with the latest technologies
                            in the ever-evolving field of web development. I am looking for opportunities to grow as a
                            professional and contribute to innovative projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

import Tittle from "@/_core/app/components/Title";

const Experience = () => {
    return (
        <div id="experience" className="min-h-screen">
            <Tittle title="Work Experience" />

            <div className="mt-12 space-y-8 max-w-5xl mx-auto text-white">
                <div className="flex gap-3 text-sm relative">
                    <div className="h-[260px] relative border-r border-primary mt-8">
                        <div className="absolute size-4 rounded-full top-0 bg-primary left-1/2 -translate-x-1/2 shadow-[0_0_10px_#6ee7b7]"></div>
                        <div className="absolute size-4 rounded-full top-full bg-primary left-1/2 -translate-x-1/2 shadow-[0_0_10px_#6ee7b7]"></div>
                    </div>
                    {/* THÔNG TIN VỊ TRÍ, NHIỆM VỤ */}
                    <div className="grow">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 ">
                            <div className="flex justify-between text-gray-400 text-sm mb-2">
                                <span className="font-semibold text-green-300 text-2xl">MAPSTUDY</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Fresher Front End Developer</h3>
                            <p className="mt-4 text-gray-300 leading-relaxed">
                                As a fresher front-end developer at MAPSTUDY, my responsibilities included:
                            </p>
                            <ul className="mt-4 space-y-3">
                                <li className="flex items-center gap-3">
                                    <span className="text-green-400 text-xl">💻</span>
                                    Writing clean, maintainable, and efficient code.
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-400 text-xl">🚀</span>
                                    Developing and optimizing web interfaces using React.js and Next.js.
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-400 text-xl">🐳</span>
                                    Utilizing Docker and Docker Compose for application deployment.
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-400 text-xl">⚙</span>
                                    Implementing CI/CD pipelines to automate deployment workflows.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* NGÀY BẮT ĐẦU LÀM */}
                    <div className="text-primary text-xl mb-4 absolute right-[calc(100%+30px)] top-8">
                        <span className="whitespace-nowrap">6/2024 -</span>
                    </div>
                    {/* NGÀY NGHỈ */}
                    <div className="text-primary text-xl mb-4 absolute right-[calc(100%+30px)] bottom-2">
                        <span className="whitespace-nowrap">3/2025 -</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;

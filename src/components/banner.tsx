import AppButton from "@/_core/app/components/Button";
import { FaDownload } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="min-h-screen " id="banner">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-6 mt-40">
                    <h2 className="text-2xl tab:text-3xl lap:text-4xl mb-5 text-gray-300 font-semibold">I'm Nghiêm Hồng</h2>
                    <h1 className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text text-3xl mobx:text-4xl tab:text-5xl lap:text-6xl lapx:text-7xl font-bold tab:leading-[3rem] lap:leading-[3.5rem] lapx:leading-[4rem]">
                        Front-end Web Developer
                    </h1>
                    <p className="mt-6 text-sm tab:text-base text-white text-opacity-60">
                        Front-end development requires a combination of HTML, CSS, and JavaScript to build user
                        interfaces. Optimizing performance, ensuring responsiveness, and enhancing user experience are
                        crucial aspects of the development process.
                    </p>

                    <AppButton className="px-10 py-3 flex gap-4 flex-center">
                        <span className="text-lg">Download CV</span>
                        <FaDownload className="size-5" />
                    </AppButton>
                </div>
                <div className=" flex items-end justify-end">
                    <div className="size-[450px] bg-emerald-300 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

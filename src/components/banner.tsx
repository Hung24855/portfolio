import AppButton from "@/_core/app/components/Button";
import { FaDownload } from "react-icons/fa";
const CV_PREVIEW = "https://www.topcv.vn/xem-cv/D1cPUQcGWwFQAAYEVgFWVFwEUQZQUwUCUVUHBQ5f8e";

const Banner = () => {
    return (
        <div className="min-h-screen flex items-center " id="banner">
            <div className="grid grid-cols-2 gap-4 relative z-20 ">
                <div className="space-y-6">
                    <div className="w-max" data-aos="fade-down">
                        <h1 className="line-clamp-1 animate-typing-text text-gray-300 overflow-hidden whitespace-nowrap border-r-2 text-4xl font-extrabold md:text-5xl">
                            I'm Nghiêm Hồng
                        </h1>
                    </div>

                    <h1
                        data-aos="flip-down"
                        data-aos-delay="100"
                        className="text-gradient text-3xl mobx:text-4xl tab:text-5xl lap:text-6xl lapx:text-7xl font-bold tab:leading-[3rem] lap:leading-[3.5rem] lapx:leading-[4rem]"
                    >
                        Front-end Web Developer
                    </h1>
                    <p
                        className="mt-6 text-sm tab:text-base text-white text-opacity-60"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        I specialize in crafting visually appealing and highly responsive web interfaces using modern
                        technologies like HTML, CSS, and JavaScript. My goal is to enhance user experience by optimizing
                        performance, ensuring seamless interactivity, and creating intuitive designs that adapt
                        effortlessly across all devices.
                    </p>
                    <a href={CV_PREVIEW} className="inline-block mt-4">
                        <AppButton
                            className="px-10 py-3 flex gap-4 flex-center"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <span className="text-lg">Preview CV</span>
                            <FaDownload className="size-5" />
                        </AppButton>
                    </a>
                </div>
                <div className=" flex items-end justify-end">
                    <div className="size-[450px] animate-move-up-down rounded-full" data-aos="fade-left">
                        <img
                            src="avatar/avatar-rm-bg.png"
                            alt="ava"
                            className="w-[450px] -translate-y-[100px]"
                            style={{ filter: "drop-shadow(4px 4px 20px rgb(168, 85, 247, 0.8))" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

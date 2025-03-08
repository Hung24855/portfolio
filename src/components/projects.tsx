import Tittle from "@/_core/app/components/Title";

const Projects = () => {
    return (
        <div id="projects" className="min-h-screen">
            <Tittle title="Projects" />

            <div className="grid grid-cols-1  tab:grid-cols-2  lapx:grid-cols-3 gap-4">
                <div className="h-[30rem] p-8 bg-[#172554] rounded-md space-y-6">
                    <div className="h-full w-full bg-white rounded-md"></div>
                </div>
                <div className="h-[30rem] p-8 bg-[#172554] rounded-md space-y-6">
                    <div className="h-full w-full bg-white rounded-md"></div>
                </div>
                <div className="h-[30rem] p-8 bg-[#172554] rounded-md space-y-6">
                    <div className="h-full w-full bg-white rounded-md"></div>
                </div>
                <div className="h-[30rem] p-8 bg-[#172554] rounded-md space-y-6">
                    <div className="h-full w-full bg-white rounded-md"></div>
                </div>
                <div className="h-[30rem] p-8 bg-[#172554] rounded-md space-y-6">
                    <div className="h-full w-full bg-white rounded-md"></div>
                </div>
                <div className="h-[30rem] p-8 bg-[#172554] rounded-md space-y-6">
                    <div className="h-full w-full bg-white rounded-md"></div>
                </div>
            </div>
        </div>
    );
};

export default Projects;

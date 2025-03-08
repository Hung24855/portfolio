import Tittle from "@/_core/app/components/Title";
import { mySkills } from "@/_core/app/constant/mySkills";

const Skills = () => {
    return (
        <div id="skills" className="min-h-screen mb-20 responsive-layout">
            <Tittle title="My skills" />
            <div className="grid grid-cols-1 mobx:grid-cols-2 tab:grid-cols-3 lap:grid-cols-4 desk:grid-cols-5 gap-4 text-white">
                {mySkills.map((skill, index) => (
                    <div className="box group" key={index}>
                        <div className="h-48 p-6 rounded-md space-y-6 flex flex-col items-center">
                            <img src={skill.img} alt="logo" className="size-20" />
                            <h2 className="text-center z-10">{skill.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

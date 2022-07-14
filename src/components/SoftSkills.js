import { getData, soft_skills } from "../data/data.js";
import SoftSkill from "./SoftSkill.js";
import "../styles/SoftSkills.css";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";

function SoftSkills() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="soft_skills_container">
            <h1>{getData(language).soft_skills}</h1>
            <div className="soft_skills">
                {soft_skills.map((skill, index) => (
                    <SoftSkill
                        key={skill.name + "-" + index}
                        name={skill.name[language]}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </section>
    );
}

export default SoftSkills;

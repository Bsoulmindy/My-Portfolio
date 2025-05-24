import { getData, soft_skills } from "../data/data.js";
import SoftSkill from "./SoftSkill.js";
import "../styles/SoftSkills.css";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";

/**
 * @deprecated since v1.3.0
 */
function SoftSkills() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="soft_skills_container" id="soft_skills">
            <h2>{getData(language).soft_skills}</h2>
            <div className="soft_skills">
                {soft_skills.map((skill, index) => (
                    <SoftSkill
                        key={skill.name[language] + "-" + index}
                        name={skill.name[language]}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </section>
    );
}

export default SoftSkills;

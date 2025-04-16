/* eslint-disable react/prop-types */
import "../styles/Project.css";
import ProjectTag from "./ProjectTicket";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
import { getData } from "../data/data";
import { ReactComponent as Screen } from "../assets/screen.svg";

function Project({ project }) {
    const { language } = useContext(LanguageContext);

    const content = (
        <div className="project">
            <div className="project_header">
                {project.tags.map((tag, index) => (
                    <ProjectTag
                        key={"project-ticket-" + index}
                        text={tag.text[language]}
                        backgroundColor={tag.backgroundColor}
                        textColor={tag.textColor}
                    />
                ))}
            </div>
            <div className="project_title">
                <img
                    className="project_image"
                    src={project.image}
                    alt={project.name}
                />
                <div className="project_name">{project.name}</div>
            </div>

            <div className="project_body">
                <div className="project_description">
                    {project.description[language]}
                </div>
            </div>
            <div className="project_platforms_section">
                <Screen className="project_platforms_text_icon" />
                <span className="project_platforms_text">
                    {getData(language).platforms} :{" "}
                </span>
                <span className="project_platforms">
                    {project.platforms.join(", ")}
                </span>
            </div>
        </div>
    );

    if (project.link === "#") {
        return content;
    }
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project_link">
            {content}
        </a>
    );
}

export default Project;

/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "../styles/Project.css";
import ProjectTicket from "./ProjectTicket";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";

function Project({ name, image, tickets, link = "#", description = "" }) {
    const { language } = useContext(LanguageContext);

    const content = (
        <div className="project">
            <div className="project_header">
                {tickets.map((ticker, index) => (
                    <ProjectTicket
                        key={"project-ticket-" + index}
                        text={ticker.text[language]}
                        backgroundColor={ticker.backgroundColor}
                        textColor={ticker.textColor}
                    />
                ))}
            </div>
            <div className="project_title">
                <img className="project_image" src={image} alt={name} />
                <div className="project_name">{name}</div>
            </div>

            <div className="project_body">
                <div className="project_description">{description}</div>
            </div>
            <div className="project_footer"></div>
        </div>
    );

    if (link === "#") {
        return content;
    }
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project_link">
            {content}
        </a>
    );
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
    description: PropTypes.string,
};

export default Project;

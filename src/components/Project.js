import PropTypes from "prop-types";
import "../styles/Project.css";

function Project({ index, name, image, link = "#", description = "" }) {
    const projectCss = "project " + (index === 0 ? "" : "project-top-bordered");

    const content = (
        <div className={projectCss}>
            <img className="project_image" src={image} alt={name} />
            <div className="project_name">{name}</div>
            <div className="project_description">{description}</div>
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
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
    description: PropTypes.string,
};

export default Project;

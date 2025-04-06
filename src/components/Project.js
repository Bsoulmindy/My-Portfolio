import PropTypes from "prop-types";
import "../styles/Project.css";

function Project({ name, image, link = "#", description = "" }) {
    const content = (
        <div className="project">
            <img className="project_image" src={image} alt={name} />
            <div className="project_info">
                <div className="project_name">{name}</div>
                <div className="project_description">{description}</div>
            </div>
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

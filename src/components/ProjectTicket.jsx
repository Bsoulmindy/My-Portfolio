import PropTypes from "prop-types";
import "../styles/ProjectTicket.css";

function ProjectTag({ text, backgroundColor, textColor }) {
    return (
        <div
            className="project_ticket"
            style={{ backgroundColor: backgroundColor }}>
            <span style={{ color: textColor }}>{text}</span>
        </div>
    );
}

ProjectTag.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
};

export default ProjectTag;

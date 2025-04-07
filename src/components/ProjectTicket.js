import PropTypes from "prop-types";
import "../styles/ProjectTicket.css";

function ProjectTicket({ text, backgroundColor, textColor }) {
    return (
        <div
            className="project_ticket"
            style={{ backgroundColor: backgroundColor, color: textColor }}>
            <span>{text}</span>
        </div>
    );
}

ProjectTicket.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
};

export default ProjectTicket;

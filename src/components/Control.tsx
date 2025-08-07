import propTypes from "prop-types";
import "../styles/Control.css";

function Control({ isActive, children, onClick }) {
    return (
        <div
            className={"control" + (isActive ? " control_active" : "")}
            onClick={onClick}
            data-testid="control0">
            {children}
        </div>
    );
}

Control.propTypes = {
    children: propTypes.node.isRequired,
    isActive: propTypes.bool.isRequired,
    onClick: propTypes.func.isRequired,
};

export default Control;

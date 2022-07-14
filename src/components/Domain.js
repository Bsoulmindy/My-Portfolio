import PropTypes from "prop-types";
import React from "react";
import "../styles/Domain.css";

function Domain({ index, name, image, selected, onClick }) {
    const content = (
        <React.Fragment>
            <img src={image} alt={name} height="169" width="256" />
            <div className="domain_name">{name}</div>
        </React.Fragment>
    );
    const container = document.getElementById(index);
    if (container == null) {
        return (
            <div id={index} className="domain_container" onClick={onClick}>
                {content}
            </div>
        );
    }

    if (selected) {
        container.classList.add("domain_selected");
    } else {
        container.classList.remove("domain_selected");
    }

    return (
        <div id={index} className="domain_container" onClick={onClick}>
            {content}
        </div>
    );
}

Domain.propTypes = {
    index: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Domain;

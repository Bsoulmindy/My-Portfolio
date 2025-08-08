import React from "react";
import "../styles/Domain.css";

function Domain({
    index,
    name,
    image,
    selected,
    onClick,
}: Readonly<DomainProps>) {
    const content = (
        <React.Fragment>
            <img src={image} alt={name} height="169" width="256" />
            <div className="domain_name">{name}</div>
        </React.Fragment>
    );
    const container = document.getElementById(index);
    if (container == null) {
        return (
            <div
                id={index}
                className="domain_container"
                onClick={onClick}
                data-testid="domain">
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

type DomainProps = {
    index: string;
    name: string;
    image: string;
    selected: boolean;
    onClick: () => void;
};

export default Domain;

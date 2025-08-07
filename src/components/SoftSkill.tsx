import PropTypes from "prop-types";
import "../styles/SoftSkill.css";
import { useContext } from "react";
import { DarkContext } from "../utils/DarkContext";

function SoftSkill({ name, icon }) {
    const { mode } = useContext(DarkContext);

    return (
        <div className="soft_skill">
            <img
                src={icon}
                alt={name}
                height="50"
                width="50"
                className={mode === "dark" ? "image-white" : "image-dark"}
            />
            <div className="soft_skill_name">{name}</div>
        </div>
    );
}

SoftSkill.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default SoftSkill;

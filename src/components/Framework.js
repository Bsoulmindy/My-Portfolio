import PropTypes from "prop-types";
import "../styles/Framework.css";

function Framework({ name, image, link }) {
    const content = (
        <div className="framework_container">
            <div className="framework_image">
                <img src={image} alt={name} height="100" width="100" />
            </div>
            <div className="framework_name">{name}</div>
        </div>
    );

    if (link === "#") {
        return <div className="framework_link">{content}</div>;
    }
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="framework_link">
            {content}
        </a>
    );
}

Framework.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
};

Framework.defaultProps = {
    link: "#",
};

export default Framework;

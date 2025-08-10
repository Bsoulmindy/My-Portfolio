import "../styles/ProjectTicket.css";

function ProjectTag({
    text,
    backgroundColor,
    textColor,
}: Readonly<ProjectTagProps>) {
    return (
        <div
            className="project_ticket"
            style={{ backgroundColor: backgroundColor }}>
            <span style={{ color: textColor }}>{text}</span>
        </div>
    );
}

type ProjectTagProps = {
    text: string;
    backgroundColor: string;
    textColor: string;
};

export default ProjectTag;

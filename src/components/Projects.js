import { getData, personalProjects } from "../data/data";
import "../styles/Projects.css";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
import Project from "./Project";

function Projects() {
    const { language } = useContext(LanguageContext);

    return (
        <section id="projects">
            <h1>{getData(language).projects}</h1>
            <div className="projects_container">
                {personalProjects.map((project, index) => (
                    <Project key={"project-" + index} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;

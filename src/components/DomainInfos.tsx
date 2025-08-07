import { getData, domains } from "../data/data";
import PropTypes from "prop-types";
import "../styles/DomainInfos.css";
import Framework from "./Framework";
import Project from "./Project";
import { React, useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";

function DomainInfos({ domainSelected }) {
    const { language } = useContext(LanguageContext);

    const domain = domains.find((domain) => domain.name === domainSelected);
    if (domain == undefined) {
        return (
            <div id="domainInfos" className="domains_select_text domain_fadeIn">
                {getData(language).select_domain}
            </div>
        );
    } else {
        const isFrameworksExist = domain.frameworks.length > 0;
        const isProjectsExist = domain.projects.length > 0;
        return (
            <div
                id="domainInfos"
                className="domain_info_container domain_fadeIn">
                {isFrameworksExist && (
                    <React.Fragment>
                        <h2>{getData(language).frameworks}</h2>
                        <div className="domain_frameworks">
                            {domain.frameworks.map((framework) => (
                                <Framework
                                    key={domain.name.en + "-" + framework.name}
                                    name={framework.name}
                                    image={framework.image}
                                    link={framework.link}
                                />
                            ))}
                        </div>
                    </React.Fragment>
                )}
                {isProjectsExist && (
                    <React.Fragment>
                        <h2>{getData(language).projects}</h2>
                        <div>
                            {domain.projects.map((project, index) => (
                                <Project
                                    key={domain.name.en + "-" + project.name}
                                    index={index}
                                    name={project.name}
                                    image={project.image}
                                    link={project.link}
                                    description={project.description[language]}
                                />
                            ))}
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }
}

DomainInfos.propTypes = {
    domainSelected: PropTypes.string.isRequired,
};

export default DomainInfos;

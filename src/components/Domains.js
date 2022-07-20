import { getData, domains } from "../data/data";
import { useState } from "react";
import Domain from "./Domain";
import DomainInfos from "./DomainInfos";
import "../styles/Domains.css";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";

function Domains() {
    const { language } = useContext(LanguageContext);

    // "domainSelected" is the domain name selected by the user, and which we will display more informations about.
    const [domainSelected, setDomainSelected] = useState("");

    const showDomainInfos = (domainName, index) => {
        const container = document.getElementById("domainInfos");
        const containerDomainSelected = document.getElementById(
            "domain-" + index
        );
        if (container == null) {
            setDomainSelected(domainName);
            return;
        }
        if (containerDomainSelected != null) {
            containerDomainSelected.classList.add("domain_selected");
        }
        container.addEventListener("animationend", () => {
            container.classList.remove("domain_fadeOut");
            setDomainSelected(domainName);
            container.removeEventListener("animationend", this);
            container.classList.add("domain_fadeIn");
        });
        container.classList.remove("domain_fadeIn");
        container.classList.add("domain_fadeOut");
    };

    const isDomainSelected = (domainName) => {
        return domainSelected === domainName;
    };

    return (
        <section id="domains">
            <h1>{getData(language).title_domains}</h1>
            <div className="domains_container">
                {domains.map((domain, index) => (
                    <Domain
                        key={"domain-" + index}
                        index={"domain-" + index}
                        name={domain.name}
                        image={domain.image}
                        selected={isDomainSelected(domain.name)}
                        onClick={() => showDomainInfos(domain.name, index)}
                    />
                ))}
            </div>
            <DomainInfos domainSelected={domainSelected} />
        </section>
    );
}

export default Domains;

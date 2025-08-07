import "../styles/PerformanceTable.css";
import { domains, getData } from "../data/data.js";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext.js";
import PerformanceTable from "./PerformanceTable.js";

function Domains() {
    const { language } = useContext(LanguageContext);

    const headers = [
        getData(language).domain,
        "",
        getData(language).experience,
    ];

    return (
        <section className="performance-table-entries_container" id="domains">
            <h2>{getData(language).title_domains}</h2>
            <PerformanceTable
                data={domains}
                headers={headers}
                id={"domains_table"}
            />
        </section>
    );
}

export default Domains;

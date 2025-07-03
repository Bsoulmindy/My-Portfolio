import "../styles/PerformanceTable.css";
import { getData, languages } from "../data/data.js";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext.jsx";
import PerformanceTable from "./PerformanceTable.jsx";

function Languages() {
    const { language } = useContext(LanguageContext);

    const headers = [
        getData(language).language,
        "",
        getData(language).experience,
    ];

    return (
        <section className="performance-table-entries_container" id="languages">
            <h2>{getData(language).title_languages}</h2>
            <PerformanceTable
                data={languages}
                headers={headers}
                id={"languages_table"}
            />
        </section>
    );
}

export default Languages;

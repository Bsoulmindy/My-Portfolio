/* eslint-disable react/prop-types */
import "../styles/PerformanceTable.css";
import { getData } from "../data/data.js";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext.js";

const PerformanceTable = ({ data, headers, id }) => {
    const { language } = useContext(LanguageContext);

    // Order languages by years
    const dataSorted = data.toSorted((a, b) => b.years - a.years).slice(0, 5);

    const max = data.reduce((max, language) => {
        return Math.max(max, language.years);
    }, 0);

    const determineColor = (progress) => {
        const ratio = progress / 100;
        const red =
            ratio <= 0.5 ? 255 : Math.floor(255 * (1 - (ratio - 0.5) * 2));
        const green = ratio <= 0.5 ? Math.floor(200 * (ratio * 2)) : 255;
        const blue = 0;
        return `rgb(${red},${green},${blue})`;
    };

    const isYearOrYears = (years) => {
        if (years > 1) return getData(language).years;
        else return getData(language).year;
    };

    const style = (language) => {
        const progress = (language.years / max) * 100;
        let color = determineColor(progress);

        return {
            maxWidth: (language.years / max) * 100 + "%",
            backgroundColor: color,
        };
    };

    const isLink = (link) => {
        return link && link !== "#";
    };

    return (
        <table id={id} width="100%">
            <thead>
                <tr className="performance-table-entries_title">
                    {headers.map((header, index) => (
                        <th key={header + index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dataSorted.map((entry) => (
                    <tr
                        className="performance-table-entries_stat"
                        key={"performance-table-entries_" + entry.name["en"]}>
                        <td className="performance-table-entry_logo">
                            {isLink(entry.link) ? (
                                <a
                                    href={entry.link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <PerformanceTableName entry={entry} />
                                </a>
                            ) : (
                                <PerformanceTableName entry={entry} />
                            )}
                        </td>
                        <td>
                            <div className="performance-table-entry_progress_container">
                                <div
                                    className="performance-table-entry_progress"
                                    style={style(entry)}></div>
                            </div>
                        </td>
                        <td className="performance-table-entry_years">
                            {entry.years + " " + isYearOrYears(entry.years)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const PerformanceTableName = ({ entry }) => {
    const { language } = useContext(LanguageContext);

    if (!entry.logo) {
        return (
            <span className="performance-table-entry_name">
                {entry.name[language]}
            </span>
        );
    }

    return (
        <img
            className="performance-table-entry_image"
            src={entry.logo}
            alt={entry.name[language]}
        />
    );
};

export default PerformanceTable;

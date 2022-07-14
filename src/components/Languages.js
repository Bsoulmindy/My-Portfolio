import "../styles/Languages.css";
import { getData, languages } from "../data/data.js";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";

function Languages() {
    const { language } = useContext(LanguageContext);

    // Order languages by years
    const languagesSorted = languages.sort((a, b) => b.years - a.years);

    const max = languages.reduce((max, language) => {
        return Math.max(max, language.years);
    }, 0);

    const determineColor = (years) => {
        if (years <= 1) return "var(--progress-beginner)";
        else if (years <= 3) return "var(--progress-medium)";
        else return "var(--progress-expert)";
    };

    const isYearOrYears = (years) => {
        if (years > 1) return getData(language).years;
        else return getData(language).year;
    };

    const style = (language) => ({
        maxWidth: (language.years / max) * 100 + "%",
        backgroundColor: determineColor(language.years),
    });

    return (
        <section className="languages_container">
            <h1>{getData(language).title_languages}</h1>
            <table id="languages_table" width="100%">
                <thead>
                    <tr className="languages_title">
                        <th>{getData(language).language}</th>
                        <th></th>
                        <th>{getData(language).experience}</th>
                    </tr>
                </thead>
                <tbody>
                    {languagesSorted.map((language) => (
                        <tr
                            className="languages_stat"
                            key={"languages_" + language.name}>
                            <td className="language_logo">
                                <a href={language.link}>
                                    <img
                                        className="language_image"
                                        src={language.logo}
                                        alt={language.name}
                                    />
                                </a>
                            </td>
                            <td>
                                <div className="language_progress_container">
                                    <div
                                        className="language_progress"
                                        style={style(language)}></div>
                                </div>
                            </td>
                            <td className="language_years">
                                {language.years +
                                    " " +
                                    isYearOrYears(language.years)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default Languages;

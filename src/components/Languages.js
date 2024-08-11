import "../styles/Languages.css";
import { getData, languages } from "../data/data.js";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";

function Languages() {
    const { language } = useContext(LanguageContext);

    // Order languages by years
    const languagesSorted = languages.toSorted((a, b) => b.years - a.years);

    const max = languages.reduce((max, language) => {
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

    return (
        <section className="languages_container" id="languages">
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
                                <a
                                    href={language.link}
                                    target="_blank"
                                    rel="noreferrer">
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

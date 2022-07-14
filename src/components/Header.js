import "../styles/Header.css";
import page_language from "../assets/page_language.svg";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
import ToggleModeButton from "./ToggleModeButton";
import { DarkContext } from "../utils/DarkContext";
import { getData, version } from "../data/data";

function Header() {
    const { language, selectLanguage } = useContext(LanguageContext);
    const { mode, toggleMode } = useContext(DarkContext);

    const changeLanguage = () => {
        const selector = document.getElementById("selector_language");
        const language = selector.options[selector.selectedIndex].value;
        selectLanguage(language);
    };

    return (
        <header className="header">
            <div className="select_language">
                <img
                    src={page_language}
                    className={
                        "language_icon " +
                        (mode === "dark" ? "image-white" : "image-dark")
                    }
                />
                <select
                    id="selector_language"
                    className="page_language"
                    defaultValue={language}
                    onChange={changeLanguage}>
                    <option value="en">EN</option>
                    <option value="fr">FR</option>
                </select>
            </div>
            <div className="toggle_mode" onClick={toggleMode}>
                <ToggleModeButton />
                <div className="toggle_mode_text">
                    {mode === "dark"
                        ? getData(language).darkmode
                        : getData(language).lightmode}
                </div>
            </div>
            <div className="version">{version}</div>
        </header>
    );
}

export default Header;

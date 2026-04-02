import "../styles/Footer.css";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
import { getData } from "../data/data";

function Footer() {
    const { language } = useContext(LanguageContext);

    return (
        <footer className="footer">
            <span>
                {getData(language).copyright} {getData(language).update_date}
            </span>
        </footer>
    );
}

export default Footer;

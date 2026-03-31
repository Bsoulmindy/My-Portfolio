import "../styles/Footer.css";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
import { getData } from "../data/data";

function Footer() {
    const { language } = useContext(LanguageContext);

    return (
        <footer className="footer">
            <div className="last_updated">
                <span>{getData(language).update_date}</span>
            </div>
        </footer>
    );
}

export default Footer;

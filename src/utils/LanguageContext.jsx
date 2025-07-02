import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(getCookie("language") || "en");
    const selectLanguage = (language) => {
        document.cookie = `language=${language};sameSite=lax;max-age=31536000`;
        setLanguage(language);
    };

    return (
        <LanguageContext.Provider value={{ language, selectLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

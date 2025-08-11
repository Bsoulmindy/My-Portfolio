import { createContext, ReactNode, useMemo, useState } from "react";

export const LanguageContext = createContext({
    language: "en",
    selectLanguage: (lang: string) => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState(getCookie("language") || "en");
    const selectLanguage = (language: string) => {
        document.cookie = `language=${language};sameSite=lax;max-age=31536000`;
        setLanguage(language);
    };

    const value = useMemo(() => ({ language, selectLanguage }), [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
}

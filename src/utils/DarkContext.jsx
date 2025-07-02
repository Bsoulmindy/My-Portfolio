import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DarkContext = createContext();

export const DarkProvider = ({ children }) => {
    const [mode, setMode] = useState(getCookie("mode") || "dark");
    const toggleMode = () => {
        const modeToggled = mode === "dark" ? "light" : "dark";
        document.cookie = `mode=${modeToggled};sameSite=lax;max-age=31536000`;
        setMode(modeToggled);
    };

    return (
        <DarkContext.Provider value={{ mode, toggleMode }}>
            {children}
        </DarkContext.Provider>
    );
};

DarkProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

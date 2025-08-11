import { createContext, ReactNode, useState, useMemo } from "react";

export const DarkContext = createContext({
    mode: "dark",
    toggleMode: () => {},
});

export const DarkProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState(getCookie("mode") || "dark");
    const toggleMode = () => {
        const modeToggled = mode === "dark" ? "light" : "dark";
        document.cookie = `mode=${modeToggled};sameSite=lax;max-age=31536000`;
        setMode(modeToggled);
    };

    const value = useMemo(() => ({ mode, toggleMode }), [mode]);

    return (
        <DarkContext.Provider value={value}>{children}</DarkContext.Provider>
    );
};

function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
}

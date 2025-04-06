import React from "react";
import Profile from "./components/Profile";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Header from "./components/Header";
import { LanguageProvider } from "./utils/LanguageContext";
import { DarkProvider } from "./utils/DarkContext";
import GlobalStyle from "./styles/GlobalStyle";
import Controls from "./components/Controls";

export const structure = (
    <React.StrictMode>
        <DarkProvider>
            <LanguageProvider>
                <GlobalStyle />
                <Controls />
                <Header />
                <Profile />
                <Languages />
                <Projects />
            </LanguageProvider>
        </DarkProvider>
    </React.StrictMode>
);

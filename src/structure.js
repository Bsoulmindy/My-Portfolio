import React from "react";
import Profile from "./components/Profile";
import Languages from "./components/Languages";
import Domains from "./components/Domains";
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
                <Domains />
            </LanguageProvider>
        </DarkProvider>
    </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import reportWebVitals from "./reportWebVitals";
import Profile from "./components/Profile";
import Languages from "./components/Languages";
import Domains from "./components/Domains";
import SoftSkills from "./components/SoftSkills";
import "./scripts/intersectionObserver";
import Header from "./components/Header";
import { LanguageProvider } from "./utils/LanguageContext";
import { DarkProvider } from "./utils/DarkContext";
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <DarkProvider>
            <LanguageProvider>
                <GlobalStyle />
                <Header />
                <Profile />
                <Languages />
                <Domains />
                <SoftSkills />
            </LanguageProvider>
        </DarkProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

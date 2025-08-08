import "../styles/Controls.css";
import Control from "./Control";
import { useState } from "react";
import Home from "../assets/home.svg?react";
import Domains from "../assets/domains.svg?react";
import Code from "../assets/code.svg?react";
import Work from "../assets/work.svg?react";
import smoothscroll from "smoothscroll-polyfill";

function Controls() {
    const [isHomeActive, setIsHomeActive] = useState(true);
    const [isDomainsActive, setIsDomainsActive] = useState(false);
    const [isCodeActive, setIsCodeActive] = useState(false);
    const [isWorkActive, setIsWorkActive] = useState(false);

    // Add the polyfill to the window object for unsupprted browsers (Safari, IE)
    smoothscroll.polyfill();

    const selectControl = (control: string) => {
        switch (control) {
            case "home":
                scrollTo(document.getElementById("header"));
                break;
            case "domains":
                scrollTo(document.getElementById("domains"));
                break;
            case "code":
                scrollTo(document.getElementById("languages"));
                break;
            case "work":
                scrollTo(document.getElementById("projects"));
                break;
        }
    };

    const options = {
        threshold: 0.2,
    };

    const observerControls = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                switch (entry.target.id) {
                    case "profile":
                        setIsHomeActive(true);
                        break;
                    case "domains":
                        setIsDomainsActive(true);
                        break;
                    case "languages":
                        setIsCodeActive(true);
                        break;
                    case "projects":
                        setIsWorkActive(true);
                        break;
                }
            } else {
                switch (entry.target.id) {
                    case "profile":
                        setIsHomeActive(false);
                        break;
                    case "domains":
                        setIsDomainsActive(false);
                        break;
                    case "languages":
                        setIsCodeActive(false);
                        break;
                    case "projects":
                        setIsWorkActive(false);
                        break;
                }
            }
        });
    }, options);
    setTimeout(() => {
        for (let elemId in ["profile", "domains", "languages", "projects"]) {
            const elem = document.getElementById(elemId);
            if (elem) {
                observerControls.observe(elem);
            }
        }
    }, 1000);

    return (
        <div className="controls">
            <Control
                isActive={isHomeActive}
                onClick={() => selectControl("home")}>
                <Home />
            </Control>
            <Control
                isActive={isDomainsActive}
                onClick={() => selectControl("domains")}>
                <Domains />
            </Control>
            <Control
                isActive={isCodeActive}
                onClick={() => selectControl("code")}>
                <Code />
            </Control>
            <Control
                isActive={isWorkActive}
                onClick={() => selectControl("work")}>
                <Work />
            </Control>
        </div>
    );
}

export default Controls;

function scrollTo(obj: HTMLElement | null) {
    let curtop = 0;
    if (obj?.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj == obj.offsetParent);
        window.scroll({
            top: curtop,
            left: 0,
            behavior: "smooth",
        });
    }
}

import "../styles/Controls.css";
import Control from "./Control";
import { useState } from "react";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Domains } from "../assets/domains.svg";
import { ReactComponent as Code } from "../assets/code.svg";
import { ReactComponent as Work } from "../assets/work.svg";
import smoothscroll from "smoothscroll-polyfill";

function Controls() {
    const [isHomeActive, setHomeActive] = useState(true);
    const [isDomainsActive, setDomainsActive] = useState(false);
    const [isCodeActive, setCodeActive] = useState(false);
    const [isWorkActive, setWorkActive] = useState(false);

    // Add the polyfill to the window object for unsupprted browsers (Safari, IE)
    smoothscroll.polyfill();

    const selectControl = (control) => {
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

    var options = {
        threshold: 0.2,
    };

    var observerControls = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                switch (entry.target.id) {
                    case "profile":
                        setHomeActive(true);
                        break;
                    case "domains":
                        setDomainsActive(true);
                        break;
                    case "languages":
                        setCodeActive(true);
                        break;
                    case "projects":
                        setWorkActive(true);
                        break;
                }
            } else {
                switch (entry.target.id) {
                    case "profile":
                        setHomeActive(false);
                        break;
                    case "domains":
                        setDomainsActive(false);
                        break;
                    case "languages":
                        setCodeActive(false);
                        break;
                    case "projects":
                        setWorkActive(false);
                        break;
                }
            }
        });
    }, options);
    setTimeout(() => {
        observerControls.observe(document.getElementById("profile"));
        observerControls.observe(document.getElementById("domains"));
        observerControls.observe(document.getElementById("languages"));
        observerControls.observe(document.getElementById("projects"));
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

function scrollTo(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
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

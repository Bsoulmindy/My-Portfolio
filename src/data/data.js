import Factory from "../assets/Factory.png";
import Cplusplus from "../assets/Cplusplus_logo.svg";
import Javascript from "../assets/JavaScript_logo.png";
import Java from "../assets/Java_logo.png";
import Python from "../assets/Python-logo.png";
import Dart from "../assets/Dart_logo.png";
import Linkedin from "../assets/Linkedin.png";
import Github from "../assets/Github.png";
import Leetcode from "../assets/Leetcode.png";
import RegionsMusicIcon from "../assets/regions-music.png";
import RevisionAssistantIcon from "../assets/revision_assistant_icon.png";
import Communication from "../assets/Communication.png";
import ProblemSolving from "../assets/Problem_Solving.png";
import Teamwork from "../assets/Teamwork.png";
import Creativity from "../assets/Creativity.png";

import en from "./en.js";
import fr from "./fr.js";

export const version = "v1.4.1";

export const translations = ["en", "fr"];

export function getData(lang) {
    switch (lang) {
        case "en":
            return en;
        case "fr":
            return fr;
        default:
            return en;
    }
}

export const image = Factory;

export const languages = [
    {
        name: "JavaScript",
        years: 2,
        logo: Javascript,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "C++",
        years: 3.5,
        logo: Cplusplus,
        link: "https://en.wikipedia.org/wiki/C%2B%2B",
    },
    {
        name: "Java",
        years: 3,
        logo: Java,
        link: "https://en.wikipedia.org/wiki/Java_(programming_language)",
    },
    {
        name: "Python",
        years: 1,
        logo: Python,
        link: "https://en.wikipedia.org/wiki/Python_(programming_language)",
    },
    {
        name: "Dart",
        years: 2,
        logo: Dart,
        link: "https://en.wikipedia.org/wiki/Dart_(programming_language)",
    },
];

export const domains = [
    {
        name: "Web Development",
        years: 4,
    },
    {
        name: "App Development",
        years: 3,
    },
    {
        name: "Competitive Programming",
        years: 2,
    },
    {
        name: "DevOps",
        years: 1.5,
    },
    {
        name: "Cybersecurity",
        years: 0.25,
    },
    {
        name: "Blockchain",
        years: 0,
    },
    {
        name: "Quality Assurance",
        years: 1,
    },
    {
        name: "Game Development",
        years: 0,
    },
    {
        name: "Artifical Intelligence",
        years: 0,
    },
    {
        name: "Embedded Systems",
        years: 0,
    },
    {
        name: "Artificial / Virtual Reality",
        years: 0,
    },
];

export const personalProjects = [
    {
        name: "Revision Assistant",
        image: RevisionAssistantIcon,
        link: "https://revision-assistant.vercel.app/",
        description: {
            en: "A cross-platform app that selects random questions and the user should guess the right answer, or vice versa",
            fr: "Une application multiplateforme qui sélectionne des questions aléatoires et l'utilisateur doit deviner la bonne réponse, ou vice versa",
        },
        tags: [
            {
                text: {
                    en: "App",
                    fr: "App",
                },
                backgroundColor: "green",
                textColor: "white",
            },
        ],
        platforms: ["Web", "Mobile", "Desktop"],
    },
    {
        name: "Regions Music",
        image: RegionsMusicIcon,
        link: "https://regions-music.optidevnovate.com/",
        description: {
            en: "An app that plays music according to your location",
            fr: "Une application qui joue la musique selon votre position",
        },
        tags: [
            {
                text: {
                    en: "App",
                    fr: "App",
                },
                backgroundColor: "green",
                textColor: "white",
            },
        ],
        platforms: ["Mobile", "Desktop"],
    },
];

export const soft_skills = [
    {
        name: {
            en: "Communication",
            fr: "Communication",
        },
        icon: Communication,
    },
    {
        name: {
            en: "Teamwork",
            fr: "Travail en équipe",
        },
        icon: Teamwork,
    },
    {
        name: {
            en: "Problem Solving",
            fr: "Résolution de problèmes",
        },
        icon: ProblemSolving,
    },
    {
        name: {
            en: "Creativity",
            fr: "Créativité",
        },
        icon: Creativity,
    },
];

export const media_links = [
    {
        name: "Linkedin",
        image: Linkedin,
        link: "https://www.linkedin.com/in/oussama-bader-2ba9b7241/",
    },
    {
        name: "Github",
        image: Github,
        link: "https://github.com/Bsoulmindy/",
    },
    {
        name: "Leetcode",
        image: Leetcode,
        link: "https://leetcode.com/oussamabader/",
    },
];

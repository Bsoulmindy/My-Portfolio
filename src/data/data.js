import Factory from "../assets/Factory.png";
import Cplusplus from "../assets/Cplusplus_logo.svg";
import Javascript from "../assets/JavaScript_logo.png";
import Java from "../assets/Java_logo.png";
import Python from "../assets/Python-logo.png";
import WebDevelopment from "../assets/Web_Development.png";
import Urbit from "../assets/Urbit.png";
import jQuery from "../assets/jQuery.png";
import React from "../assets/React.png";
import Laravel from "../assets/Laravel.png";
import Spring from "../assets/Spring.png";
import Communication from "../assets/Communication.png";
import ProblemSolving from "../assets/Problem_Solving.png";
import Teamwork from "../assets/Teamwork.png";
import Creativity from "../assets/Creativity.png";

import en from "./en.js";
import fr from "./fr.js";

export const version = "v1.1.0";

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
        years: 1,
        logo: Javascript,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "C++",
        years: 4,
        logo: Cplusplus,
        link: "https://en.wikipedia.org/wiki/C%2B%2B",
    },
    {
        name: "Java",
        years: 2,
        logo: Java,
        link: "https://en.wikipedia.org/wiki/Java_(programming_language)",
    },
    {
        name: "Python",
        years: 1,
        logo: Python,
        link: "https://en.wikipedia.org/wiki/Python_(programming_language)",
    },
];

// The names should be unique
export const domains = [
    {
        name: "Web Development",
        image: WebDevelopment,
        frameworks: [
            {
                name: "React",
                image: React,
                link: "https://reactjs.org/",
            },
            {
                name: "Laravel",
                image: Laravel,
                link: "https://laravel.com/",
            },
            {
                name: "Spring",
                image: Spring,
                link: "https://spring.io/",
            },
            {
                name: "jQuery",
                image: jQuery,
                link: "https://jquery.com/",
            },
        ],
        projects: [
            {
                name: "Urbit",
                image: Urbit,
                link: "#",
                description: {
                    en: "A platform E-Learning for Soft-Skills",
                    fr: "Une plateforme E-Learning dédiée aux Soft-Skills",
                },
            },
        ],
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

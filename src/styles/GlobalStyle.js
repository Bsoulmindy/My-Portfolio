import { createGlobalStyle } from "styled-components";
import { useContext } from "react";
import { DarkContext } from "../utils/DarkContext";
import backgroundImage from "../assets/grid.png";

const StyledGlobalStyle = createGlobalStyle`
        :root {
            --primary-dark: ${({ isDarkMode }) =>
                isDarkMode ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"};
            --secondary-dark: ${({ isDarkMode }) =>
                isDarkMode ? "rgb(193, 193, 193)" : "rgb(63, 63, 63)"};
            --tertiary-dark: ${({ isDarkMode }) =>
                isDarkMode ? "rgb(129, 129, 129)" : "rgb(127, 127, 127)"};
            --primary-light: ${({ isDarkMode }) =>
                isDarkMode ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"};
            --secondary-light: ${({ isDarkMode }) =>
                isDarkMode ? "rgb(51, 51, 51)" : "rgb(205, 205, 205)"};
            --background-dark: ${({ isDarkMode }) =>
                isDarkMode ? "rgb(32, 32, 32)" : "rgb(224, 224, 224)"};
        }

        body {
            background-image: url(${backgroundImage});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }
    `;

function GlobalStyle() {
    const { mode } = useContext(DarkContext);

    return <StyledGlobalStyle isDarkMode={mode === "dark"} />;
}

export default GlobalStyle;

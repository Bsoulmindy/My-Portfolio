import { useContext } from "react";
import { DarkContext } from "../utils/DarkContext";

function ToggleModeButton() {
    const { mode } = useContext(DarkContext);

    return (
        <button
            title="Toggle Theme"
            className={
                "toggle_button " +
                (mode === "dark" ? "dark_mode" : "light_mode")
            }>
            <svg
                className="toggle_image"
                id="icon"
                viewBox="0 0 100 100"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <g id="darkmode" fillRule="nonzero">
                    <path d="M50,1.78e-15 C77.61,1.78e-15 100,22.39 100,50 C100,77.61 77.61,100 50,100 C22.39,100 0,77.61 0,50 C0,22.39 22.39,1.78e-15 50,1.78e-15 Z M50,6 C26,6 6,26 6,50 C6,74 26,94 50,94 L50,75 C64,75 75,64 75,50 C75,36 64,25 50,25 L50,6 Z"></path>
                    <path d="M50,25 C50,25 50,75 50,75 C36,75 25,64 25,50 C25,36 36,25 50,25 Z"></path>
                </g>
            </svg>
        </button>
    );
}

export default ToggleModeButton;

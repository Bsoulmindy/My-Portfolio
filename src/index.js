import ReactDOM from "react-dom/client";
import "./global.css";
import reportWebVitals from "./reportWebVitals";
import "./scripts/intersectionObserver";
import { structure } from "./structure";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(structure);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

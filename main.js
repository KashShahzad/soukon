import "./style.css";
import javascriptLogo from "./javascript.svg";
import { createNavbar } from "./components/navbar";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const app = document.querySelector("#app");
const navbar = createNavbar();
app.appendChild(navbar);

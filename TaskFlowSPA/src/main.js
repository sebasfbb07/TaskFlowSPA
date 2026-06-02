import "./styles/global.css";
import { renderRegister } from "./views/auth/register";

const app = document.getElementById("app");

app.innerHTML = renderRegister();
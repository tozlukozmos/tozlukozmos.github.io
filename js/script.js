import { contact } from "./contact.js";
import { menu } from "./menu.js";

window.onload = () => {
    contact();
    menu();
    window.location.hash = '#home';
}
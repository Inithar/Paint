import './style.css'

import { generateToolBarMarkup } from "./components/tool-bar.js";
import { init } from "./app.js";

document.querySelector('#app').innerHTML = `${generateToolBarMarkup()}`;

init();
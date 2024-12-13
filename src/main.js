import './style.css'

import { generateToolBarMarkup } from "./components/tool-bar.js";

document.querySelector('#app').innerHTML = `${generateToolBarMarkup()}`

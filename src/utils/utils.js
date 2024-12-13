import { getCurrentLineWidth } from "../state/state.js";
import { capitalizeFirstLetter } from "./helpers.js";

export function renderActiveTool(name) {
  const activeTool = document.querySelector(".active-tool");
  activeTool.textContent = capitalizeFirstLetter(name);
}

export function renderLineWidth() {
  const brushSize = document.querySelector(".brush-size");
  const width = getCurrentLineWidth();

  brushSize.textContent = width < 10 ? `0${width}` : width;
}

export const getMousePosition = event => {
  const boundaries = canvas.getBoundingClientRect();

  return {
    x: event.clientX - boundaries.left,
    y: event.clientY - boundaries.top
  };
};

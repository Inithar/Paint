import {
  getCurrentLineWidth,
  getCurrentMousePosition,
  getMouseDownPosition,
  setCurrentMousePosition,
  setRecentWords
} from "../state/state.js";
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

export function getMousePosition(event) {
  const boundaries = canvas.getBoundingClientRect();

  return {
    x: event.clientX - boundaries.left,
    y: event.clientY - boundaries.top
  };
}

export function printLetter(e, context) {
  if (e.key === "Enter") {
    const lineWidth = getCurrentLineWidth() + 4;
    const { x, y } = getMouseDownPosition();

    return setCurrentMousePosition({ x, y: y + lineWidth });
  }

  const currentPosition = getCurrentMousePosition();
  context.fillText(e.key, currentPosition.x, currentPosition.y);

  setCurrentMousePosition({ x: currentPosition.x + context.measureText(e.key).width, y: currentPosition.y });
  setRecentWords(recentWords => [...recentWords, e.key]);
}

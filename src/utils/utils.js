import { capitalizeFirstLetter } from "./helpers.js";
import { restoreCanvas } from "../scripts/canvas.js";
import {
  getCanvas,
  getContext,
  getCurrentLineWidth,
  getCurrentMousePosition,
  getMouseDownPosition,
  getRecentWords,
  getUndoList,
  setCurrentMousePosition,
  setRecentWords,
  setUndoList
} from "../state/state.js";

export function renderActiveTool(name) {
  const activeTool = document.querySelector(".active-tool");
  activeTool.textContent = capitalizeFirstLetter(name);
}

export function renderLineWidth() {
  const brushSize = document.querySelector(".brush-size");
  const width = getCurrentLineWidth();

  brushSize.textContent = width < 10 ? `0${width}` : width;
}

export function getMousePosition(e) {
  const canvas = getCanvas();
  const boundaries = canvas.getBoundingClientRect();

  return {
    x: e.clientX - boundaries.left,
    y: e.clientY - boundaries.top
  };
}

export function printLetter(e) {
  const canvas = getCanvas();
  const context = getContext();

  const currentPosition = getCurrentMousePosition();

  if (e.key === "Backspace") {
    undo();

    const recentWords = getRecentWords();
    const recentWord = recentWords[recentWords.length - 1];

    setCurrentMousePosition({ x: currentPosition.x - context.measureText(recentWord).width, y: currentPosition.y });
    setRecentWords(prev => prev.filter((item, index) => index !== prev.length - 1));
  } else if (e.key === "Enter") {
    const lineWidth = Number(getCurrentLineWidth()) + 4;
    const mouseDownPosition = getMouseDownPosition();
    const currentMousePosition = getCurrentMousePosition();

    setCurrentMousePosition({ x: mouseDownPosition.x, y: Number(currentMousePosition.y) + lineWidth });
  } else {
    if (!isLetter(e) && e.key !== " ") return;

    context.fillText(e.key, currentPosition.x, currentPosition.y);
    setCurrentMousePosition({ x: currentPosition.x + context.measureText(e.key).width, y: currentPosition.y });
    setUndoList(prev => [...prev, canvas.toDataURL()]);
    setRecentWords(recentWords => [...recentWords, e.key]);
  }
}

export function undo() {
  setUndoList(prev => prev.filter((item, index) => index !== prev.length - 1));

  const undoList = getUndoList();
  const imgData = undoList[undoList.length - 1];
  restoreCanvas(imgData);
}

function isLetter(e) {
  return /^[a-zA-Z]$/.test(e.key);
}

import { getCurrentTool, setCurrentTool } from "../state/state.js";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function renderActiveTool (name) {
  const activeTool = document.querySelector(".active-tool");
  activeTool.textContent = capitalizeFirstLetter(name);
}

export function renderBrushSize (size) {
  const brushSize = document.querySelector(".brush-size");
  brushSize.textContent = size < 10 ? `0${size}` : size;
}

export function handleToolSwitch (newToolName) {
  const currentToolName = getCurrentTool();
  const currentToolIconNode = document.querySelector(`.${currentToolName}-tool > i`);
  const newToolIconNode = document.querySelector(`.${newToolName}-tool > i`);

  currentToolIconNode.style.color = "white";
  newToolIconNode.style.color = "black";

  setCurrentTool(newToolName);
  renderActiveTool(newToolName);
}
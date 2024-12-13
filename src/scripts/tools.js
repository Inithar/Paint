import { renderActiveTool, renderLineWidth } from "../utils/utils.js";
import {
  getCurrentTool,
  getSecondaryColor,
  setCurrentLineWidth,
  setCurrentTool,
  setPrimaryColor,
  setSecondaryColor
} from "../state/state.js";
import { createCanvas } from "./canvas.js";

function handleToolSwitch(newToolName) {
  const currentToolName = getCurrentTool();
  const currentToolIconNode = document.querySelector(`.${currentToolName}-btn > i`);
  const newToolIconNode = document.querySelector(`.${newToolName}-btn > i`);

  currentToolIconNode.style.color = "white";
  newToolIconNode.style.color = "black";

  setCurrentTool(newToolName);
  renderActiveTool(newToolName);
}

export function handleLineWidthChange() {
  const lineWidthSlider = document.querySelector(".slider");

  setCurrentLineWidth(lineWidthSlider.value);
  renderLineWidth();
}

export function selectBrushTool() {
  handleToolSwitch("brush");
  renderLineWidth();
}

export function selectEraserTool() {
  handleToolSwitch("eraser");
  setPrimaryColor(getSecondaryColor());
}

export function selectTextTool() {
  handleToolSwitch("text");
}

export function handleClearBtnClick(canvas, context) {
  const secondaryColorBtn = document.querySelector(".color-two");

  setSecondaryColor("#FFF");
  secondaryColorBtn.style.backgroundColor = "white";

  createCanvas(canvas, context);
  renderActiveTool("clear");
  setTimeout(selectBrushTool, 1500);
}

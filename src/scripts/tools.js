import { createCanvas } from "./canvas.js";
import { renderActiveTool, renderLineWidth, printLetter } from "../utils/utils.js";
import {
  getCanvas,
  getContext,
  getCurrentTool,
  getSecondaryColor,
  setCurrentLineWidth,
  setCurrentTool,
  setPrimaryColor,
  setSecondaryColor
} from "../state/state.js";

export function handleToolSwitch(newToolName) {
  const currentToolName = getCurrentTool();
  const currentToolIconNode = document.querySelector(`.${currentToolName}-btn > i`);
  const newToolIconNode = document.querySelector(`.${newToolName}-btn > i`);

  if (currentToolIconNode) {
    currentToolIconNode.style.color = "white";
  }

  if (newToolName === "brush" || newToolName === "eraser" || newToolName === "text") {
    newToolIconNode.style.color = "black";
  }

  const shapeIcons = document.querySelectorAll(".shape > img");
  shapeIcons.forEach(shape => (shape.style.border = "2px solid rgb(82, 82, 82)"));

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
  const primaryColorBtn = document.querySelector(".color-one");

  setPrimaryColor(primaryColorBtn.value);
  handleToolSwitch("text");
}

export function handleClearBtnClick() {
  const canvas = getCanvas();
  const context = getContext();
  const secondaryColorBtn = document.querySelector(".color-two");

  setSecondaryColor("#FFF");
  secondaryColorBtn.style.background = "#FFF";
  secondaryColorBtn.value = "FFFFFF";

  createCanvas(canvas, context);
  renderActiveTool("clear");
  setTimeout(selectBrushTool, 1500);
}

export function handleBackgroundBtnClick() {
  const canvas = getCanvas();
  const context = getContext();

  const secondaryColorBtn = document.querySelector(".color-two");
  setSecondaryColor(`#${secondaryColorBtn.value}`);

  createCanvas(canvas, context);
  renderActiveTool("background");
  setTimeout(selectBrushTool, 1500);
}

export function handleKeyDown(e) {
  if (getCurrentTool() === "text") {
    const context = getContext();
    printLetter(e, context);
  }
}

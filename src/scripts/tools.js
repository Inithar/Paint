import { createCanvas, setDefaultCanvasProperties } from "./canvas.js";
import { renderActiveTool, renderLineWidth, printLetter } from "../utils/utils.js";
import {
  getCanvas,
  getContext,
  getCurrentImage,
  getCurrentTool,
  getMouseDownPosition,
  getSecondaryColor,
  setCurrentImage,
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
  const primaryColorBtn = document.querySelector(".color-one");
  const secondaryColorBtn = document.querySelector(".color-two");

  setPrimaryColor("A51DAB");
  primaryColorBtn.style.background = "#A51DAB";
  primaryColorBtn.value = "A51DAB";

  setSecondaryColor("FFFFFF");
  secondaryColorBtn.style.background = "#FFFFFF";
  secondaryColorBtn.value = "FFFFFF";

  setDefaultCanvasProperties();
  selectBrushTool();
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

export function selectImage(e) {
  handleToolSwitch("photo");

  const img = new Image();
  const reader = new FileReader();

  reader.onload = () => {
    img.src = reader.result;
  };

  setCurrentImage(img);
  reader.readAsDataURL(e.target.files[0]);
}

export function uploadImage() {
  const context = getContext();
  const mouseDownPosition = getMouseDownPosition();
  const currentImage = getCurrentImage();

  context.drawImage(currentImage, mouseDownPosition.x, mouseDownPosition.y);
}

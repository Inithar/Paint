import { setPrimaryColor, setSecondaryColor } from "./state/state.js";
import { handleShapeButtonClick } from "./scripts/shapes.js";
import { createCanvas, handleCanvasMouseDown, handleCanvasMouseMove, handleCanvasMouseUp } from "./scripts/canvas.js";
import {
  handleBackgroundBtnClick,
  handleClearBtnClick,
  handleKeyDown,
  handleLineWidthChange,
  selectBrushTool,
  selectEraserTool,
  selectTextTool
} from "./scripts/tools.js";

export function init() {
  createCanvas();

  const lineWidthSlider = document.querySelector(".slider");
  const primaryColorBtn = document.querySelector(".color-one");
  const secondaryColorBtn = document.querySelector(".color-two");

  const brushBtn = document.querySelector(".brush-btn");
  const eraserBtn = document.querySelector(".eraser-btn");
  const textBtn = document.querySelector(".text-btn");
  const clearBtn = document.querySelector(".clear-btn");
  const backgroundBtn = document.querySelector(".background-color-btn");
  const shapeBtns = document.querySelectorAll(".shape");

  lineWidthSlider.addEventListener("change", handleLineWidthChange);
  primaryColorBtn.addEventListener("change", () => setPrimaryColor(primaryColorBtn.value));
  secondaryColorBtn.addEventListener("change", () => setSecondaryColor(secondaryColorBtn.value));

  brushBtn.addEventListener("click", selectBrushTool);
  eraserBtn.addEventListener("click", selectEraserTool);
  textBtn.addEventListener("click", selectTextTool);
  clearBtn.addEventListener("click", handleClearBtnClick);
  backgroundBtn.addEventListener("click", handleBackgroundBtnClick);

  shapeBtns.forEach((shape, index) => {
    shape.addEventListener("click", () => handleShapeButtonClick(index));
  });

  canvas.addEventListener("mousedown", handleCanvasMouseDown);
  canvas.addEventListener("mousemove", handleCanvasMouseMove);
  canvas.addEventListener("mouseup", handleCanvasMouseUp);

  document.addEventListener("keydown", handleKeyDown);
}

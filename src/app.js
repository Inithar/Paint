import { setPrimaryColor, setSecondaryColor } from "./state/state.js";

import { createCanvas, handleCanvasMouseDown, handleCanvasMouseMove, handleCanvasMouseUp } from "./scripts/canvas.js";
import { selectBrushTool, selectEraserTool, selectTextTool } from "./scripts/tools.js";

export function init() {
  const canvas = document.createElement("canvas");
  canvas.id = "canvas";
  const context = canvas.getContext("2d");

  createCanvas(canvas, context);

  const primaryColorBtn = document.querySelector(".color-one");
  const secondaryColorBtn = document.querySelector(".color-two");

  const brushBtn = document.querySelector(".brush-tool");
  const eraserBtn = document.querySelector(".eraser-tool");
  const textBtn = document.querySelector(".text-tool");

  primaryColorBtn.addEventListener("change", () => setPrimaryColor(primaryColorBtn.value));
  secondaryColorBtn.addEventListener("change", () => setSecondaryColor(secondaryColorBtn.value));

  brushBtn.addEventListener("click", selectBrushTool);
  eraserBtn.addEventListener("click", selectEraserTool);
  textBtn.addEventListener("click", selectTextTool);

  canvas.addEventListener("mousedown", e => handleCanvasMouseDown(e, context));
  canvas.addEventListener("mousemove", e => handleCanvasMouseMove(e, context));
  canvas.addEventListener("mouseup", handleCanvasMouseUp);
}

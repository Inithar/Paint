import { getSecondaryColor, setPrimaryColor, setSecondaryColor } from "./state/state.js";
import { renderBrushSize, handleToolSwitch } from "./utils/utils.js";

function createCanvas (canvas, context) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.fillStyle = getSecondaryColor();
  context.fillRect(0, 0, canvas.width, canvas.height);

  document.body.appendChild(canvas);
  selectBrushTool();
}

function selectBrushTool () {
  handleToolSwitch('brush');
  renderBrushSize();
}

function selectEraserTool () {
  handleToolSwitch('eraser');
}

function selectTextTool () {
  handleToolSwitch('text');
}


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
}
import { selectBrushTool } from "./tools.js";
import { getMousePosition } from "../utils/utils.js";
import {
  getCurrentLineWidth,
  getCurrentTool,
  getIsMouseDown,
  getPrimaryColor,
  getSecondaryColor,
  setCurrentMousePosition,
  setIsMouseDown,
  setMouseDownPosition,
  setRecentWords
} from "../state/state.js";

function setCanvasProperties(
  context,
  {
    lineWidth = getCurrentLineWidth(),
    lineCap = "round",
    strokeStyle = getPrimaryColor(),
    font = `${getCurrentLineWidth()}px serif`,
    fillStyle = getPrimaryColor()
  } = {}
) {
  console.log(lineWidth, lineCap, strokeStyle, font, fillStyle);

  context.lineWidth = lineWidth;
  context.lineCap = lineCap;
  context.strokeStyle = `#${strokeStyle}`;
  context.font = font;
  context.fillStyle = `#${fillStyle}`;
}

export function createCanvas(canvas, context) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.fillStyle = getSecondaryColor();
  context.fillRect(0, 0, canvas.width, canvas.height);

  document.body.appendChild(canvas);
  selectBrushTool();
}

export function handleCanvasMouseDown(event, context) {
  const mousePosition = getMousePosition(event);
  const currentTool = getCurrentTool();

  console.log("test");

  setIsMouseDown(true);
  setMouseDownPosition(mousePosition);
  setRecentWords([]);
  setCanvasProperties(context);

  if (currentTool === "brush" || currentTool === "eraser") {
    context.moveTo(mousePosition.x, mousePosition.y);
    context.beginPath();
  }
}

export function handleCanvasMouseMove(event, context) {
  if (!getIsMouseDown()) return;

  const currentPosition = getMousePosition(event);
  const currentTool = getCurrentTool();

  if (currentTool === "brush" || currentTool === "eraser") {
    context.lineTo(currentPosition.x, currentPosition.y);
    context.stroke();
  }
}

export function handleCanvasMouseUp() {
  setIsMouseDown(false);
}

import { selectBrushTool } from "./tools.js";
import { getMousePosition } from "../utils/utils.js";
import {
  getCurrentLineWidth,
  getCurrentTool,
  getIsMouseDown,
  getPrimaryColor,
  getSecondaryColor,
  setIsMouseDown
} from "../state/state.js";

export function createCanvas(canvas, context) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.fillStyle = getSecondaryColor();
  context.fillRect(0, 0, canvas.width, canvas.height);

  document.body.appendChild(canvas);
  selectBrushTool();
}

function setCanvasProperties(
  context,
  {
    lineWidth = getCurrentLineWidth(),
    lineCap = "round",
    strokeStyle = getPrimaryColor(),
    font = `${getCurrentLineWidth}px serif`,
    fillStyle = getPrimaryColor()
  } = {}
) {
  context.lineWidth = lineWidth;
  context.lineCap = lineCap;
  context.strokeStyle = strokeStyle;
  context.font = font;
  context.fillStyle = fillStyle;
}

export function handleCanvasMouseDown(event, context) {
  const mousePosition = getMousePosition(event);
  const currentTool = getCurrentTool();

  setIsMouseDown(true);
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

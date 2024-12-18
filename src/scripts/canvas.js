import { selectBrushTool, uploadImage } from "./tools.js";
import { getMousePosition } from "../utils/utils.js";
import { drawShape } from "./shapes.js";
import {
  getCanvas,
  getContext,
  getCurrentLineWidth,
  getCurrentTool,
  getIsMouseDown,
  getPrimaryColor,
  getSnapshot,
  setCanvas,
  setContext,
  setCurrentMousePosition,
  setIsMouseDown,
  setMouseDownPosition,
  setRecentWords,
  setSnapshot,
  setUndoList
} from "../state/state.js";

export function setDefaultCanvasProperties() {
  const canvas = getCanvas();
  const context = getContext();

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.lineWidth = 10;
  context.lineCap = "round";
  context.strokeStyle = "#A51DAB";
  context.font = `10px serif`;
  context.fillStyle = "#FFFFFF";
}

function setCanvasProperties({
  lineWidth = getCurrentLineWidth(),
  lineCap = "round",
  strokeStyle = getPrimaryColor(),
  font = `${getCurrentLineWidth()}px serif`,
  fillStyle = getPrimaryColor()
} = {}) {
  const context = getContext();

  console.log(strokeStyle);

  context.lineWidth = lineWidth;
  context.lineCap = lineCap;
  context.strokeStyle = strokeStyle;
  context.font = font;
  context.fillStyle = fillStyle;
}

export function createCanvas() {
  const canvas = document.createElement("canvas");
  canvas.id = "canvas";
  const context = canvas.getContext("2d");

  setCanvas(canvas);
  setContext(context);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);

  setCanvasProperties();
  selectBrushTool();
  setUndoList([canvas.toDataURL()]);

  document.body.appendChild(canvas);
}

export function handleCanvasMouseDown(event) {
  const context = getContext();
  const mouseDownPosition = getMousePosition(event);
  const currentTool = getCurrentTool();

  setIsMouseDown(true);
  setMouseDownPosition(mouseDownPosition);
  setRecentWords([]);
  setCanvasProperties();

  if (currentTool === "brush" || currentTool === "eraser") {
    context.moveTo(mouseDownPosition.x, mouseDownPosition.y);
    context.beginPath();
  }

  if (currentTool === "shape") takeSnapshot();
  if (currentTool === "photo") uploadImage();
}

export function handleCanvasMouseMove(event) {
  if (!getIsMouseDown()) return;

  const context = getContext();
  const currentTool = getCurrentTool();
  const currentPosition = getMousePosition(event);
  setCurrentMousePosition(currentPosition);

  if (currentTool === "brush" || currentTool === "eraser") {
    context.lineTo(currentPosition.x, currentPosition.y);
    context.stroke();
  }

  if (currentTool === "shape") {
    restoreSnapshot();
    drawShape();
  }
}

export function handleCanvasMouseUp(e) {
  const canvas = getCanvas();
  const currentTool = getCurrentTool();

  if (currentTool === "shape") {
    restoreSnapshot();
    drawShape(getMousePosition(e));
  }

  setIsMouseDown(false);
  setUndoList(prev => [...prev, canvas.toDataURL()]);
}

export function takeSnapshot() {
  const canvas = getCanvas();
  const context = getContext();

  setSnapshot(context.getImageData(0, 0, canvas.width, canvas.height));
}

export function restoreSnapshot() {
  const context = getContext();
  const snapshot = getSnapshot();

  context.putImageData(snapshot, 0, 0);
}

export function restoreCanvas(img) {
  const canvas = getCanvas();
  const context = getContext();
  const image = new Image();

  image.src = img;
  image.onload = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
  };
}

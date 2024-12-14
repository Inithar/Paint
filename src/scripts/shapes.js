import { handleToolSwitch } from "./tools.js";
import {
  getContext,
  getCurrentMousePosition,
  getCurrentShape,
  getMouseDownPosition,
  setCurrentShape,
  setPrimaryColor
} from "../state/state.js";

const shapes = ["line", "square", "circle", "triangle", "rectangle", "hexagon"];

const draw = {
  line: () => drawLine()
};

export function handleShapeButtonClick(shapeNumber) {
  handleToolSwitch("shape");
  setCurrentShape(shapes[shapeNumber]);

  const primaryColorBtn = document.querySelector(".color-one");
  setPrimaryColor(primaryColorBtn.value);

  const shapeIcon = document.querySelector(`.shape-${shapeNumber + 1} > img`);
  shapeIcon.style.border = "2px solid white";
}

export function drawShape() {
  const isOutline = document.querySelector(".outline-checkbox").checked;
  const currentShape = getCurrentShape();
  const context = getContext();

  draw[currentShape]();

  if (isOutline) context.stroke();
}

function drawLine() {
  const context = getContext();
  const mouseDownPosition = getMouseDownPosition();
  const currentMousePosition = getCurrentMousePosition();

  context.beginPath();
  context.moveTo(mouseDownPosition.x, mouseDownPosition.y);
  context.lineTo(currentMousePosition.x, currentMousePosition.y);
}

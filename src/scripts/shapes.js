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
  line: () => drawLine(),
  square: () => drawPolygon(4, Math.PI / 4),
  rectangle: () => drawPolygon(4, Math.PI / 4),
  hexagon: () => drawPolygon(6, Math.PI)
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

function drawPolygon(sides, angle) {
  const context = getContext();
  const radius = getRadius();
  const currentShape = getCurrentShape();
  const mouseDownPosition = getMouseDownPosition();
  let currentAngle = angle;

  const coordinates = [];

  const multiplyBy = currentShape === "rectangle" ? 2 : 1;

  for (let i = 0; i < sides; i++) {
    const x = mouseDownPosition.x + multiplyBy * radius * Math.cos(currentAngle);
    const y = mouseDownPosition.y - radius * Math.sin(currentAngle);

    coordinates.push({ x, y });

    currentAngle += (2 * Math.PI) / sides;
  }

  context.beginPath();
  context.moveTo(coordinates[0].x, coordinates[0].y);

  for (let i = 1; i < sides; i++) {
    context.lineTo(coordinates[i].x, coordinates[i].y);
  }

  context.closePath();
}

function getRadius() {
  const mouseDownPosition = getMouseDownPosition();
  const currentMousePosition = getCurrentMousePosition();

  return Math.sqrt(
    Math.pow(mouseDownPosition.x - currentMousePosition.x, 2) +
      Math.pow(mouseDownPosition.y - currentMousePosition.y, 2)
  );
}

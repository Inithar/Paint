import { renderActiveTool, renderLineWidth } from "../utils/utils.js";
import {
  getCurrentTool,
  getSecondaryColor,
  setCurrentLineWidth,
  setCurrentTool,
  setPrimaryColor
} from "../state/state.js";

function handleToolSwitch(newToolName) {
  const currentToolName = getCurrentTool();
  const currentToolIconNode = document.querySelector(`.${currentToolName}-tool > i`);
  const newToolIconNode = document.querySelector(`.${newToolName}-tool > i`);

  currentToolIconNode.style.color = "white";
  newToolIconNode.style.color = "black";

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
  handleToolSwitch("text");
}

import { renderActiveTool, renderBrushSize } from "../utils/utils.js";
import { getCurrentTool, setCurrentTool } from "../state/state.js";

function handleToolSwitch(newToolName) {
  const currentToolName = getCurrentTool();
  const currentToolIconNode = document.querySelector(`.${currentToolName}-tool > i`);
  const newToolIconNode = document.querySelector(`.${newToolName}-tool > i`);

  currentToolIconNode.style.color = "white";
  newToolIconNode.style.color = "black";

  setCurrentTool(newToolName);
  renderActiveTool(newToolName);
}

export function selectBrushTool() {
  handleToolSwitch("brush");
  renderBrushSize();
}

export function selectEraserTool() {
  handleToolSwitch("eraser");
}

export function selectTextTool() {
  handleToolSwitch("text");
}

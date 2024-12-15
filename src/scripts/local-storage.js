import { getCanvas } from "../state/state.js";
import { handleToolSwitch, selectBrushTool } from "./tools.js";
import { restoreCanvas } from "./canvas.js";

export function handleLocalStorageSave() {
  const canvas = getCanvas();

  localStorage.setItem("canvas", JSON.stringify(canvas.toDataURL()));
  handleToolSwitch("canvas saved");
  setTimeout(selectBrushTool, 500);
}

export function handleLocalStorageLoad() {
  if (!localStorage.getItem("canvas")) {
    handleToolSwitch("no canvas found");
    setTimeout(selectBrushTool, 500);
  }

  restoreCanvas(JSON.parse(localStorage.canvas));
  handleToolSwitch("canvas loaded");
  setTimeout(selectBrushTool, 500);
}

export function handleLocalStorageClear() {
  localStorage.removeItem("canvas");
  handleToolSwitch("local storage cleared");
  setTimeout(selectBrushTool, 500);
}

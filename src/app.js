import { setPrimaryColor, setSecondaryColor } from "./state/state.js";
import { handleShapeButtonClick } from "./scripts/shapes.js";
import { createCanvas, handleCanvasMouseDown, handleCanvasMouseMove, handleCanvasMouseUp } from "./scripts/canvas.js";
import {
  handleBackgroundBtnClick,
  handleClearBtnClick,
  handleKeyDown,
  handleLineWidthChange,
  selectBrushTool,
  selectEraserTool,
  selectTextTool,
  selectImage,
  handleDownloadBtnClick,
  handleUndoBtnClick
} from "./scripts/tools.js";
import { handleLocalStorageSave, handleLocalStorageLoad, handleLocalStorageClear } from "./scripts/local-storage.js";

export function init() {
  createCanvas();

  const lineWidthSlider = document.querySelector(".slider");
  const primaryColorBtn = document.querySelector(".color-one");
  const secondaryColorBtn = document.querySelector(".color-two");

  const brushBtn = document.querySelector(".brush-btn");
  const eraserBtn = document.querySelector(".eraser-btn");
  const textBtn = document.querySelector(".text-btn");
  const clearBtn = document.querySelector(".clear-btn");
  const backgroundBtn = document.querySelector(".background-color-btn");
  const shapeBtns = document.querySelectorAll(".shape");
  const uploadPhotoBtn = document.querySelector(".upload-photo-btn");
  const downloadBtn = document.querySelector(".download");
  const undoBtn = document.querySelector(".undo-btn");

  const saveStorageBtn = document.querySelector(".save-local-storage-btn");
  const loadStorageBtn = document.querySelector(".load-local-storage-btn");
  const clearStorageBtn = document.querySelector(".clear-local-storage-btn");

  lineWidthSlider.addEventListener("change", handleLineWidthChange);
  primaryColorBtn.addEventListener("change", () => setPrimaryColor(primaryColorBtn.value));
  secondaryColorBtn.addEventListener("change", () => setSecondaryColor(secondaryColorBtn.value));

  brushBtn.addEventListener("click", selectBrushTool);
  eraserBtn.addEventListener("click", selectEraserTool);
  textBtn.addEventListener("click", selectTextTool);
  clearBtn.addEventListener("click", handleClearBtnClick);
  backgroundBtn.addEventListener("click", handleBackgroundBtnClick);
  uploadPhotoBtn.addEventListener("change", selectImage);
  downloadBtn.addEventListener("click", handleDownloadBtnClick);
  undoBtn.addEventListener("click", handleUndoBtnClick);
  shapeBtns.forEach((shape, index) => {
    shape.addEventListener("click", () => handleShapeButtonClick(index));
  });

  saveStorageBtn.addEventListener("click", handleLocalStorageSave);
  loadStorageBtn.addEventListener("click", handleLocalStorageLoad);
  clearStorageBtn.addEventListener("click", handleLocalStorageClear);

  canvas.addEventListener("mousedown", handleCanvasMouseDown);
  canvas.addEventListener("mousemove", handleCanvasMouseMove);
  canvas.addEventListener("mouseup", handleCanvasMouseUp);

  document.addEventListener("keydown", handleKeyDown);
}

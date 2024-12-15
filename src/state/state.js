export const state = {
  canvas: null,
  context: null,
  primaryColor: "#A51DAB",
  secondaryColor: "#FFFFFF",
  currentTool: "brush",
  currentShape: "",
  currentLineWidth: 10,
  recentWords: [],
  isMouseDown: false,
  mouseDownPosition: {},
  currentMousePosition: {},
  snapshot: null
};

export function getCanvas() {
  return state.canvas;
}

export function setCanvas(canvas) {
  state.canvas = canvas;
}

export function getContext() {
  return state.context;
}

export function setContext(context) {
  state.context = context;
}

export const getPrimaryColor = () => {
  return state.primaryColor;
};

export function setPrimaryColor(color) {
  state.primaryColor = `#${color}`;
}

export function getSecondaryColor() {
  return state.secondaryColor;
}

export function setSecondaryColor(color) {
  state.secondaryColor = `#${color}`;
}

export function getCurrentTool() {
  return state.currentTool;
}

export function setCurrentTool(toolName) {
  state.currentTool = toolName;
}

export function getCurrentShape() {
  return state.currentShape;
}

export function setCurrentShape(shape) {
  state.currentShape = shape;
}

export function getCurrentLineWidth() {
  return state.currentLineWidth;
}

export function setCurrentLineWidth(width) {
  state.currentLineWidth = width;
}

export function getRecentWords() {
  return state.recentWords;
}

export function setRecentWords(value) {
  if (typeof value === "function") {
    state.recentWords = value(state.recentWords);
    return;
  }

  state.recentWords = value;
}

export function getIsMouseDown() {
  return state.isMouseDown;
}

export function setIsMouseDown(value) {
  state.isMouseDown = value;
}

export const getMouseDownPosition = () => {
  return state.mouseDownPosition;
};

export const setMouseDownPosition = position => {
  state.mouseDownPosition = position;
  state.currentMousePosition = position;
};

export const getCurrentMousePosition = () => {
  return state.currentMousePosition;
};

export function setCurrentMousePosition(position) {
  state.currentMousePosition = position;
}

export function getSnapshot() {
  return state.snapshot;
}

export function setSnapshot(snapshot) {
  state.snapshot = snapshot;
}

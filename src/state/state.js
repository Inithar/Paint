export const state = {
  primaryColor: "#A51DAB",
  secondaryColor: "#FFFFFF",
  currentTool: "brush",
  currentLineWidth: 10,
  recentWords: [],
  isMouseDown: false,
  mouseDownPosition: {},
  currentMousePosition: {}
};

export const getPrimaryColor = () => {
  return state.primaryColor;
};

export function setPrimaryColor(color) {
  state.primaryColor = color;
}

export function getSecondaryColor() {
  return state.secondaryColor;
}

export function setSecondaryColor(color) {
  state.secondaryColor = color;
}

export function getCurrentTool() {
  return state.currentTool;
}

export function setCurrentTool(toolName) {
  state.currentTool = toolName;
}

export function getIsMouseDown() {
  return state.isMouseDown;
}

export function setIsMouseDown(value) {
  state.isMouseDown = value;
}

export const getCurrentLineWidth = () => {
  return state.currentLineWidth;
};

export const setCurrentLineWidth = width => {
  state.currentLineWidth = width;
};

export const getRecentWords = () => {
  return state.recentWords;
};

export const setRecentWords = value => {
  if (typeof value === "function") {
    state.recentWords = value(state.recentWords);
    return;
  }

  state.recentWords = value;
};

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

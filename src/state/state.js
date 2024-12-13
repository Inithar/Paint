export const state = {
  primaryColor: "#A51DAB",
  secondaryColor: "#FFFFFF",
  currentTool: "brush",
  isMouseDown: false,
  currentLineWidth: 10
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

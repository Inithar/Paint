export const state = {
  primaryColor: "#A51DAB",
  secondaryColor: "#FFFFFF",
  currentTool: "brush"
}

export function getSecondaryColor() {
  return state.secondaryColor;
}

export function setPrimaryColor(color) {
  state.primaryColor = color;
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
export const state = {
  primaryColor: "#A51DAB",
  secondaryColor: "#FFFFFF"
}

export function setPrimaryColor(color) {
  console.log(state.primaryColor)
  state.primaryColor = color;
}

export function setSecondaryColor(color) {
  state.secondaryColor = color;
}
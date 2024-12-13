import { setPrimaryColor, setSecondaryColor } from "./state/state.js";

export function init() {
  const primaryColorBtn = document.querySelector(".color-one");
  const secondaryColorBtn = document.querySelector(".color-two");

  primaryColorBtn.addEventListener("change", () => setPrimaryColor(primaryColorBtn.value));
  secondaryColorBtn.addEventListener("change", () => setSecondaryColor(secondaryColorBtn.value));
}
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function renderActiveTool(name) {
  const activeTool = document.querySelector(".active-tool");
  activeTool.textContent = capitalizeFirstLetter(name);
}

export function renderBrushSize(size) {
  const brushSize = document.querySelector(".brush-size");
  brushSize.textContent = size < 10 ? `0${size}` : size;
}

export const getMousePosition = event => {
  const boundaries = canvas.getBoundingClientRect();

  return {
    x: event.clientX - boundaries.left,
    y: event.clientY - boundaries.top
  };
};

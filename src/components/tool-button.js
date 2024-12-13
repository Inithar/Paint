import { convertToKebabCase } from "../utils/helpers.js";

export const generateToolButtonMarkup = (className, title) => `
  <button class="tool ${convertToKebabCase(title)}-btn">
    <i class="${className}" title="${title}"></i>
  </button>
`;

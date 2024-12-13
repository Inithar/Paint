export const generateToolButtonMarkup = (className, title) => `
  <button class="tool ${title.toLowerCase()}-tool">
    <i class="${className}" title="${title}"></i>
  </button>
`;

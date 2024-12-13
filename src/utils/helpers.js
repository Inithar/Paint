export function convertToKebabCase(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

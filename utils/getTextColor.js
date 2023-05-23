export const getTextColor = (hexColor) => {
   const r = parseInt(hexColor.slice(1, 3), 16);
   const g = parseInt(hexColor.slice(3, 5), 16);
   const b = parseInt(hexColor.slice(5, 7), 16);
   const brightness = (299 * r + 587 * g + 114 * b) / 1000;
   return brightness > 140 ? "#000" : "#fff";
}
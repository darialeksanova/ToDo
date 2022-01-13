export function generateTomorrowDate() {
  return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1, 0, 0, 0);
}
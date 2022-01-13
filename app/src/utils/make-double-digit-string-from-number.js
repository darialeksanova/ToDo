export function makeDoubleDigitStringFromNumber(number) {
  if (number < 1) {
    throw new Error('Invalid number');
  }

  if (number > 0 && number < 10) {
    return `0${number}`;
  } 

  return number.toString();
}
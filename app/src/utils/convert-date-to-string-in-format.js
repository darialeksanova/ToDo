import { makeDoubleDigitStringFromNumber } from "./make-double-digit-string-from-number";

export function convertDateToStringToFormat(date, format = "yyyy-MM-dd") {
  return format
    .replace("yyyy", date.getFullYear().toString())
    .replace("MM", makeDoubleDigitStringFromNumber(date.getMonth() + 1))
    .replace("dd", makeDoubleDigitStringFromNumber(date.getDate()));
}
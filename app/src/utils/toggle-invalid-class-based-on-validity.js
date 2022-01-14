export function toggleInvalidClassBasedOnValidity(event) {
  if (event.target.validity.valid) {
    event.target.classList.remove('invalid');
  } else {
    event.target.classList.add('invalid');
  }
}
import { removeInvalidClass } from "../utils/remove-invalid-class";
import { toggleInvalidClassBasedOnValidity } from "../utils/toggle-invalid-class-based-on-validity";

export class FilterModalElement {
  #filterModalElement;

  constructor() {
    this.#filterModalElement = document.createElement('div');
    this.#filterModalElement.classList.add('filter');
    this.#filterModalElement.innerHTML = `
    <div class="filter__backdrop"></div>
    <div class="filter__modal">
      <div class="filter__modal_options">
        <button class="filter__modal_options_button by-text-button">By text</button>
        <button class="filter__modal_options_button by-date-button">By date</button>
      </div>
      <div class="filter__modal_form">
        <input class="filter__modal_form_input" type="text" pattern="^[a-zA-Z0-9]+$">
      </div>
      <button class="filter__modal_submit-button modal-button">Filter</button>
    </div>`;

    this.#setBackdropClickEventListener();
    this.#setTextInputEventListeners();
  }

  get element() {
    return this.#filterModalElement;
  }

  #setBackdropClickEventListener = () => {
    this.#filterModalElement
      .querySelector('.filter__backdrop')
      .addEventListener('click', this.#closeFilterModal);
  }

  #setTextInputEventListeners = () => {
    const textInput = this.#filterModalElement.querySelector('.filter__modal_form_input');
    textInput.addEventListener('input', toggleInvalidClassBasedOnValidity);
    textInput.addEventListener('blur', removeInvalidClass);
  }

  #closeFilterModal = () => {
    this.#filterModalElement.remove();
  }
}
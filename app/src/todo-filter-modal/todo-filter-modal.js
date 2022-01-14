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
    this.#setSortByTextButtonEventListener();
    this.#setSortByDateButtonEventListener();
  }

  get element() {
    return this.#filterModalElement;
  }

  #setBackdropClickEventListener = () => {
    this.#filterModalElement
      .querySelector('.filter__backdrop')
      .addEventListener('click', this.#closeFilterModal);
  }

  #setSortByTextButtonEventListener = () => {
    const sortByTextButton = this.#filterModalElement.querySelector('.by-text-button');
    sortByTextButton.addEventListener('click', this.#sortTodosByText);
  }

  #setSortByDateButtonEventListener = () => {
    const sortByDateButton = this.#filterModalElement.querySelector('.by-date-button');
    sortByDateButton.addEventListener('click', this.#sortTodosByDate);
  }

  #setTextInputEventListeners = () => {
    const textInput = this.#filterModalElement.querySelector('.filter__modal_form_input');
    textInput.addEventListener('input', toggleInvalidClassBasedOnValidity);
    textInput.addEventListener('blur', removeInvalidClass);
  }

  #sortTodosByText = () => {
    const todosOnPage = document.querySelectorAll('.todo-item');
    const sortedTodos = Array.from(todosOnPage).sort((currentTodo, nextTodo) => {
      const currentTodoTitle = currentTodo.querySelector('.todo-item__task_title').textContent;
      const nextTodoTitle = nextTodo.querySelector('.todo-item__task_title').textContent;
      return currentTodoTitle.localeCompare(nextTodoTitle);
    });
    const todosList = document.querySelector('.todo-list');
    todosList.innerHTML = '';
    todosList.append(...sortedTodos);
    this.#closeFilterModal();
  }

  #sortTodosByDate = () => {
    const todosOnPage = document.querySelectorAll('.todo-item');
    const sortedTodos = Array.from(todosOnPage).sort((currentTodo, nextTodo) => {
      const currentTodoCreationDateSplit = currentTodo.querySelector('.todo-item__task_creation span').textContent.split('.');
      const nextTodoCreationDateSplit = nextTodo.querySelector('.todo-item__task_creation span').textContent.split('.');
      const currentTodoCreationDate = new Date(currentTodoCreationDateSplit[0], currentTodoCreationDateSplit[1] - 1, currentTodoCreationDateSplit[2]);
      const nextTodoCreationDate = new Date(nextTodoCreationDateSplit[0], nextTodoCreationDateSplit[1] - 1, nextTodoCreationDateSplit[2]);
      return currentTodoCreationDate.getTime() - nextTodoCreationDate.getTime();
    });
    const todosList = document.querySelector('.todo-list');
    todosList.innerHTML = '';
    todosList.append(...sortedTodos);
    this.#closeFilterModal();
  }

  #closeFilterModal = () => {
    this.#filterModalElement.remove();
  }
}
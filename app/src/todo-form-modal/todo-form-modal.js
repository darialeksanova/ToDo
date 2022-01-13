import { TodoItemElement } from "../todo-item/todo-item";
import { addTodoToTodosList } from "../utils/add-todo-to-todos-list";

export class TodoFormModalElement {
  #todoFormModalElement;
  #todoElement;

  constructor(formTitle, todoTitle = 'Enter task title', creationDateAsString, expirationDateAsString, todoElement) {
    this.#todoElement = todoElement || null;
    this.#todoFormModalElement = document.createElement('div');
    this.#todoFormModalElement.classList.add('todo-extended-form-modal');
    this.#todoFormModalElement.innerHTML = `
    <div class="backdrop"></div>
    <div class="modal">
      <h1 class="modal__title">${formTitle}</h1>
      <form class="modal__form">
        <div class="modal__form-control">
          <label class="modal__form-control_label" for="task-title">Task Title:</label>
          <input type="text" class="modal__form-control_input" id="task-title" placeholder="${todoTitle}" pattern="^[a-zA-Z0-9]+$" required>
        </div>
        <div class="modal__form-control">
          <label class="modal__form-control_label" for="task-creation">Creation Date:</label>
          <input type="date" class="modal__form-control_input" id="task-creation" value="${creationDateAsString}">
        </div>
        <div class="modal__form-control">
          <label class="modal__form-control_label" for="task-expiration">Expiration Date:</label>
          <input type="date" class="modal__form-control_input" id="task-expiration" value="${expirationDateAsString}">
        </div>
      </form>
      <div class="modal__actions">
        <button class="modal__actions_cancel button">Cancel</button>
        <button class="modal__actions_save button">Save</button>
      </div>
    </div>`;

    this.#setTodoTitleInputEventListeners();
    this.#setCancelButtonClickListener();
    this.#setSaveButtonClickListener();

    return this.#todoFormModalElement;
  }

  #setCancelButtonClickListener = () => {
    const cancelButton = this.#todoFormModalElement.querySelector('.modal__actions_cancel');
    cancelButton.addEventListener('click', () => this.#closeModal());
  }

  #setSaveButtonClickListener = () => {
    const saveButton = this.#todoFormModalElement.querySelector('.modal__actions_save');
    const todoTitleInput = this.#todoFormModalElement.querySelector('.modal__form-control_input');
    saveButton.addEventListener('click', () => this.#permitOrDenyTodoSaving(todoTitleInput.validity.valid));
  }

  #setTodoTitleInputEventListeners = () => {
    const todoTitleInput = this.#todoFormModalElement.querySelector('.modal__form-control_input');
    todoTitleInput.addEventListener('input', (event) => this.#toggleInvalidClassBasedOnValidity(event.target));
    todoTitleInput.addEventListener('blur', (event) => event.target.classList.remove('invalid'));
  }

  #permitOrDenyTodoSaving = (condition) => {
    const todoTitleInput = this.#todoFormModalElement.querySelector('.modal__form-control_input');
  
    if (condition) {
      const creationDateAsString = document.getElementById('task-creation').value;
      const expirationDateAsString = document.getElementById('task-expiration').value;
      
      if (this.#todoElement !== null) {
        this.#replaceExistingTodo(todoTitleInput.value, creationDateAsString, expirationDateAsString);
      } else {
        addTodoToTodosList(todoTitleInput.value, creationDateAsString, expirationDateAsString);
        this.#closeModal();
      }

    } else {
      todoTitleInput.classList.add('invalid');
    }
  }

  #toggleInvalidClassBasedOnValidity = (input) => {
    if (input.validity.valid) {
      input.classList.remove('invalid');
    } else {
      input.classList.add('invalid');
    }
  }

  #closeModal = () => {
    this.#todoFormModalElement.remove();
  }

  #replaceExistingTodo = (todoTitle, creationDateAsString, expirationDateAsString) => {
    this.#todoElement.replaceWith(new TodoItemElement(todoTitle, creationDateAsString, expirationDateAsString));
    this.#closeModal();
  }
}
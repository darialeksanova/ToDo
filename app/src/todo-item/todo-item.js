import { generateTomorrowDate } from "../utils/generate-tomorrow-date";
import { openTodoFormModal } from "../utils/open-todo-form-modal";

export class TodoItemElement {
  #todoElement;
  #createdOn;
  #expiresOn;

  constructor(title, creationDateAsString, expirationDateAsString) {
    this.#createdOn = this.#generateCreationDateBasedOnString(creationDateAsString);
    this.#expiresOn = this.#generateExpirationDateBasedOnString(expirationDateAsString);

    this.#todoElement = document.createElement('li');
    this.#todoElement.classList.add('todo-item');
    this.#todoElement.classList.add('in-progress');
    this.#todoElement.innerHTML = `
        <div class="todo-item__task">
          <h5 class="todo-item__task_title">${title}</h5>
          <div class="todo-item__task_creation">
            Created on: 
            <span>${this.#createdOn.toLocaleDateString()}</span>
          </div>
          <div class="todo-item__task_expiration">
            Expires on: 
            <span>${this.#expiresOn.toLocaleDateString()}</span>
          </div>
        </div>
        <div class="todo-item__actions">
          <input class="todo-item__actions_is-done" type="checkbox">
          <div class="todo-item__actions_tools">
            <button class="todo-item__actions_delete">
              <img class="todo-tools-icon" src="./app/assets/icons/cross-solid.svg" alt="delete">
            </button>
            <button class="todo-item__actions_edit">
              <img class="todo-tools-icon" src="./app/assets/icons/edit-solid.svg" alt="edit">
            </button>
          </div>
        </div>`;

    this.#setDeleteTodoButtonListener();
    this.#setMarkTodoAsDoneCheckboxListener();
    this.#setEditTodoButtonListener();
  }

  get element() {
    return this.#todoElement;
  }

  #generateCreationDateBasedOnString = (creationDateAsString) => {
    return creationDateAsString ? new Date(creationDateAsString) : new Date();
  }

  #generateExpirationDateBasedOnString = (expirationDateAsString) => {
    return expirationDateAsString ? new Date(expirationDateAsString) : generateTomorrowDate();
  }

  #setMarkTodoAsDoneCheckboxListener = () => {
    const isDoneCheckbox = this.#todoElement.querySelector('.todo-item__actions_is-done');
    isDoneCheckbox.addEventListener('click', () => {
      if (isDoneCheckbox.checked === true) {
        this.#todoElement.classList.remove('in-progress');
        this.#todoElement.classList.add('completed');
      } else {
        this.#todoElement.classList.remove('completed');
        this.#todoElement.classList.add('in-progress');
      }
    });
  }

  #setDeleteTodoButtonListener = () => {
    const deleteButton = this.#todoElement.querySelector('.todo-item__actions_delete');
    deleteButton.addEventListener('click', this.#removeTodoItem);
  }

  #setEditTodoButtonListener = () => {
    const editButton = this.#todoElement.querySelector('.todo-item__actions_edit');
    editButton.addEventListener('click', this.#handleEditButtonClick);
  }

  #removeTodoItem = () => {
    this.#todoElement.remove();
  }

  #handleEditButtonClick = (event) => {
    const todoItemElement = event.target.closest('.todo-item');
    const todoTitle = todoItemElement.querySelector('.todo-item__task_title').textContent;
    openTodoFormModal('User todo edit', todoTitle, this.#createdOn, this.#expiresOn, this.#todoElement);
  }
}

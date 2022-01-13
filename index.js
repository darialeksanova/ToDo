import { addTodoToTodosList } from './app/src/utils/add-todo-to-todos-list';
import { openTodoFormModal } from './app/src/utils/open-todo-form-modal';
import { removeInvalidClass } from './app/src/utils/remove-invalid-class';

document.addEventListener('DOMContentLoaded', main);

function main() {
  const allButton = document.querySelector('.all-button');
  const activeButton = document.querySelector('.active-button');
  const completedButton = document.querySelector('.completed-button');
  const clearCompletedButton = document.querySelector('.clear-completed-button');
  const openFormModalButton = document.querySelector('.todo__container_form_button');
  const addTodoTitleInput = document.querySelector('.todo__container_form_input');

  addTodoTitleInput.addEventListener('keyup', (event) => permitOrDenyTodoAdding(event, addTodoTitleInput));
  addTodoTitleInput.addEventListener('blur', removeInvalidClass);
  openFormModalButton.addEventListener('click', () => openTodoFormModal('User data set'));

  activeButton.addEventListener('click', () => {
    const todosOnPage = document.querySelectorAll('.todo-item');
    todosOnPage.forEach(todo => {
      [...todo.classList].includes('completed') ? todo.style.display = 'none' : todo.style.display = 'flex';
    });
  });

  allButton.addEventListener('click', () => {
    const todosOnPage = document.querySelectorAll('.todo-item');
    todosOnPage.forEach(todo => todo.style.display = 'flex');
  });

  completedButton.addEventListener('click', () => {
    const todosOnPage = document.querySelectorAll('.todo-item');
    todosOnPage.forEach(todo => {
      [...todo.classList].includes('completed') ? todo.style.display = 'flex' : todo.style.display = 'none';
    });
  });

  clearCompletedButton.addEventListener('click', () => {
    const todosOnPage = document.querySelectorAll('.todo-item');
    todosOnPage.forEach(todo => {
      if([...todo.classList].includes('completed')) {
        todo.remove();
      }
    });
  });
}

function permitOrDenyTodoAdding(event, addTodoTitleInput) {
  const addTodoTitleInputValue = addTodoTitleInput.value;
  const isValid = event.target.validity.valid;

  if (isValid) {
    addTodoTitleInput.classList.remove('invalid');
  } else {
    addTodoTitleInput.classList.add('invalid');
  }

  if (event.key === 'Enter' && isValid) {
    addTodoToTodosList(addTodoTitleInputValue);
    addTodoTitleInput.value = '';
  }
}
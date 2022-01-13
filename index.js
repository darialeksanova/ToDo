import { addTodoToTodosList } from './app/src/utils/add-todo-to-todos-list';
import { openTodoFormModal } from './app/src/utils/open-todo-form-modal';

document.addEventListener('DOMContentLoaded', main);

function main() {
  const openFormModalButton = document.querySelector('.todo__container_form_button');
  const addTodoTitleInput = document.querySelector('.todo__container_form_input');
  addTodoTitleInput.addEventListener('keyup', (event) => permitOrDenyTodoAdding(event, addTodoTitleInput));
  addTodoTitleInput.addEventListener('blur', (event) => event.target.classList.remove('invalid'));
  openFormModalButton.addEventListener('click', () => openTodoFormModal('User data set'));
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
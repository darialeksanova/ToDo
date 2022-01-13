import { addTodo } from './src/todo-item/todo-item';
import { OpenAddTodoExtendedFormModal } from "./src/add-todo-form-modal/add-todo-form-modal";

function main() {
  const openExtendedFormButton = document.querySelector('.todo__form_button');
  const addTodoTitleInput = document.querySelector('.todo__form_title');

  addTodoTitleInput.addEventListener('keyup', (event) => {
    const addTodoTitleInputValue = addTodoTitleInput.value;

    if (event.target.validity.valid === false) {
      addTodoTitleInput.classList.add('invalid');
    } else {
      addTodoTitleInput.classList.remove('invalid');
    }

    if (event.keyCode === 13 && event.target.validity.valid !== false) {
      addTodo(addTodoTitleInputValue);
      addTodoTitleInput.value = '';
    } 
  });

  addTodoTitleInput.addEventListener('blur', () => {
    addTodoTitleInput.classList.remove('invalid');
  });
  
  openExtendedFormButton.addEventListener('click', OpenAddTodoExtendedFormModal);
}

main();
import { addTodo } from "../todo-item/todo-item";

export function OpenAddTodoExtendedFormModal() {
  const addTodoExtendedFormModalEl = createAddTodoExtendedFormModalEl();
  document.querySelector('.todo').append(addTodoExtendedFormModalEl);
  setTodoTitleInputEventListeners(addTodoExtendedFormModalEl);
  setCancelButtonClickListener(addTodoExtendedFormModalEl);
  setSaveButtonClickListener(addTodoExtendedFormModalEl);
}

function createAddTodoExtendedFormModalEl() {
  const addTodoExtendedFormModal = document.createElement('div');
  addTodoExtendedFormModal.classList.add('add-todo-extended-form-modal');
  addTodoExtendedFormModal.innerHTML = `
    <div class="backdrop"></div>
    <div class="modal">
      <h1 class="modal__title">User date set</h1>
      <form class="modal__form">
        <div class="modal__form-control">
          <label class="modal__form-control_label" for="task-title">Task Title:</label>
          <input type="text" class="modal__form-control_input" id="task-title" placeholder="Enter task title" pattern="^[a-zA-Z0-9]+$" required>
        </div>
        <div class="modal__form-control">
          <label class="modal__form-control_label" for="task-creation">Creation Date:</label>
          <input type="date" class="modal__form-control_input" id="task-creation" placeholder="dd.mm.yyyy">
        </div>
        <div class="modal__form-control">
          <label class="modal__form-control_label" for="task-expiration">Expiration Date:</label>
          <input type="date" class="modal__form-control_input" id="task-expiration" placeholder="dd.mm.yyyy">
        </div>
      </form>
      <div class="modal__actions">
        <button class="modal__actions_cancel button">Cancel</button>
        <button class="modal__actions_save button">Save</button>
      </div>
    </div>
    `
  return addTodoExtendedFormModal;
}

function setCancelButtonClickListener(modal) {
  const cancelButton = modal.querySelector('.modal__actions_cancel');
  cancelButton.addEventListener('click', () => modal.remove());
}

function setSaveButtonClickListener(modal) {
  const saveButton = modal.querySelector('.modal__actions_save');
  const todoTitleInput = modal.querySelector('.modal__form-control_input');

  saveButton.addEventListener('click', () => {
    if (todoTitleInput.validity.valid !== false) {
      const creationDateAsString = document.getElementById('task-creation').value;
      const expirationDateAsString = document.getElementById('task-expiration').value;
      addTodo(todoTitleInput.value, creationDateAsString, expirationDateAsString);
      modal.remove();
    } else {
      todoTitleInput.classList.add('invalid');
    }
  });
}

function setTodoTitleInputEventListeners(modal) {
  const todoTitleInput = modal.querySelector('.modal__form-control_input');

  todoTitleInput.addEventListener('input', (event) => {
    if (event.target.validity.valid === false) {
      todoTitleInput.classList.add('invalid');
    } else {
      todoTitleInput.classList.remove('invalid');
    }
  });

  todoTitleInput.addEventListener('blur', () => {
    todoTitleInput.classList.remove('invalid');
  });
}


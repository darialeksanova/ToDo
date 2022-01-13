export function addTodo(todoTitle, creationDateAsString, expirationDateAsString) {
  const todosList = document.querySelector('.todo-list');
  todosList.append(createTodoLiItem(todoTitle, creationDateAsString, expirationDateAsString));
}

function createTodoLiItem(todoTitle, creationDateAsString, expirationDateAsString) {
  const createdOn = creationDateAsString === undefined || creationDateAsString === ''
    ? new Date()
    : new Date(creationDateAsString);
    
  const expiresOn = expirationDateAsString === undefined || expirationDateAsString === ''
    ? generateTomorrowDate()
    : new Date(expirationDateAsString);

  const todoLiEl = document.createElement('li');
  todoLiEl.innerHTML = `
    <li class="todo-item">
      <div class="todo-item__task">
        <h5 class="todo-item__task_title">${todoTitle}</h5>
        <div class="todo-item__task_creation">Created on: ${createdOn.toDateString()}</div>
        <div class="todo-item__task_expiration">Expires on: ${expiresOn.toDateString()}</div>
      </div>
      <div class="todo-item__actions">
        <input class="todo-item__actions_is-done" type="checkbox"></input>
        <button class="todo-item__actions_delete">X</button>
      </div>
    </li>`;

  setDeleteTodoButtonListener(todoLiEl);

  return todoLiEl;
}

function generateTomorrowDate() {
  return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1, 0, 0, 0);
}

function setDeleteTodoButtonListener(todoLiEl) {
  const deleteButton = todoLiEl.querySelector('.todo-item__actions_delete');
  deleteButton.addEventListener('click', () => todoLiEl.remove());
}
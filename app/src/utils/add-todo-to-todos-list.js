import { TodoItemElement } from "../todo-item/todo-item";

export function addTodoToTodosList (todoTitle, creationDateAsString, expirationDateAsString) {
  const todosList = document.querySelector('.todo-list');
  todosList.append(new TodoItemElement(todoTitle, creationDateAsString, expirationDateAsString).element);
}
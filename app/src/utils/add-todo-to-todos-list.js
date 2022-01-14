import { TodoItemElement } from "../todo-item/todo-item";

export function addTodoToTodosList (todoTitle, creationDateAsString, expirationDateAsString) {
  const todosList = document.querySelector('.todo-list');
  const newTodoItemElement = new TodoItemElement(todoTitle, creationDateAsString, expirationDateAsString).element;
  todosList.append(newTodoItemElement);

  // const todosFromLocalStorageAsString = localStorage.getItem('todoItems');
  // const newTodo = {
  //   title: todoTitle,
  //   creationDate: creationDateAsString,
  //   expirationDate: expirationDateAsString,
  //   status: 'active',
  // };

  // if (todosFromLocalStorageAsString) {
  //   const todosFromLocalStorageParsed = JSON.parse(todosFromLocalStorageAsString);
  //   localStorage.setItem('todoItems', JSON.stringify([...todosFromLocalStorageParsed, newTodo]));
  // } else {
  //   localStorage.setItem('todoItems', JSON.stringify([newTodo]));
  // }
}
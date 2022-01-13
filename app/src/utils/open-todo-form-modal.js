import { TodoFormModalElement } from "../todo-form-modal/todo-form-modal";
import { convertDateToStringToFormat } from "./convert-date-to-string-in-format";
import { generateTomorrowDate } from "./generate-tomorrow-date";

export function openTodoFormModal(
  formTitle,
  todoTitle,
  creationDateAsDate = new Date(),
  expirationDateAsDate = generateTomorrowDate(),
  todoElement,
) {
  const todoRootElement = document.querySelector('.todo');
  todoRootElement.append(new TodoFormModalElement(
    formTitle, 
    todoTitle, 
    convertDateToStringToFormat(creationDateAsDate), 
    convertDateToStringToFormat(expirationDateAsDate), 
    todoElement
  ));
}
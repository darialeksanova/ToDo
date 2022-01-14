import { FilterModalElement } from "../todo-filter-modal/todo-filter-modal";

export function openFilterModal() {
  const todoRootElement = document.querySelector('.todo');
  todoRootElement.append(new FilterModalElement().element);
}
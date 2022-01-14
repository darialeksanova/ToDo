/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/src/todo-form-modal/todo-form-modal.js":
/*!****************************************************!*\
  !*** ./app/src/todo-form-modal/todo-form-modal.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoFormModalElement\": () => (/* binding */ TodoFormModalElement)\n/* harmony export */ });\n/* harmony import */ var _todo_item_todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo-item/todo-item */ \"./app/src/todo-item/todo-item.js\");\n/* harmony import */ var _utils_add_todo_to_todos_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/add-todo-to-todos-list */ \"./app/src/utils/add-todo-to-todos-list.js\");\n/* harmony import */ var _utils_remove_invalid_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/remove-invalid-class */ \"./app/src/utils/remove-invalid-class.js\");\n\n\n\n\nclass TodoFormModalElement {\n  #todoFormModalElement;\n  #todoElement;\n\n  constructor(formTitle, todoTitle = 'Enter task title', creationDateAsString, expirationDateAsString, todoElement) {\n    this.#todoElement = todoElement || null;\n    this.#todoFormModalElement = document.createElement('div');\n    this.#todoFormModalElement.classList.add('todo-extended-form-modal');\n    this.#todoFormModalElement.innerHTML = `\n    <div class=\"backdrop\"></div>\n    <div class=\"modal\">\n      <h1 class=\"modal__title\">${formTitle}</h1>\n      <form class=\"modal__form\">\n        <div class=\"modal__form-control\">\n          <label class=\"modal__form-control_label\" for=\"task-title\">Task Title:</label>\n          <input type=\"text\" class=\"modal__form-control_input\" id=\"task-title\" placeholder=\"${todoTitle}\" pattern=\"^[a-zA-Z0-9]+$\" required>\n        </div>\n        <div class=\"modal__form-control\">\n          <label class=\"modal__form-control_label\" for=\"task-creation\">Creation Date:</label>\n          <input type=\"date\" class=\"modal__form-control_input\" id=\"task-creation\" value=\"${creationDateAsString}\">\n        </div>\n        <div class=\"modal__form-control\">\n          <label class=\"modal__form-control_label\" for=\"task-expiration\">Expiration Date:</label>\n          <input type=\"date\" class=\"modal__form-control_input\" id=\"task-expiration\" value=\"${expirationDateAsString}\">\n        </div>\n      </form>\n      <div class=\"modal__actions\">\n        <button class=\"modal__actions_cancel button\">Cancel</button>\n        <button class=\"modal__actions_save button\">Save</button>\n      </div>\n    </div>`;\n\n    this.#setTodoTitleInputEventListeners();\n    this.#setCancelButtonClickListener();\n    this.#setSaveButtonClickListener();\n  }\n\n  get element() {\n    return this.#todoFormModalElement;\n  }\n\n  #setCancelButtonClickListener = () => {\n    const cancelButton = this.#todoFormModalElement.querySelector('.modal__actions_cancel');\n    cancelButton.addEventListener('click', this.#closeModal);\n  }\n\n  #setSaveButtonClickListener = () => {\n    const saveButton = this.#todoFormModalElement.querySelector('.modal__actions_save');\n    const todoTitleInput = this.#todoFormModalElement.querySelector('.modal__form-control_input');\n    saveButton.addEventListener('click', () => this.#permitOrDenyTodoSaving(todoTitleInput.validity.valid));\n  }\n\n  #setTodoTitleInputEventListeners = () => {\n    const todoTitleInput = this.#todoFormModalElement.querySelector('.modal__form-control_input');\n    todoTitleInput.addEventListener('input', this.#toggleInvalidClassBasedOnValidity);\n    todoTitleInput.addEventListener('blur', _utils_remove_invalid_class__WEBPACK_IMPORTED_MODULE_2__.removeInvalidClass);\n  }\n\n  #permitOrDenyTodoSaving = (condition) => {\n    const todoTitleInput = this.#todoFormModalElement.querySelector('.modal__form-control_input');\n  \n    if (condition) {\n      const creationDateAsString = document.getElementById('task-creation').value;\n      const expirationDateAsString = document.getElementById('task-expiration').value;\n      \n      if (this.#todoElement) {\n        this.#replaceExistingTodo(todoTitleInput.value, creationDateAsString, expirationDateAsString);\n      } else {\n        (0,_utils_add_todo_to_todos_list__WEBPACK_IMPORTED_MODULE_1__.addTodoToTodosList)(todoTitleInput.value, creationDateAsString, expirationDateAsString);\n        this.#closeModal();\n      }\n\n    } else {\n      todoTitleInput.classList.add('invalid');\n    }\n  }\n\n  #toggleInvalidClassBasedOnValidity = (event) => {\n    if (event.target.validity.valid) {\n      event.target.classList.remove('invalid');\n    } else {\n      event.target.classList.add('invalid');\n    }\n  }\n\n  #closeModal = () => {\n    this.#todoFormModalElement.remove();\n  }\n\n  #replaceExistingTodo = (todoTitle, creationDateAsString, expirationDateAsString) => {\n    this.#todoElement.replaceWith(new _todo_item_todo_item__WEBPACK_IMPORTED_MODULE_0__.TodoItemElement(todoTitle, creationDateAsString, expirationDateAsString).element);\n    this.#closeModal();\n  }\n}\n\n//# sourceURL=webpack:///./app/src/todo-form-modal/todo-form-modal.js?");

/***/ }),

/***/ "./app/src/todo-item/todo-item.js":
/*!****************************************!*\
  !*** ./app/src/todo-item/todo-item.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoItemElement\": () => (/* binding */ TodoItemElement)\n/* harmony export */ });\n/* harmony import */ var _utils_generate_tomorrow_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/generate-tomorrow-date */ \"./app/src/utils/generate-tomorrow-date.js\");\n/* harmony import */ var _utils_open_todo_form_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/open-todo-form-modal */ \"./app/src/utils/open-todo-form-modal.js\");\n\n\n\nclass TodoItemElement {\n  #todoElement;\n  // #todoTitle;\n  #createdOn;\n  #expiresOn;\n\n  constructor(title, creationDateAsString, expirationDateAsString) {\n    this.#createdOn = this.#generateCreationDateBasedOnString(creationDateAsString);\n    this.#expiresOn = this.#generateExpirationDateBasedOnString(expirationDateAsString);\n    // this.#todoTitle = title;\n\n    this.#todoElement = document.createElement('li');\n    this.#todoElement.classList.add('todo-item');\n    this.#todoElement.classList.add('active');\n    this.#todoElement.innerHTML = `\n        <div class=\"todo-item__task\">\n          <h5 class=\"todo-item__task_title\">${title}</h5>\n          <div class=\"todo-item__task_creation\">\n            Created on: \n            <span>${this.#createdOn.toLocaleDateString()}</span>\n          </div>\n          <div class=\"todo-item__task_expiration\">\n            Expires on: \n            <span>${this.#expiresOn.toLocaleDateString()}</span>\n          </div>\n        </div>\n        <div class=\"todo-item__actions\">\n          <input class=\"todo-item__actions_is-done\" type=\"checkbox\">\n          <div class=\"todo-item__actions_tools\">\n            <button class=\"todo-item__actions_delete\">\n              <img class=\"todo-tools-icon\" src=\"./app/assets/icons/cross-solid.svg\" alt=\"delete\">\n            </button>\n            <button class=\"todo-item__actions_edit\">\n              <img class=\"todo-tools-icon\" src=\"./app/assets/icons/edit-solid.svg\" alt=\"edit\">\n            </button>\n          </div>\n        </div>`;\n\n    this.#setDeleteTodoButtonListener();\n    this.#setMarkTodoAsDoneCheckboxListener();\n    this.#setEditTodoButtonListener();\n  }\n\n  get element() {\n    return this.#todoElement;\n  }\n\n  #generateCreationDateBasedOnString = (creationDateAsString) => {\n    return creationDateAsString ? new Date(creationDateAsString) : new Date();\n  }\n\n  #generateExpirationDateBasedOnString = (expirationDateAsString) => {\n    return expirationDateAsString ? new Date(expirationDateAsString) : (0,_utils_generate_tomorrow_date__WEBPACK_IMPORTED_MODULE_0__.generateTomorrowDate)();\n  }\n\n  #setMarkTodoAsDoneCheckboxListener = () => {\n    const isDoneCheckbox = this.#todoElement.querySelector('.todo-item__actions_is-done');\n\n    isDoneCheckbox.addEventListener('click', () => {\n      // const todosFromLocalStorageAsString = localStorage.getItem('todoItems');\n      // const todosFromLocalStorageParsed = JSON.parse(todosFromLocalStorageAsString);\n      // const todoToUpdate = todosFromLocalStorageParsed.find(todo => todo.title === this.#todoTitle);\n\n      if (isDoneCheckbox.checked === true) {\n        this.#todoElement.classList.remove('active');\n        this.#todoElement.classList.add('completed');\n        // todoToUpdate.status = 'completed';\n        // localStorage.setItem('todoItems', JSON.stringify(todosFromLocalStorageParsed));\n      } else {\n        this.#todoElement.classList.remove('completed');\n        this.#todoElement.classList.add('active');\n        // todoToUpdate.status = 'active';\n        // localStorage.setItem('todoItems', JSON.stringify(todosFromLocalStorageParsed));\n      }\n    });\n  }\n\n  #setDeleteTodoButtonListener = () => {\n    const deleteButton = this.#todoElement.querySelector('.todo-item__actions_delete');\n    deleteButton.addEventListener('click', this.#removeTodoItem);\n  }\n\n  #setEditTodoButtonListener = () => {\n    const editButton = this.#todoElement.querySelector('.todo-item__actions_edit');\n    editButton.addEventListener('click', this.#handleEditButtonClick);\n  }\n\n  #removeTodoItem = () => {\n    this.#todoElement.remove();\n  }\n\n  #handleEditButtonClick = (event) => {\n    const todoItemElement = event.target.closest('.todo-item');\n    const todoTitle = todoItemElement.querySelector('.todo-item__task_title').textContent;\n    (0,_utils_open_todo_form_modal__WEBPACK_IMPORTED_MODULE_1__.openTodoFormModal)('User todo edit', todoTitle, this.#createdOn, this.#expiresOn, this.#todoElement);\n  }\n}\n\n\n//# sourceURL=webpack:///./app/src/todo-item/todo-item.js?");

/***/ }),

/***/ "./app/src/utils/add-todo-to-todos-list.js":
/*!*************************************************!*\
  !*** ./app/src/utils/add-todo-to-todos-list.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoToTodosList\": () => (/* binding */ addTodoToTodosList)\n/* harmony export */ });\n/* harmony import */ var _todo_item_todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo-item/todo-item */ \"./app/src/todo-item/todo-item.js\");\n\n\nfunction addTodoToTodosList (todoTitle, creationDateAsString, expirationDateAsString) {\n  const todosList = document.querySelector('.todo-list');\n  const newTodoItemElement = new _todo_item_todo_item__WEBPACK_IMPORTED_MODULE_0__.TodoItemElement(todoTitle, creationDateAsString, expirationDateAsString).element;\n  todosList.append(newTodoItemElement);\n\n  // const todosFromLocalStorageAsString = localStorage.getItem('todoItems');\n  // const newTodo = {\n  //   title: todoTitle,\n  //   creationDate: creationDateAsString,\n  //   expirationDate: expirationDateAsString,\n  //   status: 'active',\n  // };\n\n  // if (todosFromLocalStorageAsString) {\n  //   const todosFromLocalStorageParsed = JSON.parse(todosFromLocalStorageAsString);\n  //   localStorage.setItem('todoItems', JSON.stringify([...todosFromLocalStorageParsed, newTodo]));\n  // } else {\n  //   localStorage.setItem('todoItems', JSON.stringify([newTodo]));\n  // }\n}\n\n//# sourceURL=webpack:///./app/src/utils/add-todo-to-todos-list.js?");

/***/ }),

/***/ "./app/src/utils/convert-date-to-string-in-format.js":
/*!***********************************************************!*\
  !*** ./app/src/utils/convert-date-to-string-in-format.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertDateToStringToFormat\": () => (/* binding */ convertDateToStringToFormat)\n/* harmony export */ });\n/* harmony import */ var _make_double_digit_string_from_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-double-digit-string-from-number */ \"./app/src/utils/make-double-digit-string-from-number.js\");\n\n\nfunction convertDateToStringToFormat(date, format = \"yyyy-MM-dd\") {\n  return format\n    .replace(\"yyyy\", date.getFullYear().toString())\n    .replace(\"MM\", (0,_make_double_digit_string_from_number__WEBPACK_IMPORTED_MODULE_0__.makeDoubleDigitStringFromNumber)(date.getMonth() + 1))\n    .replace(\"dd\", (0,_make_double_digit_string_from_number__WEBPACK_IMPORTED_MODULE_0__.makeDoubleDigitStringFromNumber)(date.getDate()));\n}\n\n//# sourceURL=webpack:///./app/src/utils/convert-date-to-string-in-format.js?");

/***/ }),

/***/ "./app/src/utils/generate-tomorrow-date.js":
/*!*************************************************!*\
  !*** ./app/src/utils/generate-tomorrow-date.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateTomorrowDate\": () => (/* binding */ generateTomorrowDate)\n/* harmony export */ });\nfunction generateTomorrowDate() {\n  return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1, 0, 0, 0);\n}\n\n//# sourceURL=webpack:///./app/src/utils/generate-tomorrow-date.js?");

/***/ }),

/***/ "./app/src/utils/make-double-digit-string-from-number.js":
/*!***************************************************************!*\
  !*** ./app/src/utils/make-double-digit-string-from-number.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeDoubleDigitStringFromNumber\": () => (/* binding */ makeDoubleDigitStringFromNumber)\n/* harmony export */ });\nfunction makeDoubleDigitStringFromNumber(number) {\n  if (number < 1) {\n    throw new Error('Invalid number');\n  }\n\n  if (number > 0 && number < 10) {\n    return `0${number}`;\n  } \n\n  return number.toString();\n}\n\n//# sourceURL=webpack:///./app/src/utils/make-double-digit-string-from-number.js?");

/***/ }),

/***/ "./app/src/utils/open-todo-form-modal.js":
/*!***********************************************!*\
  !*** ./app/src/utils/open-todo-form-modal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openTodoFormModal\": () => (/* binding */ openTodoFormModal)\n/* harmony export */ });\n/* harmony import */ var _todo_form_modal_todo_form_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo-form-modal/todo-form-modal */ \"./app/src/todo-form-modal/todo-form-modal.js\");\n/* harmony import */ var _convert_date_to_string_in_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convert-date-to-string-in-format */ \"./app/src/utils/convert-date-to-string-in-format.js\");\n/* harmony import */ var _generate_tomorrow_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-tomorrow-date */ \"./app/src/utils/generate-tomorrow-date.js\");\n\n\n\n\nfunction openTodoFormModal(\n  formTitle,\n  todoTitle,\n  creationDateAsDate = new Date(),\n  expirationDateAsDate = (0,_generate_tomorrow_date__WEBPACK_IMPORTED_MODULE_2__.generateTomorrowDate)(),\n  todoElement,\n) {\n  const todoRootElement = document.querySelector('.todo');\n  todoRootElement.append(new _todo_form_modal_todo_form_modal__WEBPACK_IMPORTED_MODULE_0__.TodoFormModalElement(\n    formTitle, \n    todoTitle, \n    (0,_convert_date_to_string_in_format__WEBPACK_IMPORTED_MODULE_1__.convertDateToStringToFormat)(creationDateAsDate), \n    (0,_convert_date_to_string_in_format__WEBPACK_IMPORTED_MODULE_1__.convertDateToStringToFormat)(expirationDateAsDate), \n    todoElement\n  ).element);\n}\n\n//# sourceURL=webpack:///./app/src/utils/open-todo-form-modal.js?");

/***/ }),

/***/ "./app/src/utils/remove-invalid-class.js":
/*!***********************************************!*\
  !*** ./app/src/utils/remove-invalid-class.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeInvalidClass\": () => (/* binding */ removeInvalidClass)\n/* harmony export */ });\nfunction removeInvalidClass(event) {\n  event.target.classList.remove('invalid')\n}\n\n//# sourceURL=webpack:///./app/src/utils/remove-invalid-class.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_src_utils_add_todo_to_todos_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/src/utils/add-todo-to-todos-list */ \"./app/src/utils/add-todo-to-todos-list.js\");\n/* harmony import */ var _app_src_utils_open_todo_form_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/src/utils/open-todo-form-modal */ \"./app/src/utils/open-todo-form-modal.js\");\n/* harmony import */ var _app_src_utils_remove_invalid_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/src/utils/remove-invalid-class */ \"./app/src/utils/remove-invalid-class.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', main);\n\nfunction main() {\n  const allButton = document.querySelector('.all-button');\n  const activeButton = document.querySelector('.active-button');\n  const completedButton = document.querySelector('.completed-button');\n  const clearCompletedButton = document.querySelector('.clear-completed-button');\n  const openFormModalButton = document.querySelector('.todo__container_form_button');\n  const addTodoTitleInput = document.querySelector('.todo__container_form_input');\n\n  addTodoTitleInput.addEventListener('keyup', (event) => permitOrDenyTodoAdding(event, addTodoTitleInput));\n  addTodoTitleInput.addEventListener('blur', _app_src_utils_remove_invalid_class__WEBPACK_IMPORTED_MODULE_2__.removeInvalidClass);\n  openFormModalButton.addEventListener('click', () => (0,_app_src_utils_open_todo_form_modal__WEBPACK_IMPORTED_MODULE_1__.openTodoFormModal)('User data set'));\n\n  activeButton.addEventListener('click', () => {\n    const todosOnPage = document.querySelectorAll('.todo-item');\n    todosOnPage.forEach(todo => {\n      [...todo.classList].includes('completed') ? todo.style.display = 'none' : todo.style.display = 'flex';\n    });\n  });\n\n  allButton.addEventListener('click', () => {\n    const todosOnPage = document.querySelectorAll('.todo-item');\n    todosOnPage.forEach(todo => todo.style.display = 'flex');\n  });\n\n  completedButton.addEventListener('click', () => {\n    const todosOnPage = document.querySelectorAll('.todo-item');\n    todosOnPage.forEach(todo => {\n      [...todo.classList].includes('completed') ? todo.style.display = 'flex' : todo.style.display = 'none';\n    });\n  });\n\n  clearCompletedButton.addEventListener('click', () => {\n    const todosOnPage = document.querySelectorAll('.todo-item');\n    todosOnPage.forEach(todo => {\n      if([...todo.classList].includes('completed')) {\n        todo.remove()\n      }\n    });\n  });\n}\n\nfunction permitOrDenyTodoAdding(event, addTodoTitleInput) {\n  const addTodoTitleInputValue = addTodoTitleInput.value;\n  const isValid = event.target.validity.valid;\n\n  if (isValid) {\n    addTodoTitleInput.classList.remove('invalid');\n  } else {\n    addTodoTitleInput.classList.add('invalid');\n  }\n\n  if (event.key === 'Enter' && isValid) {\n    (0,_app_src_utils_add_todo_to_todos_list__WEBPACK_IMPORTED_MODULE_0__.addTodoToTodosList)(addTodoTitleInputValue);\n    addTodoTitleInput.value = '';\n  }\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
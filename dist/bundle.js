/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const TodoCollection_1 = __importDefault(__webpack_require__(1));
const TodoView_1 = __importDefault(__webpack_require__(2));
const todoComponents = {
    $nameInput: document.querySelector('.todo-name-input'),
    $categoryInput: document.querySelector('.todo-category-input'),
    $tagInput: document.querySelector('.todo-tag-input'),
    $createButton: document.querySelector('.todo-create-button'),
    $removeButton: document.querySelector('.todo-remove-button'),
    $list: document.querySelector('.todo-list'),
};
const todoView = new TodoView_1.default(todoComponents, new TodoCollection_1.default());
todoView.initEvent();


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, exports) => {


/**
 * @file TodoCollection 클래스 파일
 * @author tiaz0128(주환석)
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * TodoCollection TodoItem 을 Map 형태로 관리하는 클래스
 * @class
 * @constructor
 * @public
 */
class TodoCollection {
    /**
     * @constructs
     * @param {void}
     * @todo todoList 는 Map, nextId 1부터 시작
     *
     * @see {@link TodoCollectionType}
     */
    constructor() {
        this.todoList = new Map();
        this.nextId = 1;
    }
    /**
     * 할 일을 추가할 수 있다.
     * @param {TodoItem} todoItem TodoItem 객체
     * @returns {number} 추가된 TodoItem 아이디값, 실패시 -1 을 리턴
     
     * @todo TodoItem을 생성해서 nextId 를 키 값으로 todoList 에 set한다.
     * @todo 사용한 nextId은 1증가한다.
     * @todo 내용이 없는 경우 실패
     * @see {@link TodoItem} 참고
     */
    createTodo(todoItem) {
        if (!todoItem.content)
            return -1;
        this.todoList.set(this.nextId, todoItem);
        return this.nextId++;
    }
    /**
     * 모든 할 일을 조회 할 수 있다.
     * @param {void}
     * @returns {void}
     *
     * @todo 할 일 없는 경우 '할 일 없음' 을 출력한다.
     * @see {@link TodoItem} printTodo 로 TodoItem 내용을 출력
     */
    readTodos() {
        if (!this.todoList.size) {
            console.log("할 일  없음");
            return;
        }
        this.todoList.forEach((todoItem) => todoItem.printTodo());
    }
    /**
     * 특정 할 일을 조회할 수 있다.
     * @param {number} id TodoItem 아이디
     * @returns {void}
     *
     * @todo 해당 아이디가 없는 경우 '해당하는 할 일 없음' 을 출력한다.
     * @see {@link TodoItem} printTodo 로 TodoItem 내용을 출력
     */
    readTodo(id) {
        const todoItem = this.todoList.get(id);
        if (!todoItem) {
            console.log("해당하는 할 일 없음");
            return;
        }
        todoItem.printTodo();
    }
    /**
     * TodoItem을 수정할 수 있다.
     * @param {number} id TodoItem 아이디
     * @param {TodoItem} todoItem 업데이트 할 새로운 TodoItem 객체
     * @return {TodoItem | null} 업데이트 된 TodoItem, 실패인 경우 null 을 리턴
     *
     * @todo 해당 아이디가 없는 경우 실패
     */
    updateTodo(id, todoItem) {
        if (!this.todoList.has(id)) {
            return null;
        }
        this.todoList.set(id, todoItem);
        return todoItem;
    }
    /**
     * 특정 할 일의 특정 태그를 수정할 수 있다.
     * @param {number} id TodoItem 아이디
     * @param {string} targetTag 수정할 특정 태그
     * @param {string} newTag targetTag 를 변경하는 새로운 태그
     * @return {boolean} 성공시 true 실패시 false 를 리턴
     *
     * @todo 해당 아이디가 없는 경우 실패
     * @todo 해당 태그가 없는 경우 실패
     */
    updateTag(id, targetTag, newTag) {
        const todoItem = this.todoList.get(id);
        if (!todoItem) {
            return false;
        }
        const targetTagIndex = todoItem.tags.indexOf(targetTag);
        const hasTargetTag = targetTagIndex !== -1;
        if (!hasTargetTag) {
            return false;
        }
        todoItem.tags[targetTagIndex] = newTag;
        return true;
    }
    /**
     * 모든 할 일을 제거할 수 있다.
     * @param {void}
     * @return {void}
     */
    deleteTodos() {
        this.todoList = new Map();
    }
    /**
     * 특정 할 일을 삭제할 수 있다.
     * @param {number} id TodoItem 아이디
     * @return {number} 성공시 삭제한 TodoItem 아이디를 리턴, 실패시 -1 을 리턴
     */
    deleteTodo(id) {
        if (!this.todoList.has(id)) {
            return -1;
        }
        this.todoList.delete(id);
        return id;
    }
    /**
     * 특정 할 일의 모든 태그를 삭제할 수 있다.
     * @param {number} id TodoItem 아이디
     * @return {void}
     *
     * @todo 해당 아이디가 없는 경우 '해당하는 할 일 없음' 을 출력한다.
     */
    deleteTags(id) {
        const todoItem = this.todoList.get(id);
        if (!todoItem) {
            console.log("해당하는 할 일 없음");
            return;
        }
        todoItem.tags = [];
    }
    /**
     * 특정 할 일의 특정 태그를 삭제할 수 있다.
     * @param {number} id TodoItem 아이디
     * @param {string} tag 삭제할 태그
     * @return {TodoItem | null} 업데이트 된 TodoItem, 실패인 경우 null 을 리턴
     *
     * @todo 해당 아이디가 없는 경우 실패
     * @todo 해당 태그가 없는 경우 실패
     */
    deleteTag(id, tag) {
        const todoItem = this.todoList.get(id);
        if (!todoItem) {
            return null;
        }
        const targetTagIndex = todoItem.tags.indexOf(tag);
        const hasTargetTag = targetTagIndex !== -1;
        if (!hasTargetTag) {
            return null;
        }
        todoItem.tags.splice(targetTagIndex, 1);
        return todoItem;
    }
}
exports["default"] = TodoCollection;


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Todo_1 = __importDefault(__webpack_require__(3));
class TodoView {
    constructor(todoComponents, TodoCollection) {
        this.handleClickTodoList = (event) => {
            const target = event.target;
            const eventArguments = [
                { target, className: 'updateTodo', fn: this.updateTodo },
                { target, className: 'updateTag', fn: this.updateTag },
                { target, className: 'deleteTodo', fn: this.deleteTodo },
                { target, className: 'tag', fn: this.deleteTag },
                { target, className: 'deleteTags', fn: this.deleteTags },
            ];
            eventArguments.forEach((item) => {
                this.handleClickListDelegationEvent(item);
            });
            this.handleClickCancel(target);
        };
        this.handleClickCreateTodo = () => {
            const content = this.todoComponents.$nameInput.value;
            const category = this.todoComponents.$categoryInput.value;
            if (!content || !category) {
                alert('할일과 카테고리 이름은 필수입니다.');
                return;
            }
            const tagsValue = this.todoComponents.$tagInput.value;
            const tags = tagsValue ? Array.from(new Set(tagsValue.split(' '))) : [];
            const initTodoItem = { content, category, tags };
            this.TodoCollection.createTodo(new Todo_1.default(initTodoItem));
            this.render();
            this.resetInputs();
        };
        this.handleClickDeleteTodos = () => {
            this.TodoCollection.deleteTodos();
            this.render();
        };
        this.deleteTodo = (target, todoItemId, todoElement) => {
            this.TodoCollection.deleteTodo(Number(todoItemId));
            todoElement.remove();
        };
        this.deleteTag = (target, todoItemId) => {
            const tagName = target.innerText.trim().replace('#', '');
            this.TodoCollection.deleteTag(todoItemId, tagName);
            target.remove();
        };
        this.deleteTags = (target, todoItemId) => {
            this.TodoCollection.deleteTags(todoItemId);
            this.render();
        };
        this.updateTodo = (target, todoItemId, todoElement) => {
            const contentInputName = 'updateContentInput';
            const categoryInputName = 'updateCategoryInput';
            const tagsInputName = 'updateTagsInput';
            if (target.dataset.isEdit) {
                const content = todoElement.querySelector(`.${contentInputName}`).value;
                const category = todoElement.querySelector(`.${categoryInputName}`).value;
                if (!content || !category) {
                    alert('할일과 카테고리 이름은 필수입니다.');
                    return;
                }
                const tagsValue = todoElement.querySelector(`.${tagsInputName}`).value;
                const tags = tagsValue ? Array.from(new Set(tagsValue.split(' '))) : [];
                this.TodoCollection.updateTodo(todoItemId, new Todo_1.default({ content, category, tags }));
                this.render();
                return;
            }
            const inputTemplate = `<input type="text" class="${contentInputName}" placeholder="할일"/>
                        <input type="text" class="${categoryInputName}" placeholder="카테고리"/>
                        <input type="text" class="${tagsInputName}" placeholder="태그(띄어쓰기로 구분)"/>
                        <button class="cancel">취소</button>`;
            const parent = target.parentElement;
            parent.insertAdjacentHTML('afterbegin', inputTemplate);
            target.dataset.isEdit = 'true';
        };
        this.updateTag = (target, todoItemId, todoElement) => {
            const targetTagInputName = 'targetTagInput';
            const newTagInputName = 'newTagInput';
            if (target.dataset.isEdit) {
                const targetTagValue = todoElement.querySelector(`.${targetTagInputName}`).value;
                const newTagValue = todoElement.querySelector(`.${newTagInputName}`).value;
                this.TodoCollection.updateTag(todoItemId, targetTagValue, newTagValue);
                this.render();
                return;
            }
            const inputTemplate = `<input type="text" class="${targetTagInputName}" placeholder="변경할 태그이름"/>
                        <input type="text" class="${newTagInputName}" placeholder="새로운 태그이름"/>
                        <button class="cancel">취소</button>`;
            const parent = target.parentElement;
            parent.insertAdjacentHTML('afterbegin', inputTemplate);
            target.dataset.isEdit = 'true';
        };
        this.handleClickCancel = (target) => {
            const isRemoveTagsButton = target.className === 'cancel';
            if (!isRemoveTagsButton)
                return;
            this.render();
        };
        this.handleClickListDelegationEvent = ({ className, target, fn, }) => {
            const isMatchElement = target.className === className;
            if (!isMatchElement)
                return;
            const todoElement = target.closest('.todoItem');
            if (!todoElement)
                return;
            const todoItemId = Number(todoElement.dataset.id);
            fn(target, todoItemId, todoElement);
        };
        this.todoComponents = todoComponents;
        this.TodoCollection = TodoCollection;
    }
    initEvent() {
        this.todoComponents.$createButton.addEventListener('click', this.handleClickCreateTodo);
        this.todoComponents.$removeButton.addEventListener('click', this.handleClickDeleteTodos);
        this.todoComponents.$list.addEventListener('click', this.handleClickTodoList);
    }
    resetInputs() {
        this.todoComponents.$nameInput.value = '';
        this.todoComponents.$categoryInput.value = '';
        this.todoComponents.$tagInput.value = '';
    }
    render() {
        let templates = [];
        for (const [id, todoItem] of this.TodoCollection.todoList.entries()) {
            templates.push(this.makeTemplate(id, todoItem));
        }
        this.todoComponents.$list.innerHTML = templates.join('');
    }
    makeTemplate(id, { content, category, tags, complete }) {
        const template = `
      <li class="todoItem" data-id="${id}">
        <h3>${category}</h3>
        <div>
          <span class="todoContent" style="${complete ? `text-decoration: underline` : ''}">${content}</span> 
        </div>
        ${tags &&
            tags
                .map((v) => `<span class="tag" style="background: slateblue; color: white; margin-right: 4px">
                 #${v}
                </span>`)
                .join(' ')}
        <div>
         <button class="updateTag">태그 수정</button><button class="deleteTags">태그 전체 삭제</button>
        </div>
        <div>
         <button class="updateTodo">할일 수정</button> <button class="deleteTodo">할일 삭제</button>
        </div>
      </li>`;
        return template;
    }
}
exports["default"] = TodoView;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports) => {


/**
 * @file TodoItem 클래스 파일
 * @author tiaz0128(주환석)
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
// import Todos = require("todos");
/**
 * TodoItem 클래스
 * @class
 * @constructor
 * @public
 */
class TodoItem {
    /**
     * @constructs
     * @param {initTodoItemType} initState 할 일의 내용
     * @todo TodoItemType 을 보고 필요한 속성값으로 생성자를 정의
     *
     * @see {@link initTodoItemType} 참고
     */
    constructor(initState) {
        const { content, complete, category, tags } = initState;
        this.content = content;
        this.complete = complete || false;
        this.category = category || "etc";
        this.tags = tags || [];
    }
    /**
     * 콘솔에 TodoItem 의 정보를 출력한다.
     * @param {void}
     * @returns {void}
     * @todo  콘솔에 TodoItem 의 정보를 출력한다.
     */
    printTodo() {
        console.dir(this);
    }
}
exports["default"] = TodoItem;


/***/ })
/******/ 	]);
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
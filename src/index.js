/**
 * @file todo.js Typing TypeScript 1기, To Do - Begin TS 정의
 * @author ppamppamman(유재욱)
 */

/**
 * 할일 목록
 * @type {Todo[]}
 */
const todos = [];

/**
 * 태그 목록
 * @type {Tag[]}
 */
const tags = [];

/**
 * @function getTodos
 * @description 모든 할일을 반환한다.
 * @returns - {Todo[]} 모든 할일
 */

function getTodos() {}

/**
 * @function getTodo
 * @param {number} id - 불러올 할일의 id
 * @description id로 접근하여 특정 할 일을 반환한다.
 * @returns - {Todo | null} id값과 매칭되는 할일 혹은 null
 */

function getTodo(id) {}

/**
 * @function addTodo
 * @param {Object} todo - 할일 Object
 * @param {number} todo.id - 할일의 id, 이때 id는 무한히 1씩 증가한다.
 * @param {string} todo.contents -  할일의 contents
 * @param {boolean} todo.isComplete - 할일의 완료 여부
 * @param {Tag[]} todo.tags - 지정된 태그
 * @description 할 일을 추가한다.
 * @returns {boolean} 추가 결과
 */

function addTodo(todo) {}

/**
 * @function deleteTodo
 * @param {string} id - 삭제할 할일의 id
 * @description 같은 id의 할일 삭제
 * @returns {boolean} 삭제 결과
 */

function deleteTodo(id) {}

/**
 * @function deleteTodos
 * @description 모든 할일 삭제
 * @returns {boolean} 삭제 결과
 */

function deleteTodos() {}

/**
 * @function updateTodo
 * @param {Object} todo - 할일 Object
 * @param {number} todo.id - 할일의 id
 * @param {string} todo.contents - 할일의 contents
 * @param {boolean} todo.isComplete - 할일의 완료 여부
 * @description 할일 목록에서 todo를 받아 update처리를 한다. 완료여부isComplete와 내용contents을 수정할 수 있다.
 * @returns {boolean} 수정 결과
 */

function updateTodo(todo) {}

/**
 * @function updateTag
 * @param {Object} tag - 태그 Object
 * @param {number} todo.id - 태그의 id
 * @param {string} todo.name - 태그의 이름
 * @description 태그 목록에서 태그를 받아 update처리를 한다.
 * @returns {boolean} 수정 결과
 */

function updateTodo(tag) {}

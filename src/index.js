/**
 * 투두 목록 배열
 * @type {Todo[]}
 */
const todos = [];

/**
 * 투두 항목에 들어가야 할 내용
 * @typedef {Object} Todo
 * @property {number} id - 아이디(필수)
 * @property {string} content - 내용(필수)
 * @property {boolean} isDone - 완료여부(필수)
 * @property {string} category - 카테고리(필수)
 * @property {array} tags - 태그들(선택)
 */

/** @function getTodos
 * @description 투두 목록 조회 함수
 * @todo 모든 할 일을 조회할 수 있다.
 * @todo ID를 기반으로 특정 할 일을 조회할 수 있다.
 */
function getTodos() {}

/** @function addTodo
 * @description 투두 항목 추가 함수
 * @todo 할 일을 추가할 수 있다.
 * @todo 내용없이 추가할 수 없다.
 */
function addTodo() {}

/** @function updateTodo
 * @description 투두 항목 수정 함수
 * @param {number} id - 수정할 Todo의 id
 * @todo ID를 제외한 모든 속성을 수정할 수 있다.
 * @todo 특정 할 일의 특정 태그를 수정할 수 있다.
 */
function updateTodo(id) {}

/** @function deleteTodo
 * @description 투두 항목 삭제 함수
 * @param {number} id - 삭제할 Todo의 id
 * @todo ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @todo 모든 할 일을 제거할 수 있다.
 * @todo 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @todo 특정 할 일의 모든 태그를 제거할 수 있다.
 */
function deleteTodo(id) {}

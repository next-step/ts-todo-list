/**
 * 하나의 SingleTodo 객체가 가지는 Property들 입니다.
 * @typedef {Object} SingleTodoType
 * @property {number} id - todo의 unique한 id입니다.
 * @property {string} content - todo의 task 내용입니다.
 * @property {string} category - study, work 등으로 분류할 수 있는 todo의 category입니다.
 * @property {boolean} [isCompleted=false] - todo 완료 여부를 나타내는 Boolean값입니다. 기본값은 false입니다.
 * @property {string[]=} tags - todo를 설명하는 tag들입니다. category 혹은 중요도 등을 포함할 수 있습니다.
 */

/**
 * SingleTodo들을 담은 todoList 배열입니다.
 * @property {SingleTodoType[]} todoList
 */
const todoList = [];

/**
 * @function addTodo
 * @param {SingleTodoType} newTodo
 * @description CRUD에서 C에 해당하는 함수입니다. todoList 배열에 새로운 newTodo 객체를 추가합니다. 리턴값은 없습니다.
 */
function addTodo(newTodo) {}

/**
 * @function readTodo
 * @param {number=} id
 * @description CRUD에서 R에 해당하는 함수입니다. param id가 있을 경우 id에 해당하는 특정 todo를 찾아 반환합니다. param id가 없을 경우 모든 할일 목록을 반환합니다.
 * @returns SingleTodoType[] | SingleTodo
 */
function readTodo(id) {}

/**
 * @function editTodo
 * @param {number} id
 * @param {string=} content
 * @param {string=} category
 * @param {boolean=} isCompleted
 * @param {string[]=} tags
 * @description CRUD에서 U에 해당하는 함수입니다. 수정하고자 하는 todo의 id와 수정하고자 하는 내용을 optional로 받아 전체 todoList에서 해당 todo의 특정 필드만 수정합니다. 리턴값은 없습니다.
 */
function editTodo(id, content, category, isCompleted, tags) {}

/**
 * @function deleteTodo
 * @param {number} id
 * @description CRUD에서 D에 해당하는 함수입니다. 삭제하고자 하는 todo의 id를 받아, todoList에서 그 todo를 삭제합니다. 리턴값은 없습니다.
 */
function deleteTodo(id) {}

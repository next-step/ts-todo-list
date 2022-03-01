/**
 * @description TodoList 생성자입니다. 저장된 정보가 있다면 해당 생성자를 통해 세팅합니다.
 * @constructor
 * @param {Array.<Todo>} [todos=[]] todos
 */
function Todos() {}

/**
 * @description Todo 인스턴스를 추가합니다. Todo의 id는 유일키로 해당 메소드에서 생성됩니다.
 * @param {Todo} newTodo 신규 TODO 객체
 * @returns {Array.<Todo>} 신규 등록 결과
 * @throws {InvalidTodoContent} 신규 내용이 빈 값인 경우에 대한 예외처리 - 신규 Todo 내용은 빈 값일 수 없습니다.
 */
Todos.prototype.addTodo = function () {};

/**
 * @description TodoList를 전체 반환합니다.
 * @returns {Array.<Todo>} 찾은 결과
 */
Todos.prototype.findAllTodos = function () {};

/**
 * @description Id에 해당하는 Todo를 찾습니다.
 * @param {string} todoId 찾는 todo id
 * @returns {Todo} 찾은 결과
 * @throws {InvalidTodoId} 존재하지 않는 todo id에 대한 예외처리
 */
Todos.prototype.findTodoById = function () {};

/**
 * @description Id에 해당하는 Todo를 수정 후, 결과 값을 반환합니다.
 * @param {Todo} todo 수정 대상 id
 * @returns {Todo} 수정 결과
 * @throws {InvalidTodoId} 존재하지 않는 todo id에 대한 예외처리
 */
Todos.prototype.updateTodoById = function () {};

/**
 * @description 해당하는 todId의 Todo에서, tagId에 해당하는 Tag name을 수정합니다.
 * @param {string} todoId 수정하는 Tag의 Todo
 * @param {string} tagId 수정하고자 하는 Todo Id
 * @throws {InvalidTodoId} 존재하지 않는 todo id에 대한 예외처리
 * @throws {InvalidTagId} 존재하지 않는 tag id에 대한 예외처리
 * @returns {Tag} 수정 된 Tag
 */
Todos.prototype.updateTagById = function () {};

/**
 * @description Todo Id 기준으로 Todo를 삭제합니다.
 * @param {string} todoId 삭제 대상 Todo id
 * @returns {Array.<Todo>} 삭제 결과
 * @throws {InvalidTodoId} 존재하지 않는 todo id에 대한 예외처리
 */
Todos.prototype.removeTodoById = function () {};

/**
 * @description Todo를 전체 삭제합니다.
 * @returns {Array.<Todo>} 삭제 결과
 */
Todos.prototype.removeAllTodo = function () {};

/**
 * @description Todo id 해당하는 Tag를 전체 삭제합니다.
 * @param {string} todoId 삭제 대상 Todo id
 * @return {Todo} 삭제 결과
 * @throws {InvalidTodoId} 존재하지 않는 todo id에 대한 예외처리
 */
Todos.prototype.removeAllTagByTodoId = function () {};

/**
 * @description Todo id에 해당하는 Todo를 찾고, Tag id 해당하는 Tag를 삭제합니다.
 * @param {string} todoId 삭제 대상 Todo id
 * @param {string} tagId 삭제 대상 Tag id
 * @returns {Todo} 삭제 결과
 * @throws {InvalidTodoId} 존재하지 않는 todo id에 대한 예외처리
 */
Todos.prototype.removeTagByTodoIdAndTagId = function () {};

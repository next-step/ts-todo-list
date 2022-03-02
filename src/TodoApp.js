/**
 * @file 할 일을 목록을 관리하는 TodoApp 클래스
 * @author guymoon(조기문)
 */

/**
 * Manage the list of todo
 * @class
 * @classdesc 할 일을 목록을 관리하는 TodoApp 클래스
 */
class TodoApp {
  /**
   * @member - todo들이 모여있는 todoList
   * @type {Todo[]}
   */
  todoList = [];

  /**
   * @function createUniqueId
   * @description unique id를 만드는 함수
   * @return {number} uniqueId
   */
  createUniqueId() {}

  /**
   * @function addTodo
   * @description todoList 에 todo을 추가하는 함수
   * @param {Todo} todo
   * @return {number} addedTodoId
   */
  addTodo(todo) {}

  /**
   * @function addTodo
   * @description todoList에서 todo의 id 값을 이용해 todo를 제거
   * @param {number} todoId
   * @return {number} deletedTodoId - 지워진 todo의 id값
   */
  deleteTodoById(todoId) {}

  /**
   * @function clearTodoList
   * @description todoList에 있는 모든 todo를 지움
   * @return {boolean} isTodoListEmpty - todoList의 배열의 길이가 0인지 확인하는 값
   */
  clearTodoList() {}

  /**
   * @function mutateTodoContentById
   * @description todoList에 todo의 id 값을 이용해 todo의 content를 수정
   * @param {number} idToMutateTodo
   * @return {number} mutatedTodoId - mutate된 todo의 id 값
   */
  mutateTodoContentById(idToMutateTodo) {}

  /**
   * @function mutateTodoStatus
   * @description todoList에 todo의 id 값을 이용해 todo의 isDone 값을 변경(true or false)
   * @param {boolean} todoStatus
   * @return {number} idToMutatedTodo - isDone 값이 변경된 todo의 id 값
   */
  mutateTodoStatus(todoStatus) {}

  /**
   * @function addTodoLabelByTodoId
   * @description todo의 id 값을 이용해 todo에 label을 추가
   * @param {number} targetTodoId - label을 추가 할 todo의 id
   * @param {string} newLabelContent - 새로 추가 할 label 내용
   * @return {number} deletedTodoId - 삭제된 todo의 id 값
   */
  addTodoLabelByTodoId(targetTodoId, newLabelContent) {}

  /**
   * @function deleteTodoLabelByLabelId
   * @description todo에서 label의 id값을 이용해 todo에 label 제거
   * @param {number} targetTodoId - label을 제거 할 todo의 id값
   * @param {number} idToDeleteLabel - 삭제 할 label의 id 값
   * @return {number} deletedLabelId - 삭제된 label의 id 값
   */
  deleteTodoLabelByLabelId(targetTodoId, idToDeleteLabel) {}
}

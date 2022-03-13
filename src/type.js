/**
 * @file 타입 재정의 파일
 * @author tiaz0128(주환석)
 */

/** 
 * @typedef {object} InitTodoItemType TodoItem
  * @property {string} content 내용
  * @property {boolean} [complete] 완료여부
  * @property {string} [category] 카테고리
  * @property {string[]} [tags] 태그들
*/

/**
 * @typedef {object} TodoItem TodoItem 클래스
 * 
  * @property {string} content 내용
  * @property {boolean} complete=false 완료여부
  * @property {string} category="etc" 카테고리
  * @property {string[]} tags=[]] 태그들
  * 
  * @property {function} printTodo 콘솔에 TodoItem 의 정보를 출력한다.
 */


/**
 * @typedef {Map<number, TodoItem>} TodoListType 숫자 key와 TodoItem 을 value로 가지는 Map 클래스
 */

/**
 * @typedef {object} TodoCollectionType TodoItem 을 Map 형태로 관리하는 클래스
 * 
  * @property {TodoListType} todoList TodoItem 목록
  * @property {number} nextId=1 다음 아이디값
  * @property {function} createTodo 할 일을 추가할 수 있다.
  * @property {function} readTodos 모든 할 일을 조회 할 수 있다.
  * @property {function} readTodo 특정 할 일을 조회할 수 있다.
  * @property {function} updateTodo todo를 수정할 수 있다.
  * @property {function} updateTag 특정 할 일의 특정 태그를 수정할 수 있다.
  * @property {function} deleteTodos 모든 할 일을 제거할 수 있다.
  * @property {function} deleteTodo 특정 할 일을 삭제할 수 있다.
  * @property {function} deleteTags 특정 할 일의 모든 태그를 삭제할 수 있다.
  * @property {function} deleteTag 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 
 */


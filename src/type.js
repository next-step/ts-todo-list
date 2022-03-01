/**
 * @file 타입 재정의 파일
 * @author tiaz0128(주환석)
 */

/**
 * @typedef {class} TodoItemType todo 타입
 * 
  * @property {string} content 내용
  * @property {boolean} complete=false 완료여부
  * @property {string} category="범용" 카테고리
  * @property {string[]} [tags=[ ]] 태그들
  * 
  * @property {function} printTodo ID를 기반으로 특정 할 일을 조회할 수 있다.
 */


/**
 * @typedef {Map<number, TodoItem>} TodoListType todo 를 Map 형태로 저장하는 타입
 */

/**
 * @typedef {class} TodoCollectionType
 * 
  * @property {TodoListType} todoList todo 목록
  * @property {number} nextId=1 다음 아이디값
  * @property {function} createTodo 할 일을 추가할 수 있다.
  * @property {function} readTodos 모든 할 일을 조회 할 수 있다.
  * @property {function} readTodo ID를 기반으로 특정 할 일을 조회할 수 있다.
  * @property {function} updateTodo todo를 수정할 수 있다.
  * @property {function} updateTag 특정 할 일의 특정 태그를 수정할 수 있다.
  * @property {function} deleteTodos 모든 할 일을 제거할 수 있다.
  * @property {function} deleteTodo ID를 기반으로 특정 할 일을 삭제할 수 있다.
  * @property {function} deleteTags 특정 할 일의 모든 태그를 삭제할 수 있다.
  * @property {function} deleteTag 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 
 */


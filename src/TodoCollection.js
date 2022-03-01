/**
 * @file TodoCollection 클래스 파일
 * @author tiaz0128(주환석)
 */

/**
 * TodoCollection 클래스
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
  constructor(){

  }

  /**
   * 할 일을 추가할 수 있다.
   * @param {string} content TodoItem 의 내용
   * @returns {number} 추가된 TodoItem 아이디값, 실패시 -1 을 리턴
   
   * @todo TodoItem을 생성해서 nextId 를 키 값으로 todoList 에 set한다.
   * @todo 사용한 nextId은 1증가한다.
   * @todo 내용이 없는 경우 실패
   * @see {@link TodoItem} 참고
   */
  createTodo(content) {}

  /**
   * 모든 할 일을 조회 할 수 있다.
   * @param {void}
   * @returns {void}
   * 
   * @todo 할 일 없는 경우 '할 일 없음' 을 출력한다.
   * @see {@link TodoItem} printTodo 로 TodoItem 내용을 출력
   */
  readTodos() {}

  /**
   * ID를 기반으로 특정 할 일을 조회할 수 있다.
   * @param {number} id TodoItem 아이디
   * @returns {void}
   * 
   * @todo 해당 아이디가 없는 경우 '해당하는 할 일 없음' 을 출력한다.
   * @see {@link TodoItem} printTodo 로 TodoItem 내용을 출력
   */
  readTodo(id) {}

  /**
   * TodoItem을 수정할 수 있다.
   * @param {number} id TodoItem 아이디
   * @param {TodoItem} TodoItem 업데이트 할 새로운 상태의 TodoItem
   * @return {TodoItem | null} 업데이트 된 TodoItem, 실패인 경우 null 을 리턴
   * 
   * @todo 해당 아이디가 없는 경우 실패
   */
  updateTodo(id, todoItem) {}

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
  updateTag(id, targetTag, newTag) {}

  /**
   * 모든 할 일을 제거할 수 있다.
   * @param {void}
   * @return {void} 
   */
  deleteTodos() {}
  
  /**
   * ID를 기반으로 특정 할 일을 삭제할 수 있다.
   * @param {number} id TodoItem 아이디
   * @return {number} 성공시 삭제한 TodoItem 아이디를 리턴, 실패시 -1 을 리턴
   */
  deleteTodo(id) {}

  /**
   * 특정 할 일의 모든 태그를 삭제할 수 있다.
   * @param {number} id TodoItem 아이디
   * @return {void}
   * 
   * @todo 해당 아이디가 없는 경우 '해당하는 할 일 없음' 을 출력한다.
   */
  deleteTags(id) {}

  /**
   * 특정 할 일의 특정 태그를 삭제할 수 있다.
   * @param {number} id TodoItem 아이디
   * @param {string} tag 삭제할 태그
   * @return {TodoItem | null} 업데이트 된 TodoItem, 실패인 경우 null 을 리턴
   * 
   * @todo 해당 아이디가 없는 경우 실패
   * @todo 해당 태그가 없는 경우 실패
   */
  deleteTag(id, tag) {}
}

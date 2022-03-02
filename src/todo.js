/**
 * @description Todo 클래스입니다.
 * @class
 * @classdesc Todo를 작성하기 위한 클래스입니다.
 */

class Todo {
  /**
   * Create a Todo.
   *
   * @param {Object} todo - 할일 Object
   * @param {number} todo.id - 할일의 id, 이때 id는 무한히 1씩 증가한다.
   * @param {string} todo.contents -  할일의 contents
   * @param {boolean} todo.isComplete - 할일의 완료 여부
   * @param {Tag[]} todo.tags - 지정된 태그
   */
  constructor(todo) {}

  /**
   * @param {Object} todo - 할일 Object
   * @param {string} todo.contents - 할일의 contents
   * @param {boolean} todo.isComplete - 할일의 완료 여부
   * @param {Tag[]} todo.tags - 지정된 태그
   * @description todo객체를 받아 update처리를 한다. 완료여부와 내용, 태그를 수정할 수 있다.
   * @returns {boolean} 수정 결과
   */
  update(todo) {}

  /**
   * @param {string} tagId - 삭제할 태그의 id
   * @description 태그id값을 받아서 지정된 태그를 삭제한다.
   * @returns {boolean} 태그 삭제 결과
   */
  removeTag(tagId) {}

  /**
   * @description 지정된 태그 전체를 삭제한다.
   * @returns {boolean} 태그 전체의 삭제 결과
   */
  removeTags() {}
}

export default class TodoItem {
  /**
   * Todo item
   * @typedef {Object} Todo
   * @property {number} id Todo id
   * @property {string} content Todo 내용
   * @property {boolean} isCompleted Todo 완료 여부
   * @property {string} category 카테고리
   * @property {string[]} [tags] 태그들
   */

  /**
   * @param {Todo} todoItem
   * @member todoItem
   * */
  constructor(todoItem) {}

  /**
   * @param
   * @return {Todo}
   * - 수정하고자하는 프로퍼티를 담은 객체 형태의 파라미터를 받아 새로운 todoItem을 리턴합니다.
   * - 예를 들면, 내용과 카테고리를 수정하고 싶을 때는 { content: '수정할 내용', category: '수정할 카테고리' } 객체를 넘겨줍니다.
   * - param에서 받은 객체의 property에 id나 tags가 있다면 에러 메시지를 출력합니다.
   * - id는 변경할 수 없습니다.
   * - tags는 태그를 수정하는 별도의 함수를 이용합니다.
   * */
  editTodo() {}

  /**
   * @param {string} tagName
   * @param {string} newTagName
   * tags 배열에서 tagName을 찾아 newTagName으로 수정합니다.
   * */
  editTag(tagName, newTagName) {}

  /**
   * @param {string} tagName
   * tags 배열에서 tagName을 삭제합니다.
   * */
  deleteTag(tagName) {}

  /**
   * tag를 모두 삭제합니다.
   * */
  clearTags() {}
}
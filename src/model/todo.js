export default class Todo {
  /**
   * @constructor
   * @param initTodo
   * @param {number} initTodo.id - todo의 id
   * @param {string} initTodo.title - todo 이름
   * @param {boolean} [initTodo.isFinished=false] - todo의 완료여부
   * @param {Category} initTodo.category - todo의 카테고리
   * @param {Tag[]} [initTodo.tags=[]] - todo의 태그들
   */
  constructor(initTodo) {
    this.id = initTodo.id;
    this.title = initTodo.title;
    this.isFinished = initTodo.isFinished;
    this.category = initTodo.category;
    this.tags = initTodo.tags;
  }

  /**
   * 할일의 목록을 업데이트 한다.
   * @param {string} newTitle - 바뀔 todo의 이름, 빈 값이면 안된다.
   */
  updateTitle(newTitle) {
    if (!newTitle.trim()) return;

    this.title = newTitle;
  }

  /**
   * 할일의 카테고리를 변경한다.
   * @param {string} category - todo의 새로운 카테고리, 빈 값이면 안된다.
   */
  updateCategory(category) {
    if (!category) return;

    this.category = category;
  }

  /**
   * 할일의 태그 목록을 변경한다.
   * @param {Tag[]} [tags=[]] - todo의 업데이트 된 태그들
   */
  updateTags(tags) {
    this.tags = tags;
  }

  /**
   * 할일의 완료여부를 결정한다.
   * @return {boolean} - 바뀐 todo의 상태를 반환한다.
   */
  toggleIsFinished() {
    this.isFinished = !this.isFinished;
  }
}

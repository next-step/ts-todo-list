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
  constructor({ id, content, isCompleted, category, tags }) {
    this.id = id;
    this.content = content;
    this.isCompleted = isCompleted;
    this.category = category;
    this.tags = tags;
  }

  /**
  //  * @param
  //  * @return {Todo}
   * - 수정하고자하는 프로퍼티를 담은 객체 형태의 파라미터를 받아 새로운 todoItem을 리턴합니다.
   * - 예를 들면, 내용과 카테고리를 수정하고 싶을 때는 { content: '수정할 내용', category: '수정할 카테고리' } 객체를 넘겨줍니다.
   * - param에서 받은 객체의 property에 id나 tags가 있다면 에러 메시지를 출력합니다.
   * - id는 변경할 수 없습니다.
   * - tags는 태그를 수정하는 별도의 함수를 이용합니다.
   * */
  editTodo(editObject) {
    // 얘는 인자로 뭘 받아야할텐데, 아무것도 받지 않는 걸로 되어있다..!
    // editObject를 인자로 받아야만 하지만..
    // 그냥 진행하라고 하셨기 때문에 에러 난 채로 두겠습니당!

    const newObj = { ...this };

    for (const [key, value] of Object.entries(editObject)) {
      if (key === "id") {
        console.log("id는 수정할 수 없습니다.");
      } else if (key === "tags") {
        console.log("tag 수정은 불가합니다.");
      }

      newObj[key] = value;
    }

    return newObj;
  }

  /**
   * @param {string} tagName
   * @param {string} newTagName
   * tags 배열에서 tagName을 찾아 newTagName으로 수정합니다.
   * */
  editTag(tagName, newTagName) {
    const targetTagIndex = this.tags.findIndex((tag) => tag === tagName);
    this.tags[targetTagIndex] = newTagName;
  }

  /**
   * @param {string} tagName
   * tags 배열에서 tagName을 삭제합니다.
   * */
  deleteTag(tagName) {
    const targetTagIndex = this.tags.findIndex((tag) => tag === tagName);
    this.tags.splice(targetTagIndex, 1);
  }

  /**
   * tag를 모두 삭제합니다.
   * */
  clearTags() {
    this.tags = [];
  }
}

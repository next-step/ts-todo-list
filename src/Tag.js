export default class Tag {
  /**
   * @constructor
   * @param {number} id - 태그 아이디.
   * @param {string} content - 태그 내용.
   */
  constructor(id, content) {
    this.id = id;
    this.content = content;
  }

  /**
   * @return {string} 태그 정보를 반환합니다
   */
  get info() {
    return this;
  }

  /**
   * 태그 내용을 수정합니다.
   * @param {string} tagContent - 태그 내용.
   */
  updateContent(tagContent) {
    this.content = tagContent;
  }
}

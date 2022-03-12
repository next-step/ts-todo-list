export default class Tag {
  /**
   * @constructor
   * @param {number} initTag
   * @param {number} initTag.id - 태그의 아이디
   * @param {string} initTag.name - 태그의 이름. 중복될 수 없다.
   */
  constructor(initTag) {
    this.id = initTag.id;
    this.name = initTag.name;
  }
}

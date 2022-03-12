export default class Category {
  /**
   * @constructor
   * @param {number} initCategory
   * @param {number} initCategory.id - 카테고리 아이디.
   * @param {string} initCategory.name - 카테고리 이름. 중복될 수 없다.
   */
  constructor(initCategory) {
    this.id = initCategory.id;
    this.name = initCategory.name;
  }
}

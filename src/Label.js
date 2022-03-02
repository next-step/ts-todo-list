/**
 * @file 라벨을 생성하는 Label 클래스
 * @author guymoon(조기문)
 */

/**
 * Create a new label
 * @class
 * @classdesc 라벨을 생성하는 Label 클래스
 */
class Label {
  /**
   * @type {{id: number, content: string}}
   */
  #data = {};

  /**
   * @constructor
   * @param {number} id
   * @param {string} content
   */
  constructor(id, content) {}

  /**
   * (getter)label의 data를 get
   * @return {{id: number, content: string}}
   */
  get data() {
    return this.#data;
  }

  /**
   * (setter)label의 data를 set
   * @param {string} value
   */
  set content(value) {
    this.#data.content = value;
  }
}

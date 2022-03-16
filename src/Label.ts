/**
 * @file 라벨을 생성하는 Label 클래스
 * @author guymoon(조기문)
 */

/**
 * Create a new label
 * @class
 * @classdesc 라벨을 생성하는 Label 클래스
 */
export class Label {
  /**
   * @type {{id: number, content: string}}
   */
  private data: LabelData = {id: 0, content: ""};

  /**
   * @constructor
   * @param {number} id
   * @param {string} content
   */
  constructor(id: LabelData["id"], content: LabelData["content"]) {
    this.data.id = id;
    this.data.content = content;
  }

  /**
   * (getter)label의 data를 get
   * @return {{id: number, content: string}}
   */
  get info(): LabelData {
    return this.data;
  }

  /**
   * (setter)label의 data를 set
   * @param {string} value
   */
  set content(value: LabelData["content"]) {
    this.data.content = value;
  }
}

/**
 * @file 라벨을 생성하는 Label 클래스
 * @author guymoon(조기문)
 */

import * as l from "LabelModule";

/**
 * Create a new label
 * @class
 * @classdesc 라벨을 생성하는 Label 클래스
 */
export class Label {
  /**
   * @type {{id: number, content: string}}
   */
  data: l.LabelData = {id: 0, content: ""};

  /**
   * @constructor
   * @param {number} id
   * @param {string} content
   */
  constructor(id: l.LabelData["id"], content: l.LabelData["content"]) {
    this.data.id = id;
    this.data.content = content;
  }

  /**
   * (getter)label의 data를 get
   * @return {{id: number, content: string}}
   */
  get info(): l.LabelData {
    return this.data;
  }

  /**
   * (setter)label의 data를 set
   * @param {string} value
   */
  set content(value: l.LabelData["content"]) {
    this.data.content = value;
  }
}

import { v1 as uuid } from "uuid";

/**
 * @description Tag 클래스입니다.
 * @class
 * @classdesc Tag를 작성하기 위한 클래스입니다.
 */

class Tag {
  /**
   * Create a Tag.
   * @param {number} id - 태그 uniq id
   * @param {string} name - 태그 이름
   */
  constructor(name) {
    this.id = uuid();
    this.name = name;
  }
  //parameter로 id를 받지 않으나, jsdoc에는 있는 상태

  /**
   * update Tag name value.
   * @param {string} name - 변경할 태그 이름, this로 접근해 변경하도록 한다.
   * @return {boolean} 결과
   * @description name을 받아 태그를 업데이트 한다.
   */
  update(name) {
    this.name = name;
    return true;
  }
}

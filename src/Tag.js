/**
 * @description Tag 생성자입니다.
 * @constructor
 * @param {Tag} Tag
 * @param {number} Tag.id Tag 아이디
 * @param {string} Tag.name Tag 명
 */
export default function Tag({ id, name }) {
  this.id = id;
  this.name = name;
}

/**
 * @description Tag 명을 수정합니다. id는 수정 할 수 없습니다.
 * @param {string} name Tag 명
 * @return {void}
 */
Tag.prototype.updateTag = function (name) {
  this.name = name;
};

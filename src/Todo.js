/**
 * @description Todo를 생성합니다. Id는 생성자 내에서 유일키로 생성됩니다.
 * @constructor
 * @param {object} Todo Todo
 * @param {number} Todo.id Todo 아이디
 * @param {string} Todo.content Todo 내용
 * @param {boolean} Todo.complete Todo 완료여부
 * @param {string} Todo.category Todo 카테고리
 * @param {Array.<Tag>} [Todo.tags=[]] Todo 태그들
 */
export default function Todo({
  id = Date.now(),
  content,
  complete,
  category,
  tags = [],
}) {
  this.id = id;
  this.content = content;
  this.complete = complete;
  this.category = category;
  this.tags = tags;
}

/**
 * @description Todo를 수정합니다. id는 수정 할 수 없습니다.
 * @param {object} Todo Todo
 * @param {string} Todo.content Todo 내용
 * @param {boolean} Todo.complete Todo 완료여부
 * @param {string} Todo.category Todo 카테고리
 * @param {Array.<Tag>} [Todo.tags=[]] Todo 태그들
 * @return {void}
 */
Todo.prototype.updateTodo = function ({ content, complete, category, tags }) {
  this.content = content;
  this.complete = complete;
  this.category = category;
  this.tags = tags;
};

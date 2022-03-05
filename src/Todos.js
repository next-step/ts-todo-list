/**
 * @description TodoList 생성자입니다. 저장된 정보가 있다면 해당 생성자를 통해 세팅합니다.
 * @constructor
 * @param {Array.<Todo>} [todos=[]] todos
 */
export default function Todos() {
  this.todos = this.findAllTodos() || [];
}

/**
 * @description Todo 인스턴스를 추가합니다. Todo의 id는 유일키로 해당 메소드에서 생성됩니다.
 * @param {Todo} newTodo 신규 Todo 객체
 * @returns {Array.<Todo>} 신규 등록 결과
 */
Todos.prototype.addTodo = function (Todo) {
  this.todos.push(Todo);

  console.log("새로운 Todo 추가 완료");
  console.table(this.todos);

  return this.todos;
};

/**
 * @description TodoList를 전체 반환합니다.
 * @returns {Array.<Todo>} 찾은 결과
 */
Todos.prototype.findAllTodos = function () {
  console.log("모든 Todo 출력");
  console.table(this.todos);

  return this.todos;
};

/**
 * @description Id에 해당하는 Todo를 찾습니다.
 * @param {number} todoId 찾는 todo id
 * @returns {Todo} 찾은 결과
 */
Todos.prototype.findTodoById = function (todoId) {
  const targetTodo = this.todos.filter(({ id }) => id === todoId);

  console.log(`ID: ${todoId}, Todo 찾기 완료`);
  console.table(this.todos);

  return targetTodo;
};

/**
 * @description Id에 해당하는 Todo를 수정 후, 결과 값을 반환합니다.
 * @param {Todo} todo 수정 대상 id
 * @returns {Todo} 수정 결과
 */
Todos.prototype.updateTodoById = function (Todo) {
  this.todos = this.todos.filter(({ id }) => id !== Todo.id);
  this.todos = [...this.todos, Todo];

  console.log(`ID: ${Todo.id}, Todo 수정 완료`);
  console.table(this.todos);

  return Todo;
};

/**
 * @description 해당하는 todId의 Todo에서, tagId에 해당하는 Tag name을 수정합니다.
 * @param {number} todoId 수정하는 Tag의 Todo
 * @param {string} tagId 수정하고자 하는 Todo Id
 * @returns {Tag} 수정 결과
 */
Todos.prototype.updateTagById = function (todoId, tagId) {};

/**
 * @description Todo Id 기준으로 Todo를 삭제합니다.
 * @param {number} todoId 삭제 대상 Todo id
 * @return {void}
 */
Todos.prototype.removeTodoById = function (todoId) {
  this.todos = this.todos.filter((todo) => todo.id !== todoId);

  console.log(`ID: ${todoId}, Todo 삭제 완료`);
  console.table(this.todos);
};

/**
 * @description Todo를 전체 삭제합니다.
 * @return {void}
 */
Todos.prototype.removeAllTodo = function () {
  this.todos = [];

  console.log("Todo 전체 삭제 완료");
  console.table(this.todos);
};

/**
 * @description Todo id 해당하는 Tag를 전체 삭제합니다.
 * @param {number} todoId 삭제 대상 Todo id
 * @return {void}
 */
Todos.prototype.removeAllTagByTodoId = function (todoId) {
  this.todos.forEach((todo) => {
    if (todo.id === todoId) {
      todo.tags = [];
    }
  });

  console.log(`ID: ${todoId}, Tag 전체 삭제 완료`);
  console.table(this.todos);
};

/**
 * @description Todo id에 해당하는 Todo를 찾고, Tag id 해당하는 Tag를 삭제합니다.
 * @param {number} todoId 삭제 대상 Todo id
 * @param {number} tagId 삭제 대상 Tag id
 * @return {void}
 */
Todos.prototype.removeTagByTodoIdAndTagId = function (todoId, tagId) {
  this.todos.forEach((todo) => {
    if (todo.id === todoId) {
      todo.tags = todo.tags.filter((tag) => tag.id !== tagId);
    }
  });

  console.log(`ID: ${todoId} TagID: ${tagId}, Tag 삭제 완료`);
  console.table(this.todos);
};

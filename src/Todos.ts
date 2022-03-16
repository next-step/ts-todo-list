export default function Todos() {
  this.todos = [];
}

Todos.prototype.addTodo = function (Todo) {
  this.todos.push(Todo);

  console.log("새로운 Todo 추가 완료");
  this.logger();

  return this.todos;
};

Todos.prototype.findAllTodos = function () {
  console.log("모든 Todo 출력");
  this.logger();

  return this.todos;
};

Todos.prototype.findTodoById = function (todoId) {
  const targetTodo = this.todos.filter(({ id }) => id === todoId);

  console.log(`ID: ${todoId}, Todo 찾기 완료`);
  this.logger();

  return targetTodo;
};

Todos.prototype.updateTodoById = function (Todo) {
  this.todos = this.todos.filter(({ id }) => id !== Todo.id);
  this.todos = [...this.todos, Todo];

  console.log(`ID: ${Todo.id}, Todo 수정 완료`);
  this.logger();

  return Todo;
};

Todos.prototype.updateTagById = function (todoId, tagId) {};

Todos.prototype.removeTodoById = function (todoId) {
  this.todos = this.todos.filter((todo) => todo.id !== todoId);

  console.log(`ID: ${todoId}, Todo 삭제 완료`);
  this.logger();
};

Todos.prototype.removeAllTodo = function () {
  this.todos = [];

  console.log("Todo 전체 삭제 완료");
  this.logger();
};

Todos.prototype.removeAllTagByTodoId = function (todoId) {
  this.todos.forEach((todo) => {
    if (todo.id === todoId) {
      todo.tags = [];
    }
  });

  console.log(`ID: ${todoId}, Tag 전체 삭제 완료`);
  this.logger();
};

Todos.prototype.removeTagByTodoIdAndTagId = function (todoId, tagId) {
  this.todos.forEach((todo) => {
    if (todo.id === todoId) {
      todo.tags = todo.tags.filter((tag) => tag.id !== tagId);
    }
  });

  console.log(`ID: ${todoId} TagID: ${tagId}, Tag 삭제 완료`);
  this.logger();
};

Todos.prototype.logger = function () {
  this.todos?.length
    ? console.table(this.todos)
    : console.warn("Todo가 존재하지 않습니다.");
};

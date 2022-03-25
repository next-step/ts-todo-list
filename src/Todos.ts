import Todo from './Todo';
import Tag from './Tag';

interface TodoInterface {
  addTodo: Function;
  findAllTodos: Function;
  findTodoById: Function;
  updateTodoById: Function;
  updateTagById: Function;
  removeTodoById: Function;
  removeAllTodo: Function;
  removeAllTagByTodoId: Function;
  removeTagByTodoIdAndTagId: Function;
  logger: Function;
}

export default class Todos implements TodoInterface {
  public todos: typeof Todo[] = [];

  addTodo(todo: typeof Todo) {
    this.todos.push(todo);

    console.log('새로운 Todo 추가 완료');
    this.logger();

    return this.todos;
  }

  findAllTodos() {
    console.log('모든 Todo 출력');
    this.logger();

    return this.todos;
  }

  findTodoById(todoId: number) {
    const targetTodo = this.todos.find(
      (aTodo: typeof Todo) => aTodo.id === todoId
    );

    console.log(`ID: ${todoId}, Todo 찾기 완료`);
    this.logger();

    return targetTodo;
  }

  updateTodoById(todo: typeof Todo) {
    this.todos = this.todos.filter(
      (aTodo: typeof Todo) => aTodo.id !== todo.id
    );
    this.todos = [...this.todos, todo];

    console.log(`ID: ${todo.id}, Todo 수정 완료`);
    this.logger();

    return todo;
  }

  updateTagById(todoId, tagId) {}

  removeTodoById(todoId: number): void {
    this.todos = this.todos.filter(todo => todo.id !== todoId);

    console.log(`ID: ${todoId}, Todo 삭제 완료`);
    this.logger();
  }

  removeAllTodo(): void {
    this.todos = [];

    console.log('Todo 전체 삭제 완료');
    this.logger();
  }

  removeAllTagByTodoId(todoId: number): void {
    this.todos.forEach(todo => {
      if (todo.id === todoId) {
        todo.tags = [];
      }
    });

    console.log(`ID: ${todoId}, Tag 전체 삭제 완료`);
    this.logger();
  }

  removeTagByTodoIdAndTagId(todoId, tagId): void {
    this.todos.forEach(todo => {
      if (todo.id === todoId) {
        todo.tags = todo.tags.filter(tag => tag.id !== tagId);
      }
    });

    console.log(`ID: ${todoId} TagID: ${tagId}, Tag 삭제 완료`);
    this.logger();
  }

  logger(): void {
    this.todos?.length
      ? console.table(this.todos)
      : console.warn('Todo가 존재하지 않습니다.');
  }
}

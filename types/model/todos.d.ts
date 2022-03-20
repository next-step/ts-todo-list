import Todo from "./todo.js";
import Tag from "./tag.js";

export default class TodoList {
  todos: Todo[];

  constructor(initTodos?: Todo[]);

  render(renderItem?: Todo[]): void;

  addTodo(newTitle: string): void;

  getAllTodos(): Todo[];

  getTodo(id: number): Todo;

  updateTodoTitle(id: number, updatedTitle: string): void;

  updateTodoCategory(id: number, categoryName: string): void;

  updateTodoTags(id: number, tagName: Tag[]): void;

  deleteTodo(deleteTargetId: number): void;

  deleteAllTodos(): void;

  addTagTodo(id: number, tagName: string): void;

  toggleTodoFinished(id: number): void;

  removeToodoTag(todoId: number, tagName: string): void;

  removeAllTags(todoId: number): void;
}

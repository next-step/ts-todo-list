import { Todo } from "../index";
import { TodoItem } from "../TodoItem";

export class TodoApp {
  todoList: TodoItem[];

  constructor();

  getTodoList(): TodoItem[];

  addTodo(newTodo: TodoItem): void;

  validateNewTodo(newTodo: TodoItem): boolean;

  createTodoId(): number;

  searchTodo(id: number): TodoItem | void;

  deleteTodo(id: number): TodoItem[];

  editTodo(id: number, editProperties: Pick<Todo, 'content' | 'isCompleted' | 'category'>): TodoItem;

  editTag(id: number, tagName: string, newTagName: string): void;

  deleteTag(id: number, tagName: string): void;

  clearTags(id: number): void;

  clearTodoList(): void;
}
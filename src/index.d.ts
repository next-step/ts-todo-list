declare class Todo {
  constructor(id: number, text: string, category: string, tagList: string[]);

  updateText(text: string): void;

  updateCategory(category: string): void;

  updateTagList(tagList: string[]): void;

  toggleCompleted(): void;
}

declare class TodoList {
  constructor(initTodoList: Todo[]);

  getTodoList(): Todo[];

  getTodoById(id: number): Todo;

  addTodo(todo: Todo): void;

  tagTodo(id: number, tag: string): void;

  updateTodoText(id: number, text: string): void;

  toggleTodoCompleted(id: number): void;

  updateTodoCategory(id: number, category: string): void;

  updateTodoTagList(id: number, tagList: string[]): void;

  removeTodo(id: number): void;

  removeAllTodo(): void;

  removeTodoTag(id: number, tag: string): void;

  removeTodoAllTag(id: number): void;
}

declare interface TagItem {
  id: number;
  name: string;
}

declare class Tag {
  constructor(tag: TagItem);
}

declare interface CategoryItem {
  id: number;
  name: string;
}

declare class Category {
  constructor(category: CategoryItem);
}

declare interface TodoItem {
  id: number;
  title: string;
  isFinished?: boolean;
  category: Category;
  tags?: Tag[];
}

declare class Todo {
  constructor(todo: TodoItem);

  updateTitle(newTitle: string): void;

  updateCategory(category: Category): void;

  updateTags(tags: Tag[]): void;

  toggleIsFinished(): boolean;
}

declare class TodoList {
  constructor(todos: Todo[]);

  render(renderItem: Todo[]): void;

  addTodo(newTitle: string): void;

  getAllTodos(): Todo[];

  getTodo(id: number): Todo;

  updateTodoTitle(id: number, updatedTitle: string): void;

  updateTodoCategory(id: number, categoryName: string): void;

  updateTodoTags(id: number, tagName: string): void;

  deleteTodo(deleteTargetId: number): void;

  deleteAllTodos(): void;

  addTagTodo(id: number, tagName: string): void;

  toggleTodoFinished(id: number): void;

  removeToodoTag(todoId: number, tagName: string): void;

  removeAllTags(todoId: number): void;
}

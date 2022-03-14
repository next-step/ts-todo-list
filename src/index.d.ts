export interface Tag {
  id: number;
  name: string;
}

export interface Todo {
  id: number;
  content: string;
  check: boolean;
  category: string;
  tags: Tag[]
}

export function getTodos(): Todo[];

export function getTodo(id: number): Todo;

export function createTodo(todo: Todo): void;

export function updateTodo({ id, content }: { id: number, content: string }): void;

export function deleteTodo(id: number): void;

export function deleteAllTodo(): void;

export function deleteTodoTag({ todoId, tagId }: { todoId: number, tagId: number }): void;

export function deleteAllTag(todoId: number): void;

export function completeTodo(id: number): void;
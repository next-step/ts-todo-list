declare interface ITodo {
  id: number;
  text: string;
  done: boolean;
  category: string;
  tags: string[];
}

declare const todos: ITodo[];

export function increaseId(): number;

export function createTodo(todo: ITodo): void;

export function getTodos(): ITodo;

export function getTodo(id: number): ITodo;

export function updateTodo(id: number): void;

export function updateTag(
  id: number,
  targetTag: string,
  changeTag: string
): void;

export function deleteAll(): void;

export function deleteTodo(id: number): void;

export function deleteTags(id: number): void;

export function deleteTag(id: number, tag: string): void;

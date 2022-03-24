export interface SingleTodo {
  id: number;
  content: string;
  category: string;
  isCompleted: boolean;
  tags: string[];
}

export type TodoList = SingleTodo[];

export const todoList: SingleTodo[];

export function addTodo(newTodo: SingleTodo): void;

// overload
export function readTodo(id: number): SingleTodo;
export function readTodo(): SingleTodo[];

export function editTodo(newTodo: SingleTodo): void;

export function deleteTodo(id: number): void;

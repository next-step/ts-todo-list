declare const todoList: {
  id: number;
  content: string;
  finished: boolean;
  category: string;
  tags: string[];
}[];

export declare const category: string[];

declare let id: number;
declare let content: string;
declare let finished: boolean;
declare let selectedCategory: string;
declare let tags: string[];
declare let selectedTag: string;
declare let tagValue: string;

export declare function createTodo(
  id: number,
  content: string,
  finished: boolean,
  selectedCategory: string,
  tags: string[]
): void;

export declare function readTodoList(): void;

export declare function readTodoDetail(id: number): void;

export declare function updateTodo(
  id: number,
  content: string,
  finished: boolean,
  selectedCategory: string,
  tags: string[]
): void;

export declare function updateTodoTag(
  id: number,
  selectedTag: string,
  tagValue: string
): void;

export declare function deleteTodoDetail(id: number): void;

export declare function deleteTodoList(): void;

export declare function deleteTodoTag(id: number, selectedTag: string): void;

export declare function deleteTodoTagAll(id: number): void;

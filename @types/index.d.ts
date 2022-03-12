/* 시도 1 */
// declare namespace Todo {
//   function updateText(text: string):void;
//   function updateCategory(category: string): void;
//   function updateList(tagList: string): void;
//   function toggleCompleted(): void
// }
//
// declare namespace TodoList {
//   function getTodoList():void;
//   function getTodoById(id: number): void;
//   function addTodo(todo: any): void; // todo 타입을 namespace인 아이를 가져올 수 가 없음.
//   function updateTodoText(): void;
//   function toggleTodoCompeleted(): void;
//   function updateTodoCategory(id: number, category: string): void;
//   function updateTodoTagList(id: number, tagList: string[]): void;
//   function removeTodo(id: number): void;
//   function removeAllTodo(): void;
//   function removeTodoTag(id: number, tag: string): void;
//   function removeTodoAllTag(id: number): void;
// }

/* 시도 2 */
declare class Todo {
  constructor(id: number, text: string, category: string, tagList: string[]);
  updateText(text: string): void;
  updateCategory(category: string): void;
  updateTagList(tagList: string[]): void;
  toggleCompleted(): void;
}

declare class TodoList {
  constructor(initTodoList: any);
  getTodoList(): void;
  getTodoById(id: number): void;
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

// 테스트용, 제대로 돌아감.
declare const todo1: Todo;
declare const todo2: Todo;
declare const todoList: TodoList;

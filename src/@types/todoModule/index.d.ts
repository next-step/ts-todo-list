declare module "todoModule" {
  interface SingleTodo {
    id: number;
    content: string;
    category: string;
    isCompleted: boolean;
    tags: string[];
  }

  export type TodoList = SingleTodo[];

  export const todoList: SingleTodo[];

  function addTodo(newTodo: SingleTodo): void;

  // overload
  function readTodo(id: number): SingleTodo;
  function readTodo(): SingleTodo[];

  function editTodo(newTodo: SingleTodo): void;

  function deleteTodo(id: number): void;
}

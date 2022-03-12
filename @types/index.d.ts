interface ITodo {
  id: number;
  task: string;
  done: boolean;
}

declare class TodoApplication {
  state: ITodo;

  constructor(initialState: ITodo);

  get todos(): ITodo;

  changeTask(newTask: string): void;

  addTodo(): void;

  deleteTodo(id: number): void;

  changeTodo({ id: number, changeTask: string }): void;

  checkTodo(id: number): void
}

declare const todoApplication: TodoApplication;

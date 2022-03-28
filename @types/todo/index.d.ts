declare module "LabelModule" {
  export interface LabelData {
    id: number;
    content: string;
  }

  export class Label {
    data: LabelData;
    //private data: LabelData;

    constructor(id: LabelData["id"], content: LabelData["content"]);

    get info(): LabelData;

    set content(value: LabelData["content"]);
  }
}

declare module "TodoModule" {
  export interface TodoData {
    id: number;
    isDone: boolean;
    content: string;
    labels: Label[];
    priority: "LOW" | "MIDDLE" | "HIGH";
  }

  export class Todo {
    data: TodoData;
    //private data: TodoData;

    constructor(id: TodoData["id"], content: TodoData["content"]);

    get info(): TodoData;

    set content(value: TodoData["content"]);
    set isDone(value: TodoData["isDone"]);
    set priority(value: TodoData["priority"]);
    set labels(value: Label[]);
  }
}

declare module "TodoAppModule" {
  export class TodoApp {
    todoList: Todo[];

    createUniqueId(): TodoData["id"];

    addTodo(todo: Todo): TodoData["id"] | -1;

    deleteTodoById(todoId: TodoData["id"]): TodoData["id"] | -1;

    clearTodoList(): boolean;

    mutateTodoContentById(
      idToMutateTodo: TodoData["id"],
      newContent: TodoData["id"]
    ): TodoData["id"] | -1;

    mutateTodoStatusById(idToMutateTodo: TodoData["id"]): TodoData["id"] | -1;

    addTodoLabelByTodoId(
      targetTodoId: TodoData["id"],
      newLabel: Label
    ): TodoData["id"] | -1;

    deleteTodoLabelByLabelId(
      targetTodoId: LabelData["id"],
      idToDeleteLabel: LabelData["content"]
    ): LabelData["id"] | -1;
  }
}

// declare module "todo" {
//   export interface LabelData {
//     id: number;
//     content: string;
//   }

//   export declare class Label {
//     private data: LabelData;

//     constructor(id: LabelData["id"], content: LabelData["content"]);

//     get info(): LabelData;

//     set content(value: LabelData["content"]);
//   }

//   export interface TodoData {
//     id: number;
//     isDone: boolean;
//     content: string;
//     labels: Label[];
//     priority: "LOW" | "MIDDLE" | "HIGH";
//   }

//   export class Todo {
//     private data: TodoData;

//     constructor(id: TodoData["id"], content: TodoData["content"]);

//     get info(): TodoData;

//     set content(value: TodoData["content"]);
//     set isDone(value: TodoData["isDone"]);
//     set priority(value: TodoData["priority"]);
//     set labels(value: Label[]);
//   }

//   export class TodoApp {
//     todoList: Todo[];

//     createUniqueId(): TodoData["id"];

//     addTodo(todo: Todo): TodoData["id"] | -1;

//     deleteTodoById(todoId: TodoData["id"]): TodoData["id"] | -1;

//     clearTodoList(): boolean;

//     mutateTodoContentById(
//       idToMutateTodo: TodoData["id"],
//       newContent: TodoData["id"]
//     ): TodoData["id"] | -1;

//     mutateTodoStatusById(idToMutateTodo: TodoData["id"]): TodoData["id"] | -1;

//     addTodoLabelByTodoId(
//       targetTodoId: TodoData["id"],
//       newLabel: Label
//     ): TodoData["id"] | -1;

//     deleteTodoLabelByLabelId(
//       targetTodoId: LabelData["id"],
//       idToDeleteLabel: LabelData["content"]
//     ): LabelData["id"] | -1;
//   }
// }

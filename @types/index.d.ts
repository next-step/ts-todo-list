/** Label */
declare interface LabelData {
  id: number;
  content: string;
}

declare class Label {
  private data: LabelData;

  constructor(id: LabelData["id"], content: LabelData["content"]);

  get info(): LabelData;

  set content(value: LabelData["content"]);
}

/** Todo */
declare interface TodoData {
  id: number;
  isDone: boolean;
  content: string;
  labels: Label[];
  priority: "LOW" | "MIDDLE" | "HIGH";
}

declare class Todo {
  private data: TodoData;

  constructor(id: TodoData["id"], content: TodoData["content"]);

  get info(): TodoData;

  set content(value: TodoData["content"]);
  set isDone(value: TodoData["isDone"]);
  set priority(value: TodoData["priority"]);
  set labels(value: Label);
}

/** TodoApp */
declare class TodoApp {
  todoList: Todo[];

  createUniqueId(): TodoData["id"];

  addTodo(todo: Todo): TodoData["id"] | -1;

  deleteTodoById(todoId: TodoData["id"]): TodoData["id"] | -1;

  clearTodoList(): boolean;

  mutateTodoContentById(
    idToMutateTodo: TodoData["id"],
    newContent: TodoData["id"]
  ): TodoData["id"] | -1;

  mutateTodoStatus(idToMutateTodo: TodoData["id"]): TodoData["id"] | -1;

  addTodoLabelByTodoId(
    targetTodoId: TodoData["id"],
    newLabelContent: TodoData["content"]
  ): TodoData["id"] | -1;

  deleteTodoLabelByLabelId(
    targetTodoId: LabelData["id"],
    idToDeleteLabel: LabelData["content"]
  ): LabelData["id"] | -1;
}


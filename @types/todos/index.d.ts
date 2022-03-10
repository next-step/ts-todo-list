declare module "todos" {
  export interface TodoItem {
    content: string;
    complete: boolean;
    category: string;
    tags: string[];

    printTodo: () => void;
  }

  export declare type initTodoItemType = {
    content: string;
    complete?: boolean;
    category?: string;
    tags?: string[];
  };

  export declare type TodoListType = Map<number, TodoItem>;

  export interface TodoCollection {
    todoList: TodoListType;
    nextId: number;

    createTodo: (todoItem: TodoItem) => number;
    readTodos: () => void;
    readTodo: (id: number) => void;
    updateTodo: (id: number, todoItem: TodoItemType) => TodoItemType | null;
    updateTag: (id: number, targetTag: string, newTag: string) => boolean;
    deleteTodos: () => void;
    deleteTodo: (id: number) => number;
    deleteTags: (id: number) => void;
    deleteTag: (id: number, tag: string) => void;
  }
}

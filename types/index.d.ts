declare class TodoList {

    list: TodoItem[];

    addItem(todoItem: TodoItem): void;

    readItemById(id: string): TodoItem;

    readItemAll(): Array<TodoItem>;

    updateItemById(id: string, option: { content: string, category: string, tagContents?: Array<string> }): void;

    deleteItemById(id: string): void;

    deleteItemAll(): void;
}
declare class TodoItem {

    constructor(content: string, category: string, tagContents?: Array<string>);

    id: number;

    content: string;

    category: string;

    isFinished: boolean;

    tags: Tag[];

    updateTagById(id: string, content: string): void;

    deleteTagById(id: string): void;

    deleteTagAll(): void;
}

declare class Tag {

    constructor(content: string);

    id: number;

    content: string;
}

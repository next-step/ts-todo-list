interface TodoInterface {
    readonly id: number;
    readonly text: string;
    readonly category: string;
    readonly tagList: string[];
    updateText(text: string): void;
    updateCategory(category: string): void;
    updateTagList(tagList: string[]): void;
    toggleCompleted(): void;
}
interface TodoListInterface {
    readonly todoList: TodoInterface[];
    getTodoList(): TodoInterface[];
    getTodoById(id: number): TodoInterface;
    addTodo(todo: TodoInterface): void;
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
declare class Todo implements TodoInterface {
    private readonly _id;
    private _text;
    private _category;
    private _done;
    private _tagList;
    /**
     * Create Todo
     * @constructor
     * @param {number} id - 할 일의 내용
     * @param {string} text - 할 일의 내용
     * @param {string} category - 할 일의 카테고리
     * @param {string[]} [tagList=[]] - 할 일의 태그들
     */
    constructor(id: number, text: string, category: string, tagList?: string[]);
    get id(): number;
    get text(): string;
    get category(): string;
    get tagList(): string[];
    /**
     * 할 일의 내용을 변경한다.
     * @param {string} text - 변경할 할 일 내용
     */
    updateText(text: string): void;
    /**
     * 할 일의 카테고리를 변경한다.
     * @param {string} category - 새로운 카테고리
     */
    updateCategory(category: string): void;
    /**
     * 할 일의 태그 목록을 변경한다.
     * @param {string[]} tagList - 새로운 태그 목록
     */
    updateTagList(tagList: string[]): void;
    /**
     * 할 일의 완료 상태를 토글한다.
     */
    toggleCompleted(): void;
}
declare class TodoList implements TodoListInterface {
    private _todoList;
    /**
     * Create TodoList
     * @constructor
     * @param {Todo[]} [initTodoList=[]] - 초기값으로 설정할 할 일 목록
     */
    constructor(initTodoList?: TodoInterface[]);
    get todoList(): TodoInterface[];
    /**
     * 모든 할 일 목록을 조회한다.
     * @returns {Todo[]}
     */
    getTodoList(): TodoInterface[];
    /**
     * 특정 할 일을 조회한다.
     * @param {number} id
     * @returns {Todo}
     */
    getTodoById(id: number): TodoInterface;
    /**
     * 새로운 할 일을 추가한다.
     * @param {Todo} todo - 새로 추가할 할 일
     */
    addTodo(todo: TodoInterface): void;
    /**
     * 특정 할 일에 태그를 추가한다.
     * @param {number} id
     * @param {string} tag
     */
    tagTodo(id: number, tag: string): void;
    /**
     * 특정 할 일 내용을 변경한다.
     * @param {number} id
     * @param {string} text
     */
    updateTodoText(id: number, text: string): void;
    /**
     * 특정 할 일의 완료 상태를 토글한다.
     * @param {number} id - 완료 상태를 변경할 할 일의 id
     */
    toggleTodoCompleted(id: number): void;
    /**
     * 특정 할 일 카테고리를 변경한다.
     * @param {number} id - 카테고리를 변경할 할 일의 id
     * @param {string} category - 새로운 카테고리
     */
    updateTodoCategory(id: number, category: string): void;
    /**
     * 특정 할 일 태그 목록을 변경한다.
     * @param {number} id - 태그를 변경할 할 일의 id
     * @param {string[]} tagList - 새로운 태그 목록
     */
    updateTodoTagList(id: number, tagList: string[]): void;
    /**
     * 특정 할 일을 삭제한다.
     * @param {number} id - 삭제할 할 일의 id
     */
    removeTodo(id: number): void;
    /**
     * 모든 할 일을 삭제한다.
     */
    removeAllTodo(): void;
    /**
     * 특정 할 일의 특정 태그를 삭제한다.
     * @param {number} id - 태그를 삭제할 할 일의 id
     * @param {string} tag - 삭제할 태그의 텍스트
     */
    removeTodoTag(id: number, tag: string): void;
    /**
     * 특정 할 일의 모든 태그를 삭제한다.
     * @param {number} id - 모든 태그를 삭제할 할 일의 id
     */
    removeTodoAllTag(id: number): void;
}
declare const todo1: Todo;
declare const todo2: Todo;
declare const todoList: TodoList;

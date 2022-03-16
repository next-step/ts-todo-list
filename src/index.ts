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


class Todo implements TodoInterface{
  private readonly _id: number;
  private _text: string;
  private _category: string;
  private _done: boolean;
  private _tagList: string[];

  /**
   * Create Todo
   * @constructor
   * @param {number} id - 할 일의 내용
   * @param {string} text - 할 일의 내용
   * @param {string} category - 할 일의 카테고리
   * @param {string[]} [tagList=[]] - 할 일의 태그들
   */
  constructor(id:number , text: string, category:string, tagList: string[] = []) {
    this._id = id;
    this._text = text;
    this._category = category;
    this._done = false;
    this._tagList = tagList;
  }

  get id() {
    return this._id;
  }

  get text() {
    return this._text;
  }

  get category() {
    return this._category;
  }

  get tagList() {
    return this._tagList;
  }

  /**
   * 할 일의 내용을 변경한다.
   * @param {string} text - 변경할 할 일 내용
   */
  updateText(text: string) {
    this._text = text;
  }

  /**
   * 할 일의 카테고리를 변경한다.
   * @param {string} category - 새로운 카테고리
   */
  updateCategory(category: string) {
    this._category = category;
  }

  /**
   * 할 일의 태그 목록을 변경한다.
   * @param {string[]} tagList - 새로운 태그 목록
   */
  updateTagList(tagList: string[]) {
    this._tagList = tagList;
  }

  /**
   * 할 일의 완료 상태를 토글한다.
   */
  toggleCompleted() {
    this._done = !this._done;
  }
}

class TodoList implements TodoListInterface{
  private _todoList: TodoInterface[];

  /**
   * Create TodoList
   * @constructor
   * @param {Todo[]} [initTodoList=[]] - 초기값으로 설정할 할 일 목록
   */
  constructor(initTodoList: TodoInterface[] = []) {
    this._todoList = initTodoList;
  }

  get todoList() {
    return this._todoList;
  }
  /**
   * 모든 할 일 목록을 조회한다.
   * @returns {Todo[]}
   */
  getTodoList(): TodoInterface[] {
    console.log('getTodoList', this._todoList);
    return this._todoList;
  }

  /**
   * 특정 할 일을 조회한다.
   * @param {number} id
   * @returns {Todo}
   */
  getTodoById(id: number): TodoInterface {
    console.log(
      'getTodoById',
      this._todoList.find((todo) => todo.id === id)
    );
    return this._todoList.find((todo) => todo.id === id)!;
  }

  /**
   * 새로운 할 일을 추가한다.
   * @param {Todo} todo - 새로 추가할 할 일
   */
  addTodo(todo: TodoInterface) {
    this._todoList = [...this._todoList, todo];
    console.log('addTodo', this._todoList);
  }

  /**
   * 특정 할 일에 태그를 추가한다.
   * @param {number} id
   * @param {string} tag
   */
  tagTodo(id: number, tag: string) {
    const selectedTodoIndex = this._todoList.findIndex((todo) => todo.id === id);
    this._todoList[selectedTodoIndex].updateTagList([
      ...this._todoList[selectedTodoIndex].tagList,
      tag,
    ]);
    console.log('tagTodo', this._todoList[selectedTodoIndex].tagList);
  }

  /**
   * 특정 할 일 내용을 변경한다.
   * @param {number} id
   * @param {string} text
   */
  updateTodoText(id: number, text: string) {
    const selectedTodo = this.getTodoById(id);
    selectedTodo.updateText(text);
    console.log('updateTodoText', selectedTodo.text);
  }

  /**
   * 특정 할 일의 완료 상태를 토글한다.
   * @param {number} id - 완료 상태를 변경할 할 일의 id
   */
  toggleTodoCompleted(id: number) {
    const selectedTodo = this.getTodoById(id);
    selectedTodo.toggleCompleted();
    console.log('toggleTodoCompleted', selectedTodo);
  }

  /**
   * 특정 할 일 카테고리를 변경한다.
   * @param {number} id - 카테고리를 변경할 할 일의 id
   * @param {string} category - 새로운 카테고리
   */
  updateTodoCategory(id: number, category: string) {
    const selectedTodo = this.getTodoById(id);
    selectedTodo.updateCategory(category);
    console.log('updateTodoCategory', selectedTodo.category);
  }

  /**
   * 특정 할 일 태그 목록을 변경한다.
   * @param {number} id - 태그를 변경할 할 일의 id
   * @param {string[]} tagList - 새로운 태그 목록
   */
  updateTodoTagList(id: number, tagList: string[]) {
    const selectedTodo = this.getTodoById(id);
    selectedTodo.updateTagList(tagList);
    console.log('updateTodoTagList', selectedTodo.tagList);
  }

  /**
   * 특정 할 일을 삭제한다.
   * @param {number} id - 삭제할 할 일의 id
   */
  removeTodo(id: number) {
    this._todoList = this._todoList.filter((todo) => todo.id !== id);
    console.log('removeTodo', this._todoList);
  }

  /**
   * 모든 할 일을 삭제한다.
   */
  removeAllTodo() {
    this._todoList = [];
    console.log('removeAllTodo', this._todoList);
  }

  /**
   * 특정 할 일의 특정 태그를 삭제한다.
   * @param {number} id - 태그를 삭제할 할 일의 id
   * @param {string} tag - 삭제할 태그의 텍스트
   */
  removeTodoTag(id: number, tag: string) {
    const selectedTodo = this.getTodoById(id);
    const newTagList = selectedTodo.tagList.filter((value) => value === tag);
    selectedTodo.updateTagList(newTagList);
    console.log('removeTodoTag', selectedTodo.tagList);
  }

  /**
   * 특정 할 일의 모든 태그를 삭제한다.
   * @param {number} id - 모든 태그를 삭제할 할 일의 id
   */
  removeTodoAllTag(id: number) {
    const selectedTodo = this.getTodoById(id);
    selectedTodo.updateTagList([]);
    console.log('removeTodoAllTag', selectedTodo.tagList);
  }
}

/* Test */
const todo1 = new Todo(1, '점심 먹기', '식사', ['한식', '양식']);
const todo2 = new Todo(2, '저녁 먹기', '식사', ['중식']);
const todoList = new TodoList([todo1, todo2]);

// Read
todoList.getTodoById(1);
todoList.getTodoList();

// Create
todoList.addTodo(new Todo(3, '운동', '헬스', ['유산소']));
todoList.tagTodo(3, '무산소');

// Update
todoList.updateTodoText(1, '아침 먹기');
todoList.updateTodoCategory(1, '식단 관리');
todoList.updateTodoTagList(1, ['일식']);
todoList.toggleTodoCompleted(3);

// Delete
todoList.removeTodo(3);
todoList.removeTodoTag(1, '일식');
todoList.removeTodoAllTag(2);
todoList.removeAllTodo();


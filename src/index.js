class Todo {
  /**
   * Create Todo
   * @constructor
   * @param {number} id - 할 일의 내용
   * @param {string} text - 할 일의 내용
   * @param {string} category - 할 일의 카테고리
   * @param {string[]} [tagList=[]] - 할 일의 태그들
   */
  constructor(id, text, category, tagList) {
    this.id = id;
    this.text = text;
    this.category = category;
    this.tagList = tagList;
  }

  /**
   * 할 일의 내용을 변경한다.
   * @param {string} text - 변경할 할 일 내용
   */
  updateText(text) {
    this.text = text;
  }

  /**
   * 할 일의 카테고리를 변경한다.
   * @param {string} category - 새로운 카테고리
   */
  updateCategory(category) {
    this.category = category;
  }

  /**
   * 할 일의 태그 목록을 변경한다.
   * @param {string[]} tagList - 새로운 태그 목록
   */
  updateTagList(tagList) {
    this.tagList = tagList;
  }

  /**
   * 할 일의 완료 상태를 토글한다.
   */
  toggleCompleted() {
    // 상태값이 없음.
  }
}

class TodoList {
  /**
   * Create TodoList
   * @constructor
   * @param {Todo[]} [initTodoList=[]] - 초기값으로 설정할 할 일 목록
   */
  constructor(initTodoList) {
    this.initTodoList = initTodoList;
  }

  /**
   * 모든 할 일 목록을 조회한다.
   * @returns {Todo[]}
   */
  getTodoList() {
    console.log('getTodoList', this.initTodoList);
    return this.initTodoList;
  }

  /**
   * 특정 할 일을 조회한다.
   * @param {number} id
   * @returns {Todo}
   */
  getTodoById(id) {
    console.log('getTodoById', this.initTodoList.find(todo => todo.id === id));
    return this.initTodoList.find(todo => todo.id === id);
  }

  /**
   * 새로운 할 일을 추가한다.
   * @param {Todo} todo - 새로 추가할 할 일
   */
  addTodo(todo) {
    this.initTodoList = [...this.initTodoList, todo];
    console.log('addTodo', this.initTodoList);
  }

  /**
   * 특정 할 일에 태그를 추가한다.
   * @param {number} id
   * @param {string} tag
   */
  tagTodo(id, tag) {
    // Todo에 태그 상태가 존재하지 않음.
  }

  /**
   * 특정 할 일 내용을 변경한다.
   * @param {number} id
   * @param {string} text
   */
  updateTodoText(id, text) {
    const selectedTodo = this.initTodoList.find(todo => todo.id === id);
    selectedTodo.updateText(text);
    console.log('updateTodoText', selectedTodo.text);
  }

  /**
   * 특정 할 일의 완료 상태를 토글한다.
   * @param {number} id - 완료 상태를 변경할 할 일의 id
   */
  toggleTodoCompleted(id) {
    // done 상태가 존재하지 않음.
  }

  /**
   * 특정 할 일 카테고리를 변경한다.
   * @param {number} id - 카테고리를 변경할 할 일의 id
   * @param {string} category - 새로운 카테고리
   */
  updateTodoCategory(id, category) {
    const selectedTodo = this.initTodoList.find(todo => todo.id === id);
    selectedTodo.updateCategory(category);
    console.log('updateTodoCategory', selectedTodo.category);
  }

  /**
   * 특정 할 일 태그 목록을 변경한다.
   * @param {number} id - 태그를 변경할 할 일의 id
   * @param {string[]} tagList - 새로운 태그 목록
   */
  updateTodoTagList(id, tagList) {
    const selectedTodo = this.initTodoList.find(todo => todo.id === id);
    selectedTodo.updateTagList(tagList);
    console.log('updateTodoTagList', selectedTodo.tagList);
  }

  /**
   * 특정 할 일을 삭제한다.
   * @param {number} id - 삭제할 할 일의 id
   */
  removeTodo(id) {
    this.initTodoList = this.initTodoList.filter(todo => todo.id !== id);
    console.log('removeTodo', this.initTodoList);
  }

  /**
   * 모든 할 일을 삭제한다.
   */
  removeAllTodo() {
    this.initTodoList = [];
    console.log('removeAllTodo', this.initTodoList);
  }

  /**
   * 특정 할 일의 특정 태그를 삭제한다.
   * @param {number} id - 태그를 삭제할 할 일의 id
   * @param {string} tag - 삭제할 태그의 텍스트
   */
  removeTodoTag(id, tag) {
    const selectedTodo = this.initTodoList.find(todo => todo.id === id);
    const newTagList = selectedTodo.tagList.filter(value => value === tag);
    selectedTodo.updateTagList(newTagList);
    console.log('removeTodoTag', selectedTodo.tagList);
  }

  /**
   * 특정 할 일의 모든 태그를 삭제한다.
   * @param {number} id - 모든 태그를 삭제할 할 일의 id
   */
  removeTodoAllTag(id) {
    const selectedTodo = this.initTodoList.find(todo => todo.id === id);
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

// Update
todoList.updateTodoText(1, '아침 먹기');
todoList.updateTodoCategory(1, '식단 관리');
todoList.updateTodoTagList(1, ['일식']);

// Delete
todoList.removeTodo(3);
todoList.removeTodoTag(1, '일식');
todoList.removeTodoAllTag(2);
todoList.removeAllTodo();

// 구현이 안된 메서드
// todoList.tagTodo();
// todoList.toggleTodoCompleted();

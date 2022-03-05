class TodoApp {
  /**
   * @constructor
   */
  constructor() {
    /**
     * @type{TodoElement[]}
     */
    this.todoElements = [];
    /**
     * @type {number}
     */
    this.nextId = 0;
  }

  /**
   * addTodoElement 할때 고유한 nextId 를 만들어주는 함수.
   * @private
   * @return {number} nextTodoElementId 할일 아이디.
   */
  idGenerator() {
    const todoIds = this.todoElements.map((todoElement) => todoElement.id);

    let newId = Math.floor(Math.random() + 9999);
    while (todoIds.find((id) => id === newId)) {
      newId = Math.floor(Math.random() + 9999);
    }

    return newId;
  }
  /**
   *
   * 할 일을 추가합니다.
   * @param {TodoElement} todoElement
   */
  addTodoElement(todoElement) {
    //memo: todo의 content만 받는게 더 자연스러운 흐름인 것 같음 (id, status, category는 어떻게 받을 것인지)
    const curentElement = this.todoElements;

    this.todoElements = [...curentElement, todoElement];
  }

  /**
   * todoElements 에서 todoElementId 로 요쇼를 찾아 해당 요소.info 를 출력합니다.
   * @param {number} todoElementId
   */
  getTodoElementInfoById(todoElementId) {
    const targetTodo = this.todoElements.find((todo) => todo.id === todoElementId);

    return targetTodo.info();
  }

  /**
   * todoElements 의 모든 요소의 요소.info 를 출력합니다.
   */
  getTodoElementInfoAll() {
    //memo : return 이 조건에 빠진게 아닐까요?
    this.todoElements?.forEach((todoElement) => {
      console.log(todoElement.info());
    });
  }

  /**
   * todoElements 에서 todoElementId 로 요쇼를 찾아 해당 요소.update 함수를 호출합니다
   * @param {number} todoElementId - 할 일 아이디.
   * @param {string=} content - 할 일의 내용.
   * @param {('TODO'|'DONE')=} status - 상태.
   * @param {string=} category - 카테고리.
   */
  updateTodoElementById(todoElementId, content, status, category) {
    const targetTodo = this.todoElements.find((todo) => todo.id === todoElementId);

    targetTodo.update(content, status, category);
  }

  /**
   * 할일을 삭제합니다.
   * @param {number} todoElementId - 할 일의 내용.
   */
  deleteTodoElementById(todoElementId) {
    const targetTodoIndex = this.todoElements.findIndex((todo) => todo.id === todoElementId);
    if (!targetTodoIndex) return;

    this.todoElements = [
      ...this.TodoElements.slice(0, targetTodoIndex),
      ...this.TodoElements.slice(targetTodoIndex + 1),
    ];
  }

  /**
   * 할일을 모두 삭제합니다.
   */
  deleteTodoElementAll() {
    this.todoElements = [];
  }

  /**
   * 특정 할 일에 태그를 추가합니다.
   * @param {number} todoElementId - 할 일 아이디.
   * @param {string} content - 태그의 내용.
   */
  addTodoElementTag(todoElementId, content) {
    const targetTodo = this.todoElements.find((todo) => todo.id === todoElementId);
    if (!targetTodo) return;

    targetTodo.addTag(content);
  }

  /**
   * 특정 할 일의 특정 태그를 삭제합니다.
   * @param {number} todoElementId - 할 일 아이디.
   * @param {number} tagId - 태그의 내용.
   */
  deleteTodoElementTagByTagId(todoElementId, tagId) {
    const targetTodo = this.todoElements.find((todo) => todo.id === todoElementId);
    if (!targetTodo) return;

    targetTodo.deleteTagById(tagId);
  }

  /**
   * 특정 할 일의 특정 태그를 모두 삭제합니다.
   * @param {number} todoElementId - 할 일 아이디.
   */
  deleteTodoElementTagAll(todoElementId) {
    const targetTodo = this.todoElements.find((todo) => todo.id === todoElementId);
    if (!targetTodo) return;

    targetTodo.deleteTagAll();
  }
}

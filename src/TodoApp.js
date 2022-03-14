/**
 * @file 할 일을 목록을 관리하는 TodoApp 클래스
 * @author guymoon(조기문)
 */

/**
 * Manage the list of todo
 * @class
 * @classdesc 할 일을 목록을 관리하는 TodoApp 클래스
 */
class TodoApp {
  /**
   * @member - todo들이 모여있는 todoList
   * @type {Todo[]}
   */
  todoList;

  /**
   * unique id를 만드는 함수
   * @return {number} uniqueId
   */
  createUniqueId() {
    return this.todoList
                .map(todo => todo.data.id)
                .reduce((id1, id2) => Math.max(id1, id2), 0) + 1;
  }

  /**
   * todoList 에 todo을 추가하는 함수
   * @param {Todo} todo
   * @return {number} addedTodoId
   */
  addTodo(todo) {
    if (todo.data.content === '') return -1;
    this.todoList = [...this.todoList, todo];
    return todo.data.id;
  }

  /**
   * todoList에서 todo의 id 값을 이용해 todo를 제거
   * @param {number} todoId
   * @return {number} deletedTodoId - 지워진 todo의 id값
   */
  deleteTodoById(todoId) {
    const targetTodo = this.todoList.find(todo => todo.data.id === todoId);
    if (!targetTodo) return -1;

    this.todoList = this.todoList
                        .filter(todo => todo.data.id !== todoId);
    return targetTodo.data.id
  }

  /**
   * todoList에 있는 모든 todo를 지움
   * @return {boolean} isTodoListEmpty - todoList의 배열의 길이가 0인지 확인하는 값
   */
  clearTodoList() {
    this.todoList = [];
    return this.todoList.length === 0 ? true : false;
  }

  /**
   * todoList에 todo의 id 값을 이용해 todo의 content를 수정
   * @param {number} idToMutateTodo
   * @param {string} newContent
   * @return {number} mutatedTodoId - mutate된 todo의 id 값
   */
  mutateTodoContentById(idToMutateTodo, newContent) {
    const targetIndex = this.todoList.findIndex(
      (todo) => todo.info.id === idToMutateTodo
    );

    if (targetIndex === -1) return -1;

    this.todoList[targetIndex].info.content = newContent;

    return idToMutateTodo;
  }

  /**
   * todoList에 todo의 id 값을 이용해 todo의 isDone 값을 변경(true or false)
   * @param {number} idToMutateTodo
   * @return {number} idToMutatedTodo - isDone 값이 변경된 todo의 id 값
   */
  mutateTodoStatusById(idToMutateTodo) {
    const targetIndex = this.todoList.findIndex(
      (todo) => todo.info.id === idToMutateTodo
    );

    if (targetIndex === -1) return -1;

    const prevStatus = this.todoList[targetIndex].info.isDone;

    this.todoList[targetIndex].info.isDone = !prevStatus;

    return idToMutateTodo;
  }

  /**
   * todo의 id 값을 이용해 todo에 label을 추가
   * @param {number} targetTodoId - label을 추가 할 todo의 id
   * @param {string} newLabelContent - 새로 추가 할 label 내용
   * @return {number} deletedTodoId - 삭제된 todo의 id 값
   */
  addTodoLabelByTodoId(targetTodoId, newLabelContent) {
    if (newLabelContent === '') return -1;

    const targetTodo = this.todoList.find(todo => todo.data.id === targetTodoId);
    if (!targetTodo) return -1;


    this.todoList = this.todoList.map(todo => {
      if (todo.data.id === targetTodoId) {
        const uniqueLabelId = todo.data.labels
                                .map(label => label.data.id)
                                .reduce((id1, id2) => Math.max(id1, id2), 0) + 1;
        todo.labels = [...todo.data.labels, new Label(uniqueLabelId, newLabelContent)]; 
      }
      return todo;
    });

    return this.todoList
                .find(todo => todo.data.id === targetTodoId)
                  .data.labels
                  .findLast(label => label).data.id;
  }

  /**
   * todo에서 label의 id값을 이용해 todo에 label 제거
   * @param {number} targetTodoId - label을 제거 할 todo의 id값
   * @param {number} idToDeleteLabel - 삭제 할 label의 id 값
   * @return {number} deletedLabelId - 삭제된 label의 id 값
   */
  deleteTodoLabelByLabelId(targetTodoId, idToDeleteLabel) {
    const targetTodo = this.todoList.find(todo => todo.data.id === targetTodoId);
    if (!targetTodo) return -1;

    const deleteLabel = targetTodo.data.labels.find(label => label.data.id === idToDeleteLabel);
    if (!deleteLabel) return -1;

    this.todoList = this.todoList.map(todo => {
      if (todo.data.id === targetTodoId) {
        todo.labels 
          = todo.data.labels
            .filter(label => label.data.id !== idToDeleteLabel);
      }
      return todo;
    });

    return deleteLabel.data.id;
  }

}

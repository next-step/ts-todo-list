/**
 * @file 할 일을 목록을 관리하는 TodoApp 클래스
 * @author guymoon(조기문)
 */

 import { Todo } from "./Todo.js";
// import { Label } from "./Label.js";

/**
 * Manage the list of todo
 * @class
 * @classdesc 할 일을 목록을 관리하는 TodoApp 클래스
 */
export class TodoApp {
  /**
   * @member - todo들이 모여있는 todoList
   * @type {Todo[]}
   */
  todoList: Todo[] = [];

  /**
   * unique id를 만드는 함수
   * @return {number} uniqueId
   */
  createUniqueId(): TodoData["id"] {
    return this.todoList
                .map(todo => todo.info.id)
                .reduce((id1, id2) => Math.max(id1, id2), 0) + 1;
  }

  /**
   * todoList 에 todo을 추가하는 함수
   * @param {Todo} todo
   * @return {number} addedTodoId
   */
  addTodo(todo: Todo): TodoData["id"] | -1{
    if (todo.info.content === '') return -1;
    this.todoList = [...this.todoList, todo];
    return todo.info.id;
  }

  /**
   * todoList에서 todo의 id 값을 이용해 todo를 제거
   * @param {number} todoId
   * @return {number} deletedTodoId - 지워진 todo의 id값
   */
  deleteTodoById(todoId: TodoData["id"]): TodoData["id"] | -1 {
    const targetTodo = this.todoList.find(todo => todo.info.id === todoId);
    if (!targetTodo) return -1;

    this.todoList = this.todoList
                        .filter(todo => todo.info.id !== todoId);
    return targetTodo.info.id
  }

  /**
   * todoList에 있는 모든 todo를 지움
   * @return {boolean} isTodoListEmpty - todoList의 배열의 길이가 0인지 확인하는 값
   */
  clearTodoList(): boolean {
    this.todoList = [];
    return this.todoList.length === 0 ? true : false;
  }

  /**
   * todoList에 todo의 id 값을 이용해 todo의 content를 수정
   * @param {number} idToMutateTodo
   * @param {string} newContent
   * @return {number} mutatedTodoId - mutate된 todo의 id 값
   */
  mutateTodoContentById(idToMutateTodo: TodoData["id"], newContent: TodoData["content"]): TodoData["id"] | -1 {
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
  mutateTodoStatusById(idToMutateTodo: TodoData["id"]): TodoData["id"] | -1 {
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
   * @param {newLabel} newLabel - 새로 추가 할 label 내용
   * @return {number} deletedTodoId - 추가된 todo의 id 값
   */
  addTodoLabelByTodoId(targetTodoId: TodoData["id"], newLabel: Label): TodoData["id"] | -1 {
    const targetTodo = this.todoList.find(todo => todo.info.id === targetTodoId);
    if (!targetTodo) return -1;

    this.todoList = this.todoList.map(todo => {
      if (todo.info.id === targetTodoId) {
        todo.labels = [...todo.info.labels, newLabel];
      }
      return todo;
    });
    
    return targetTodo.info.id;
  }

  /**
   * todo에서 label의 id값을 이용해 todo에 label 제거
   * @param {number} targetTodoId - label을 제거 할 todo의 id값
   * @param {number} idToDeleteLabel - 삭제 할 label의 id 값
   * @return {number} deletedLabelId - 삭제된 label의 id 값
   */
  deleteTodoLabelByLabelId(targetTodoId: LabelData["id"], idToDeleteLabel: LabelData["id"]): LabelData["id"] | -1 {
    const targetTodo = this.todoList.find(todo => todo.info.id === targetTodoId);
    if (!targetTodo) return -1;

    const deleteLabel = targetTodo.info.labels.find(label => label.info.id === idToDeleteLabel);
    if (!deleteLabel) return -1;

    this.todoList = this.todoList.map(todo => {
      if (todo.info.id === targetTodoId) {
        todo.labels 
          = todo.info.labels
            .filter(label => label.info.id !== idToDeleteLabel);
      }
      return todo;
    });

    return deleteLabel.info.id;
  }

}

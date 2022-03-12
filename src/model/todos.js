import Todo from "./todo.js";
import Category from "./category";
import Tag from "./tag.js";
import { isDuplicated } from "../utils.js";

export default class Todos {
  /**
   * @constructor
   * @param {Todo[]} [initTodos=[]] - 초기의 todoList
   */
  constructor(initTodos = []) {
    this.todos = initTodos;
  }

  /**
   * 새로운 할 일을 추가한다.
   * @param {string} newTitle - 새로 추가할 todo의 내용
   */
  addTodo(newTitle) {
    const isDuplicatedName = isDuplicated(
      newTitle,
      this.todos?.map((todo) => todo.title)
    );
    if (isDuplicatedName) return;

    this.todos = [
      ...this.todos,
      new Todo({
        id: this.todos.length++,
        title: newTitle,
        isFinished: false,
        category: new Category({ id: 1, name: "카테고리1" }),
        tags: [],
      }),
    ];
  }

  /**
   * 모든 할일 목록을 조회한다.
   * @returns {Todo[]} - 전체 할일 목록을 반환한다.
   */
  getAllTodos() {
    return this.todos;
  }

  /**
   * 특정 id를 받아서 할일을 조회한다.
   * @param {number} targetId - 찾는 todo의 id
   * @returns {Todo} - 해당 id에 해당하는 todo 항목을 반환한다.
   */
  getTodo(id) {
    return this.todos.find((todo) => todo.id === id);
  }

  /**
   * 할일 제목을 수정한다.
   * @param {number} id - 타겟 todo id
   * @param {string} updatedTitle - 바꾸고 싶은 내용
   */
  updateTodoTitle(id, updatedTitle) {
    const targetTodo = this.todos.find((todo) => todo.id === id);

    targetTodo.updateTitle(updatedTitle);
  }

  /**
   * 할일 카테고리를 수정한다.
   * @param {number} id - 타겟 todo id
   * @param {string} categoryName - 바꾸고 싶은 카테고리 내용
   */
  updateTodoCategory(id, categoryName) {
    const targetTodo = this.todos.find((todo) => todo.id === id);

    // Todo class는 category 객체를 받고 있는데, 여기서는 이름만 넘겨주고 있음..
    targetTodo.updateCategory(categoryName);
  }

  /**
   * 할일 태그를 수정한다.
   * @param {number} id - 타겟 todo id
   * @param {Tag[]} tagName - 바꾸고 싶은 태그 내용
   */
  updateTodoTags(id, tagName) {
    const targetTodo = this.todos.find((todo) => todo.id === id);

    // Todo class는 tags 객체를 받고 있는데, 여기서는 이름만 넘겨주고 있음..
    // 어떤 태그를 바꾸고 싶은지에 대한 것도 없음
    targetTodo.updateTags(tagName);
  }

  /**
   * 특정 todo를 삭제한다.
   * @param {number} deleteTargetId - 삭제할 타겟 todo
   */
  deleteTodo(deleteTargetId) {
    const targetTodoIndex = this.todos.findIndex((todo) => todo.id === deleteTargetId);

    this.todos = [...this.todos.slice(0, targetTodoIndex), ...this.todos.slice(targetTodoIndex + 1)];
  }

  /**
   * 모든 할 일을 삭제한다.
   */
  deleteAllTodos() {
    this.todos = [];
  }

  /**
   * 특정 할 일에 태그를 추가한다.
   * @param {number} id - 추가하고자하는 타겟 todo id
   * @param {string} tagName - 추가하고 싶은 tag 이름.
   */
  addTagTodo(id, tagName) {
    const targetTodo = this.todos.find((todo) => todo.id === id);
    const newTag = new Tag(tagName);

    // 태그를 추가할 수 없음
  }

  /**
   * 특정 할 일의 완료 상태를 변경한다.
   * @param {number} todoId - 타겟 todo id
   */
  toggleTodoFinished(id) {
    const targetTodo = this.todos.find((todo) => todo.id === id);
    targetTodo.isFinished();
  }

  /**
   * todo의 특정 태그를 삭제한다.
   * @param {number} todoId - 타겟 todo id
   * @param {string} tag - 삭제할 태그명
   */
  removeToodoTag(todoId, tagName) {
    const targetTodo = this.todos.find((todo) => todo.id === id);
    targetTodo.isFinished();

    // 태그를 삭제할 수 없음.
  }

  /**
   * todo의 모든 태그를 삭제한다.
   * @param {number} todoId - 타겟 todo id
   */
  removeAllTags(todoId) {
    const targetTodo = this.todos.find((todo) => todo.id === id);
    targetTodo.tags = [];
  }
}

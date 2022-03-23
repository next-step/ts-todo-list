import { todoList } from "./todoData.js";

export default class TodoApp {
  /** @constructs TodoApp */
  /**
   * @member this.todoList todoData.js의 todoList 배열이 서버에 저장된 데이터라 가정하고 진행합니다.
   * */
  constructor() {
    this.todoList = todoList;
  }

  /**
   * @return this.todoList
   * 전체 Todo List를 조회합니다.
   * */
  getTodoList() {
    return this.todoList;
  }

  /**
   * @param {import("./todoData").Todo} newTodo 추가할 할 일
   * this.todoList에 새로운 할 일을 추가합니다.
   * */
  addTodo(newTodo) {
    if (!this.validateNewTodo(newTodo)) {
      console.log("추가할 Todo의 내용을 채워주세요.");
    }

    this.todoList.push(this.createNewTodo());
  }

  /**
   * @return {boolean}
   * 새 할 일에 내용이 있으면 true, 없으면 false를 리턴합니다.
   * */
  validateNewTodo(newTodo) {
    if (newTodo.content !== "") return true;

    return false;
  }

  /**
   * @return {number} 호출할 때마다 겹치지 않는 숫자 타입의 고유한 id를 리턴합니다.
   * */
  createTodoId() {
    return Math.floor(Math.random() * 1000);
  }

  createNewTodo() {
    return {
      id: this.createTodoId(),
      content: "버그픽스",
      isCompleted: false,
      category: "work",
      tags: ["work", "sad"],
    };
  }

  /**
   * @param {number} id
   * @return {import("./todoData").Todo}
   *
   * id를 기반으로 todo를 검색합니다. id와 맞는 todo가 있을 경우 해당 todo 객체를 리턴하고, 없는 경우 에러 메시지를 출력합니다.
   * */
  searchTodo(id) {
    const targetTodo = this.todoList.find((todo) => todo.id === id);

    if (!targetTodo) {
      console.log("찾는 todo가 없어용");
    }
    return targetTodo;
  }

  /**
   * todo를 모두 삭제합니다.
   * */
  clearTodoList() {
    this.todoList = [];
  }
}

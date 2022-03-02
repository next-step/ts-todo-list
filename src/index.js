/**
 * 하나의 Todo가 들고 있는 데이터
 * @typedef {Object} TodoType
 * @property {number} id
 * @property {string} task
 * @property {boolean} done
 */

/**
 * Todo 클래스에서 사용되는 상태
 * @typedef {Object} StateType
 * @property {number} newId - todo를 생성할 때 필요한 unique id
 * @property {string} task - todo를 생성할 때 필요한 할일
 * @property {TodoType[]} todos - 생성된 todo를 관리하는 배열
 */

class Todo {
  /**
   * @member {StateType}
   */
  state;

  /**
   * @param {StateType} initialState - Todo 상태의 초기값
   */
  constructor(initialState) {}

  /**
   * @returns {TodoType[]}
   */
  get todos() {}

  /**
   * @param {string} newTask - 뱐경할 task 값
   */
  changeTask(newTask) {}

  addTodo() {}

  /**
   * @param {number} id - 삭제할 todo id 값
   */
  deleteToto(id) {}

  /**
   * @param {number} id - 변경할 todo id 값
   * @param {string} changedTask - 변경할 todo task 값
   */
  changeTodo({ id, changedTask }) {}

  /**
   * @param {number} id - 변경할 todo id 값
   */
  checkTodo(id) {}
}

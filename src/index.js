/**
 * @typedef {Object} TodoType
 * @property {number} id
 * @property {string} task
 * @property {boolean} done
 */

/**
 * @typedef {Object} StateType
 * @property {number} newId
 * @property {string} task
 * @property {TodoType[]} todos
 */

class Todo {
  /**
   * @member {StateType}
   */
  state;

  /**
   * @param {StateType} initialState
   */
  constructor(initialState) {}

  /**
   * @returns {TodoType[]}
   */
  get todos() {}

  /**
   * @param {string} newTask input에 입력되는 value
   */
  changeTask(newTask) {}

  addTodo() {}

  /**
   * @param {number} id
   */
  deleteToto(id) {}

  /**
   * @param {number} id
   * @param {string} changedTask
   */
  changeTodo({ id, changedTask }) {}

  /**
   * @param {number} id
   */
  checkTodo(id) {}
}

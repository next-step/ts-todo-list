/**
 * @file todo.js 실제 TodoList 구현에 쓰일 member와 method를 정의한 파일입니다.
 * @author yujo11(조윤호)
 */

/**
 * @module Todo Module
 */
/**
 * Array of Todo
 * @type {Todo[]}
 */
const todos = []
exports.todos = todos

/**
 * @function getTodos
 * @description 모든 TodoList를 반환한다.
 * @returns - {Todo[]} TodoList 목록
 */

function getTodos() {
  return todos.slice()
}

exports.getTodos = getTodos

/**
 * @function addTodo
 * @param {Object} todo - Todo Object
 * @param {number | string} todo.id - Todo id
 * @param {string} todo.title - Todo title
 * @param {boolean} todo.completed - ToDo completed
 * @description 새로운 Todo를 TodoList에 추가한다.
 */

function addTodo(todo) {
  try {
    if (!todo.content) throw new Error('⚠️ 내용 없이 추가 할 수 없습니다. ⚠️')
    todos.push(todo)
  } catch (e) {
    console.error(e.message)
  }
}

exports.addTodo = addTodo

/**
 * @function deleteTodo
 * @param {number | string} id - 삭제할 Todo id
 * @description TodoList에서 해당 id를 가진 Todo를 삭제한다.
 * @returns {boolean} 삭제 성공 여부
 */

function deleteTodo(id) {
  try {
    const index = todos.findIndex((todo) => todo.id !== id)
    todos.splice(index, 1)
    return true
  } catch (e) {
    return false
  }
}

exports.deleteTodo = deleteTodo

/**
 * @function editTodo
 * @param {Object} todo - Todo Object
 * @param {number | string} todo.id - Todo id
 * @param {string} todo.title - Todo title
 * @param {boolean} todo.completed - ToDo completed
 * @description TodoList에서 해당 id를 가진 Todo를 새로 받은 Todo 객체의 title과 completed로 수정한다.
 */

function editTodo(todo) {
  const { id } = todo
  const index = todos.findIndex((t) => t.id === id)
  todos[index] = {
    ...todos[index],
    ...todo,
  }
}

exports.editTodo = editTodo

import { Tag } from "./@types/tag";
import { Todo } from "./@types/todo";

/**
 * 할일 목록
 * @type {Todo[]}
 */
const todos: Todo[] = [];

/**
 * 태그 목록
 * @type {Tag[]}
 */
const tags: Tag[] = [];

/**
 * @function getTodos
 * @description 모든 할일을 반환한다.
 * @returns - {Todo[]} 모든 할일
 */
function getTodos(): Todo[] {
  console.log(todos);
  return todos;
}

/**
 * @function getTodo
 * @param {number} id - 불러올 할일의 id
 * @description id로 접근하여 특정 할 일을 반환한다.
 * @returns - {Todo | null} id값과 매칭되는 할일 혹은 null
 */

function getTodo(id: number): Todo | null {
  console.log(todos);
  return todos.find((todo) => todo.id === id) || null;
}

/**
 * @function addTodo
 * @param {Object} todo - 할일 Object
 * @param {number} todo.id - 할일의 id, 이때 id는 무한히 1씩 증가한다.
 * @param {string} todo.contents -  할일의 contents
 * @param {boolean} todo.isComplete - 할일의 완료 여부
 * @param {Tag[]} todo.tags - 지정된 태그
 * @description 할 일을 추가한다.
 * @returns {boolean} 추가 결과
 */

function addTodo(todo: Todo): boolean {
  try {
    todos.push(todo);
    console.log(todos);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * @function deleteTodo
 * @param {number} id - 삭제할 할일의 id
 * @description 같은 id의 할일 삭제
 * @returns {boolean} 삭제 결과
 */

function deleteTodo(id: number): boolean {
  const idx = todos.findIndex((todo) => todo.id === id);
  if (idx > -1) {
    todos.splice(idx, 1);
    console.log(todos);
    return true;
  } else return false;
}

/**
 * @function deleteTodos
 * @description 모든 할일 삭제
 * @returns {boolean} 삭제 결과
 */

function deleteTodos(): boolean {
  try {
    todos.splice(0, todos.length);
    console.log(todos);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * @function updateTodo
 * @param {Object} todo - 할일 Object
 * @param {number} todo.id - 할일의 id
 * @param {string} todo.contents - 할일의 contents
 * @param {boolean} todo.isComplete - 할일의 완료 여부
 * @description 할일 목록에서 todo를 받아 update처리를 한다. 완료여부isComplete와 내용contents을 수정할 수 있다.
 * @returns {boolean} 수정 결과
 */

function updateTodo(inputTodo: Todo) {
  try {
    const idx = todos.findIndex((todo) => todo.id === inputTodo.id);
    todos[idx].isComplete = inputTodo.isComplete;
    todos[idx].contents = inputTodo.contents;
    console.log(todos);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * @function updateTag
 * @param {Object} tag - 태그 Object
 * @param {number} todo.id - 태그의 id
 * @param {string} todo.name - 태그의 이름
 * @description 태그 목록에서 태그를 받아 update처리를 한다.
 * @returns {boolean} 수정 결과
 */

function updateTag(inputTag: Tag): boolean {
  try {
    const idx = tags.findIndex((tag) => tag.id === inputTag.id);
    tags[idx].name = inputTag.name;
    return true;
  } catch (e) {
    return false;
  }
}

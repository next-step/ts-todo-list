/**
 * 할 일 데이터 내용(객체)
 * @type {{id:number, text: string, done:boolean, category:string, tags:string[]}}
 */
const todo = {};

/**
 * 할 일 목록
 * @type {todo[]}
 */
const todos = [];

/**increase id
 * @function increaseId
 * @description 할일의 id를 +1 증가 시킨다.
 * @return - +1 증가시킨 id 값
 */

/**create Todo
 * @function createTodo
 * @description 할 일을 추가한다.
 * @param {object} todo - 할 일(객체)
 * @todo 내용이 없다면 할 일을 추가할 수 없다.
 * @todo 할 일을 추가하면 할 일의 id를 증가시킨다.
 */

/**read Todos
 * @function getTodos
 * @description 모든 할 일을 조회할 수 있다.
 * @return - 전체 Todo[] 목록
 */

/**
 * @function getTodos
 * @description ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {number} id - 조회할 특정 할 일 id
 * @return - 조회한 Todo[]
 */

/**update Todo
 * @function updateTodo
 * @description ID를 제외한 모든 속성을 수정할 수 있다.
 * @param {number} id - 수정할 할 일 id
 * @return - 수정 후 Todo[] 목록
 */

/**
 * @function updateTag
 * @description 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {number} id - 수정할 태그의 특정 할 일 id
 * @param {string} tag - 수정할 태그
 */

/**delete Todo
 * @function deleteAll
 * @description 모든 할 일을 제거할 수 있다.
 */

/**
 * @function deleteTodo
 * @description ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param {number} id - 삭제할 할 일 id
 */

/**
 * @function deleteTags
 * @description 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {number} id - 삭제할 태그의 특정 할 일 id
 */

/**
 * @function deleteTag
 * @description 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @param {number} id - 삭제할 태그의 특정 할 일 id
 * @param {string} tag - 삭제할 태그
 *
 */

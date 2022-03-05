/**
 * @typedef Tag
 * @type {object}
 * @property {number} id - id.
 * @property {string} name - 내용.
 */

/**
 * @typedef Todo
 * @type {object}
 * @property {number} id - id
 * @property {string} content - 내용.
 * @property {boolean} check - 완료 여부.
 * @property {boolean} category - 카테고리.
 * @property {Tag[]} tags - 태그들.
 */

/** 
 * @type {Todo[]} 
 * @default []
* */
let todos;

/**
 * @returns {Todo[]}
 */
 function getTodos() {
    
}

/**
 * @param {id} id - 가져올 Todo id
 * @returns {Todo}
 */
 function getTodo(id) {
    
}

/**
 * @param {string} content - 생성할 Todo 내용
 */
function createTodo(content) {
    
}

/**
 * @param {string} id - 업데이트할 Todo id
 * @param {string} content - 업데이트할 Todo 내용
 */
function updateTodo({id, content}) {
    
}

/**
 * @param {string} id - 업데이트할 Todo id
 * @param {string} content - 업데이트할 Todo 내용
 */
 function updateTodoContent({id, content}) {
    
}

/**
 * @param {number} todoId - 업데이트할 Todo id
 * @param {number} tagId - 업데이트할 Tag id
 * @param {string} name - 업데이트할 Tag 내용
 */
 function updateTodoTag({todoId, tagId, name}) {
    
}

/**
 * @param {number} id - 삭제할 Todo id
 */
function deleteTodo(id) {
    
}

function deleteAllTodo() {
    
}

/**
 * @param {number} todoId - 삭제할 Tag가 속한 Todo id
 * @param {number} tagId - 삭제할 Todo id
 */
 function deleteTodoTag({todoId, tagId}) {
    
}

/**
 * @param {number} todoId - 삭제할 모든 Tag가 속한 Todo id
 */
 function deleteAllTag(todoId) {
    
}


/**
 * @param {string} id - 완료할 Todo id
 */
function completeTodo(id) {
    
}
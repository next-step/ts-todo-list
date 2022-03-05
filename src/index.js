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
 */
let todos = [];

/**
 * @returns {Todo[]}
 */
function getTodos() {
  console.log("현재 모든 todo 출력");
  console.table(todos);
}

/**
 * @param {id} id - 가져올 Todo id
 * @returns {Todo}
 */
function getTodo(id) {
  const todo = todos.filter((todo) => todo.id === id);

  console.log(`id:${id} todo 출력 완료`);
  console.table(todo);
}

/**
 * @param {string} content - 생성할 Todo 내용
 */
function createTodo(content) {
  const tag = [
    {
      id: Math.floor(Math.random() * 1000),
      name: `tag${Math.floor(Math.random() * 10)}`,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: `tag${Math.floor(Math.random() * 10)}`,
    },
  ];
  const todo = {
    id: Math.floor(Math.random() * 1000),
    content: content,
    check: false,
    category: `category${Math.floor(Math.random() * 10)}`,
    tags: tag,
  };

  todos.push(todo);

  console.log("새로운 todo 추가 완료");
  console.table(todos);
}

/**
 * @param {string} id - 업데이트할 Todo id
 * @param {string} content - 업데이트할 Todo 내용
 */
function updateTodo({ id, content }) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, content: content } : todo
  );
  console.log(`id:${id} todo 수정 완료`);
  console.table(todos);
}

/**
 * @param {string} id - 업데이트할 Todo id
 * @param {string} content - 업데이트할 Todo 내용
 */
function updateTodoContent({ id, content }) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, content: content } : todo
  );
  console.log(`id:${id} todo 수정 완료`);
  console.table(todos);
}

/**
 * @param {number} todoId - 업데이트할 Todo id
 * @param {number} tagId - 업데이트할 Tag id
 * @param {string} name - 업데이트할 Tag 내용
 */
function updateTodoTag({ todoId, tagId, name }) {
  const tag = todos
    .find((todo) => todo.id === todoId)
    .tags.map((tag) => (tag.id === tagId ? { ...tag, name: name } : tag));

  todos = todos.map((todo) =>
    todo.id === todoId && todo.tags.id === tagId ? { ...todo, tags: tag } : todo
  );

  console.log(`id:${todoId} tag 수정 완료`);
  console.table(todos);
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
    
}createTodo("저거 해야지");
updateTodo({ id: todos[0].id, content: "todo 수정 했음" });
updateTodoTag({
  todoId: todos[0].id,
  tagId: todos[0].tags[0].id,
  name: "tag수정 했음",
});
getTodos();
getTodo(todos[0].id);


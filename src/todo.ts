interface ITodo {
  id: number;
  text: string;
  done: boolean;
  category?: string;
  tags?: string[];
}

/**
 * 할 일 데이터 내용(객체)
 * @type {{id:number, text: string, done:boolean, category:string, tags:string[]}}
 */
const todo = {};

let currentId = 1;

/**
 * 할 일 목록
 * @type {todo[]}
 */
let todos: ITodo[] = [];

/**increase id
 * @function increaseId
 * @description 할일의 id를 +1 증가 시킨다.
 * @return - +1 증가시킨 id 값
 */

function increaseId(): number {
  currentId += 1;

  return currentId;
}

/**create Todo
 * @function createTodo
 * @description 할 일을 추가한다.
 * @param {object} todo - 할 일(객체)
 * @todo 내용이 없다면 할 일을 추가할 수 없다.
 * @todo 할 일을 추가하면 할 일의 id를 증가시킨다.
 */
function createTodo(todo: ITodo): void {
  if (!todo) {
    return;
  }

  todos.push(todo);

  increaseId();
}

/**read Todos
 * @function getTodos
 * @description 모든 할 일을 조회할 수 있다.
 * @return - 전체 Todo[] 목록
 */
function getTodos(): ITodo[] {
  return todos;
}

/**
 * @function getTodos
 * @description ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {number} id - 조회할 특정 할 일 id
 * @return - 조회한 Todo[]
 */
function getTodo(id: number): ITodo | undefined {
  return todos.find((todo) => todo.id === id);
}

/**update Todo
 * @function updateTodo
 * @description ID를 제외한 모든 속성을 수정할 수 있다.
 * @param {number} id - 수정할 할 일 id
 * @return - 수정 후 Todo[] 목록
 */

function updateTodo(id: number, changeText: string): ITodo[] {
  const newTodo = {
    id,
    text: changeText,
    done: false,
    category: "개인",
    tags: ["tag1", "tag2"],
  };

  todos = todos.map((todo) => (id === todo.id ? newTodo : todo));

  return todos;
}

/**
 * @function updateTag
 * @description 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {number} id - 수정할 태그의 특정 할 일 id
 * @param {string} tag - 수정할 태그
 */
function updateTag(id: number, targetTag: string, changeTag: string): ITodo[] {
  const targetTodo: ITodo | undefined = todos.find((todo) => todo.id === id);
  const tags: string[] | undefined = targetTodo?.tags?.map((tag) =>
    tag === targetTag ? changeTag : targetTag
  );

  todos = todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          tags,
        }
      : todo
  );

  return todos;
}

/**delete Todo
 * @function deleteAll
 * @description 모든 할 일을 제거할 수 있다.
 */
function deleteAll(): ITodo[] {
  todos = [];

  return todos;
}

/**
 * @function deleteTodo
 * @description ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param {number} id - 삭제할 할 일 id
 */
function deleteTodo(id: number): void {
  todos.filter((todo) => todo.id !== id);
}

/**
 * @function deleteTags
 * @description 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {number} id - 삭제할 태그의 특정 할 일 id
 */
function deleteTags(id: number): ITodo[] {
  todos = todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          tags: [],
        }
      : todo
  );

  return todos;
}

/**
 * @function deleteTag
 * @description 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @param {number} id - 삭제할 태그의 특정 할 일 id
 * @param {string} tag - 삭제할 태그
 *
 */
function deleteTag(id: number, tag: string): ITodo[] {
  const targetTodo: ITodo | undefined = todos.find((todo) => todo.id === id);
  const tags: string[] | undefined = targetTodo?.tags?.filter(
    (targetTag) => targetTag !== tag
  );

  todos = todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          tags,
        }
      : todo
  );

  return todos;
}

// test
console.log({ todos });

createTodo({
  id: currentId,
  text: "룰루",
  done: false,
  category: "개인",
  tags: ["tag1", "tag2"],
});

createTodo({
  id: currentId,
  text: "룰루",
  done: false,
  category: "회사",
  tags: ["tag1", "tag2"],
});

console.log("getTodos ? ", getTodos());
console.log("getTodo 1 ? ", getTodo(1));

console.log("updateTodo 1 ? ", updateTodo(1, "변경한 내용"));
console.log("updateTag 1 ? ", updateTag(1, "tag1", "@@@변경한 태그 1"));
console.log("updateTag 2 ? ", updateTag(2, "tag2", "@@@변경한 태그 2"));

console.log("deleteTag ? ", deleteTag(2, "@@@변경한 태그 2"));
console.log("deleteTags ? ", deleteTags(1));

console.log(deleteAll());
export {
  todos,
  currentId,
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  updateTag,
  deleteAll,
  deleteTodo,
  deleteTags,
  deleteTag,
};

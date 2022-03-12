import { TodoList } from "todoModule";

/**
 * 하나의 SingleTodo 객체가 가지는 Property들 입니다.
 * @typedef {Object} SingleTodoType
 * @property {number} id - todo의 unique한 id입니다.
 * @property {string} content - todo의 task 내용입니다.
 * @property {string} category - study, work 등으로 분류할 수 있는 todo의 category입니다.
 * @property {boolean} [isCompleted=false] - todo 완료 여부를 나타내는 Boolean값입니다. 기본값은 false입니다.
 * @property {string[]=} tags - todo를 설명하는 tag들입니다. category 혹은 중요도 등을 포함할 수 있습니다.
 */

/**
 * SingleTodo들을 담은 todoList 배열입니다.
 * @property {SingleTodoType[]} todoList
 */
const todoList: TodoList = [];

/**
 * @function addTodo
 * @param {SingleTodoType} newTodo
 * @description CRUD에서 C에 해당하는 함수입니다. todoList 배열에 새로운 newTodo 객체를 추가합니다. 리턴값은 없습니다.
 */
function addTodo(newTodo) {
  todoList.push(newTodo);
  console.log("=== [CREATE] 새로운 할 일이 추가되었습니다. ===");
  console.log(`👇 현재 Todo list 모두 보기 (총 ${todoList.length}개)`);
  console.log(JSON.stringify(todoList, null, 2));
  console.log("");
}

/**
 * @function readTodo
 * @param {number=} id
 * @description CRUD에서 R에 해당하는 함수입니다. param id가 있을 경우 id에 해당하는 특정 todo를 찾아 반환합니다. param id가 없을 경우 모든 할일 목록을 반환합니다.
 * @returns SingleTodoType[] | SingleTodo
 */
function readTodo(id) {
  if (id) {
    const targetTodo = todoList.find((todo) => todo.id === id);
    console.log(`=== [READ] ID가 ${id}인 할 일을 읽습니다. ===`);
    console.log(`👇 ID가 ${id}인 할 일`);
    console.log(targetTodo);
    console.log("");

    return targetTodo;
  }
  console.log("=== [READ] 모든 할 일을 읽습니다. ===");
  console.log(`👇 모든 할 일 (총 ${todoList.length}개)`);
  console.log(JSON.stringify(todoList, null, 2));
  console.log("");

  return todoList;
}

/**
 * @function editTodo
 * @param {number} id
 * @param {string=} content
 * @param {string=} category
 * @param {boolean=} isCompleted
 * @param {string[]=} tags
 * @description CRUD에서 U에 해당하는 함수입니다. 수정하고자 하는 todo의 id와 수정하고자 하는 내용을 optional로 받아 전체 todoList에서 해당 todo의 특정 필드만 수정합니다. 리턴값은 없습니다.
 */
function editTodo(id, content, category, isCompleted, tags) {
  const targetTodo = todoList.find((todo) => todo.id === id);
  const targetTodoIndex = todoList.findIndex((todo) => todo.id === id);
  const paramObj = { id, content, category, isCompleted, tags };
  const willUpdateFields = {};

  for (const param in paramObj) {
    if (paramObj[param]) {
      willUpdateFields[param] = paramObj[param];
    }
  }

  const todoAfterEdit = { ...targetTodo, ...willUpdateFields };
  todoList[targetTodoIndex] = todoAfterEdit; // todoList 배열 업데이트

  console.log(`=== [UPDATE] ID ${id}인 할 일의 내용을 수정합니다. ===`);
  console.log(`👇 수정된 할 일 (ID: ${id})`);
  console.log(todoAfterEdit);
  console.log("");
}

/**
 * @function deleteTodo
 * @param {number} id
 * @description CRUD에서 D에 해당하는 함수입니다. 삭제하고자 하는 todo의 id를 받아, todoList에서 그 todo를 삭제합니다. 리턴값은 없습니다.
 */
function deleteTodo(id) {
  const targetTodoIndex = todoList.findIndex((todo) => todo.id === id);
  const temp = [];

  for (let i = todoList.length - 1; i >= 0; i--) {
    if (i > targetTodoIndex) {
      temp.push(todoList.pop());
    }
    if (i === targetTodoIndex) {
      todoList.pop();
      break;
    }
  }

  while (temp.length) {
    todoList.push(temp.pop());
  }

  console.log(`=== [DELETE] ID ${id}인 할 일을 삭제합니다. ===`);
  console.log(`👇 삭제 후 Todo list (총 ${todoList.length}개)`);
  console.log(JSON.stringify(todoList, null, 2));
  console.log("");
}

addTodo({
  id: 1,
  content: "todo 1",
  category: "과제",
  isCompleted: false,
  tags: ["태그1", "태그2"],
});
addTodo({
  id: 2,
  content: "todo 2",
  category: "과제",
  isCompleted: false,
  tags: ["태그1", "태그2"],
});

readTodo(1);
readTodo(); // 파라미터 없이 호출하면 모든 투두리스트 읽기

editTodo(1, "수정할 내용", "수정할 카테고리", true);

deleteTodo(1);

addTodo({
  id: 3,
  content: "치킨",
  category: "음식",
  isCompleted: false,
  tags: ["태그1", "태그2"],
});

editTodo(3, "", "", false, ["태그를 바꿀 때는 통째로 갈아끼워야 한다."]);

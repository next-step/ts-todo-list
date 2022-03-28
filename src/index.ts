import { SingleTodo, TodoList } from "todoModule";

/**
 * 하나의 SingleTodo 객체가 가지는 Property들 입니다.
 * @typedef {Object} SingleTodoType
 * @property {number} id - todo의 unique한 id입니다.
 * @property {string} content - todo의 task 내용입니다.
 * @property {string} category - study, work 등으로 분류할 수 있는 todo의 category입니다.
 * @property {boolean} [isCompleted=false] - todo 완료 여부를 나타내는 Boolean값입니다. 기본값은 false입니다.
 * @property {string[]=} tags - todo를 설명하는 tag들입니다. category 혹은 중요도 등을 포함할 수 있습니다.
 */

const $ = {
  inputId: document.querySelector('.input-id') as HTMLInputElement,
  inputContent: document.querySelector('.input-content') as HTMLInputElement,
  inputCategory: document.querySelector('.input-category') as HTMLInputElement,
  inputTags: document.querySelector('.input-tags') as HTMLInputElement,
  selectCompleted: document.querySelector('.select-completed') as HTMLSelectElement,
  addButton: document.querySelector('.add-button'),
  readButton: document.querySelector('.read-button'),
  editButton: document.querySelector('.edit-button'),
  deleteButton: document.querySelector('.delete-button'),
  todoList: document.querySelector('.todo-list'),
}

$.readButton!.addEventListener('click', () => readTodo(Number($.inputId!.value)));
$.addButton!.addEventListener('click', () => {
  const todo: SingleTodo = {
    id: Number($.inputId.value),
    content: $.inputContent.value,
    category: $.inputCategory.value,
    tags: $.inputTags.value ? $.inputTags.value.split(',') : undefined,
    isCompleted: false,
  }
  addTodo(todo);
})
$.deleteButton!.addEventListener('click', () => deleteTodo(Number($.inputId!.value)))
$.editButton!.addEventListener('click', () => {
  const idString = $.inputId.value
  const id = Number(idString)
  if (idString === '') {
    alert('수정할 할일의 id를 입력해주세요.')
    return;
  }
  const targetTodo = todoList.find((todo) => todo.id === id);

  if (!targetTodo) {
    alert('입력한 id에 맞는 할 일이 없습니다.')
    return;
  }

  const paramObj: EditTodoParams = {
    id,
    isCompleted: $.selectCompleted.options[$.selectCompleted.selectedIndex].value === 'true',
  }

  if ($.inputContent.value) {
    paramObj['content'] = $.inputContent.value
  }
  if ($.inputCategory.value) {
    paramObj['category'] = $.inputCategory.value
  }
  if ($.inputTags.value) {
    paramObj['tags'] = $.inputTags.value.split(',')
  }

  editTodo(paramObj);

  $.todoList!.innerHTML = todoList.reduce((acc, curr) => {
    return acc + `<li>id: ${curr.id} | content: ${curr.content} | category: ${curr.category} | tags: ${curr.tags ? curr.tags.join(', '): ''}  | isCompleted: ${curr.isCompleted}</li>`
  }, '');

  resetAllInput();
})

/**
 * SingleTodo들을 담은 todoList 배열입니다.
 * @property {SingleTodoType[]} todoList
 */
let todoList: TodoList = [
  {
    id: 1,
    content: '내용',
    category: '카테',
    isCompleted: false,
    tags: ['태그1', '태그2'],
  }
];

/**
 * @function addTodo
 * @param {SingleTodoType} newTodo
 * @description CRUD에서 C에 해당하는 함수입니다. todoList 배열에 새로운 newTodo 객체를 추가합니다. 리턴값은 없습니다.
 */
function addTodo(newTodo: SingleTodo) {
  todoList.push(newTodo);

  $.todoList!.innerHTML = todoList.reduce((acc, curr) => {
    return acc + `<li>id: ${curr.id} | content: ${curr.content} | category: ${curr.category} | tags: ${curr.tags ? curr.tags.join(', '): ''}</li>`
  }, '');

  resetAllInput();
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
function readTodo(id?: number) {
  if (id) {
    const targetTodo = todoList.find((todo) => todo.id === id);
    console.log(`=== [READ] ID가 ${id}인 할 일을 읽습니다. ===`);
    console.log(`👇 ID가 ${id}인 할 일`);
    console.log(targetTodo);
    console.log("");

    if(targetTodo) {
      $.todoList!.innerHTML = '';
      $.todoList!.insertAdjacentHTML('beforeend', `<li>id: ${id} | content: ${targetTodo.content} | category: ${targetTodo.category} | tags: ${targetTodo.tags ? targetTodo.tags.join(', ') : ''} | isCompleted: ${targetTodo.isCompleted}</li>`)
    } else {
      alert('입력한 id에 맞는 할 일이 없습니다.')
    }
    return targetTodo;
  }
  console.log("=== [READ] 모든 할 일을 읽습니다. ===");
  console.log(`👇 모든 할 일 (총 ${todoList.length}개)`);
  console.log(JSON.stringify(todoList, null, 2));
  console.log("");
  const todos = todoList.reduce((acc, curr) => {
    return acc + `<li>id: ${curr.id} | content: ${curr.content} | category: ${curr.category} | tags: ${curr.tags ? curr.tags.join(', '): ''} | isCompleted: ${curr.isCompleted}</li>`
  }, '')

  $.todoList!.innerHTML = todos;
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

type EditTodoParams = Pick<SingleTodo, 'id'> & Partial<Omit<SingleTodo, 'id'>>

function editTodo(paramObj: EditTodoParams) {
  const { id } = paramObj;
  const targetTodo = todoList.find((todo) => todo.id === id);
  const targetTodoIndex = todoList.findIndex((todo) => todo.id === id);

  if (!targetTodo) return;

  const todoAfterEdit: SingleTodo = { ...targetTodo, ...paramObj };
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
function deleteTodo(id: number) {
  const targetTodo = todoList.find((todo) => todo.id === id);

  if (!targetTodo) {
    alert('입력한 id에 해당하는 할 일이 없습니다.');
  }

  if (targetTodo) {
    todoList = todoList.filter(todo => todo.id !== id);

    $.todoList!.innerHTML = todoList.reduce((acc, curr) => {
      return acc + `<li>id: ${curr.id} | content: ${curr.content} | category: ${curr.category} | tags: ${curr.tags ? curr.tags.join(', '): ''}  | isCompleted: ${curr.isCompleted}</li>`
    }, '');
  }

  resetAllInput();

  console.log(`=== [DELETE] ID ${id}인 할 일을 삭제합니다. ===`);
  console.log(`👇 삭제 후 Todo list (총 ${todoList.length}개)`);
  console.log(JSON.stringify(todoList, null, 2));
  console.log("");
}

function resetAllInput() {
  $.inputId.value = '';
  $.inputContent.value = '';
  $.inputCategory.value = '';
  $.inputTags.value = '';
}

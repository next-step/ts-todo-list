import { SingleTodo, TodoList } from "todoModule";

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

let todoList: TodoList = [
  {
    id: 1,
    content: '내용',
    category: '카테',
    isCompleted: false,
    tags: ['태그1', '태그2'],
  }
];

function addTodo(newTodo: SingleTodo) {
  todoList.push(newTodo);

  $.todoList!.innerHTML = todoList.reduce((acc, curr) => {
    return acc + `<li>id: ${curr.id} | content: ${curr.content} | category: ${curr.category} | tags: ${curr.tags ? curr.tags.join(', '): ''}</li>`
  }, '');

  resetAllInput();
}

function readTodo(id?: number) {
  if (id) {
    const targetTodo = todoList.find((todo) => todo.id === id);

    if(targetTodo) {
      $.todoList!.innerHTML = '';
      $.todoList!.insertAdjacentHTML('beforeend', `<li>id: ${id} | content: ${targetTodo.content} | category: ${targetTodo.category} | tags: ${targetTodo.tags ? targetTodo.tags.join(', ') : ''} | isCompleted: ${targetTodo.isCompleted}</li>`)
    } else {
      alert('입력한 id에 맞는 할 일이 없습니다.')
    }
    return targetTodo;
  }

  const todos = todoList.reduce((acc, curr) => {
    return acc + `<li>id: ${curr.id} | content: ${curr.content} | category: ${curr.category} | tags: ${curr.tags ? curr.tags.join(', '): ''} | isCompleted: ${curr.isCompleted}</li>`
  }, '')

  $.todoList!.innerHTML = todos;
  return todoList;
}

type EditTodoParams = Pick<SingleTodo, 'id'> & Partial<Omit<SingleTodo, 'id'>>

function editTodo(paramObj: EditTodoParams) {
  const { id } = paramObj;
  const targetTodo = todoList.find((todo) => todo.id === id);
  const targetTodoIndex = todoList.findIndex((todo) => todo.id === id);

  if (!targetTodo) return;

  const todoAfterEdit: SingleTodo = { ...targetTodo, ...paramObj };
  todoList[targetTodoIndex] = todoAfterEdit; // todoList 배열 업데이트
}

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
}

function resetAllInput() {
  $.inputId.value = '';
  $.inputContent.value = '';
  $.inputCategory.value = '';
  $.inputTags.value = '';
}

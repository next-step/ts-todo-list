import { SingleTodo, TodoList } from "./@types";

const $resultSection = document.querySelector("ul");
let todoList: SingleTodo[] = [];

function renderTodo(): void {
  $resultSection.innerHTML = "";
  const resultTemplate = todoList.map((todo) => makeTemplate(todo));

  $resultSection.insertAdjacentHTML("beforeend", resultTemplate.join(""));
}

function makeTemplate({ id, content, category, tags, isCompleted }): string {
  return `<li id=${id}><span>${id}</span>&nbsp;&nbsp;<span>${content}</span>&nbsp;&nbsp;<span>${category}</span>&nbsp;&nbsp;<span>${tags}</span>&nbsp;&nbsp;<span>${isCompleted}</span></li>`;
}

function addTodo(newTodo: SingleTodo): void {
  todoList.push(newTodo);
}

// function readTodo(id?: number): SingleTodo | TodoList {
//   if (id) {
//     const targetTodo = todoList.find((todo) => todo.id === id);

//     if (!targetTodo) {
//       alert("선택한 할 일을 찾을 수 없습니다.");
//       return todoList;
//     }

//     return targetTodo;
//   }

//   return todoList;
// }

function editTodo(
  id: number,
  content?: string,
  category?: string,
  isCompleted?: boolean,
  tags?: string[]
): void {
  const targetTodo = todoList.find((todo) => todo.id === id);
  const targetTodoIndex = todoList.findIndex((todo) => todo.id === id);

  if (!targetTodo || targetTodoIndex === -1) {
    alert("수정할 대상을 찾을 수 없습니다.");
    return;
  }

  const paramObj = { id, content, category, isCompleted, tags };
  const willUpdateFields = {};

  for (const param in paramObj) {
    if (paramObj[param]) {
      willUpdateFields[param] = paramObj[param];
    }
  }

  const todoAfterEdit = { ...targetTodo, ...willUpdateFields };
  todoList[targetTodoIndex] = todoAfterEdit; // todoList 배열 업데이트
}

function deleteTodo(id: number): void {
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
}

function handleCreateTodo(e): void {
  const id = e.target["id"].value;
  const content = e.target["content"].value;
  const category = e.target["category"].value;
  const tags = e.target["tags"].value
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);

  addTodo({
    id,
    content,
    category,
    tags,
    isCompleted: false,
  });

  renderTodo();
}

function handleRemoveAllTodos(): void {
  todoList = [];
  renderTodo();
}

function handleEditTodo(e): void {
  const id = e.target["id"].value;
  const content = e.target["content"].value;
  const category = e.target["category"].value;
  const isCompleted = false;
  const tags = e.target["tags"].value
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);

  editTodo(
    id,
    content ? content : "",
    category ? category : "",
    isCompleted,
    tags ? tags : []
  );

  renderTodo();
}

function app(): void {
  const $form = document.querySelector("form");
  const $removeAllTodoButton = document.getElementById("remove-button");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (e.submitter.innerText === "할 일 수정") {
      handleEditTodo(e);
    } else {
      handleCreateTodo(e);
    }
  });

  $removeAllTodoButton.addEventListener("click", handleRemoveAllTodos);
}

window.onload = () => {
  app();
  renderTodo();
};

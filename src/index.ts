import {
  todoForm,
  todoInput,
  categoryInput,
  tagsInput,
  searchInput,
  createButton,
  removeAllButton,
  searchButton,
  searchAllButton,
  todoList,
} from "./utils/elements.ts";
import {
  todos,
  currentId,
  createTodo,
  deleteAll,
  getTodo,
  deleteTodo,
} from "./todo.ts";
function handleAddTodo(): void {
  const newTodo = todoInput.value;
  const newCategory = categoryInput.value;
  const newTags =
    tagsInput.value && tagsInput.value.split(",").map((tag) => tag.trim());

  if (newTodo === "") return alert("값을 입력해주세요");

  createTodo({
    id: currentId,
    text: newTodo,
    done: false,
    category: newCategory,
    tags: [newTags],
  });

  render();
}
function render(): void {
  todoList.innerHTML = "";

  todoList.insertAdjacentHTML(
    "beforeend",

    todos.map(
      (item) =>
        `<li>
          <span id="todo-id">${item.id}</span>
          <span id="todo-text">${item.text}</span>
          <span id="done-element">${item.done} | </span>
          <span id="category-element">${item.category} | </span>
          <span id="tags-element">${[...item.tags]}</span>
          <button
           type="button"
            id="todo-remove-button"
          >
          삭제
          </button>
        </li>`
    )
  );
}

function app(): void {
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  createButton.addEventListener("click", handleAddTodo);
  removeAllButton.addEventListener("click", handleRemoveAll);
  searchButton.addEventListener("click", handleSearchTodo);
  searchAllButton.addEventListener("click", render);

  todoList.addEventListener("click", (e) => {
    if (e.target.id === "todo-remove-button") {
      handleRemoveTodo(e);
    }
  });
}

app();
render();
